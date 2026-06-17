import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.module.js";

const canvas = document.querySelector("#bg");
const fallback = document.querySelector("#webgl-fallback");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const narrowScreen = window.matchMedia("(max-width: 700px)").matches;

let renderer;

try {
    renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: !narrowScreen,
        powerPreference: "high-performance",
    });
} catch (error) {
    document.body.classList.add("is-webgl-unavailable");
    fallback.textContent = "The 3D background could not start, but the portfolio remains fully accessible.";
    throw error;
}

document.body.classList.remove("is-webgl-unavailable");

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x08100c);
scene.fog = new THREE.FogExp2(0x08100c, narrowScreen ? 0.035 : 0.026);

const camera = new THREE.PerspectiveCamera(
    narrowScreen ? 72 : 64,
    window.innerWidth / window.innerHeight,
    0.1,
    180
);

camera.position.set(narrowScreen ? 0 : -4.5, 1.5, narrowScreen ? 25 : 22);

renderer.setPixelRatio(Math.min(window.devicePixelRatio, narrowScreen ? 1.15 : 1.7));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;

const world = new THREE.Group();
scene.add(world);

const ambientLight = new THREE.AmbientLight(0xccebd5, 0.62);
const keyLight = new THREE.PointLight(0x8fffb2, 2.2, 70);
keyLight.position.set(8, 12, 14);
const rimLight = new THREE.PointLight(0x61c7d7, 1.7, 80);
rimLight.position.set(-14, -4, 10);
const warmLight = new THREE.PointLight(0xf2ad44, 1.4, 55);
warmLight.position.set(2, -10, 8);
scene.add(ambientLight, keyLight, rimLight, warmLight);

const seedGroup = new THREE.Group();
seedGroup.position.set(narrowScreen ? 2.7 : 5.6, 1.2, -2);
world.add(seedGroup);

const seedMaterial = new THREE.MeshStandardMaterial({
    color: 0xc98136,
    roughness: 0.48,
    metalness: 0.18,
});
const seed = new THREE.Mesh(new THREE.DodecahedronGeometry(1.65, 1), seedMaterial);
seed.scale.set(1, 0.78, 0.68);
seed.rotation.set(0.3, 0.2, -0.18);
seedGroup.add(seed);

const ringMaterial = new THREE.MeshStandardMaterial({
    color: 0x61c7d7,
    emissive: 0x123e44,
    emissiveIntensity: 0.7,
    roughness: 0.35,
    metalness: 0.5,
    transparent: true,
    opacity: 0.78,
});

const orbitRings = [];

[
    { radius: 3.2, tube: 0.055, rotation: [1.1, 0.1, 0.15] },
    { radius: 4.25, tube: 0.04, rotation: [0.35, 0.75, 0.4] },
    { radius: 5.1, tube: 0.03, rotation: [1.35, 0.45, -0.3] },
].forEach((config) => {
    const ring = new THREE.Mesh(
        new THREE.TorusGeometry(config.radius, config.tube, 10, 96),
        ringMaterial
    );
    ring.rotation.set(...config.rotation);
    orbitRings.push(ring);
    seedGroup.add(ring);
});

const particleCount = narrowScreen ? 170 : 420;
const particlePositions = new Float32Array(particleCount * 3);
const particleColors = new Float32Array(particleCount * 3);
const green = new THREE.Color(0x6bd48f);
const cyan = new THREE.Color(0x61c7d7);
const amber = new THREE.Color(0xf2ad44);

for (let index = 0; index < particleCount; index += 1) {
    const offset = index * 3;
    particlePositions[offset] = THREE.MathUtils.randFloatSpread(75);
    particlePositions[offset + 1] = THREE.MathUtils.randFloatSpread(52);
    particlePositions[offset + 2] = THREE.MathUtils.randFloatSpread(70) - 10;

    const color = index % 11 === 0 ? amber : index % 3 === 0 ? cyan : green;
    particleColors[offset] = color.r;
    particleColors[offset + 1] = color.g;
    particleColors[offset + 2] = color.b;
}

const particleGeometry = new THREE.BufferGeometry();
particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
particleGeometry.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

const particles = new THREE.Points(
    particleGeometry,
    new THREE.PointsMaterial({
        size: narrowScreen ? 0.09 : 0.12,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true,
    })
);
world.add(particles);

const plantGroup = new THREE.Group();
plantGroup.position.set(narrowScreen ? -1 : -5.8, -7.5, -5);
world.add(plantGroup);

const stemMaterial = new THREE.MeshStandardMaterial({
    color: 0x4ca96c,
    roughness: 0.7,
    metalness: 0.04,
});
const leafMaterial = new THREE.MeshStandardMaterial({
    color: 0x79dc91,
    emissive: 0x103d20,
    emissiveIntensity: 0.5,
    roughness: 0.58,
});
const youngLeafMaterial = new THREE.MeshStandardMaterial({
    color: 0x9ce9b3,
    emissive: 0x164e2b,
    emissiveIntensity: 0.45,
    roughness: 0.52,
});

const stemPivot = new THREE.Group();
plantGroup.add(stemPivot);

const stem = new THREE.Mesh(
    new THREE.CylinderGeometry(0.28, 0.52, 9.5, 14),
    stemMaterial
);
stem.position.y = 4.75;
stemPivot.add(stem);

const branchData = [
    { y: 3.7, x: 1.25, rotation: -0.82, length: 3.1 },
    { y: 5.5, x: -1.2, rotation: 0.82, length: 3 },
    { y: 7.1, x: 1.05, rotation: -0.72, length: 2.6 },
];

const branches = [];
const leaves = [];

branchData.forEach((config, index) => {
    const branchPivot = new THREE.Group();
    branchPivot.position.set(0, config.y, 0);
    branchPivot.rotation.z = config.rotation;

    const branch = new THREE.Mesh(
        new THREE.CylinderGeometry(0.11, 0.2, config.length, 10),
        stemMaterial
    );
    branch.position.y = config.length / 2;
    branchPivot.add(branch);
    plantGroup.add(branchPivot);
    branches.push(branchPivot);

    const leaf = new THREE.Mesh(
        new THREE.SphereGeometry(1, 24, 16),
        index === branchData.length - 1 ? youngLeafMaterial : leafMaterial
    );
    leaf.position.y = config.length;
    leaf.scale.set(1.55, 0.3, 0.74);
    leaf.rotation.z = index % 2 === 0 ? 0.35 : -0.35;
    branchPivot.add(leaf);
    leaves.push(leaf);
});

const crownLeaves = [];

[
    { position: [0.82, 9.2, 0], rotation: [0, 0.2, -0.45] },
    { position: [-0.82, 9.15, 0.1], rotation: [0, -0.2, 0.45] },
].forEach((config) => {
    const leaf = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 16), youngLeafMaterial);
    leaf.position.set(...config.position);
    leaf.rotation.set(...config.rotation);
    leaf.scale.set(1.65, 0.34, 0.82);
    plantGroup.add(leaf);
    crownLeaves.push(leaf);
    leaves.push(leaf);
});

const groundRing = new THREE.Mesh(
    new THREE.TorusGeometry(3.2, 0.1, 12, 100),
    new THREE.MeshStandardMaterial({
        color: 0x6bd48f,
        emissive: 0x174d2a,
        emissiveIntensity: 0.7,
        transparent: true,
        opacity: 0.7,
    })
);
groundRing.rotation.x = Math.PI / 2;
groundRing.position.y = 0.05;
plantGroup.add(groundRing);

let targetProgress = 0;
let currentProgress = 0;
let frameCount = 0;
let pageVisible = !document.hidden;

function clamp01(value) {
    return Math.min(1, Math.max(0, value));
}

function smoothstep(edge0, edge1, value) {
    const normalized = clamp01((value - edge0) / (edge1 - edge0));
    return normalized * normalized * (3 - 2 * normalized);
}

function updateSceneFromScroll() {
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    targetProgress = clamp01(window.scrollY / maxScroll);
    document.documentElement.dataset.sceneProgress = targetProgress.toFixed(3);

    if (reducedMotion) {
        currentProgress = targetProgress;
        applySceneProgress(currentProgress, 0);
        renderer.render(scene, camera);
    }
}

function applySceneProgress(progress, elapsed) {
    const growth = smoothstep(0.34, 0.86, progress);
    const seedFade = 1 - smoothstep(0.48, 0.82, progress) * 0.78;
    const cameraWave = Math.sin(progress * Math.PI * 2);

    camera.position.z = (narrowScreen ? 25 : 22) - progress * (narrowScreen ? 9 : 13);
    camera.position.x = (narrowScreen ? 0 : -4.5) + cameraWave * (narrowScreen ? 1.1 : 3.4);
    camera.position.y = 1.5 - progress * 4.5 + Math.sin(progress * Math.PI) * 1.4;
    camera.rotation.y = progress * (narrowScreen ? 0.18 : 0.34);
    camera.rotation.z = Math.sin(progress * Math.PI) * 0.025;

    world.rotation.y = progress * 1.75;
    world.rotation.x = Math.sin(progress * Math.PI) * 0.08;

    seedGroup.scale.setScalar(seedFade);
    seedGroup.position.y = 1.2 + Math.sin(elapsed * 0.7) * (reducedMotion ? 0 : 0.22);
    seed.rotation.x = 0.3 + elapsed * (reducedMotion ? 0 : 0.14);
    seed.rotation.y = 0.2 + progress * 2.4;

    orbitRings.forEach((ring, index) => {
        const direction = index % 2 === 0 ? 1 : -1;
        ring.rotation.z += reducedMotion ? 0 : 0.0018 * direction;
        ring.material.opacity = 0.78 - growth * 0.42;
    });

    particles.rotation.y = progress * 0.72 + elapsed * (reducedMotion ? 0 : 0.015);
    particles.position.y = -progress * 3;

    stemPivot.scale.y = 0.015 + growth * 0.985;
    stemPivot.scale.x = 0.72 + growth * 0.28;
    stemPivot.scale.z = 0.72 + growth * 0.28;

    branches.forEach((branch, index) => {
        const branchGrowth = smoothstep(0.43 + index * 0.08, 0.75 + index * 0.06, progress);
        branch.scale.set(branchGrowth, branchGrowth, branchGrowth);
    });

    leaves.forEach((leaf, index) => {
        const leafGrowth = smoothstep(0.53 + index * 0.035, 0.86 + index * 0.02, progress);
        const baseScale = leaf.parent === plantGroup ? [1.65, 0.34, 0.82] : [1.55, 0.3, 0.74];
        leaf.scale.set(
            baseScale[0] * leafGrowth,
            baseScale[1] * leafGrowth,
            baseScale[2] * leafGrowth
        );
    });

    groundRing.scale.setScalar(0.2 + growth * 0.8);
    groundRing.material.opacity = 0.12 + growth * 0.58;
    plantGroup.rotation.y = -0.6 + progress * 0.95;
}

const clock = new THREE.Clock();

function publishDiagnostics() {
    document.documentElement.dataset.cameraX = camera.position.x.toFixed(3);
    document.documentElement.dataset.cameraY = camera.position.y.toFixed(3);
    document.documentElement.dataset.cameraZ = camera.position.z.toFixed(3);
    document.documentElement.dataset.threeFrame = String(frameCount);
}

function animate() {
    requestAnimationFrame(animate);

    if (!pageVisible) {
        return;
    }

    currentProgress += (targetProgress - currentProgress) * 0.055;
    const elapsed = clock.getElapsedTime();
    applySceneProgress(currentProgress, elapsed);
    renderer.render(scene, camera);
    frameCount += 1;

    if (frameCount % 15 === 0) {
        publishDiagnostics();
    }
}

function handleResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, width <= 700 ? 1.15 : 1.7));
    renderer.setSize(width, height);

    if (reducedMotion) {
        renderer.render(scene, camera);
    }
}

window.addEventListener("scroll", updateSceneFromScroll, { passive: true });
window.addEventListener("resize", handleResize);
document.addEventListener("visibilitychange", () => {
    pageVisible = !document.hidden;
    if (pageVisible) {
        clock.getDelta();
    }
});

window.__threeSceneDiagnostics = () => ({
    progress: Number(currentProgress.toFixed(3)),
    targetProgress: Number(targetProgress.toFixed(3)),
    frameCount,
    particleCount,
    reducedMotion,
    renderer: {
        width: renderer.domElement.width,
        height: renderer.domElement.height,
    },
    camera: {
        x: Number(camera.position.x.toFixed(3)),
        y: Number(camera.position.y.toFixed(3)),
        z: Number(camera.position.z.toFixed(3)),
    },
});

document.documentElement.dataset.threeReady = "true";
updateSceneFromScroll();
applySceneProgress(currentProgress, 0);
renderer.render(scene, camera);
publishDiagnostics();

if (!reducedMotion) {
    animate();
}
