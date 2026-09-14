gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.idToCallbackMap = new Map();
gdjs.Game_32SceneCode.forEachIndex2 = 0;

gdjs.Game_32SceneCode.forEachObjects2 = [];

gdjs.Game_32SceneCode.forEachTemporary2 = null;

gdjs.Game_32SceneCode.forEachTotalCount2 = 0;

gdjs.Game_32SceneCode.GDPlayerObjects1= [];
gdjs.Game_32SceneCode.GDPlayerObjects2= [];
gdjs.Game_32SceneCode.GDPlayerObjects3= [];
gdjs.Game_32SceneCode.GDPlayerObjects4= [];
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects1= [];
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects2= [];
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects3= [];
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects4= [];
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects1= [];
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects2= [];
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects3= [];
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects4= [];
gdjs.Game_32SceneCode.GDMoveJoystickObjects1= [];
gdjs.Game_32SceneCode.GDMoveJoystickObjects2= [];
gdjs.Game_32SceneCode.GDMoveJoystickObjects3= [];
gdjs.Game_32SceneCode.GDMoveJoystickObjects4= [];
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1= [];
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects2= [];
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects3= [];
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects4= [];
gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects1= [];
gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects2= [];
gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects3= [];
gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects4= [];
gdjs.Game_32SceneCode.GDGreen_9595playerObjects1= [];
gdjs.Game_32SceneCode.GDGreen_9595playerObjects2= [];
gdjs.Game_32SceneCode.GDGreen_9595playerObjects3= [];
gdjs.Game_32SceneCode.GDGreen_9595playerObjects4= [];
gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects1= [];
gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects2= [];
gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects3= [];
gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects4= [];
gdjs.Game_32SceneCode.GDWoodBlueBarObjects1= [];
gdjs.Game_32SceneCode.GDWoodBlueBarObjects2= [];
gdjs.Game_32SceneCode.GDWoodBlueBarObjects3= [];
gdjs.Game_32SceneCode.GDWoodBlueBarObjects4= [];
gdjs.Game_32SceneCode.GDRedFlatBarObjects1= [];
gdjs.Game_32SceneCode.GDRedFlatBarObjects2= [];
gdjs.Game_32SceneCode.GDRedFlatBarObjects3= [];
gdjs.Game_32SceneCode.GDRedFlatBarObjects4= [];
gdjs.Game_32SceneCode.GDSkullGameOverDialogObjects1= [];
gdjs.Game_32SceneCode.GDSkullGameOverDialogObjects2= [];
gdjs.Game_32SceneCode.GDSkullGameOverDialogObjects3= [];
gdjs.Game_32SceneCode.GDSkullGameOverDialogObjects4= [];
gdjs.Game_32SceneCode.GDBlue_9595laser_959516Objects1= [];
gdjs.Game_32SceneCode.GDBlue_9595laser_959516Objects2= [];
gdjs.Game_32SceneCode.GDBlue_9595laser_959516Objects3= [];
gdjs.Game_32SceneCode.GDBlue_9595laser_959516Objects4= [];
gdjs.Game_32SceneCode.GDLaserCooldownBarObjects1= [];
gdjs.Game_32SceneCode.GDLaserCooldownBarObjects2= [];
gdjs.Game_32SceneCode.GDLaserCooldownBarObjects3= [];
gdjs.Game_32SceneCode.GDLaserCooldownBarObjects4= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall_95959595ObstacleObjects1Objects = Hashtable.newFrom({"Wall_Obstacle": gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlant_95959595ObstacleObjects1Objects = Hashtable.newFrom({"Plant_Obstacle": gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBullet_95959595PiecesObjects1Objects = Hashtable.newFrom({"Bullet_Pieces": gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBlue_95959595laser_9595959516Objects1Objects = Hashtable.newFrom({"Blue_laser_16": gdjs.Game_32SceneCode.GDBlue_9595laser_959516Objects1});
gdjs.Game_32SceneCode.asyncCallback15493844 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.idToCallbackMap.set(15493844, gdjs.Game_32SceneCode.asyncCallback15493844);
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback15493844(runtimeScene, asyncObjectsList)), 15493844, asyncObjectsList);
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBullet_95959595Pieces2Objects1Objects = Hashtable.newFrom({"Bullet_Pieces2": gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlant_95959595ObstacleObjects1Objects = Hashtable.newFrom({"Plant_Obstacle": gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBullet_95959595Pieces2Objects1Objects = Hashtable.newFrom({"Bullet_Pieces2": gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall_95959595ObstacleObjects1Objects = Hashtable.newFrom({"Wall_Obstacle": gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBullet_95959595PiecesObjects1Objects = Hashtable.newFrom({"Bullet_Pieces": gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlant_95959595ObstacleObjects1Objects = Hashtable.newFrom({"Plant_Obstacle": gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBullet_95959595PiecesObjects1Objects = Hashtable.newFrom({"Bullet_Pieces": gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall_95959595ObstacleObjects1Objects = Hashtable.newFrom({"Wall_Obstacle": gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBullet_95959595Pieces2Objects1Objects = Hashtable.newFrom({"Bullet_Pieces2": gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall_95959595ObstacleObjects1Objects = Hashtable.newFrom({"Wall_Obstacle": gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlant_95959595ObstacleObjects1Objects = Hashtable.newFrom({"Plant_Obstacle": gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBullet_95959595Pieces2Objects1Objects = Hashtable.newFrom({"Bullet_Pieces2": gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBlue_95959595laser_9595959516Objects1Objects = Hashtable.newFrom({"Blue_laser_16": gdjs.Game_32SceneCode.GDBlue_9595laser_959516Objects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDGreen_95959595playerObjects1Objects = Hashtable.newFrom({"Green_player": gdjs.Game_32SceneCode.GDGreen_9595playerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBullet_95959595PiecesObjects1Objects = Hashtable.newFrom({"Bullet_Pieces": gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDGreen_95959595playerObjects1Objects = Hashtable.newFrom({"Green_player": gdjs.Game_32SceneCode.GDGreen_9595playerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDRedFlatBarObjects1Objects = Hashtable.newFrom({"RedFlatBar": gdjs.Game_32SceneCode.GDRedFlatBarObjects1});
gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Game_32SceneCode.GDGreen_9595playerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("RedFlatBar"), gdjs.Game_32SceneCode.GDRedFlatBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDRedFlatBarObjects1Objects, (gdjs.Game_32SceneCode.GDGreen_9595playerObjects1.length !== 0 ? gdjs.Game_32SceneCode.GDGreen_9595playerObjects1[0] : null), null);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDGreen_9595playerObjects1 */
/* Reuse gdjs.Game_32SceneCode.GDRedFlatBarObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRedFlatBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRedFlatBarObjects1[i].SetValue(((gdjs.Game_32SceneCode.GDGreen_9595playerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDGreen_9595playerObjects1[0].getVariables()).getFromIndex(0).getAsNumber(), null);
}
}
}

}


};gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {

};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDRedFlatBarObjects3Objects = Hashtable.newFrom({"RedFlatBar": gdjs.Game_32SceneCode.GDRedFlatBarObjects3});
gdjs.Game_32SceneCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Game_32SceneCode.GDGreen_9595playerObjects2, gdjs.Game_32SceneCode.GDGreen_9595playerObjects3);

gdjs.copyArray(runtimeScene.getObjects("RedFlatBar"), gdjs.Game_32SceneCode.GDRedFlatBarObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDRedFlatBarObjects3Objects, (gdjs.Game_32SceneCode.GDGreen_9595playerObjects3.length !== 0 ? gdjs.Game_32SceneCode.GDGreen_9595playerObjects3[0] : null), null);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDGreen_9595playerObjects3 */
/* Reuse gdjs.Game_32SceneCode.GDRedFlatBarObjects3 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRedFlatBarObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRedFlatBarObjects3[i].returnVariable(gdjs.Game_32SceneCode.GDRedFlatBarObjects3[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRedFlatBarObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRedFlatBarObjects3[i].setCenterXInScene((( gdjs.Game_32SceneCode.GDGreen_9595playerObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDGreen_9595playerObjects3[0].getCenterXInScene()) - (gdjs.Game_32SceneCode.GDRedFlatBarObjects3[i].getWidth()) / 18);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRedFlatBarObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRedFlatBarObjects3[i].setCenterYInScene((( gdjs.Game_32SceneCode.GDGreen_9595playerObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDGreen_9595playerObjects3[0].getPointY("")) - 15);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRedFlatBarObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRedFlatBarObjects3[i].SetValue(((gdjs.Game_32SceneCode.GDGreen_9595playerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDGreen_9595playerObjects3[0].getVariables()).getFromIndex(0).getAsNumber(), null);
}
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDGreen_95959595playerObjects1Objects = Hashtable.newFrom({"Green_player": gdjs.Game_32SceneCode.GDGreen_9595playerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDRedFlatBarObjects1Objects = Hashtable.newFrom({"RedFlatBar": gdjs.Game_32SceneCode.GDRedFlatBarObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWoodBlueBarObjects1Objects = Hashtable.newFrom({"WoodBlueBar": gdjs.Game_32SceneCode.GDWoodBlueBarObjects1});
gdjs.Game_32SceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Plant_Obstacle"), gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall_Obstacle"), gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall_95959595ObstacleObjects1Objects, false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlant_95959595ObstacleObjects1Objects, false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects1.length = 0;

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("FireBullet").FireTowardPosition((gdjs.Game_32SceneCode.GDPlayerObjects1[i].getCenterXInScene()), (gdjs.Game_32SceneCode.GDPlayerObjects1[i].getCenterYInScene()), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBullet_95959595PiecesObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 800, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getTimerElapsedTimeInSecondsOrNaN("laser") >= 3 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
gdjs.Game_32SceneCode.GDBlue_9595laser_959516Objects1.length = 0;

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("FireBullet").FireTowardPosition((gdjs.Game_32SceneCode.GDPlayerObjects1[i].getCenterXInScene()), (gdjs.Game_32SceneCode.GDPlayerObjects1[i].getCenterYInScene()), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBlue_95959595laser_9595959516Objects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 1000, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDBlue_9595laser_959516Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBlue_9595laser_959516Objects1[i].getBehavior("Scale").setScaleX(50);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDBlue_9595laser_959516Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBlue_9595laser_959516Objects1[i].getBehavior("Scale").setScaleY(20);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].resetTimer("laser");
}
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("LaserCooldownBar"), gdjs.Game_32SceneCode.GDLaserCooldownBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDLaserCooldownBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLaserCooldownBarObjects1[i].SetValue(Math.min(100, (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getTimerElapsedTimeInSeconds("laser")) * 100 / 3), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet_Pieces2"), gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Plant_Obstacle"), gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBullet_95959595Pieces2Objects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlant_95959595ObstacleObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet_Pieces2"), gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Wall_Obstacle"), gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBullet_95959595Pieces2Objects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall_95959595ObstacleObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet_Pieces"), gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Plant_Obstacle"), gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBullet_95959595PiecesObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlant_95959595ObstacleObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet_Pieces"), gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall_Obstacle"), gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBullet_95959595PiecesObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall_95959595ObstacleObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].addForce(0, -200, 0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].addForce(-200, 0, 0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].addForce(0, 200, 0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].addForce(200, 0, 0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bullet_Pieces2"), gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects1);
gdjs.copyArray(runtimeScene.getObjects("SkullGameOverDialog"), gdjs.Game_32SceneCode.GDSkullGameOverDialogObjects1);
gdjs.copyArray(runtimeScene.getObjects("WoodBlueBar"), gdjs.Game_32SceneCode.GDWoodBlueBarObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDWoodBlueBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWoodBlueBarObjects1[i].SetValue(100, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDSkullGameOverDialogObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDSkullGameOverDialogObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Green_player"), gdjs.Game_32SceneCode.GDGreen_9595playerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects1.length = 0;

{for(var i = 0, len = gdjs.Game_32SceneCode.GDGreen_9595playerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGreen_9595playerObjects1[i].getBehavior("FireBullet").FireTowardPosition((gdjs.Game_32SceneCode.GDGreen_9595playerObjects1[i].getCenterXInScene()), (gdjs.Game_32SceneCode.GDGreen_9595playerObjects1[i].getCenterYInScene()), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBullet_95959595Pieces2Objects1Objects, (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getCenterXInScene()), (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getCenterYInScene()), 700, null);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Green_player"), gdjs.Game_32SceneCode.GDGreen_9595playerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGreen_9595playerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGreen_9595playerObjects1[i].addForceTowardPosition((( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getCenterXInScene()), (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getCenterYInScene()), 100, 0);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGreen_9595playerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGreen_9595playerObjects1[i].rotateTowardPosition((( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getCenterXInScene()), (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getCenterYInScene()), 0, runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Green_player"), gdjs.Game_32SceneCode.GDGreen_9595playerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Plant_Obstacle"), gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall_Obstacle"), gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGreen_9595playerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGreen_9595playerObjects1[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWall_95959595ObstacleObjects1Objects, false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGreen_9595playerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGreen_9595playerObjects1[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlant_95959595ObstacleObjects1Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet_Pieces2"), gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBullet_95959595Pieces2Objects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects1 */
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("WoodBlueBar"), gdjs.Game_32SceneCode.GDWoodBlueBarObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDWoodBlueBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWoodBlueBarObjects1[i].SetValue(gdjs.Game_32SceneCode.GDWoodBlueBarObjects1[i].Value(null) - (1), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Blue_laser_16"), gdjs.Game_32SceneCode.GDBlue_9595laser_959516Objects1);
gdjs.copyArray(runtimeScene.getObjects("Green_player"), gdjs.Game_32SceneCode.GDGreen_9595playerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBlue_95959595laser_9595959516Objects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDGreen_95959595playerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDGreen_9595playerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGreen_9595playerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGreen_9595playerObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDGreen_9595playerObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet_Pieces"), gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Green_player"), gdjs.Game_32SceneCode.GDGreen_9595playerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBullet_95959595PiecesObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDGreen_95959595playerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects1 */
/* Reuse gdjs.Game_32SceneCode.GDGreen_9595playerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGreen_9595playerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGreen_9595playerObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDGreen_9595playerObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects1[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedFlatBar"), gdjs.Game_32SceneCode.GDRedFlatBarObjects1);

for (gdjs.Game_32SceneCode.forEachIndex2 = 0;gdjs.Game_32SceneCode.forEachIndex2 < gdjs.Game_32SceneCode.GDRedFlatBarObjects1.length;++gdjs.Game_32SceneCode.forEachIndex2) {
gdjs.Game_32SceneCode.GDRedFlatBarObjects2.length = 0;


gdjs.Game_32SceneCode.forEachTemporary2 = gdjs.Game_32SceneCode.GDRedFlatBarObjects1[gdjs.Game_32SceneCode.forEachIndex2];
gdjs.Game_32SceneCode.GDRedFlatBarObjects2.push(gdjs.Game_32SceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRedFlatBarObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRedFlatBarObjects2[i].returnVariable(gdjs.Game_32SceneCode.GDRedFlatBarObjects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Green_player"), gdjs.Game_32SceneCode.GDGreen_9595playerObjects1);

for (gdjs.Game_32SceneCode.forEachIndex2 = 0;gdjs.Game_32SceneCode.forEachIndex2 < gdjs.Game_32SceneCode.GDGreen_9595playerObjects1.length;++gdjs.Game_32SceneCode.forEachIndex2) {
gdjs.Game_32SceneCode.GDGreen_9595playerObjects2.length = 0;


gdjs.Game_32SceneCode.forEachTemporary2 = gdjs.Game_32SceneCode.GDGreen_9595playerObjects1[gdjs.Game_32SceneCode.forEachIndex2];
gdjs.Game_32SceneCode.GDGreen_9595playerObjects2.push(gdjs.Game_32SceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDGreen_9595playerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDGreen_9595playerObjects2[i].getVariableNumber(gdjs.Game_32SceneCode.GDGreen_9595playerObjects2[i].getVariables().getFromIndex(0)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDGreen_9595playerObjects2[k] = gdjs.Game_32SceneCode.GDGreen_9595playerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDGreen_9595playerObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.Game_32SceneCode.eventsList3(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedFlatBar"), gdjs.Game_32SceneCode.GDRedFlatBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDRedFlatBarObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDRedFlatBarObjects1[i].getVariableNumber(gdjs.Game_32SceneCode.GDRedFlatBarObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDRedFlatBarObjects1[k] = gdjs.Game_32SceneCode.GDRedFlatBarObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDRedFlatBarObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDRedFlatBarObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRedFlatBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRedFlatBarObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Green_player"), gdjs.Game_32SceneCode.GDGreen_9595playerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDGreen_9595playerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDGreen_9595playerObjects1[i].getVariableNumber(gdjs.Game_32SceneCode.GDGreen_9595playerObjects1[i].getVariables().getFromIndex(0)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDGreen_9595playerObjects1[k] = gdjs.Game_32SceneCode.GDGreen_9595playerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDGreen_9595playerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDGreen_9595playerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGreen_9595playerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGreen_9595playerObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "e");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "e") > 0.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.Game_32SceneCode.GDGreen_9595playerObjects1.length = 0;

gdjs.Game_32SceneCode.GDRedFlatBarObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "e");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDGreen_95959595playerObjects1Objects, gdjs.randomInRange(69, 1115), gdjs.randomInRange(59, 608), "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGreen_9595playerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGreen_9595playerObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDGreen_9595playerObjects1[i].getVariables().getFromIndex(0)).setNumber(3);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDRedFlatBarObjects1Objects, (( gdjs.Game_32SceneCode.GDGreen_9595playerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDGreen_9595playerObjects1[0].getCenterXInScene()) - (( gdjs.Game_32SceneCode.GDRedFlatBarObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDRedFlatBarObjects1[0].getWidth()) / 2, (( gdjs.Game_32SceneCode.GDGreen_9595playerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDGreen_9595playerObjects1[0].getPointY("")) - 15, "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRedFlatBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRedFlatBarObjects1[i].SetValue(3, null);
}
}
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.Game_32SceneCode.GDRedFlatBarObjects1.length !== 0 ? gdjs.Game_32SceneCode.GDRedFlatBarObjects1[0] : null), (gdjs.Game_32SceneCode.GDGreen_9595playerObjects1.length !== 0 ? gdjs.Game_32SceneCode.GDGreen_9595playerObjects1[0] : null));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariableNumber(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("WoodBlueBar"), gdjs.Game_32SceneCode.GDWoodBlueBarObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDWoodBlueBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWoodBlueBarObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("WoodBlueBar"), gdjs.Game_32SceneCode.GDWoodBlueBarObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDWoodBlueBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWoodBlueBarObjects1[i].setX((( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getCenterXInScene()) - (gdjs.Game_32SceneCode.GDWoodBlueBarObjects1[i].getWidth()) / 2);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDWoodBlueBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWoodBlueBarObjects1[i].setY((( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getCenterYInScene()) - 50);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bullet_Pieces"), gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bullet_Pieces2"), gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Green_player"), gdjs.Game_32SceneCode.GDGreen_9595playerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedFlatBar"), gdjs.Game_32SceneCode.GDRedFlatBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("SkullGameOverDialog"), gdjs.Game_32SceneCode.GDSkullGameOverDialogObjects1);
gdjs.copyArray(runtimeScene.getObjects("WoodBlueBar"), gdjs.Game_32SceneCode.GDWoodBlueBarObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDGreen_9595playerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDGreen_9595playerObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDWoodBlueBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWoodBlueBarObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRedFlatBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRedFlatBarObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDSkullGameOverDialogObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDSkullGameOverDialogObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SkullGameOverDialog"), gdjs.Game_32SceneCode.GDSkullGameOverDialogObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDSkullGameOverDialogObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDSkullGameOverDialogObjects1[i].IsRestartClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDSkullGameOverDialogObjects1[k] = gdjs.Game_32SceneCode.GDSkullGameOverDialogObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDSkullGameOverDialogObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDSkullGameOverDialogObjects1 */
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;

gdjs.Game_32SceneCode.GDWoodBlueBarObjects1.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, 289, 351, "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWoodBlueBarObjects1Objects, (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getCenterXInScene()), (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getCenterYInScene()), "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(100);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDWoodBlueBarObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWoodBlueBarObjects1[i].SetValue(100, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDSkullGameOverDialogObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDSkullGameOverDialogObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].resetTimer("laser");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].resetTimer("laser");
}
}
}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects4.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects1.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects2.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects3.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects4.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects3.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects4.length = 0;
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects3.length = 0;
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects4.length = 0;
gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects1.length = 0;
gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects2.length = 0;
gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects3.length = 0;
gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects4.length = 0;
gdjs.Game_32SceneCode.GDGreen_9595playerObjects1.length = 0;
gdjs.Game_32SceneCode.GDGreen_9595playerObjects2.length = 0;
gdjs.Game_32SceneCode.GDGreen_9595playerObjects3.length = 0;
gdjs.Game_32SceneCode.GDGreen_9595playerObjects4.length = 0;
gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects1.length = 0;
gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects2.length = 0;
gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects3.length = 0;
gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects4.length = 0;
gdjs.Game_32SceneCode.GDWoodBlueBarObjects1.length = 0;
gdjs.Game_32SceneCode.GDWoodBlueBarObjects2.length = 0;
gdjs.Game_32SceneCode.GDWoodBlueBarObjects3.length = 0;
gdjs.Game_32SceneCode.GDWoodBlueBarObjects4.length = 0;
gdjs.Game_32SceneCode.GDRedFlatBarObjects1.length = 0;
gdjs.Game_32SceneCode.GDRedFlatBarObjects2.length = 0;
gdjs.Game_32SceneCode.GDRedFlatBarObjects3.length = 0;
gdjs.Game_32SceneCode.GDRedFlatBarObjects4.length = 0;
gdjs.Game_32SceneCode.GDSkullGameOverDialogObjects1.length = 0;
gdjs.Game_32SceneCode.GDSkullGameOverDialogObjects2.length = 0;
gdjs.Game_32SceneCode.GDSkullGameOverDialogObjects3.length = 0;
gdjs.Game_32SceneCode.GDSkullGameOverDialogObjects4.length = 0;
gdjs.Game_32SceneCode.GDBlue_9595laser_959516Objects1.length = 0;
gdjs.Game_32SceneCode.GDBlue_9595laser_959516Objects2.length = 0;
gdjs.Game_32SceneCode.GDBlue_9595laser_959516Objects3.length = 0;
gdjs.Game_32SceneCode.GDBlue_9595laser_959516Objects4.length = 0;
gdjs.Game_32SceneCode.GDLaserCooldownBarObjects1.length = 0;
gdjs.Game_32SceneCode.GDLaserCooldownBarObjects2.length = 0;
gdjs.Game_32SceneCode.GDLaserCooldownBarObjects3.length = 0;
gdjs.Game_32SceneCode.GDLaserCooldownBarObjects4.length = 0;

gdjs.Game_32SceneCode.eventsList4(runtimeScene);
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects4.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects1.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects2.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects3.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlant_9595ObstacleObjects4.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects3.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects4.length = 0;
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects1.length = 0;
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects2.length = 0;
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects3.length = 0;
gdjs.Game_32SceneCode.GDWall_9595ObstacleObjects4.length = 0;
gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects1.length = 0;
gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects2.length = 0;
gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects3.length = 0;
gdjs.Game_32SceneCode.GDBullet_9595PiecesObjects4.length = 0;
gdjs.Game_32SceneCode.GDGreen_9595playerObjects1.length = 0;
gdjs.Game_32SceneCode.GDGreen_9595playerObjects2.length = 0;
gdjs.Game_32SceneCode.GDGreen_9595playerObjects3.length = 0;
gdjs.Game_32SceneCode.GDGreen_9595playerObjects4.length = 0;
gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects1.length = 0;
gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects2.length = 0;
gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects3.length = 0;
gdjs.Game_32SceneCode.GDBullet_9595Pieces2Objects4.length = 0;
gdjs.Game_32SceneCode.GDWoodBlueBarObjects1.length = 0;
gdjs.Game_32SceneCode.GDWoodBlueBarObjects2.length = 0;
gdjs.Game_32SceneCode.GDWoodBlueBarObjects3.length = 0;
gdjs.Game_32SceneCode.GDWoodBlueBarObjects4.length = 0;
gdjs.Game_32SceneCode.GDRedFlatBarObjects1.length = 0;
gdjs.Game_32SceneCode.GDRedFlatBarObjects2.length = 0;
gdjs.Game_32SceneCode.GDRedFlatBarObjects3.length = 0;
gdjs.Game_32SceneCode.GDRedFlatBarObjects4.length = 0;
gdjs.Game_32SceneCode.GDSkullGameOverDialogObjects1.length = 0;
gdjs.Game_32SceneCode.GDSkullGameOverDialogObjects2.length = 0;
gdjs.Game_32SceneCode.GDSkullGameOverDialogObjects3.length = 0;
gdjs.Game_32SceneCode.GDSkullGameOverDialogObjects4.length = 0;
gdjs.Game_32SceneCode.GDBlue_9595laser_959516Objects1.length = 0;
gdjs.Game_32SceneCode.GDBlue_9595laser_959516Objects2.length = 0;
gdjs.Game_32SceneCode.GDBlue_9595laser_959516Objects3.length = 0;
gdjs.Game_32SceneCode.GDBlue_9595laser_959516Objects4.length = 0;
gdjs.Game_32SceneCode.GDLaserCooldownBarObjects1.length = 0;
gdjs.Game_32SceneCode.GDLaserCooldownBarObjects2.length = 0;
gdjs.Game_32SceneCode.GDLaserCooldownBarObjects3.length = 0;
gdjs.Game_32SceneCode.GDLaserCooldownBarObjects4.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
