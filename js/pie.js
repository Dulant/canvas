function PieChart(option) {
    this._init(option);
}
PieChart.prototype = {
    _init : function (option) {
        this.x = option.x || 0.;
        this.y = option.y || 0;
        this.r = option.r || 0;
        this.data = option.data || [];
        // 饼状图所有的东西
        this.group = new Konva.Group({
            x: this.x,
            y: this.y
        });
        /*所有扇形的组*/
        this.wedgeGroup = new Konva.Group({
            x:0,
            y:0
        });
        /*所有文字的组*/
        this.textGroup = new Konva.Group({
            x:0,
            y:0
        });
        this.group.add(this.wedgeGroup);
        this.group.add(this.textGroup);
        var self = this;
        var tempAngel = -90;
        // 绘制所有的楔形
        this.data.forEach(function (item,index) {
            var angle= 360*item.value;
            var wedge = new Konva.Wedge({
                x: 0,
                y: 0,
                angle: 360*item.value,
                radius: self.r,
                fill: item.color,
                rotation:tempAngel
            });
            self.wedgeGroup.add(wedge);
            var textAngle = tempAngel + 1/2 * angle;
            /*文字部分*/
            var text = new Konva.Text({
                x:(self.r+20)*Math.cos(textAngle*Math.PI/180),
                y:(self.r+20)*Math.sin(textAngle*Math.PI/180),
                text: item.value*100+"%",
                fill: item.color
            });
            if(textAngle>=90&&textAngle<=270){
                text.x(text.x()-text.width());
            }
            self.textGroup.add(text);
            tempAngel +=angle;
        });
        // 绘制文字
            var cir = new Konva.Circle({
               x: 0,
               y: 0,
               radius:this.r+10,
               stroke: "#ccc",
               strokeWidth: 2
            });
        this.group.add(cir);
        // 绘制圆环的线
        this._animateIndex = 0;
    },
    playAnimate:function () {
        var self = this;
        // 根据索引显示动画
        // 把所有扇区角度设置为0
        if(this._animateIndex == 0){
            this.wedgeGroup.getChildren().each(function (item,index) {
                item.angle(0);
            })
        }
        // 展示当前索引对应的动画
        var item = this.wedgeGroup.getChildren()[this._animateIndex];
        item.to({
            angle:this.data[this._animateIndex].value*360,
            duration:this.data[this._animateIndex].value*2,
            onFinish:function () {
                self._animateIndex++;
                if( self._animateIndex >=self.data.length){
                    self._animateIndex = 0; //让他的索引清0
                    return; //会把整个递归执行完成
                }
                self.playAnimate();
            }
        })
    },
        addToGroupOrLayer:function (arg) {
            arg.add(this.group);
        }
};