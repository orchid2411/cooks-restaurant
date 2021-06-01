document.addEventListener("DOMContentLoaded", function () {
    var text = document.querySelectorAll('.animated-text');
    var img = document.querySelectorAll('.animated-img');
    var bottom = document.querySelectorAll('.animated-bottom') 
    let blockIndex = 0;
    let botIndex = 0;

    window.addEventListener("scroll", function () {
        var x = pageYOffset;
        var y = window.innerWidth;
        // console.log(x)
        if (y > 1024) {
            if (x > 0) {
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 600) {
                text[0].classList.add('animated-from-left');
            }
            if (x > 720) {
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 1200) {
                bottom[botIndex].classList.add('animated-from-left')
                botIndex++;
                bottom[botIndex].classList.add('animated-from-bottom')
                botIndex++;
                bottom[botIndex].classList.add('animated-from-top')
                botIndex++;
                bottom[botIndex].classList.add('animated-from-right')
                botIndex++;
            }
            if (x > 1760) {
                bottom[botIndex].classList.add('animated-from-top')
                botIndex++;
            }
            blockIndex = 0;
            botIndex = 0;
        }
        if ((y > 768) && (y <= 1024)) {
            if (x > 0) {
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 470) {
                text[0].classList.add('animated-from-left');
            }
            if (x > 1040) {
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 1760) {
                bottom[botIndex].classList.add('animated-from-left')
                botIndex++;
                bottom[botIndex].classList.add('animated-from-right')
                botIndex++;
            }
            if (x > 2160) {
                bottom[botIndex].classList.add('animated-from-right')
                botIndex++;
                bottom[botIndex].classList.add('animated-from-left')
                botIndex++;
            }
            if (x > 2640) {
                bottom[botIndex].classList.add('animated-from-top')
                botIndex++;
            }
            blockIndex = 0;
            botIndex = 0;
        }
        if (y <=768) {
            if (x > 0) {
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 300) {
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 860) {
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 1500) {
                text[0].classList.add('animated-from-left');
            }
            if (x > 2240) {
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 2560) {
                bottom[botIndex].classList.add('animated-from-top')
                botIndex++;
            }
            if (x > 2960) {
                bottom[botIndex].classList.add('animated-from-right')
                botIndex++;
            }
            if (x > 3360) {
                bottom[botIndex].classList.add('animated-from-bottom')
                botIndex++;
            }
            if (x > 3760) {
                bottom[botIndex].classList.add('animated-from-left')
                botIndex++;
            }
            if (x > 4000) {
                bottom[botIndex].classList.add('animated-from-top')
                botIndex++;
            }
            blockIndex = 0;
            botIndex = 0;
        }
    })
})