import {settings} from "./settings";
import {random} from "./settings";
import {app} from "./Main";

export class Snowflake {
    private radius: number;
    private color: string;
    private position: { x: number, y: number };
    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
    private opacity: number;
    private speed: {x:number, y:number};


    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.generate();
    }

    generate() {
        this.opacity = Math.random();
        this.speed = {x:random(settings.snowflake.speed.x.min,settings.snowflake.speed.x.max),y:random(settings.snowflake.speed.y.min,settings.snowflake.speed.y.max)};
        this.radius = random(settings.snowflake.radius.min, settings.snowflake.radius.max);
        this.position = {
            x: random(this.radius, window.innerWidth - this.radius),
            y: random(window.innerHeight * 1.5, window.innerHeight + this.radius * 2)
        };
        this.color = settings.snowflake.colors;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.globalAlpha = this.opacity;
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.globalAlpha = 1;//opacité
    }
    update() {
        if (this.position.y <= -this.radius) {
            this.generate();
        }
        this.position.y -= this.speed.y;
        this.position.x += this.speed.x;
        this.draw();
    }
}
