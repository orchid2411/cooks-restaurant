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
                img[blockIndex].classList.add('animated-from-left');
                blockIndex++;
                img[blockIndex].classList.add('animated-from-top');
                blockIndex++;
                img[blockIndex].classList.add('animated-from-right');
                blockIndex++;
            }
            if (x > 320) {
                img[blockIndex].classList.add('animated-from-left');
                blockIndex++;
                img[blockIndex].classList.add('animated-from-bottom');
                blockIndex++;
                img[blockIndex].classList.add('animated-from-right');
                blockIndex++;
            }
            if (x > 720) {
                text[0].classList.add('animated-from-left');
            }
            if (x > 800) {
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 960) {
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 1360) {
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
                img[blockIndex].classList.add('animated-from-left');
                blockIndex++;
                img[blockIndex].classList.add('animated-from-right');
                blockIndex++;
            }
            if (x > 220) {
                img[blockIndex].classList.add('animated-from-left');
                blockIndex++;
                img[blockIndex].classList.add('animated-from-right');
                blockIndex++;
            }
            if (x > 560) {
                img[blockIndex].classList.add('animated-from-left');
                blockIndex++;
                img[blockIndex].classList.add('animated-from-right');
                blockIndex++;
            }
            if (x > 960) {
                text[0].classList.add('animated-from-left');
            }
            if (x > 1040) {
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 1200) {
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 1360) {
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 1680) {
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 2080) {
                bottom[botIndex].classList.add('animated-from-left')
                botIndex++;
                bottom[botIndex].classList.add('animated-from-right')
                botIndex++;
            }
            if (x > 2480) {
                bottom[botIndex].classList.add('animated-from-right')
                botIndex++;
                bottom[botIndex].classList.add('animated-from-left')
                botIndex++;
            }
            if (x > 2960) {
                bottom[botIndex].classList.add('animated-from-top')
                botIndex++;
            }
            blockIndex = 0;
            botIndex = 0;
        }
        if (y <=768) {
            if (x > 0) {
                img[blockIndex].classList.add('animated-from-left');
                blockIndex++;
            }
            if (x > 80) {
                img[blockIndex].classList.add('animated-from-right');
                blockIndex++;
            }
            if (x > 400) {
                img[blockIndex].classList.add('animated-from-left');
                blockIndex++;
            }
            if (x > 720) {
                img[blockIndex].classList.add('animated-from-right');
                blockIndex++;
            }
            if (x > 1120) {
                img[blockIndex].classList.add('animated-from-left');
                blockIndex++;
            }
            if (x > 1440) {
                img[blockIndex].classList.add('animated-from-right');
                blockIndex++;
            }
            if (x > 1840) {
                text[0].classList.add('animated-from-left');
            }
            if (x > 1920) {
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 2080) {
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 2240) {
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 2480) {
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 2640) {
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 2800) {
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 3120) {
                bottom[botIndex].classList.add('animated-from-top')
                botIndex++;
            }
            if (x > 3520) {
                bottom[botIndex].classList.add('animated-from-right')
                botIndex++;
            }
            if (x > 3920) {
                bottom[botIndex].classList.add('animated-from-bottom')
                botIndex++;
            }
            if (x > 4320) {
                bottom[botIndex].classList.add('animated-from-left')
                botIndex++;
            }
            if (x > 4560) {
                bottom[botIndex].classList.add('animated-from-top')
                botIndex++;
            }
            blockIndex = 0;
            botIndex = 0;
        }
    })
})