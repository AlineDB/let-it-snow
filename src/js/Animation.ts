import {Snowflake} from "./Snowflake";
import  {app} from "./Main";



export const animation = {
    //@ts-ignore
    init(canvas, snowflak) {

        this.snowflake = snowflak;
        this.canvas = canvas;
        this.animate();
        return this;
    },
    animate() {
        //faire ...

        this.canvas.draw();
        this.snowflake.forEach((snowflak: Snowflake) => {
            snowflak.update();
        });
        requestAnimationFrame(() => {
            this.animate();
        })
    },
}