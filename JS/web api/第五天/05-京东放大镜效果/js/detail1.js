window.addEventListener('load', function() {
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    var preview_img = document.querySelector('.preview_img');
    preview_img.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    preview_img.addEventListener('mousemove', function(e) {
        var x = e.pageX - this.offsetLeft; //鼠标的水平位置
        var y = e.pageY - this.offsetTop; //鼠标的垂直位置
        var maskX = x - mask.offsetWidth / 2; //遮罩的水平位置
        var maskY = y - mask.offsetHeight / 2; //遮罩的垂直位置
        var maskMaxLeft = preview_img.offsetWidth - mask.offsetWidth; //遮罩可移动的最大水平位置
        var maskMaxTop = preview_img.offsetHeight - mask.offsetHeight; //遮罩可移动的最大垂直位置
        if (maskX < 0) {
            maskX = 0;
        } else if (maskX > maskMaxLeft) {
            maskX = maskMaxLeft;
        }
        if (maskY < 0) {
            maskY = 0;
        } else if (maskY > maskMaxTop) {
            maskY = maskMaxTop;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        //开始处理大图片
        // 大图片移动距离=遮罩层移动距离*大图片最大移动距离/遮罩层最大移动距离
        var bigImg = document.querySelector('.bigImg');
        var big = document.querySelector('.big');
        var bigImgMaxLeft = bigImg.offsetWidth - big.offsetWidth;
        var bigImgMaxTOP = bigImg.offsetHeight - big.offsetHeight;
        var bigImgX = maskX * bigImgMaxLeft / maskMaxLeft;
        var bigImgY = maskY * bigImgMaxTOP / maskMaxTop;
        bigImg.style.left = -bigImgX + 'px';
        bigImg.style.top = -bigImgY + 'px';
    })
})