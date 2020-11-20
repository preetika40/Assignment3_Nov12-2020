export class Canvas{
    c:any[]=[document.querySelector(".img1"),document.querySelector(".img2"),document.querySelector(".img3")];
    constructor() { } 

    showImages(): void
    {
        let ctx: any;

        //display Image1 using canvas
        ctx = this.c[0].getContext("2d");
        ctx.beginPath();
        ctx.arc(75, 60, 30, 0, 2 * Math.PI);
        ctx.moveTo(94, 71);
        ctx.arc(75, 60, 23, 0.5, 2.5, "false");
        ctx.moveTo(56, 75);
        ctx.lineTo(62, 55);
        ctx.lineTo(72, 70);
        ctx.lineTo(80, 45);
        ctx.lineTo(94, 71);
        ctx.strokeStyle = "#FEFEFE";
        ctx.stroke();
        ctx.fillStyle = "#FEFEFE";
        ctx.fill(); 

        //display Image2 using canvas
        ctx = this.c[1].getContext("2d");
        ctx.beginPath();
        ctx.arc(75, 60, 26, 0, 5);
        ctx.moveTo(95, 60);
        ctx.strokeStyle = "#FEFEFE";
        ctx.lineWidth = 8;
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(65,55);
        ctx.lineTo(75,65);
        ctx.lineTo(100,40);
        ctx.lineWidth = 8;
        ctx.strokeStyle = '#FEFEFE';
        ctx.stroke();

        //display Image3 using canvas
        ctx = this.c[2].getContext("2d");
        ctx.beginPath();
        ctx.arc(75, 60, 30, 0, 2 * Math.PI);
        ctx.fillStyle = "#FEFEFE";
        ctx.fill();
        ctx.closePath();
        ctx.strokeStyle = "#FEFEFE";
        ctx.stroke();
        ctx.beginPath()
        ctx.arc(75, 60, 23, 0, 2 * Math.PI);
        ctx.fillStyle = "#17A599";
        ctx.fill();
        ctx.strokeStyle = "#17A599";
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(66, 48);
        ctx.arc(75, 60, 15, 4, 2);
        ctx.lineTo(75, 60);
        ctx.strokeStyle = "#FEFEFE";
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = "#FEFEFE";
        ctx.fill();
        ctx.strokeStyle = "#FEFEFE";
        ctx.stroke();
    } 

}

let canvasImg= new Canvas();
canvasImg.showImages();