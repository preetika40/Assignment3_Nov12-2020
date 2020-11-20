"use strict";
exports.__esModule = true;
exports.Carousel = void 0;
var Carousel = /** @class */ (function () {
    function Carousel() {
        this.img = document.querySelectorAll(".feedback");
    }
    Carousel.prototype.showImage = function () {
        this.img[0].classList.toggle('show'); //automatically show first feedback on page load
    };
    Carousel.prototype.slideShow = function () {
        var _this = this;
        var n = 0;
        //show next feedback on button click
        document.querySelector('.next-btn').addEventListener('click', function () {
            if (n < (_this.img.length - 1)) {
                _this.img[n].classList.add('hide');
                _this.img[n].classList.remove('show');
                _this.img[n + 1].classList.add('show');
                _this.img[n + 1].classList.remove('hide');
                n++;
            }
            else if (n == _this.img.length - 1) {
                _this.img[n].classList.add('hide');
                _this.img[n].classList.remove('show');
                _this.img[0].classList.add('show');
                _this.img[0].classList.remove('hide');
                n = 0;
            }
        });
        //show previous feedback on button click
        document.querySelector('.previous-btn').addEventListener('click', function () {
            if (n > 0) {
                _this.img[n].classList.add('hide');
                _this.img[n].classList.remove('show');
                _this.img[n - 1].classList.add('show');
                _this.img[n - 1].classList.remove('hide');
                n--;
            }
            else if (n == 0) {
                _this.img[n].classList.add('hide');
                _this.img[n].classList.remove('show');
                _this.img[_this.img.length - 1].classList.add('show');
                _this.img[_this.img.length - 1].classList.remove('hide');
                n = _this.img.length - 1;
            }
        });
    };
    return Carousel;
}());
exports.Carousel = Carousel;
var carouselImg = new Carousel();
carouselImg.showImage();
carouselImg.slideShow();
