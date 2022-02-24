window.addEventListener('load', function() {
    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    var ol = focus.children[1];
    var focusWidth = focus.offsetWidth;
    var index = 0;
    var translatex = 0;

    //动态创建小圆点
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        ol.appendChild(li);
    }
    //默认第一个小圆点选中状态
    ol.children[0].className = 'current';
    //克隆第一张图片并且追加到最后一张
    var li = ul.children[0].cloneNode(true);
    ul.appendChild(li);
    //克隆最后一张图片并且追加到第一张
    var li = ul.children[2].cloneNode(true);
    ul.insertBefore(li, ul.children[0]);
    var timer;
    timer = setInterval(function() {
        index++;
        translatex = -index * focusWidth;
        ul.style.transform = 'translateX(' + translatex + 'px)';
        ul.style.transition = 'all .3s linear';
    }, 2000)
    ul.addEventListener('transitionend', function() {
        if (index >= ul.children.length - 2) {
            index = 0;
            ul.style.transition = 'none';
            translatex = -index * focusWidth;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else if (index < 0) {
            index = 2;
            ul.style.transition = 'none';
            translatex = -index * focusWidth;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }

        //移除current类
        ol.querySelector('.current').classList.remove('current');
        //当前的图片设置current类
        ol.children[index].classList.add('current');
    });

    var startx = 0;
    var movex = 0;
    ul.addEventListener('touchstart', function(e) {
        startx = e.targetTouches[0].pageX;
        clearInterval(timer); //手指按住图片的时候清除计时器
    });
    ul.addEventListener('touchmove', function(e) {
        movex = e.targetTouches[0].pageX - startx;
        var translatex = -index * focusWidth + movex;
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translatex + 'px)';
    });
    ul.addEventListener('touchend', function() {
            clearInterval(timer);
            timer = setInterval(function(e) {
                index++;
                translatex = -index * focusWidth;
                ul.style.transform = 'translateX(' + translatex + 'px)';
                ul.style.transition = 'all .3s linear';
            }, 2000)
            if (Math.abs(movex) > 50) {
                if (movex > 0) {
                    index--;
                } else {
                    index++;
                }
                var translatex = -index * focusWidth;
                ul.style.transform = 'translateX(' + translatex + 'px)';
                ul.style.transition = 'all .3s linear';
            } else {
                var translatex = -index * focusWidth;
                ul.style.transform = 'translateX(' + translatex + 'px)';
                ul.style.transition = 'all .2s linear';
            }


        })
        //goback模块
    var goback = document.querySelector('.goBack');
    var nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= nav.offsetTop - 50) {
            goback.style.display = 'block';
        } else {
            goback.style.display = 'none';
        }

    });
    goback.addEventListener('click', function() {
        window.scroll(0, 0);
    })
});