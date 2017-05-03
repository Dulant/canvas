function Sprite(option) {
    this._init(option);
}
Sprite.prototype={
    _init:function (option) {
        this.imgSrc = option.imgSrc;
        this._dirIndex = 0;
        /*this._frameIndex = 0;*/
        this.x = option.x === 0 ? 0 : (option.x || 10);
        this.y = option.y === 0 ? 0 :(option.y || 10);
        this.w = option.w || 40;
        this.h = option.h || 65;
        this.fps = option.fps || 10;
        this.originW = option.originW || 40;
        this.originH = option.originH || 65;
    },
   render: function (ctx) {
       var img = new Image();
       img.src = this.imgSrc;
       var self = this;
       img.onload = function () {
           var frameIndex = 0;
           setInterval(function () {
               ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
               ctx.drawImage(img,
                   self.originW*frameIndex,
                   self.originH*self._dirIndex,
                   self.originW,
                   self.originH,
                   self.x,
                   self.y,
                   self.w,
                   self.h
               );
                frameIndex++;
               frameIndex %= 4;
           },1000/self.fps);
       }
   },
    changeDir:function (dir) {
        if( dir == 'left' ) {
            this._dirIndex = 1;
        }

        if( dir == 'right' ) {
            this._dirIndex = 2;
        }


        if( dir == 'up' ) {
            this._dirIndex = 3;
        }

        if( dir == 'down' ) {
            this._dirIndex = 0;
        }
    }
};