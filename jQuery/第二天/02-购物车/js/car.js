$(function() {
    //全选按钮  ：  如果点击全选按钮，所有商品的子按钮也将被选中
    $('.checkall').change(function() {
        $('.j-checkbox , .checkall').prop('checked', $(this).prop('checked'));
        if ($(this).prop('checked')) {
            $(".cart-item").addClass("check-cart-item");
        } else {
            $(".cart-item").removeClass("check-cart-item");
        }
    });

    //商品的子按钮
    $('.j-checkbox').change(function() {
            // 如果商品的子按钮选中的个数等于所有商品子按钮个数，表示所有商品被选中，全选按钮进入选中状态
            if ($('.j-checkbox:checked').length == $('.j-checkbox').length) {
                $('.checkall').prop('checked', true);
            } else {
                $('.checkall').prop('checked', false);
            }

            // if ($(this).prop('checked')) {
            //     $(this).parents(".cart-item").addClass("check-cart-item");
            // } else {
            //     $(this).parents(".cart-item").removeClass("check-cart-item");

            // }
            //当购物项的复选框被选中后，就对将购物项添加选中样式
            $(this).parents('.cart-item').toggleClass('check-cart-item');
        })
        //数量增加按钮 ， 如果
    $('.increment').click(function() {
        var num = $(this).siblings('.itxt').val();
        $(this).siblings('.itxt').val(++num);
        //修改小计金额
        var p = $(this).parent().parent().siblings('.p-price').html().substr(1);;
        // $(this).parent().parent().siblings('.p-sum').html('￥' + (p * num).toFixed(2));
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (p * num).toFixed(2)); // toFixed(2) 保留两位小数
        getSum();
    });
    //如果数量==1，减标签就更改样式为禁用状态，否则为正常状态
    $('.decrement').mouseenter(function() {
        var num = $(this).siblings('.itxt').val();
        if (num == 1) {
            $(this).css('cursor', 'not-allowed');
        } else {
            $(this).css('cursor', 'pointer');
        }
    });
    $('.decrement').click(function() {
        var num = $(this).siblings('.itxt').val();
        if (num == 1) {
            return false;
        }
        $(this).siblings('.itxt').val(--num);
        //修改小计金额
        var p = $(this).parent().parent().siblings('.p-price').html().substr(1);;
        // $(this).parent().parent().siblings('.p-sum').html('￥' + (p * num).toFixed(2));
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (p * num).toFixed(2));
        getSum();

    });

    $('.itxt').change(function() {
        var p = $(this).parent().parent().siblings('.p-price').html().substr(1);;
        var num = $(this).val();
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (p * num).toFixed(2));
        getSum();
    });

    getSum(); //页面一刷新，自动调用一次 求和

    function getSum() {
        var count = 0; //数量总计
        var sumMoney = 0.0; //小计
        $('.itxt').each(function(i, ele) {
            count += parseInt($(ele).val()); //遍历每个文本框的商品数量  ，求出总数量
        });
        $('.amount-sum em').text(count);
        $('.p-sum').each(function(i, ele) {
            var price = parseFloat($(ele).text().substr(1)); //遍历每个购物项的小计，去掉￥符号
            sumMoney += price; //求出总计
        });
        $('.price-sum em').text('￥' + sumMoney.toFixed(2));
    }

    //刪除当前的购物项
    $('.p-action a').click(function() {
        $(this).parents('.cart-item').remove();
        getSum();
    });

    //删除选中的商品
    $('.remove-batch').click(function() {
        // $('.j-checkbox:checked').parents('.cart-item').remove();
        $('.j-checkbox').each(function(i, ele) {
            if ($(ele).prop('checked')) {
                $(ele).parents('.cart-item').remove();
            }
        });
        getSum();
    });
    //清空购物车
    $('.clear-all').click(function() {
        $('.cart-item').remove();
        getSum();
    });
})