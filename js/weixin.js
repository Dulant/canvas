/**
 * Created by dell on 2017/3/13.
 */
var stage = new Konva.Stage({
    container:"container",
    width:window.innerWidth,
    height:window.innerHeight
});
function addStageEvent() {
    var startY = 0;
    var endY = 0;
    stage.on("contentMousedown contentTouchstart",function (e) {
        // content表示点击空白区域的时候触发，contentTouchstar表示兼容移动端的
        console.log(e);
        if(e.type == 'contentMousedown'){
            // console.log(e.evt.screenX+"  "+e.evt.screenY);
            startY = e.evt.screenY;
        }else{
            //  console.log(e.evt.touches[0].screenX + ' ' + e.evt.touches[0].screenY);
            startY = e.evt.touches[0].screenY;
        }
    });

    stage.on("contentMousemove contentTouchmove",function (e) {
        // content表示点击空白区域的时候触发，contentTouchstar表示兼容移动端的
        console.log(e);
        if(e.type == 'contentMousedown'){
            // console.log(e.evt.screenX+"  "+e.evt.screenY);
            endY = e.evt.screenY;
        }else{
            //  console.log(e.evt.touches[0].screenX + ' ' + e.evt.touches[0].screenY);
            endY = e.evt.touches[0].screenY;
        }
    });

    stage.on("contentMousemove contentTouchmove",function (e) {
        if(endY > startY){
            // 下滑动，执行上一个场景的play();
        }else{
            // 执行下一个场景的play();
        }
    });
}
//给舞台添加滑动事件
addStageEvent();
