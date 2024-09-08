gdjs.GameScene2Code = {};
gdjs.GameScene2Code.localVariables = [];
gdjs.GameScene2Code.GDFallMarkerObjects2_1final = [];

gdjs.GameScene2Code.GDGreenplayerObjects2_1final = [];

gdjs.GameScene2Code.GDPoisonObjects2_1final = [];

gdjs.GameScene2Code.GDSelectorObjects2_1final = [];

gdjs.GameScene2Code.GDCloudsObjects1= [];
gdjs.GameScene2Code.GDCloudsObjects2= [];
gdjs.GameScene2Code.GDCloudsObjects3= [];
gdjs.GameScene2Code.GDCheckpointObjects1= [];
gdjs.GameScene2Code.GDCheckpointObjects2= [];
gdjs.GameScene2Code.GDCheckpointObjects3= [];
gdjs.GameScene2Code.GDMoonObjects1= [];
gdjs.GameScene2Code.GDMoonObjects2= [];
gdjs.GameScene2Code.GDMoonObjects3= [];
gdjs.GameScene2Code.GDGreenHeroObjects1= [];
gdjs.GameScene2Code.GDGreenHeroObjects2= [];
gdjs.GameScene2Code.GDGreenHeroObjects3= [];
gdjs.GameScene2Code.GDFlyObjects1= [];
gdjs.GameScene2Code.GDFlyObjects2= [];
gdjs.GameScene2Code.GDFlyObjects3= [];
gdjs.GameScene2Code.GDMonsterObjects1= [];
gdjs.GameScene2Code.GDMonsterObjects2= [];
gdjs.GameScene2Code.GDMonsterObjects3= [];
gdjs.GameScene2Code.GDCornerPlatformObjects1= [];
gdjs.GameScene2Code.GDCornerPlatformObjects2= [];
gdjs.GameScene2Code.GDCornerPlatformObjects3= [];
gdjs.GameScene2Code.GDCoinObjects1= [];
gdjs.GameScene2Code.GDCoinObjects2= [];
gdjs.GameScene2Code.GDCoinObjects3= [];
gdjs.GameScene2Code.GDPlatform1Objects1= [];
gdjs.GameScene2Code.GDPlatform1Objects2= [];
gdjs.GameScene2Code.GDPlatform1Objects3= [];
gdjs.GameScene2Code.GDLadderObjects1= [];
gdjs.GameScene2Code.GDLadderObjects2= [];
gdjs.GameScene2Code.GDLadderObjects3= [];
gdjs.GameScene2Code.GDDoorObjects1= [];
gdjs.GameScene2Code.GDDoorObjects2= [];
gdjs.GameScene2Code.GDDoorObjects3= [];
gdjs.GameScene2Code.GDPlatform2Objects1= [];
gdjs.GameScene2Code.GDPlatform2Objects2= [];
gdjs.GameScene2Code.GDPlatform2Objects3= [];
gdjs.GameScene2Code.GDRedHeroObjects1= [];
gdjs.GameScene2Code.GDRedHeroObjects2= [];
gdjs.GameScene2Code.GDRedHeroObjects3= [];
gdjs.GameScene2Code.GDPlatform3Objects1= [];
gdjs.GameScene2Code.GDPlatform3Objects2= [];
gdjs.GameScene2Code.GDPlatform3Objects3= [];
gdjs.GameScene2Code.GDBackgroundObjects1= [];
gdjs.GameScene2Code.GDBackgroundObjects2= [];
gdjs.GameScene2Code.GDBackgroundObjects3= [];
gdjs.GameScene2Code.GDNewSpriteObjects1= [];
gdjs.GameScene2Code.GDNewSpriteObjects2= [];
gdjs.GameScene2Code.GDNewSpriteObjects3= [];
gdjs.GameScene2Code.GDSelectorObjects1= [];
gdjs.GameScene2Code.GDSelectorObjects2= [];
gdjs.GameScene2Code.GDSelectorObjects3= [];
gdjs.GameScene2Code.GDBackground2Objects1= [];
gdjs.GameScene2Code.GDBackground2Objects2= [];
gdjs.GameScene2Code.GDBackground2Objects3= [];
gdjs.GameScene2Code.GDFallMarkerObjects1= [];
gdjs.GameScene2Code.GDFallMarkerObjects2= [];
gdjs.GameScene2Code.GDFallMarkerObjects3= [];
gdjs.GameScene2Code.GDCameraBoundarysMarker_9595LeftObjects1= [];
gdjs.GameScene2Code.GDCameraBoundarysMarker_9595LeftObjects2= [];
gdjs.GameScene2Code.GDCameraBoundarysMarker_9595LeftObjects3= [];
gdjs.GameScene2Code.GDCameraBoundarysMarker_9595RightObjects1= [];
gdjs.GameScene2Code.GDCameraBoundarysMarker_9595RightObjects2= [];
gdjs.GameScene2Code.GDCameraBoundarysMarker_9595RightObjects3= [];
gdjs.GameScene2Code.GDPoisonObjects1= [];
gdjs.GameScene2Code.GDPoisonObjects2= [];
gdjs.GameScene2Code.GDPoisonObjects3= [];
gdjs.GameScene2Code.GDArrowObjects1= [];
gdjs.GameScene2Code.GDArrowObjects2= [];
gdjs.GameScene2Code.GDArrowObjects3= [];
gdjs.GameScene2Code.GDBackground3Objects1= [];
gdjs.GameScene2Code.GDBackground3Objects2= [];
gdjs.GameScene2Code.GDBackground3Objects3= [];
gdjs.GameScene2Code.GDDownObjects1= [];
gdjs.GameScene2Code.GDDownObjects2= [];
gdjs.GameScene2Code.GDDownObjects3= [];
gdjs.GameScene2Code.GDGreenplayerObjects1= [];
gdjs.GameScene2Code.GDGreenplayerObjects2= [];
gdjs.GameScene2Code.GDGreenplayerObjects3= [];
gdjs.GameScene2Code.GDTargetObjects1= [];
gdjs.GameScene2Code.GDTargetObjects2= [];
gdjs.GameScene2Code.GDTargetObjects3= [];
gdjs.GameScene2Code.GDAButtonObjects1= [];
gdjs.GameScene2Code.GDAButtonObjects2= [];
gdjs.GameScene2Code.GDAButtonObjects3= [];
gdjs.GameScene2Code.GDScoreObjects1= [];
gdjs.GameScene2Code.GDScoreObjects2= [];
gdjs.GameScene2Code.GDScoreObjects3= [];
gdjs.GameScene2Code.GDFlatLightJoystickObjects1= [];
gdjs.GameScene2Code.GDFlatLightJoystickObjects2= [];
gdjs.GameScene2Code.GDFlatLightJoystickObjects3= [];


gdjs.GameScene2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AButton"), gdjs.GameScene2Code.GDAButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("FlatLightJoystick"), gdjs.GameScene2Code.GDFlatLightJoystickObjects1);
{for(var i = 0, len = gdjs.GameScene2Code.GDFlatLightJoystickObjects1.length ;i < len;++i) {
    gdjs.GameScene2Code.GDFlatLightJoystickObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameScene2Code.GDAButtonObjects1.length ;i < len;++i) {
    gdjs.GameScene2Code.GDAButtonObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameScene2Code.mapOfGDgdjs_9546GameScene2Code_9546GDSelectorObjects2Objects = Hashtable.newFrom({"Selector": gdjs.GameScene2Code.GDSelectorObjects2});
gdjs.GameScene2Code.mapOfGDgdjs_9546GameScene2Code_9546GDDownObjects2Objects = Hashtable.newFrom({"Down": gdjs.GameScene2Code.GDDownObjects2});
gdjs.GameScene2Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.GameScene2Code.GDDownObjects2);
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.GameScene2Code.GDSelectorObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameScene2Code.mapOfGDgdjs_9546GameScene2Code_9546GDSelectorObjects2Objects, gdjs.GameScene2Code.mapOfGDgdjs_9546GameScene2Code_9546GDDownObjects2Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene2Code.GDDownObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.GameScene2Code.GDScoreObjects2);
{runtimeScene.getScene().getVariables().get("Score").add(1);
}{runtimeScene.getScene().getVariables().get("PitchScaling").add(gdjs.randomFloatInRange(0.025, 0.05));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PitchScaling");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ding", false, 50, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("PitchScaling")) - 0.1);
}{for(var i = 0, len = gdjs.GameScene2Code.GDDownObjects2.length ;i < len;++i) {
    gdjs.GameScene2Code.GDDownObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameScene2Code.GDScoreObjects2.length ;i < len;++i) {
    gdjs.GameScene2Code.GDScoreObjects2[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Score"))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "PitchScaling") > 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("PitchScaling").setNumber(1);
}}

}


};gdjs.GameScene2Code.mapOfGDgdjs_9546GameScene2Code_9546GDSelectorObjects3Objects = Hashtable.newFrom({"Selector": gdjs.GameScene2Code.GDSelectorObjects3});
gdjs.GameScene2Code.mapOfGDgdjs_9546GameScene2Code_9546GDPoisonObjects3Objects = Hashtable.newFrom({"Poison": gdjs.GameScene2Code.GDPoisonObjects3});
gdjs.GameScene2Code.eventsList2 = function(runtimeScene) {

{

gdjs.GameScene2Code.GDFallMarkerObjects2.length = 0;

gdjs.GameScene2Code.GDPoisonObjects2.length = 0;

gdjs.GameScene2Code.GDSelectorObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameScene2Code.GDFallMarkerObjects2_1final.length = 0;
gdjs.GameScene2Code.GDPoisonObjects2_1final.length = 0;
gdjs.GameScene2Code.GDSelectorObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FallMarker"), gdjs.GameScene2Code.GDFallMarkerObjects3);
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.GameScene2Code.GDSelectorObjects3);
for (var i = 0, k = 0, l = gdjs.GameScene2Code.GDSelectorObjects3.length;i<l;++i) {
    if ( gdjs.GameScene2Code.GDSelectorObjects3[i].getY() > (( gdjs.GameScene2Code.GDFallMarkerObjects3.length === 0 ) ? 0 :gdjs.GameScene2Code.GDFallMarkerObjects3[0].getY()) ) {
        isConditionTrue_1 = true;
        gdjs.GameScene2Code.GDSelectorObjects3[k] = gdjs.GameScene2Code.GDSelectorObjects3[i];
        ++k;
    }
}
gdjs.GameScene2Code.GDSelectorObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameScene2Code.GDFallMarkerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameScene2Code.GDFallMarkerObjects2_1final.indexOf(gdjs.GameScene2Code.GDFallMarkerObjects3[j]) === -1 )
            gdjs.GameScene2Code.GDFallMarkerObjects2_1final.push(gdjs.GameScene2Code.GDFallMarkerObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.GameScene2Code.GDSelectorObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameScene2Code.GDSelectorObjects2_1final.indexOf(gdjs.GameScene2Code.GDSelectorObjects3[j]) === -1 )
            gdjs.GameScene2Code.GDSelectorObjects2_1final.push(gdjs.GameScene2Code.GDSelectorObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Poison"), gdjs.GameScene2Code.GDPoisonObjects3);
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.GameScene2Code.GDSelectorObjects3);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameScene2Code.mapOfGDgdjs_9546GameScene2Code_9546GDSelectorObjects3Objects, gdjs.GameScene2Code.mapOfGDgdjs_9546GameScene2Code_9546GDPoisonObjects3Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameScene2Code.GDPoisonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameScene2Code.GDPoisonObjects2_1final.indexOf(gdjs.GameScene2Code.GDPoisonObjects3[j]) === -1 )
            gdjs.GameScene2Code.GDPoisonObjects2_1final.push(gdjs.GameScene2Code.GDPoisonObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.GameScene2Code.GDSelectorObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameScene2Code.GDSelectorObjects2_1final.indexOf(gdjs.GameScene2Code.GDSelectorObjects3[j]) === -1 )
            gdjs.GameScene2Code.GDSelectorObjects2_1final.push(gdjs.GameScene2Code.GDSelectorObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameScene2Code.GDFallMarkerObjects2_1final, gdjs.GameScene2Code.GDFallMarkerObjects2);
gdjs.copyArray(gdjs.GameScene2Code.GDPoisonObjects2_1final, gdjs.GameScene2Code.GDPoisonObjects2);
gdjs.copyArray(gdjs.GameScene2Code.GDSelectorObjects2_1final, gdjs.GameScene2Code.GDSelectorObjects2);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Objects 2", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Death", false, 75, 0.8);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.GameScene2Code.mapOfGDgdjs_9546GameScene2Code_9546GDSelectorObjects3Objects = Hashtable.newFrom({"Selector": gdjs.GameScene2Code.GDSelectorObjects3});
gdjs.GameScene2Code.mapOfGDgdjs_9546GameScene2Code_9546GDGreenplayerObjects3Objects = Hashtable.newFrom({"Greenplayer": gdjs.GameScene2Code.GDGreenplayerObjects3});
gdjs.GameScene2Code.eventsList3 = function(runtimeScene) {

{

gdjs.GameScene2Code.GDFallMarkerObjects2.length = 0;

gdjs.GameScene2Code.GDGreenplayerObjects2.length = 0;

gdjs.GameScene2Code.GDSelectorObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameScene2Code.GDFallMarkerObjects2_1final.length = 0;
gdjs.GameScene2Code.GDGreenplayerObjects2_1final.length = 0;
gdjs.GameScene2Code.GDSelectorObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FallMarker"), gdjs.GameScene2Code.GDFallMarkerObjects3);
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.GameScene2Code.GDSelectorObjects3);
for (var i = 0, k = 0, l = gdjs.GameScene2Code.GDSelectorObjects3.length;i<l;++i) {
    if ( gdjs.GameScene2Code.GDSelectorObjects3[i].getY() > (( gdjs.GameScene2Code.GDFallMarkerObjects3.length === 0 ) ? 0 :gdjs.GameScene2Code.GDFallMarkerObjects3[0].getY()) ) {
        isConditionTrue_1 = true;
        gdjs.GameScene2Code.GDSelectorObjects3[k] = gdjs.GameScene2Code.GDSelectorObjects3[i];
        ++k;
    }
}
gdjs.GameScene2Code.GDSelectorObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameScene2Code.GDFallMarkerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameScene2Code.GDFallMarkerObjects2_1final.indexOf(gdjs.GameScene2Code.GDFallMarkerObjects3[j]) === -1 )
            gdjs.GameScene2Code.GDFallMarkerObjects2_1final.push(gdjs.GameScene2Code.GDFallMarkerObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.GameScene2Code.GDSelectorObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameScene2Code.GDSelectorObjects2_1final.indexOf(gdjs.GameScene2Code.GDSelectorObjects3[j]) === -1 )
            gdjs.GameScene2Code.GDSelectorObjects2_1final.push(gdjs.GameScene2Code.GDSelectorObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Greenplayer"), gdjs.GameScene2Code.GDGreenplayerObjects3);
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.GameScene2Code.GDSelectorObjects3);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameScene2Code.mapOfGDgdjs_9546GameScene2Code_9546GDSelectorObjects3Objects, gdjs.GameScene2Code.mapOfGDgdjs_9546GameScene2Code_9546GDGreenplayerObjects3Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameScene2Code.GDGreenplayerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameScene2Code.GDGreenplayerObjects2_1final.indexOf(gdjs.GameScene2Code.GDGreenplayerObjects3[j]) === -1 )
            gdjs.GameScene2Code.GDGreenplayerObjects2_1final.push(gdjs.GameScene2Code.GDGreenplayerObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.GameScene2Code.GDSelectorObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameScene2Code.GDSelectorObjects2_1final.indexOf(gdjs.GameScene2Code.GDSelectorObjects3[j]) === -1 )
            gdjs.GameScene2Code.GDSelectorObjects2_1final.push(gdjs.GameScene2Code.GDSelectorObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameScene2Code.GDFallMarkerObjects2_1final, gdjs.GameScene2Code.GDFallMarkerObjects2);
gdjs.copyArray(gdjs.GameScene2Code.GDGreenplayerObjects2_1final, gdjs.GameScene2Code.GDGreenplayerObjects2);
gdjs.copyArray(gdjs.GameScene2Code.GDSelectorObjects2_1final, gdjs.GameScene2Code.GDSelectorObjects2);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Objects", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Death", false, 75, 0.8);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.GameScene2Code.mapOfGDgdjs_9546GameScene2Code_9546GDSelectorObjects1Objects = Hashtable.newFrom({"Selector": gdjs.GameScene2Code.GDSelectorObjects1});
gdjs.GameScene2Code.mapOfGDgdjs_9546GameScene2Code_9546GDTargetObjects1Objects = Hashtable.newFrom({"Target": gdjs.GameScene2Code.GDTargetObjects1});
gdjs.GameScene2Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.GameScene2Code.GDSelectorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Target"), gdjs.GameScene2Code.GDTargetObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameScene2Code.mapOfGDgdjs_9546GameScene2Code_9546GDSelectorObjects1Objects, gdjs.GameScene2Code.mapOfGDgdjs_9546GameScene2Code_9546GDTargetObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24361132);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "WinGame", true, 50, 1);
}}

}


};gdjs.GameScene2Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24362180);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "MobileControls");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AButton"), gdjs.GameScene2Code.GDAButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene2Code.GDAButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameScene2Code.GDAButtonObjects1[i].getBehavior("MultitouchButton").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene2Code.GDAButtonObjects1[k] = gdjs.GameScene2Code.GDAButtonObjects1[i];
        ++k;
    }
}
gdjs.GameScene2Code.GDAButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.GameScene2Code.GDSelectorObjects1);
{for(var i = 0, len = gdjs.GameScene2Code.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.GameScene2Code.GDSelectorObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs.GameScene2Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameScene2Code.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.GameScene2Code.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CameraBoundarysMarker_Left"), gdjs.GameScene2Code.GDCameraBoundarysMarker_9595LeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("CameraBoundarysMarker_Right"), gdjs.GameScene2Code.GDCameraBoundarysMarker_9595RightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.GameScene2Code.GDSelectorObjects1);
{gdjs.evtTools.camera.clampCamera(runtimeScene, (( gdjs.GameScene2Code.GDCameraBoundarysMarker_9595LeftObjects1.length === 0 ) ? 0 :gdjs.GameScene2Code.GDCameraBoundarysMarker_9595LeftObjects1[0].getAABBRight()), (( gdjs.GameScene2Code.GDSelectorObjects1.length === 0 ) ? 0 :gdjs.GameScene2Code.GDSelectorObjects1[0].getPointY("")) - 500, (( gdjs.GameScene2Code.GDCameraBoundarysMarker_9595RightObjects1.length === 0 ) ? 0 :gdjs.GameScene2Code.GDCameraBoundarysMarker_9595RightObjects1[0].getAABBLeft()), (( gdjs.GameScene2Code.GDSelectorObjects1.length === 0 ) ? 0 :gdjs.GameScene2Code.GDSelectorObjects1[0].getPointY("")) + 500, "", 0);
}}

}


};gdjs.GameScene2Code.mapOfGDgdjs_9546GameScene2Code_9546GDSelectorObjects2Objects = Hashtable.newFrom({"Selector": gdjs.GameScene2Code.GDSelectorObjects2});
gdjs.GameScene2Code.mapOfGDgdjs_9546GameScene2Code_9546GDGreenplayerObjects2Objects = Hashtable.newFrom({"Greenplayer": gdjs.GameScene2Code.GDGreenplayerObjects2});
gdjs.GameScene2Code.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Greenplayer"), gdjs.GameScene2Code.GDGreenplayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.GameScene2Code.GDSelectorObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.GameScene2Code.mapOfGDgdjs_9546GameScene2Code_9546GDSelectorObjects2Objects, gdjs.GameScene2Code.mapOfGDgdjs_9546GameScene2Code_9546GDGreenplayerObjects2Objects, 700, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene2Code.GDGreenplayerObjects2.length;i<l;++i) {
    if ( gdjs.GameScene2Code.GDGreenplayerObjects2[i].getVariableBoolean(gdjs.GameScene2Code.GDGreenplayerObjects2[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene2Code.GDGreenplayerObjects2[k] = gdjs.GameScene2Code.GDGreenplayerObjects2[i];
        ++k;
    }
}
gdjs.GameScene2Code.GDGreenplayerObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene2Code.GDGreenplayerObjects2 */
{for(var i = 0, len = gdjs.GameScene2Code.GDGreenplayerObjects2.length ;i < len;++i) {
    gdjs.GameScene2Code.GDGreenplayerObjects2[i].setVariableBoolean(gdjs.GameScene2Code.GDGreenplayerObjects2[i].getVariables().getFromIndex(0), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Greenplayer"), gdjs.GameScene2Code.GDGreenplayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene2Code.GDGreenplayerObjects2.length;i<l;++i) {
    if ( gdjs.GameScene2Code.GDGreenplayerObjects2[i].getVariableBoolean(gdjs.GameScene2Code.GDGreenplayerObjects2[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene2Code.GDGreenplayerObjects2[k] = gdjs.GameScene2Code.GDGreenplayerObjects2[i];
        ++k;
    }
}
gdjs.GameScene2Code.GDGreenplayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene2Code.GDGreenplayerObjects2 */
{for(var i = 0, len = gdjs.GameScene2Code.GDGreenplayerObjects2.length ;i < len;++i) {
    gdjs.GameScene2Code.GDGreenplayerObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FallMarker"), gdjs.GameScene2Code.GDFallMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Greenplayer"), gdjs.GameScene2Code.GDGreenplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameScene2Code.GDGreenplayerObjects1.length;i<l;++i) {
    if ( gdjs.GameScene2Code.GDGreenplayerObjects1[i].getY() > (( gdjs.GameScene2Code.GDFallMarkerObjects1.length === 0 ) ? 0 :gdjs.GameScene2Code.GDFallMarkerObjects1[0].getY()) ) {
        isConditionTrue_0 = true;
        gdjs.GameScene2Code.GDGreenplayerObjects1[k] = gdjs.GameScene2Code.GDGreenplayerObjects1[i];
        ++k;
    }
}
gdjs.GameScene2Code.GDGreenplayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameScene2Code.GDGreenplayerObjects1 */
{for(var i = 0, len = gdjs.GameScene2Code.GDGreenplayerObjects1.length ;i < len;++i) {
    gdjs.GameScene2Code.GDGreenplayerObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameScene2Code.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.GameScene2Code.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("FallMarker"), gdjs.GameScene2Code.GDFallMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.GameScene2Code.GDSelectorObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameScene2Code.GDBackgroundObjects1.length !== 0 ? gdjs.GameScene2Code.GDBackgroundObjects1[0] : null), true, "Background", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameScene2Code.GDSelectorObjects1.length !== 0 ? gdjs.GameScene2Code.GDSelectorObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.GameScene2Code.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.GameScene2Code.GDSelectorObjects1[i].setZOrder(1000);
}
}{for(var i = 0, len = gdjs.GameScene2Code.GDFallMarkerObjects1.length ;i < len;++i) {
    gdjs.GameScene2Code.GDFallMarkerObjects1[i].hide();
}
}
{ //Subevents
gdjs.GameScene2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.GameScene2Code.GDBackgroundObjects1);
{for(var i = 0, len = gdjs.GameScene2Code.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.GameScene2Code.GDBackgroundObjects1[i].setWidth(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) + 50);
}
}{for(var i = 0, len = gdjs.GameScene2Code.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.GameScene2Code.GDBackgroundObjects1[i].setXOffset(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) / 3);
}
}{for(var i = 0, len = gdjs.GameScene2Code.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.GameScene2Code.GDBackgroundObjects1[i].setYOffset(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) / 3);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.GameScene2Code.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.GameScene2Code.eventsList2(runtimeScene);
}


{


gdjs.GameScene2Code.eventsList3(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.GameScene2Code.eventsList4(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.GameScene2Code.eventsList6(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.GameScene2Code.eventsList7(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.GameScene2Code.eventsList8(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.GameScene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameScene2Code.GDCloudsObjects1.length = 0;
gdjs.GameScene2Code.GDCloudsObjects2.length = 0;
gdjs.GameScene2Code.GDCloudsObjects3.length = 0;
gdjs.GameScene2Code.GDCheckpointObjects1.length = 0;
gdjs.GameScene2Code.GDCheckpointObjects2.length = 0;
gdjs.GameScene2Code.GDCheckpointObjects3.length = 0;
gdjs.GameScene2Code.GDMoonObjects1.length = 0;
gdjs.GameScene2Code.GDMoonObjects2.length = 0;
gdjs.GameScene2Code.GDMoonObjects3.length = 0;
gdjs.GameScene2Code.GDGreenHeroObjects1.length = 0;
gdjs.GameScene2Code.GDGreenHeroObjects2.length = 0;
gdjs.GameScene2Code.GDGreenHeroObjects3.length = 0;
gdjs.GameScene2Code.GDFlyObjects1.length = 0;
gdjs.GameScene2Code.GDFlyObjects2.length = 0;
gdjs.GameScene2Code.GDFlyObjects3.length = 0;
gdjs.GameScene2Code.GDMonsterObjects1.length = 0;
gdjs.GameScene2Code.GDMonsterObjects2.length = 0;
gdjs.GameScene2Code.GDMonsterObjects3.length = 0;
gdjs.GameScene2Code.GDCornerPlatformObjects1.length = 0;
gdjs.GameScene2Code.GDCornerPlatformObjects2.length = 0;
gdjs.GameScene2Code.GDCornerPlatformObjects3.length = 0;
gdjs.GameScene2Code.GDCoinObjects1.length = 0;
gdjs.GameScene2Code.GDCoinObjects2.length = 0;
gdjs.GameScene2Code.GDCoinObjects3.length = 0;
gdjs.GameScene2Code.GDPlatform1Objects1.length = 0;
gdjs.GameScene2Code.GDPlatform1Objects2.length = 0;
gdjs.GameScene2Code.GDPlatform1Objects3.length = 0;
gdjs.GameScene2Code.GDLadderObjects1.length = 0;
gdjs.GameScene2Code.GDLadderObjects2.length = 0;
gdjs.GameScene2Code.GDLadderObjects3.length = 0;
gdjs.GameScene2Code.GDDoorObjects1.length = 0;
gdjs.GameScene2Code.GDDoorObjects2.length = 0;
gdjs.GameScene2Code.GDDoorObjects3.length = 0;
gdjs.GameScene2Code.GDPlatform2Objects1.length = 0;
gdjs.GameScene2Code.GDPlatform2Objects2.length = 0;
gdjs.GameScene2Code.GDPlatform2Objects3.length = 0;
gdjs.GameScene2Code.GDRedHeroObjects1.length = 0;
gdjs.GameScene2Code.GDRedHeroObjects2.length = 0;
gdjs.GameScene2Code.GDRedHeroObjects3.length = 0;
gdjs.GameScene2Code.GDPlatform3Objects1.length = 0;
gdjs.GameScene2Code.GDPlatform3Objects2.length = 0;
gdjs.GameScene2Code.GDPlatform3Objects3.length = 0;
gdjs.GameScene2Code.GDBackgroundObjects1.length = 0;
gdjs.GameScene2Code.GDBackgroundObjects2.length = 0;
gdjs.GameScene2Code.GDBackgroundObjects3.length = 0;
gdjs.GameScene2Code.GDNewSpriteObjects1.length = 0;
gdjs.GameScene2Code.GDNewSpriteObjects2.length = 0;
gdjs.GameScene2Code.GDNewSpriteObjects3.length = 0;
gdjs.GameScene2Code.GDSelectorObjects1.length = 0;
gdjs.GameScene2Code.GDSelectorObjects2.length = 0;
gdjs.GameScene2Code.GDSelectorObjects3.length = 0;
gdjs.GameScene2Code.GDBackground2Objects1.length = 0;
gdjs.GameScene2Code.GDBackground2Objects2.length = 0;
gdjs.GameScene2Code.GDBackground2Objects3.length = 0;
gdjs.GameScene2Code.GDFallMarkerObjects1.length = 0;
gdjs.GameScene2Code.GDFallMarkerObjects2.length = 0;
gdjs.GameScene2Code.GDFallMarkerObjects3.length = 0;
gdjs.GameScene2Code.GDCameraBoundarysMarker_9595LeftObjects1.length = 0;
gdjs.GameScene2Code.GDCameraBoundarysMarker_9595LeftObjects2.length = 0;
gdjs.GameScene2Code.GDCameraBoundarysMarker_9595LeftObjects3.length = 0;
gdjs.GameScene2Code.GDCameraBoundarysMarker_9595RightObjects1.length = 0;
gdjs.GameScene2Code.GDCameraBoundarysMarker_9595RightObjects2.length = 0;
gdjs.GameScene2Code.GDCameraBoundarysMarker_9595RightObjects3.length = 0;
gdjs.GameScene2Code.GDPoisonObjects1.length = 0;
gdjs.GameScene2Code.GDPoisonObjects2.length = 0;
gdjs.GameScene2Code.GDPoisonObjects3.length = 0;
gdjs.GameScene2Code.GDArrowObjects1.length = 0;
gdjs.GameScene2Code.GDArrowObjects2.length = 0;
gdjs.GameScene2Code.GDArrowObjects3.length = 0;
gdjs.GameScene2Code.GDBackground3Objects1.length = 0;
gdjs.GameScene2Code.GDBackground3Objects2.length = 0;
gdjs.GameScene2Code.GDBackground3Objects3.length = 0;
gdjs.GameScene2Code.GDDownObjects1.length = 0;
gdjs.GameScene2Code.GDDownObjects2.length = 0;
gdjs.GameScene2Code.GDDownObjects3.length = 0;
gdjs.GameScene2Code.GDGreenplayerObjects1.length = 0;
gdjs.GameScene2Code.GDGreenplayerObjects2.length = 0;
gdjs.GameScene2Code.GDGreenplayerObjects3.length = 0;
gdjs.GameScene2Code.GDTargetObjects1.length = 0;
gdjs.GameScene2Code.GDTargetObjects2.length = 0;
gdjs.GameScene2Code.GDTargetObjects3.length = 0;
gdjs.GameScene2Code.GDAButtonObjects1.length = 0;
gdjs.GameScene2Code.GDAButtonObjects2.length = 0;
gdjs.GameScene2Code.GDAButtonObjects3.length = 0;
gdjs.GameScene2Code.GDScoreObjects1.length = 0;
gdjs.GameScene2Code.GDScoreObjects2.length = 0;
gdjs.GameScene2Code.GDScoreObjects3.length = 0;
gdjs.GameScene2Code.GDFlatLightJoystickObjects1.length = 0;
gdjs.GameScene2Code.GDFlatLightJoystickObjects2.length = 0;
gdjs.GameScene2Code.GDFlatLightJoystickObjects3.length = 0;

gdjs.GameScene2Code.eventsList9(runtimeScene);
gdjs.GameScene2Code.GDCloudsObjects1.length = 0;
gdjs.GameScene2Code.GDCloudsObjects2.length = 0;
gdjs.GameScene2Code.GDCloudsObjects3.length = 0;
gdjs.GameScene2Code.GDCheckpointObjects1.length = 0;
gdjs.GameScene2Code.GDCheckpointObjects2.length = 0;
gdjs.GameScene2Code.GDCheckpointObjects3.length = 0;
gdjs.GameScene2Code.GDMoonObjects1.length = 0;
gdjs.GameScene2Code.GDMoonObjects2.length = 0;
gdjs.GameScene2Code.GDMoonObjects3.length = 0;
gdjs.GameScene2Code.GDGreenHeroObjects1.length = 0;
gdjs.GameScene2Code.GDGreenHeroObjects2.length = 0;
gdjs.GameScene2Code.GDGreenHeroObjects3.length = 0;
gdjs.GameScene2Code.GDFlyObjects1.length = 0;
gdjs.GameScene2Code.GDFlyObjects2.length = 0;
gdjs.GameScene2Code.GDFlyObjects3.length = 0;
gdjs.GameScene2Code.GDMonsterObjects1.length = 0;
gdjs.GameScene2Code.GDMonsterObjects2.length = 0;
gdjs.GameScene2Code.GDMonsterObjects3.length = 0;
gdjs.GameScene2Code.GDCornerPlatformObjects1.length = 0;
gdjs.GameScene2Code.GDCornerPlatformObjects2.length = 0;
gdjs.GameScene2Code.GDCornerPlatformObjects3.length = 0;
gdjs.GameScene2Code.GDCoinObjects1.length = 0;
gdjs.GameScene2Code.GDCoinObjects2.length = 0;
gdjs.GameScene2Code.GDCoinObjects3.length = 0;
gdjs.GameScene2Code.GDPlatform1Objects1.length = 0;
gdjs.GameScene2Code.GDPlatform1Objects2.length = 0;
gdjs.GameScene2Code.GDPlatform1Objects3.length = 0;
gdjs.GameScene2Code.GDLadderObjects1.length = 0;
gdjs.GameScene2Code.GDLadderObjects2.length = 0;
gdjs.GameScene2Code.GDLadderObjects3.length = 0;
gdjs.GameScene2Code.GDDoorObjects1.length = 0;
gdjs.GameScene2Code.GDDoorObjects2.length = 0;
gdjs.GameScene2Code.GDDoorObjects3.length = 0;
gdjs.GameScene2Code.GDPlatform2Objects1.length = 0;
gdjs.GameScene2Code.GDPlatform2Objects2.length = 0;
gdjs.GameScene2Code.GDPlatform2Objects3.length = 0;
gdjs.GameScene2Code.GDRedHeroObjects1.length = 0;
gdjs.GameScene2Code.GDRedHeroObjects2.length = 0;
gdjs.GameScene2Code.GDRedHeroObjects3.length = 0;
gdjs.GameScene2Code.GDPlatform3Objects1.length = 0;
gdjs.GameScene2Code.GDPlatform3Objects2.length = 0;
gdjs.GameScene2Code.GDPlatform3Objects3.length = 0;
gdjs.GameScene2Code.GDBackgroundObjects1.length = 0;
gdjs.GameScene2Code.GDBackgroundObjects2.length = 0;
gdjs.GameScene2Code.GDBackgroundObjects3.length = 0;
gdjs.GameScene2Code.GDNewSpriteObjects1.length = 0;
gdjs.GameScene2Code.GDNewSpriteObjects2.length = 0;
gdjs.GameScene2Code.GDNewSpriteObjects3.length = 0;
gdjs.GameScene2Code.GDSelectorObjects1.length = 0;
gdjs.GameScene2Code.GDSelectorObjects2.length = 0;
gdjs.GameScene2Code.GDSelectorObjects3.length = 0;
gdjs.GameScene2Code.GDBackground2Objects1.length = 0;
gdjs.GameScene2Code.GDBackground2Objects2.length = 0;
gdjs.GameScene2Code.GDBackground2Objects3.length = 0;
gdjs.GameScene2Code.GDFallMarkerObjects1.length = 0;
gdjs.GameScene2Code.GDFallMarkerObjects2.length = 0;
gdjs.GameScene2Code.GDFallMarkerObjects3.length = 0;
gdjs.GameScene2Code.GDCameraBoundarysMarker_9595LeftObjects1.length = 0;
gdjs.GameScene2Code.GDCameraBoundarysMarker_9595LeftObjects2.length = 0;
gdjs.GameScene2Code.GDCameraBoundarysMarker_9595LeftObjects3.length = 0;
gdjs.GameScene2Code.GDCameraBoundarysMarker_9595RightObjects1.length = 0;
gdjs.GameScene2Code.GDCameraBoundarysMarker_9595RightObjects2.length = 0;
gdjs.GameScene2Code.GDCameraBoundarysMarker_9595RightObjects3.length = 0;
gdjs.GameScene2Code.GDPoisonObjects1.length = 0;
gdjs.GameScene2Code.GDPoisonObjects2.length = 0;
gdjs.GameScene2Code.GDPoisonObjects3.length = 0;
gdjs.GameScene2Code.GDArrowObjects1.length = 0;
gdjs.GameScene2Code.GDArrowObjects2.length = 0;
gdjs.GameScene2Code.GDArrowObjects3.length = 0;
gdjs.GameScene2Code.GDBackground3Objects1.length = 0;
gdjs.GameScene2Code.GDBackground3Objects2.length = 0;
gdjs.GameScene2Code.GDBackground3Objects3.length = 0;
gdjs.GameScene2Code.GDDownObjects1.length = 0;
gdjs.GameScene2Code.GDDownObjects2.length = 0;
gdjs.GameScene2Code.GDDownObjects3.length = 0;
gdjs.GameScene2Code.GDGreenplayerObjects1.length = 0;
gdjs.GameScene2Code.GDGreenplayerObjects2.length = 0;
gdjs.GameScene2Code.GDGreenplayerObjects3.length = 0;
gdjs.GameScene2Code.GDTargetObjects1.length = 0;
gdjs.GameScene2Code.GDTargetObjects2.length = 0;
gdjs.GameScene2Code.GDTargetObjects3.length = 0;
gdjs.GameScene2Code.GDAButtonObjects1.length = 0;
gdjs.GameScene2Code.GDAButtonObjects2.length = 0;
gdjs.GameScene2Code.GDAButtonObjects3.length = 0;
gdjs.GameScene2Code.GDScoreObjects1.length = 0;
gdjs.GameScene2Code.GDScoreObjects2.length = 0;
gdjs.GameScene2Code.GDScoreObjects3.length = 0;
gdjs.GameScene2Code.GDFlatLightJoystickObjects1.length = 0;
gdjs.GameScene2Code.GDFlatLightJoystickObjects2.length = 0;
gdjs.GameScene2Code.GDFlatLightJoystickObjects3.length = 0;


return;

}

gdjs['GameScene2Code'] = gdjs.GameScene2Code;
