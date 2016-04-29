(function (lib, img, cjs, ss) {

    var p; // shortcut to reference prototypes

// library properties:
    lib.properties = {
        width: 1280,
        height: 720,
        fps: 30,
        color: "#FFFFFF",
        manifest: []
    };


// symbols:


    (lib.Image = function () {
        this.spriteSheet = ss["evestory.v01_atlas_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();


    (lib.Image_1 = function () {
        this.spriteSheet = ss["evestory.v01_atlas_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();


    (lib.Image_2 = function () {
        this.spriteSheet = ss["evestory.v01_atlas_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();


    (lib.Image_0 = function () {
        this.spriteSheet = ss["evestory.v01_atlas_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();


    (lib.Image_1_1 = function () {
        this.spriteSheet = ss["evestory.v01_atlas_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();


    (lib.Image_2_1 = function () {
        this.spriteSheet = ss["evestory.v01_atlas_"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();


    (lib.Image_3 = function () {
        this.spriteSheet = ss["evestory.v01_atlas_"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();


    (lib.Image_4 = function () {
        this.spriteSheet = ss["evestory.v01_atlas_"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();


    (lib.ClipGroup = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("EiVMg42MEqaAAAMAAAAz3MkqaA92g");
        mask.setTransform(955.1, 374);

        // Layer 3
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#000000").ss(4).p("Ac1OxMg5pAAAIAA9gMA5pAAAg");
        this.shape.setTransform(1539.7, 165.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("A80OwIAA9gMA5pAAAIAAdgg");
        this.shape_1.setTransform(1539.7, 165.5);

        this.instance = new lib.Image();
        this.instance.setTransform(0, 0, 0.995, 0.995);

        this.shape.mask = this.shape_1.mask = this.instance.mask = mask;

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0.1, 10.1, 1910, 727.9);


    (lib.ClipGroup_5 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("EhVdAU7MAAAgp1MCq7AAAMgkKAp1g");
        mask.setTransform(548, 451.8);

        // Layer 3
        this.instance = new lib.Image_2();
        this.instance.setTransform(0, 0, 0.57, 0.57);

        this.instance.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(1, 317.8, 1093.1, 268);


    (lib.ClipGroup_4 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("EiVNAeeMAAAg87MEqaAAAMAAAA87g");
        mask.setTransform(962, 348.2);

        // Layer 3
        this.instance = new lib.Image_0();
        this.instance.setTransform(0, 0, 1.024, 1.024);

        this.instance.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(7, 153.2, 1910, 390);


    (lib.ClipGroup_3 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("EhQxAU7MAkJgp2MB9aAAAMAAAAp2g");
        mask.setTransform(520.1, 190.7);

        // Layer 3
        this.instance = new lib.Image_1_1();
        this.instance.setTransform(0, 0, 0.66, 0.66);

        this.instance.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(3.1, 56.7, 1034.1, 268);


    (lib.ClipGroup_2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("EhKNAenMAAAg9NMCUbAAAMAAAA9Ng");
        mask.setTransform(475, 262.7);

        // Layer 3
        this.instance = new lib.Image_2_1();
        this.instance.setTransform(0, 0, 1.855, 1.855);

        this.instance.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 66.7, 950, 392);


    (lib.ClipGroup_1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("EhKNAedMAAAg86MCUbAAAMAAAA86g");
        mask.setTransform(475, 606.8);

        // Layer 3
        this.instance = new lib.Image_3();
        this.instance.setTransform(0, 0, 1.1, 1.1);

        this.instance.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 411.8, 950, 390);


    (lib.ClipGroup_6 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        mask_1.graphics.p("AtcbSIAAmQIFNhQIAbAAIAAl8IgtgtIgRgtIA1gcIgCivIhwgZIgZg0IgHjzIBLg5IgcgXIgHgjIAZgMIAeAAIAZARIA6h/IBchDICFg9ICbg1IARgbIAAgoIhahEIgFhLIAmg8IBrgZIAAhIQgIAEgMABQgYAEgWgJQgVgKgCgMQABgUgEgRQgFgWgJgRIgJgMIgtAAQgCAOgIAOQgRAdghADQghADgjgPIgdgQIgUgdIgrARIgogeIAAoIIEThzQgFgUgDgcQgFg4AQgsQAPgrAagZQANgNAJgEIgHggIgTgcIAeggQgKgJgJgMQgRgYAGgPQAGgQAOgOIAMgKIAcg2QAhg3AWgGIArgOQAhgEBSASQBPARgUAlQgKASgbAPIAXAhIgNA+IAwAhIAPB4IDThdIBKAUIAAIpIiHBVIgUBBIgcAoIg+AFIgrghIglAeIgPAhIg1AeIAIAjIARAGQARAKgCAYQgCAlgaAwIg7AgIAABdIBaAeIApAyIANBQIgpAtIhJAWIAAA1IBOAvICSA6ICUBQIBOBdIAbA8IAygSIAXAUIgSA6IArBDIAPA8IAACjIhBAyIhZAbIgCCZIA4AyIgGAjIhAA3IAAGGIDRAUIB5BNIAABJIgKAAIANF5g");
        mask_1.setTransform(484.2, 313);

        // Layer 3
        this.instance_1 = new lib.Image_4();
        this.instance_1.setTransform(0, 0, 1.1, 1.1);

        this.instance_1.mask = mask_1;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(398.1, 130.7, 172.3, 364.7);


    (lib.ClipGroup_7 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask_2 = new cjs.Shape();
        mask_2._off = true;
        mask_2.graphics.p("EiVNA43MAAAgz3MEqag92MAAABxtg");
        mask_2.setTransform(955, 624.8);

        // Layer 3
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#000000").ss(4).p("EAkkAUnMhJHAAAMAAAgpNMBJHAAAg");
        this.shape_2.setTransform(454.4, 789.8);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("EgkjAUnMAAAgpNMBJHAAAMAAAApNg");
        this.shape_3.setTransform(454.4, 789.8);

        this.instance_2 = new lib.Image_1();
        this.instance_2.setTransform(1.2, 0, 1.388, 1.388);

        this.shape_2.mask = this.shape_3.mask = this.instance_2.mask = mask_2;

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance_2}, {t: this.shape_3}, {t: this.shape_2}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(1.2, 260.9, 1908.8, 727.9);


    (lib.interface2quadro5 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#000000").ss(4).p("AZyGGMgzjAAAIAAsLMAzjAAAg");
        this.shape.setTransform(286.1, 143.7, 1.006, 1.011);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("A5xGFIAAsKMAziAAAIAAMKg");
        this.shape_1.setTransform(286.1, 143.7, 1.006, 1.011);

        this.instance = new lib.ClipGroup_2();
        this.instance.setTransform(-0.1, 2.6, 1.006, 1.011, 0, 0, 0, 474.9, 265.2);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-477.9, -265.5, 955.9, 536.5);


    (lib.interface2quadro4 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#000000").ss(4).p("AZyGGMgzjAAAIAAsLMAzjAAAg");
        this.shape.setTransform(-293.8, 29.5, 1.006, 1.011);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("A5xGGIAAsLMAzjAAAIAAMLg");
        this.shape_1.setTransform(-293.8, 29.5, 1.006, 1.011);

        this.instance = new lib.ClipGroup_6();
        this.instance.setTransform(0, 128.8, 1.006, 1.011, 0, 0, 0, 475.1, 593.5);

        this.instance_1 = new lib.ClipGroup_1();
        this.instance_1.setTransform(0.1, 128.8, 1.006, 1.011, 0, 0, 0, 475.1, 593.6);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance_1}, {t: this.instance}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-478, -471.3, 956, 1200.6);


    (lib.interface2quadro3 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#010001").ss(4).p("AXm5nMgvLAAAMAAAAzPMAvLAAAg");
        this.shape.setTransform(783, -65.2, 1.006, 1.011);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("A3kZnMAAAgzOMAvJAAAMAAAAzOg");
        this.shape_1.setTransform(783, -65.2, 1.006, 1.011);

        this.instance = new lib.ClipGroup_4();
        this.instance.setTransform(-0.3, 241, 1.006, 1.011, 0, 0, 0, 961.6, 553.1);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-967.8, -318.1, 1935.7, 1118.4);


    (lib.interface2quadro2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.ClipGroup_3();
        this.instance.setTransform(0, 167.8, 1.006, 1.011, 0, 0, 0, 520, 356.6);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-523.2, -192.7, 1046.5, 721);


    (lib.interface2quadro1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#010001").ss(4).p("AYiIFMgxDAAAIAAwJMAxDAAAg");
        this.shape.setTransform(-373.8, -73, 1.006, 1.011);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("A4hIFIAAwJMAxCAAAIAAQJg");
        this.shape_1.setTransform(-373.8, -73, 1.006, 1.011);

        this.instance = new lib.ClipGroup_5();
        this.instance.setTransform(0.2, -145.5, 1.006, 1.011, 0, 0, 0, 547.7, 307.8);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-550.9, -456.6, 1101.8, 622.1);


    (lib.interface1quadro2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.ClipGroup_7();
        this.instance.setTransform(951.7, 414, 1.007, 1, 0, 0, 0, 946.5, 674.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#7300F9").s().p("EiVNA43MAAAgz3MEqbg92MAAABxtg");
        this.shape.setTransform(951.5, 414, 1.006, 1, 0, 0, 0, -9.2, 50);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1.2, -260.8, 1941.6, 1498.7);


    (lib.interface1quadro1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.ClipGroup();
        this.instance.setTransform(963.5, 399.3, 1.005, 1, 0, 0, 0, 958.5, 409.3);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF0000").s().p("EiVNg42MEqbAAAMAAAAz3MkqbA92g");
        this.shape.setTransform(960.8, 363.9, 1.006, 1);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, -10, 1921.7, 1074.4);


// stage content:
    (lib.evestoryv01 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function () {
            this.stop();

            canvas.onclick = ClickNavigation.bind(this);
            document.onkeydown = KeypressNavigation.bind(this);

            var firstFrame = 0;
            var lastFrame = 8;

            function ClickNavigation() {
                if (this.currentFrame < lastFrame) {
                    this.gotoAndStop(this.currentFrame + 1);
                }
            }

            function KeypressNavigation(event) {
                var key = window.event;
                switch (key.keyCode) {
                    case 37: // prev
                        if (this.currentFrame > firstFrame) {
                            this.gotoAndStop(this.currentFrame - 1);
                        }
                        break;
                    case 39: // next
                        if (this.currentFrame < lastFrame) {
                            this.gotoAndStop(this.currentFrame + 1);
                        }
                        break;
                }
            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

        // Interfaces
        this.instance = new lib.interface1quadro1();
        this.instance.setTransform(960.8, 363.9, 1, 1, 0, 0, 0, 960.8, 363.9);

        this.instance_1 = new lib.interface1quadro2();
        this.instance_1.setTransform(960.8, 716, 1, 1, 0, 0, 0, 960.8, 363.9);

        this.instance_2 = new lib.interface2quadro1();
        this.instance_2.setTransform(549.8, -11.8, 1, 1, 0, 0, 0, 0, -145.6);

        this.instance_3 = new lib.interface2quadro2();
        this.instance_3.setTransform(1401.3, 301.5, 1, 1, 0, 0, 0, 0, 167.8);

        this.instance_4 = new lib.interface2quadro3();
        this.instance_4.setTransform(960.6, 683.8, 1, 1, 0, 0, 0, -0.1, 241.1);

        this.instance_5 = new lib.interface2quadro4();
        this.instance_5.setTransform(477.7, 867.8, 1, 1, 0, 0, 0, -0.1, 128.9);

        this.instance_6 = new lib.interface2quadro5();
        this.instance_6.setTransform(1443.5, 884.4, 1, 1, 0, 0, 0, 0, 2.7);

        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.instance}]}, 1).to({state: [{t: this.instance}, {t: this.instance_1}]}, 1).to({state: [{t: this.instance_2}]}, 1).to({state: [{t: this.instance_3}, {t: this.instance_2}]}, 1).to({state: [{t: this.instance_3}, {t: this.instance_4}, {t: this.instance_2}]}, 1).to({state: [{t: this.instance_3}, {t: this.instance_4}, {t: this.instance_2}, {t: this.instance_5}]}, 1).to({state: [{t: this.instance_3}, {t: this.instance_4}, {t: this.instance_2}, {t: this.instance_5}, {t: this.instance_6}]}, 1).to({state: []}, 1).wait(1));

        // Background
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#5D5D5D").s().p("EiWHBUgMAAAio/MEsPAAAMAAACo/g");
        this.shape.setTransform(960.7, 539.2);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(9));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(959.9, 538.4, 1921.8, 1081.7);

})(lib = lib || {}, images = images || {}, createjs = createjs || {}, ss = ss || {});
var lib, images, createjs, ss;
