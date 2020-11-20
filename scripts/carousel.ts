export class Carousel  
{
    img: any=document.querySelectorAll(".feedback");

    constructor() {}
    
    showImage(): void 
    {
        this.img[0].classList.toggle('show');        //automatically show first feedback on page load
    }

    slideShow(): void{
        let n: number=0;

        //show next feedback on button click
        document.querySelector('.next-btn').addEventListener('click', () => 
        {
            if (n < (this.img.length-1))
            {
                this.img[n].classList.add('hide');
                this.img[n].classList.remove('show');
                this.img[n+1].classList.add('show');
                this.img[n+1].classList.remove('hide');
                n++;
            }

            else if (n == this.img.length-1)
            {
                this.img[n].classList.add('hide');
                this.img[n].classList.remove('show');
                this.img[0].classList.add('show'); 
                this.img[0].classList.remove('hide');
                n = 0;
            }
        })

        //show previous feedback on button click
        document.querySelector('.previous-btn').addEventListener('click', () => 
        {
            if (n >0)
            {
                this.img[n].classList.add('hide');
                this.img[n].classList.remove('show');
                this.img[n-1].classList.add('show');
                this.img[n-1].classList.remove('hide');
                n--;
            }

            else if (n == 0)
            {
                this.img[n].classList.add('hide');
                this.img[n].classList.remove('show');
                this.img[this.img.length-1].classList.add('show'); 
                this.img[this.img.length-1].classList.remove('hide');
                n = this.img.length-1;
            }
        })
    }
}

let carouselImg = new Carousel();
carouselImg.showImage();
carouselImg.slideShow();


    





