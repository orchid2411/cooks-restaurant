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
                text[blockIndex].classList.add('animated-from-left')
                blockIndex++;
                text[blockIndex].classList.add('animated-from-right')
                blockIndex++;
            }
            if (x > 240) {
                text[blockIndex].classList.add('animated-from-bottom')
                blockIndex++;
            }
            if (x > 400) {
                text[blockIndex].classList.add('animated-from-bottom')
                blockIndex++;
            }
            if (x > 480) {
                text[blockIndex].classList.add('animated-from-bottom')
                blockIndex++;
            }
            if (x > 560) {
                text[blockIndex].classList.add('animated-from-bottom')
                blockIndex++;
            }
            if (x > 720) {
                text[blockIndex].classList.add('animated-from-bottom')
                blockIndex++;
            }
            if (x > 880) {
                text[blockIndex].classList.add('animated-from-bottom')
                blockIndex++;
            }
            if (x > 1520) {
                bottom[botIndex].classList.add('animated-from-left')
                botIndex++;
                bottom[botIndex].classList.add('animated-from-bottom')
                botIndex++;
                bottom[botIndex].classList.add('animated-from-top')
                botIndex++;
                bottom[botIndex].classList.add('animated-from-right')
                botIndex++;
            }
            if (x > 2000) {
                bottom[botIndex].classList.add('animated-from-top')
                botIndex++;
            }
            blockIndex = 0;
            botIndex = 0;
        }
        if ((y > 768) && (y <= 1024)) {
            if (x > 0) {
                text[blockIndex].classList.add('animated-from-left')
                blockIndex++;
            }
            if (x > 400) {
                text[blockIndex].classList.add('animated-from-right')
                blockIndex++;
            }
            if (x > 640) {
                text[blockIndex].classList.add('animated-from-bottom')
                blockIndex++;
            }
            if (x > 800) {
                text[blockIndex].classList.add('animated-from-bottom')
                blockIndex++;
            }
            if (x > 880) {
                text[blockIndex].classList.add('animated-from-bottom')
                blockIndex++;
            }
            if (x > 960) {
                text[blockIndex].classList.add('animated-from-bottom')
                blockIndex++;
            }
            if (x > 1120) {
                text[blockIndex].classList.add('animated-from-bottom')
                blockIndex++;
            }
            if (x > 1280) {
                text[blockIndex].classList.add('animated-from-bottom')
                blockIndex++;
            }
            if (x > 2080) {
                bottom[botIndex].classList.add('animated-from-left')
                botIndex++;
                bottom[botIndex].classList.add('animated-from-right')
                botIndex++;
            }
            if (x > 2560) {
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
                text[blockIndex].classList.add('animated-from-left')
                blockIndex++;
                text[blockIndex].classList.add('animated-from-right')
                blockIndex++;
            }
            if (x > 480) {
                text[blockIndex].classList.add('animated-from-bottom')
                blockIndex++;
            }
            if (x > 720) {
                text[blockIndex].classList.add('animated-from-bottom')
                blockIndex++;
            }
            if (x > 800) {
                text[blockIndex].classList.add('animated-from-bottom')
                blockIndex++;
            }
            if (x > 1040) {
                text[blockIndex].classList.add('animated-from-bottom')
                blockIndex++;
            }
            if (x > 1280) {
                text[blockIndex].classList.add('animated-from-bottom')
                blockIndex++;
            }
            if (x > 1600) {
                text[blockIndex].classList.add('animated-from-bottom')
                blockIndex++;
            }
            if (x > 2320) {
                bottom[botIndex].classList.add('animated-from-top')
                botIndex++;
            }
            if (x > 2720) {
                bottom[botIndex].classList.add('animated-from-right')
                botIndex++;
            }
            if (x > 3120) {
                bottom[botIndex].classList.add('animated-from-bottom')
                botIndex++;
            }
            if (x > 3520) {
                bottom[botIndex].classList.add('animated-from-left')
                botIndex++;
            }
            if (x > 3760) {
                bottom[botIndex].classList.add('animated-from-top')
                botIndex++;
            }
            blockIndex = 0;
            botIndex = 0;
        }
    })
})