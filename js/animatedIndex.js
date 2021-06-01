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
            if (x > 100) {
                text[blockIndex].classList.add('animated-from-right');
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 500) {
                text[blockIndex].classList.add('animated-from-left');
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 1000) {
                bottom[botIndex].classList.add('animated-from-bottom')
                botIndex++;
            }
            if (x > 1300) {
                text[blockIndex].classList.add('animated-from-right');
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 1600) {
                text[blockIndex].classList.add('animated-from-left');
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 2070) {
                bottom[botIndex].classList.add('animated-from-left')
                botIndex++;
                bottom[botIndex].classList.add('animated-from-bottom')
                botIndex++;
                bottom[botIndex].classList.add('animated-from-top')
                botIndex++;
                bottom[botIndex].classList.add('animated-from-right')
                botIndex++;
            }
            if (x > 2480) {
                bottom[botIndex].classList.add('animated-from-top')
                botIndex++;
            }
            blockIndex = 0;
            botIndex = 0;
        }
        
        if ((y > 768) && (y <= 1024)) {
            if (x > 200) {
                text[blockIndex].classList.add('animated-from-right');
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 500) {
                text[blockIndex].classList.add('animated-from-left');
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 850) {
                bottom[botIndex].classList.add('animated-from-bottom')
                botIndex++;
            }
            if (x > 1100) {
                text[blockIndex].classList.add('animated-from-right');
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 1400) {
                text[blockIndex].classList.add('animated-from-left');
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 1680) {
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
            if (x > 2600) {
                bottom[botIndex].classList.add('animated-from-top')
                botIndex++;
            }
            blockIndex = 0;
            botIndex = 0;
        }

        if (y <= 768) {
            if (x > 140) {
                text[blockIndex].classList.add('animated-from-right');
            }
            if (x > 350) {
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 600) {
                img[blockIndex].classList.add('animated-img-appear');
            }
            if (x > 840) {
                text[blockIndex].classList.add('animated-from-left');
                blockIndex++;
            }
            if (x > 900) {
                bottom[botIndex].classList.add('animated-from-bottom')
                botIndex++;
            }
            if (x > 1150) {
                text[blockIndex].classList.add('animated-from-right');
            }
            if (x > 1400) {
                img[blockIndex].classList.add('animated-img-appear');
                blockIndex++;
            }
            if (x > 1580) {
                img[blockIndex].classList.add('animated-img-appear');
            }
            if (x > 1770) {
                text[blockIndex].classList.add('animated-from-left');
                blockIndex++;
            }
            if (x > 2000) {
                bottom[botIndex].classList.add('animated-from-top')
                botIndex++;
            }
            if (x > 2400) {
                bottom[botIndex].classList.add('animated-from-right')
                botIndex++;
            }
            if (x > 2800) {
                bottom[botIndex].classList.add('animated-from-bottom')
                botIndex++;
            }
            if (x > 3200) {
                bottom[botIndex].classList.add('animated-from-left')
                botIndex++;
            }
            if (x > 3440) {
                bottom[botIndex].classList.add('animated-from-top')
                botIndex++;
            }
            blockIndex = 0;
            botIndex = 0;
        }
    })
})