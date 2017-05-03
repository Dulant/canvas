/**
 * Created by dell on 2017/3/9.
 */
/*1、封装属性：x,y,w,h,fillstyle,strokeStyle,rotation,opacity
* 2、render;
* */
function ItcastRect(option) {
    this._init(option)
}
ItcastRect.prototype = {
    _init : function (option) {
        this.x =  option.x || 0;
        this.y = option.y || 0;
        this.w = option.w || 0;
        this.h = option.h || 0;
        this.scaleX = option.scaleX;
        this.scaleY = option.scaleY;
        this.rotation = option.rotation || 0;
        this.opacity = option.opacity === 0 ? 0 :option.opacity || 1;
        this.fillStyle = option.fillStyle || "red";
        this.strokeStyle = option.strokeStyle || "blue";
    },
    render : function (ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.translate(this.x,this.y);
        ctx.rect(0, 0 ,this.w,this.h );
        ctx.rotate(this.rotation * Math.PI/180);
        ctx.globalAlpha = this.opacity;
        ctx.scale(this.scaleX , this.scaleY);
        ctx.fillStyle = this.fillStyle;
        ctx.fill();
        ctx.strokeStyle = this.strokeStyle;
        ctx.stroke();
        ctx.restore();
    }
}
;