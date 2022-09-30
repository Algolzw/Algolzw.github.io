(function(){
    var stage, textStage, input;
    var circles, textPixels, textFormed;
    var offsetX, offsetY, text;
    var colors = ['#B2949D', '#FFF578', '#FF5F8D', '#37A9CC', '#188EB2'];

    var count;

    var first_day = new Date('2018/10/17');
    var friend_day = new Date('2018/11/09');
    var love_day = new Date('2019/01/28');

    var day_now = new Date();

    var gap1 = day_now.getTime() - first_day.getTime();
    var gap2 = day_now.getTime() - friend_day.getTime();
    var gap3 = day_now.getTime() - love_day.getTime();

    var first_days = Math.floor(gap1/(24*3600*1000));
    var friend_days = Math.floor(gap2/(24*3600*1000));
    var love_days = Math.floor(gap3/(24*3600*1000));


    function init() {
        initStages();
        initForm();
        initText();
        initCircles();
        animate();
        addListeners();
    }

    // Init Canvas
    function initStages() {
        offsetX = (window.innerWidth-600)/2;
        offsetY = (window.innerHeight-300)/2;
        textStage = new createjs.Stage("text");
        textStage.canvas.width = 800;
        textStage.canvas.height = 200;

        stage = new createjs.Stage("stage");
        stage.canvas.width = window.innerWidth;
        stage.canvas.height = window.innerHeight;
    }

    function initForm() {
        count = 0;
        var str1 = '连雯怡';
        var str2 = '我们见面的第'+ first_days + '天';
        var str3 = '我们熟悉的第' + friend_days + '天';
        var str4 = '相恋的' + love_days + '天';
        var str5 = '希望咱俩能开开心心的度过每一天';
        var str6 = '永远爱你';
        var str7 = '每天都要快乐';

        input = [str1, str4, str7, str6];
    }

    function initText() {
        text = new createjs.Text("t", "80px 'Source Sans Pro'", "#333");
        text.textAlign = 'center';
        text.x = 330;
    }

    function initCircles() {
        circles = [];
        for(var i=0; i<800; i++) {
            var circle = new createjs.Shape();
            var r = 6;
            var x = window.innerWidth*Math.random();
            var y = window.innerHeight*Math.random();
            var color = colors[Math.floor(i%colors.length)];
            var alpha = 0.2 + Math.random()*0.5;
            circle.alpha = alpha;
            circle.radius = r;
            circle.graphics.beginFill(color).drawCircle(0, 0, r);
            circle.x = x;
            circle.y = y;
            circles.push(circle);
            stage.addChild(circle);
            circle.movement = 'float';
            tweenCircle(circle);
        }
    }


    // animating circles
    function animate() {
        stage.update();
        requestAnimationFrame(animate);
    }

    function tweenCircle(c, dir) {
        if(c.tween) c.tween.kill();
        if(dir == 'in') {
            c.tween = TweenLite.to(c, 0.4, {x: c.originX, y: c.originY, ease:Quad.easeInOut, alpha: 1, radius: 5, scaleX: 0.4, scaleY: 0.4, onComplete: function() {
                c.movement = 'jiggle';
                tweenCircle(c);
            }});
        } else if(dir == 'out') {
            c.tween = TweenLite.to(c, 0.8, {x: window.innerWidth*Math.random(), y: window.innerHeight*Math.random(), ease:Quad.easeInOut, alpha: 0.2 + Math.random()*0.5, scaleX: 1, scaleY: 1, onComplete: function() {
                c.movement = 'float';
                tweenCircle(c);
            }});
        } else {
            if(c.movement == 'float') {
                c.tween = TweenLite.to(c, 5 + Math.random()*3.5, {x: c.x + -100+Math.random()*200, y: c.y + -100+Math.random()*200, ease:Quad.easeInOut, alpha: 0.2 + Math.random()*0.5,
                    onComplete: function() {
                        tweenCircle(c);
                    }});
            } else {
                c.tween = TweenLite.to(c, 0.05, {x: c.originX + Math.random()*3, y: c.originY + Math.random()*3, ease:Quad.easeInOut,
                    onComplete: function() {
                        tweenCircle(c);
                    }});
            }
        }
    }

    function formText() {
        for(var i= 0, l=textPixels.length; i<l; i++) {
            circles[i].originX = offsetX + textPixels[i].x;
            circles[i].originY = offsetY + textPixels[i].y;
            tweenCircle(circles[i], 'in');
        }
        textFormed = true;
        if(textPixels.length < circles.length) {
            for(var j = textPixels.length; j<circles.length; j++) {
                circles[j].tween = TweenLite.to(circles[j], 0.4, {alpha: 0.1});
            }
        }
    }

    function explode() {
        for(var i= 0, l=textPixels.length; i<l; i++) {
            tweenCircle(circles[i], 'out');
        }
        if(textPixels.length < circles.length) {
            for(var j = textPixels.length; j<circles.length; j++) {
                circles[j].tween = TweenLite.to(circles[j], 0.4, {alpha: 1});
            }
        }
    }

    // event handlers
    function addListeners() {
        $("#stage").click(function (e) {
            e.preventDefault();
            var input_idx = count % input.length;
            if(textFormed) {
                explode();
                if(input.value != '') {
                    setTimeout(function() {
                        createText(input[input_idx].toUpperCase());
                    }, 810);
                } else {
                    textFormed = false;
                }
            } else {
                createText(input[input_idx].toUpperCase());
            }
            count++;
        });
    }


    function createText(t) {
        var fontSize = 680/(t.length);
        if (fontSize > 138) fontSize = 138;
        text.text = t;
        text.font = "900 "+fontSize+"px 'Source Sans Pro'";
        text.textAlign = 'center';
        text.x = 330;
        text.y = (172-fontSize)/2;
        textStage.addChild(text);
        textStage.update();

        var ctx = document.getElementById('text').getContext('2d');
        var pix = ctx.getImageData(0,0,820,200).data;
        textPixels = [];
        for (var i = pix.length; i >= 0; i -= 4) {
            if (pix[i] != 0) {
                var x = (i / 4) % 820;
                var y = Math.floor(Math.floor(i/820)/4);

                if((x && x%8 == 0) && (y && y%8 == 0)) textPixels.push({x: x, y: y});
            }
        }

        formText();

    }

    window.onload = function() { init() };


})();