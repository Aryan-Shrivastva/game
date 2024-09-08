gdjs.Objects_322Code = {};
gdjs.Objects_322Code.localVariables = [];
gdjs.Objects_322Code.GDNewSpriteObjects1= [];
gdjs.Objects_322Code.GDNewSpriteObjects2= [];
gdjs.Objects_322Code.GDNewSpriteObjects3= [];
gdjs.Objects_322Code.GDQuestion1Objects1= [];
gdjs.Objects_322Code.GDQuestion1Objects2= [];
gdjs.Objects_322Code.GDQuestion1Objects3= [];
gdjs.Objects_322Code.GDAnswer_95951Objects1= [];
gdjs.Objects_322Code.GDAnswer_95951Objects2= [];
gdjs.Objects_322Code.GDAnswer_95951Objects3= [];
gdjs.Objects_322Code.GDAnswer2Objects1= [];
gdjs.Objects_322Code.GDAnswer2Objects2= [];
gdjs.Objects_322Code.GDAnswer2Objects3= [];
gdjs.Objects_322Code.GDAnswer3Objects1= [];
gdjs.Objects_322Code.GDAnswer3Objects2= [];
gdjs.Objects_322Code.GDAnswer3Objects3= [];
gdjs.Objects_322Code.GDCorrect1Objects1= [];
gdjs.Objects_322Code.GDCorrect1Objects2= [];
gdjs.Objects_322Code.GDCorrect1Objects3= [];
gdjs.Objects_322Code.GDWrong2Objects1= [];
gdjs.Objects_322Code.GDWrong2Objects2= [];
gdjs.Objects_322Code.GDWrong2Objects3= [];
gdjs.Objects_322Code.GDWrong3Objects1= [];
gdjs.Objects_322Code.GDWrong3Objects2= [];
gdjs.Objects_322Code.GDWrong3Objects3= [];


gdjs.Objects_322Code.mapOfGDgdjs_9546Objects_9595322Code_9546GDAnswer_959595951Objects1Objects = Hashtable.newFrom({"Answer_1": gdjs.Objects_322Code.GDAnswer_95951Objects1});
gdjs.Objects_322Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Answer_1"), gdjs.Objects_322Code.GDAnswer_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Objects_322Code.mapOfGDgdjs_9546Objects_9595322Code_9546GDAnswer_959595951Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(38422084);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Correct1"), gdjs.Objects_322Code.GDCorrect1Objects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Hit 5.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene2", false);
}{for(var i = 0, len = gdjs.Objects_322Code.GDCorrect1Objects1.length ;i < len;++i) {
    gdjs.Objects_322Code.GDCorrect1Objects1[i].hide();
}
}}

}


};gdjs.Objects_322Code.mapOfGDgdjs_9546Objects_9595322Code_9546GDAnswer2Objects1Objects = Hashtable.newFrom({"Answer2": gdjs.Objects_322Code.GDAnswer2Objects1});
gdjs.Objects_322Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.Objects_322Code.GDAnswer2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Objects_322Code.mapOfGDgdjs_9546Objects_9595322Code_9546GDAnswer2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(38657532);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Wrong2"), gdjs.Objects_322Code.GDWrong2Objects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Hit 5.aac", false, 100, 1);
}{for(var i = 0, len = gdjs.Objects_322Code.GDWrong2Objects1.length ;i < len;++i) {
    gdjs.Objects_322Code.GDWrong2Objects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}}

}


};gdjs.Objects_322Code.mapOfGDgdjs_9546Objects_9595322Code_9546GDAnswer3Objects2Objects = Hashtable.newFrom({"Answer3": gdjs.Objects_322Code.GDAnswer3Objects2});
gdjs.Objects_322Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.Objects_322Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Answer3"), gdjs.Objects_322Code.GDAnswer3Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Objects_322Code.mapOfGDgdjs_9546Objects_9595322Code_9546GDAnswer3Objects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(38767060);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Wrong3"), gdjs.Objects_322Code.GDWrong3Objects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "Hit 5.aac", false, 100, 1);
}{for(var i = 0, len = gdjs.Objects_322Code.GDWrong3Objects2.length ;i < len;++i) {
    gdjs.Objects_322Code.GDWrong3Objects2[i].hide();
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}
{ //Subevents
gdjs.Objects_322Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Objects_322Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Correct1"), gdjs.Objects_322Code.GDCorrect1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Wrong2"), gdjs.Objects_322Code.GDWrong2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Wrong3"), gdjs.Objects_322Code.GDWrong3Objects1);
{for(var i = 0, len = gdjs.Objects_322Code.GDCorrect1Objects1.length ;i < len;++i) {
    gdjs.Objects_322Code.GDCorrect1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Objects_322Code.GDWrong2Objects1.length ;i < len;++i) {
    gdjs.Objects_322Code.GDWrong2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Objects_322Code.GDWrong3Objects1.length ;i < len;++i) {
    gdjs.Objects_322Code.GDWrong3Objects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Objects_322Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Objects_322Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Objects_322Code.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.Objects_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Objects_322Code.GDNewSpriteObjects1.length = 0;
gdjs.Objects_322Code.GDNewSpriteObjects2.length = 0;
gdjs.Objects_322Code.GDNewSpriteObjects3.length = 0;
gdjs.Objects_322Code.GDQuestion1Objects1.length = 0;
gdjs.Objects_322Code.GDQuestion1Objects2.length = 0;
gdjs.Objects_322Code.GDQuestion1Objects3.length = 0;
gdjs.Objects_322Code.GDAnswer_95951Objects1.length = 0;
gdjs.Objects_322Code.GDAnswer_95951Objects2.length = 0;
gdjs.Objects_322Code.GDAnswer_95951Objects3.length = 0;
gdjs.Objects_322Code.GDAnswer2Objects1.length = 0;
gdjs.Objects_322Code.GDAnswer2Objects2.length = 0;
gdjs.Objects_322Code.GDAnswer2Objects3.length = 0;
gdjs.Objects_322Code.GDAnswer3Objects1.length = 0;
gdjs.Objects_322Code.GDAnswer3Objects2.length = 0;
gdjs.Objects_322Code.GDAnswer3Objects3.length = 0;
gdjs.Objects_322Code.GDCorrect1Objects1.length = 0;
gdjs.Objects_322Code.GDCorrect1Objects2.length = 0;
gdjs.Objects_322Code.GDCorrect1Objects3.length = 0;
gdjs.Objects_322Code.GDWrong2Objects1.length = 0;
gdjs.Objects_322Code.GDWrong2Objects2.length = 0;
gdjs.Objects_322Code.GDWrong2Objects3.length = 0;
gdjs.Objects_322Code.GDWrong3Objects1.length = 0;
gdjs.Objects_322Code.GDWrong3Objects2.length = 0;
gdjs.Objects_322Code.GDWrong3Objects3.length = 0;

gdjs.Objects_322Code.eventsList4(runtimeScene);
gdjs.Objects_322Code.GDNewSpriteObjects1.length = 0;
gdjs.Objects_322Code.GDNewSpriteObjects2.length = 0;
gdjs.Objects_322Code.GDNewSpriteObjects3.length = 0;
gdjs.Objects_322Code.GDQuestion1Objects1.length = 0;
gdjs.Objects_322Code.GDQuestion1Objects2.length = 0;
gdjs.Objects_322Code.GDQuestion1Objects3.length = 0;
gdjs.Objects_322Code.GDAnswer_95951Objects1.length = 0;
gdjs.Objects_322Code.GDAnswer_95951Objects2.length = 0;
gdjs.Objects_322Code.GDAnswer_95951Objects3.length = 0;
gdjs.Objects_322Code.GDAnswer2Objects1.length = 0;
gdjs.Objects_322Code.GDAnswer2Objects2.length = 0;
gdjs.Objects_322Code.GDAnswer2Objects3.length = 0;
gdjs.Objects_322Code.GDAnswer3Objects1.length = 0;
gdjs.Objects_322Code.GDAnswer3Objects2.length = 0;
gdjs.Objects_322Code.GDAnswer3Objects3.length = 0;
gdjs.Objects_322Code.GDCorrect1Objects1.length = 0;
gdjs.Objects_322Code.GDCorrect1Objects2.length = 0;
gdjs.Objects_322Code.GDCorrect1Objects3.length = 0;
gdjs.Objects_322Code.GDWrong2Objects1.length = 0;
gdjs.Objects_322Code.GDWrong2Objects2.length = 0;
gdjs.Objects_322Code.GDWrong2Objects3.length = 0;
gdjs.Objects_322Code.GDWrong3Objects1.length = 0;
gdjs.Objects_322Code.GDWrong3Objects2.length = 0;
gdjs.Objects_322Code.GDWrong3Objects3.length = 0;


return;

}

gdjs['Objects_322Code'] = gdjs.Objects_322Code;
