/**
 * Created by mikel on 4/28/2016.
 */
angular
    .module('eveAnimations')
    .controller('act05Controller', act05Controller);

function act05Controller() {
    var animation = this;

    var canvas, stage, exportRoot;
    animation.start = function () {
        // --- write your JS code here ---

        canvas = document.getElementById("canvas");
        images = images || {};
        ss = ss || {};

        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", handleFileLoad);
        loader.addEventListener("complete", handleComplete);
        loader.loadFile({
            src: "images/evestory.v01_atlas_.json?1461889042115",
            type: "spritesheet",
            id: "evestory.v01_atlas_"
        }, true);
        loader.loadManifest(lib.properties.manifest);
    };

    animation.start();

    function handleFileLoad(evt) {
        if (evt.item.type == "image") {
            images[evt.item.id] = evt.result;
        }
    }

    function handleComplete(evt) {
        var queue = evt.target;
        ss["evestory.v01_atlas_"] = queue.getResult("evestory.v01_atlas_");
        exportRoot = new lib.evestoryv01();

        stage = new createjs.Stage(canvas);
        stage.addChild(exportRoot);
        stage.update();

        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
}