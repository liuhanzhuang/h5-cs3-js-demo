window.addEventListener('load', function() {
    var focus = document.querySelector('.focus');
    var arrowprev = document.querySelector('.arrow-prev');
    var arrownext = document.querySelector('.arrow-next');
    var focusWidth = focus.offsetWidth;
    focus.addEventListener('mouseenter', function() {
        arrowprev.style.display = 'block';
        arrownext.style.display = 'block';
    });
    focus.addEventListener('mouseleave', function() {
        arrowprev.style.display = 'none';
        arrownext.style.display = 'none';
    });

    // 小圆圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';

            var index = this.getAttribute('index');
            num = index;
            animate(ul, -index * focusWidth);
        });
    }
    ol.children[0].className = 'current';

    // 克隆第一张图片
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    //鼠标点击左右箭头进行切换轮播图图片
    var num = 0;
    var currentCircle = 0;
    var flag = true; //定义一个节流阀
    //右侧按钮点击事件
    arrownext.addEventListener('click', function() {
        if (flag) {
            // flag = false; //关闭节流阀
            //如果索引号到了最后那张图片（克隆的那张），接下来ul的坐标值应该置0
            num++;

            if (num == ul.children.length - 1) {
                ul.style.left = '0';
                num = 0;
            }
            animate(ul, -num * focusWidth, function() {
                console.log('执行了')
            });

            //拍她思想， 干掉所有人
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            if (num == ul.children.length - 1) {
                //如果索引号到了最后那张克隆的图片，第一个小圆点被选中
                ol.children[0].className = 'current';
                return;
            }
            //留下我自己
            ol.children[num].className = 'current';
        }

    });


    //左侧按钮点击事件
    arrowprev.addEventListener('click', function() {
        //如果索引号到了最后那张图片（克隆的那张），接下来ul的坐标值应该置0
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * focusWidth + 'px';
        }
        num--;
        animate(ul, -num * focusWidth);
        //拍她思想， 干掉所有人
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        if (num == ul.children.length - 1) {
            //如果索引号到了最后那张克隆的图片，第一个小圆点被选中
            ol.children[0].className = 'current';

        }
        //留下我自己
        ol.children[num].className = 'current';



    });


    //自动播放功能
    this.setInterval(function() {
        arrownext.click();
    }, 2500)

})