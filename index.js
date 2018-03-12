var tom = document.getElementById('pic');
var oTalk = document.getElementById('talk');
var timer;

var width = document.body.clientWidth;
var height = document.body.clientHeight;
// 重新调整大小的时候调用
window.onresize = function() {
    // 获取当前屏幕大小
    width = document.body.clientWidth;
    height = document.body.clientHeight;
}
function action(event) {
    // 获取鼠标点击的坐标
    var pointX = event.pageX * 360 /width;
    var pointY = event.pageY * 640 /height;
    if(pointX > 140 && pointX < 225 && pointY > 400 && pointY < 450) {
        doAnimation('angry', 25, 8);
    }else if(pointX > 119 && pointX < 245 && pointY > 465 && pointY < 565) {
        doAnimation('stomach', 33, 3);
    }else if(pointX > 155 && pointX < 210 && pointY > 190 && pointY < 230) {
        doAnimation('knockout', 80, 20);
        sounds('fall', 0);
    }else if(pointX > 185 && pointX < 235 && pointY > 250 && pointY < 280) {
        doAnimation('eat', 39, 16);
    }else if(pointX > 137 && pointX < 235 && pointY > 250 && pointY < 280) {
        doAnimation('drink', 80, 43);
        sounds('pour', 18);
    }else if(pointX > 124 && pointX < 240 && pointY > 160 && pointY < 190) {
        doAnimation('cymbal', 12, 2);
    }else if(pointX > 246 && pointX < 280 && pointY > 490 && pointY < 580) {
        doAnimation('fart', 27, 5);
    }else if(pointX > 80 && pointX < 120 && pointY > 110 && pointY < 195) {
        doAnimation('scratch', 55, 22);
    }else if(pointX > 240 && pointX < 290 && pointY > 110 && pointY < 200) {
        doAnimation('pie', 23, 14);
    }else if(pointX > 125 && pointX < 175 && pointY > 570 && pointY < 620) {
        doAnimation('foot_right', 29, 5);
    }else if(pointX > 180 && pointX < 230 && pointY > 570 && pointY < 620) {
        doAnimation('foot_left',29, 4);
    }
}

function doAnimation(action, num, soundStart){
    clearInterval(timer);
    var i = 0;
    timer = setInterval(function(){
        if(i < 10) {
            i = '0' + i;
        }
        tom.src = 'resource/' + action + '/' + action + '_'+ i +'.jpg';
        i++;
        if(i > num) {
            clearInterval(timer);
        }
    },150);
    setTimeout(function(){
        oTalk.src = 'resource/sounds/' + action + '.m4a'; 
        oTalk.play();
    },150*soundStart);
}
// 多个声音
function sounds(soundSrc, soundStart){
    oTalk.src = 'resource/sounds/' + soundSrc + '.m4a';
    setTimeout(function(){
        oTalk.play();
    },150*soundStart);
}





