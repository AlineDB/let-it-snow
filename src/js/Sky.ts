import {settings} from "./settings";
import {Snowflake} from "./Snowflake";

export const canvas = {
    init(){
        this.canvas = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.snowflake = [];
        this.resizeCanvas()
        this.addEventListeners();
       // this.generateGradient();
        this.draw();
        this.snow();
        this.loadSnow();
        return this;
    },
    /*

   loadSnow() {
       for (let i = 0; i < settings.snowflake.maxCount; i++) {
           this.snowflake.push(new Snowflake(this.ctx, this.canvas));
       }
   },
   generateGradient(){
       this.gradient = this.ctx.createLinearGradient(0,0, this.canvas.width, this.canvas.height);
       this.gradient.addColorStop(0, settings.sky.gradient[0]);
       this.gradient.addColorStop(1, settings.sky.gradient[1]);
   },*/
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.draw();
    },
    draw(){
        this.ctx.fillStyle = settings.sky.gradient;
        this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height);
        this.ctx.fill;
        return this;
    },
    snow(){
        this.ctx.beginPath();
        this.ctx.fillStyle = 'white';
        this.ctx.arc(50, 50, 50, 0, 2 * Math.PI);
        this.ctx.fill();
    },
    addEventListeners(){
        window.addEventListener('resize',()=> {
            this.resizeCanvas();
        });
    },

};


canvas.init();