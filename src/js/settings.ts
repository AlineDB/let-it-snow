
export const settings = {
    sky: {
        gradient: ["hsl(219,93%,11%)", "hsl(219,100%,19%)"]
    },
    snowflake: {
        radius: {min: 2, max: 12},
        opacity: {min: 0.5, max: 0.9},
        speed: {x:{min: 1, max: 4}, y:{min: 1, max: 6} },
        colors: 'white',
        maxCount: 1,
    }
}

export function random(min:number, max:number, ceil:boolean = true){
    if(ceil){
        return Math.ceil(min + Math.random() * (max-min));
    }
    return Math.floor(min + Math.random() * (max-min));
};