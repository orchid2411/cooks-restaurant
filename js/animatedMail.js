document.addEventListener("DOMContentLoaded", function () {
    var text = document.querySelectorAll('.animated-text');
    var bottom = document.querySelectorAll('.animated-bottom') 
    let blockIndex = 0;
    let botIndex = 0;

    window.addEventListener("scroll", function () {
        var x = pageYOffset;
        var y = window.innerWidth;
        // console.log(x)
        if (y > 1024) {
            if (x > 400) {
                text[blockIndex].classList.add('animated-from-left')
                blockIndex++;
                text[blockIndex].classList.add('animated-from-right')
                blockIndex++;
            }
            if (x > 960) {
                bottom[botIndex].classList.add('animated-from-left')
                botIndex++;
                bottom[botIndex].classList.add('animated-from-bottom')
                botIndex++;
                bottom[botIndex].classList.add('animated-from-top')
                botIndex++;
                bottom[botIndex].classList.add('animated-from-right')
                botIndex++;
            }
            if (x > 1440) {
                bottom[botIndex].classList.add('animated-from-top')
                botIndex++;
            }
            blockIndex = 0;
            botIndex = 0;
        }
        if ((y > 768) && (y <= 1024)) {
            if (x > 320) {
                text[blockIndex].classList.add('animated-from-left')
                blockIndex++;
            }
            if (x > 640) {
                text[blockIndex].classList.add('animated-from-right')
                blockIndex++;
            }
            if (x > 1200) {
                bottom[botIndex].classList.add('animated-from-left')
                botIndex++;
                bottom[botIndex].classList.add('animated-from-right')
                botIndex++;
            }
            if (x > 1600) {
                bottom[botIndex].classList.add('animated-from-right')
                botIndex++;
                bottom[botIndex].classList.add('animated-from-left')
                botIndex++;
            }
            if (x > 1440) {
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
            }
            if (x > 320) {
                text[blockIndex].classList.add('animated-from-right')
                blockIndex++;
            }
            if (x > 1040) {
                bottom[botIndex].classList.add('animated-from-top')
                botIndex++;
            }
            if (x > 1360) {
                bottom[botIndex].classList.add('animated-from-right')
                botIndex++;
            }
            if (x > 1760) {
                bottom[botIndex].classList.add('animated-from-bottom')
                botIndex++;
            }
            if (x > 2240) {
                bottom[botIndex].classList.add('animated-from-left')
                botIndex++;
            }
            if (x > 2480) {
                bottom[botIndex].classList.add('animated-from-top')
                botIndex++;
            }
            blockIndex = 0;
            botIndex = 0;
        }
    })
})