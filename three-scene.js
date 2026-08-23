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
        opacity: 0.72,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
    })
);
world.add(particles);

const plantGroup = new THREE.Group();
plantGroup.position.set(narrowScreen ? -0.6 : 6.2, -7.5, -5);
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
    side: THREE.DoubleSide,
});
leafMaterial.side = THREE.DoubleSide;

function makeTube(points, radius, material, tubularSegments = 48) {
    const curve = new THREE.CatmullRomCurve3(
        points.map(([x, y, z]) => new THREE.Vector3(x, y, z))
    );
    return new THREE.Mesh(
        new THREE.TubeGeometry(curve, tubularSegments, radius, narrowScreen ? 7 : 10, false),
        material
    );
}

function makeLeaf(material) {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.9, 0.35, 1.18, 1.55, 0, 2.8);
    shape.bezierCurveTo(-1.18, 1.55, -0.9, 0.35, 0, 0);

    const geometry = new THREE.ShapeGeometry(shape, narrowScreen ? 8 : 14);
    geometry.translate(0, -0.12, 0);

    const group = new THREE.Group();
    const blade = new THREE.Mesh(geometry, material);
    blade.rotation.x = -0.12;
    group.add(blade);

    const vein = makeTube(
        [[0, 0.08, 0.018], [0.02, 1.1, 0.025], [0, 2.45, 0.018]],
        0.025,
        stemMaterial,
        16
    );
    group.add(vein);
    return group;
}

const stemGrowth = new THREE.Group();
const stemRadius = narrowScreen ? 0.18 : 0.24;
const stem = makeTube(
    [[0, 0, 0], [0.22, 2.1, 0.06], [-0.25, 4.5, -0.08], [0.34, 6.9, 0.08], [0.02, 9.7, 0]],
    stemRadius,
    stemMaterial,
    narrowScreen ? 40 : 64
);
stemGrowth.add(stem);
plantGroup.add(stemGrowth);

const branches = [];
const leaves = [];
const branchData = [
    { y: 3.15, side: 1, length: 2.9, start: 0.47 },
    { y: 4.85, side: -1, length: 3.05, start: 0.55 },
    { y: 6.55, side: 1, length: 2.65, start: 0.63 },
    { y: 8.05, side: -1, length: 2.15, start: 0.7 },
];

branchData.forEach((config, index) => {
    const branchGroup = new THREE.Group();
    branchGroup.position.set(index % 2 === 0 ? -0.08 : 0.08, config.y, 0);
    const tipX = config.side * config.length;
    const branch = makeTube(
        [[0, 0, 0], [tipX * 0.45, 0.65, 0.08], [tipX, 1.25, index % 2 ? -0.08 : 0.08]],
        narrowScreen ? 0.105 : 0.13,
        stemMaterial,
        narrowScreen ? 22 : 30
    );
    branchGroup.add(branch);

    const leaf = makeLeaf(index >= 2 ? youngLeafMaterial : leafMaterial);
    leaf.position.set(tipX, 1.12, 0.04);
    leaf.rotation.z = config.side > 0 ? -0.7 : 0.7;
    leaf.rotation.y = config.side > 0 ? -0.18 : 0.18;
    leaf.userData.baseRotation = leaf.rotation.z;
    leaf.userData.start = config.start + 0.045;
    leaf.userData.scale = index >= 2 ? 0.82 : 0.96;
    branchGroup.add(leaf);

    branchGroup.userData.start = config.start;
    branchGroup.userData.baseRotation = 0;
    branches.push(branchGroup);
    leaves.push(leaf);
    plantGroup.add(branchGroup);
});

[
    { x: 0.18, y: 9.05, side: 1, rotation: -0.5, start: 0.77 },
    { x: -0.18, y: 8.98, side: -1, rotation: 0.5, start: 0.8 },
].forEach((config) => {
    const leaf = makeLeaf(youngLeafMaterial);
    leaf.position.set(config.x, config.y, 0.02);
    leaf.rotation.z = config.rotation;
    leaf.rotation.y = config.side * -0.2;
    leaf.userData.baseRotation = config.rotation;
    leaf.userData.start = config.start;
    leaf.userData.scale = 0.9;
    plantGroup.add(leaf);
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
let animationFrame = null;

function clamp01(value) {
    return Math.min(1, Math.max(0, value));
}

function smoothstep(edge0, edge1, value) {
    const normalized = clamp01((value - edge0) / (edge1 - edge0));
    return normalized * normalized * (3 - 2 * normalized);
}

function getSceneLane(progress) {
    const stops = [
        [0, 1],
        [0.28, 1],
        [0.45, -1],
        [0.64, 1],
        [0.82, -1],
        [1, -1],
    ];

    for (let index = 1; index < stops.length; index += 1) {
        if (progress <= stops[index][0]) {
            const [previousProgress, previousLane] = stops[index - 1];
            const [nextProgress, nextLane] = stops[index];
            const mix = smoothstep(previousProgress, nextProgress, progress);
            return THREE.MathUtils.lerp(previousLane, nextLane, mix);
        }
    }

    return stops[stops.length - 1][1];
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
    const wind = reducedMotion ? 0 : Math.sin(elapsed * 1.35) * 0.035;
    const desktopCameraDrift = 1.15;

    camera.position.z = (narrowScreen ? 25 : 22) - progress * (narrowScreen ? 9 : 13);
    camera.position.x = (narrowScreen ? 0 : -1.2) + cameraWave * (narrowScreen ? 0.65 : desktopCameraDrift);
    camera.position.y = 1.5 - progress * 4.5 + Math.sin(progress * Math.PI) * 1.4;
    camera.rotation.y = progress * (narrowScreen ? 0.18 : 0.34);
    camera.rotation.z = Math.sin(progress * Math.PI) * 0.025;

    world.rotation.y = progress * 0.24;
    world.rotation.x = Math.sin(progress * Math.PI) * 0.08;

    seedGroup.scale.setScalar(seedFade);
    seedGroup.position.x = narrowScreen
        ? 0.4
        : THREE.MathUtils.lerp(5.6, -5.2, smoothstep(0.24, 0.46, progress));
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

    stemGrowth.scale.set(0.78 + growth * 0.22, 0.015 + growth * 0.985, 0.78 + growth * 0.22);
    stemGrowth.rotation.z = wind * growth;

    branches.forEach((branch, index) => {
        const branchGrowth = smoothstep(branch.userData.start, branch.userData.start + 0.18, progress);
        branch.scale.set(branchGrowth, branchGrowth, branchGrowth);
        branch.rotation.z = wind * (index % 2 === 0 ? 0.8 : -0.8);
    });

    leaves.forEach((leaf, index) => {
        const leafGrowth = smoothstep(leaf.userData.start, leaf.userData.start + 0.14, progress);
        const scale = leaf.userData.scale * leafGrowth;
        leaf.scale.setScalar(scale);
        leaf.rotation.z = leaf.userData.baseRotation + wind * (1.3 + index * 0.12);
    });

    groundRing.scale.setScalar(0.2 + growth * 0.8);
    groundRing.material.opacity = 0.12 + growth * 0.58;
    const sceneLane = getSceneLane(progress);
    plantGroup.position.x = narrowScreen ? sceneLane * 1.4 : sceneLane * 7.2;
    plantGroup.position.z = narrowScreen
        ? -5
        : -5.2 - Math.abs(sceneLane) * 1.3;
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
    if (!pageVisible) {
        animationFrame = null;
        return;
    }

    animationFrame = requestAnimationFrame(animate);
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
        if (!reducedMotion && animationFrame === null) {
            animate();
        }
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
