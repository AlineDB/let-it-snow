import {random, settings} from "./settings";
import  {canvas} from "./Sky";
import {animation} from "./Animation";
import {Snowflake} from "./Snowflake";


export const app = {
    init(){
        this.snowflake =[];
        this.canvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.mouse = {x:0,y:0};
        this.ctx = this.canvasElement.getContext('2d');
        this.canvas = canvas.init();
        this.loadSnow();
        this.animation = animation.init(this.canvas, this.bubbles);
    },
    loadSnow(){
        for (let i = 0; i < settings.snowflake.maxCount; i++) {
            this.snowflake.push(new Snowflake(this.ctx, this.canvasElement));
        }

    }
};

app.init();






