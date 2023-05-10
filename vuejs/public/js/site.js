jQuery(function($) {
    var adminbarHeight = $('#wpadminbar').length > 0 ? $('#wpadminbar').height() : 0;
    var siteheaderHeight = $('.site-header').length > 0 ? $('.site-header').height() : 0;
    $(window).resize(function() {
        adminbarHeight = $('#wpadminbar').length > 0 ? $('#wpadminbar').height() : 0;
        siteheaderHeight = $('.site-header').length > 0 ? $('.site-header').height() : 0;
    });
    $('.site-nav-toggler').on('click', function() {
        if ($('body').hasClass('open-site-nav')) {
            $('body').removeClass('open-site-nav').css('overflow', '');
            $('.site-overlay').remove();
        } else {
            $('body').addClass('open-site-nav').css('overflow', 'hidden');
            $('.site-nav').css('top', adminbarHeight);
            $('.site-nav').after('<div class="site-overlay"></div>');
        }
    });
    $('body').on('click', '.site-nav-closer, .site-overlay', function(e) {
        e.stopPropagation();
        $('body').removeClass('open-site-nav').css('overflow', '');
        $('.site-overlay').remove();
    });
    $('.site-nav li.menu-item-has-children').on('click', function(e) {
        e.stopPropagation();
        $(this).siblings().children('.sub-menu').slideUp(300);
        $(this).toggleClass('active').children('.sub-menu').slideToggle(300);
    });
    $('.site-nav a').on('click', function(e) {
        e.stopPropagation();
    });
    if ($('.table-of-contents').length > 0) {
        $('.entry-content h2, .entry-content h3').each(function() {
            $(this).attr('id', convertToSlug($(this).text()));
            if ($(this).is('h2')) {
                $('.table-of-contents .links').append('<a class="d-block mb-2" href="#' + convertToSlug($(this).text()) + '">' + $(this).text() + '</a>');
            } else if ($(this).is('h3')) {
                $('.table-of-contents .links').append('<a class="d-block ml-3 mb-2" href="#' + convertToSlug($(this).text()) + '">' + $(this).text() + '</a>');
            }
        });
    }
    $('.table-of-contents a').on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        location.hash = hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top - adminbarHeight - siteheaderHeight
        }, 0);
    });
    if (location.hash) {
        var hash = location.hash;
        if ($('.table-of-contents a[href="' + hash + '"]').length > 0) {
            $('.tab-nav a').removeClass('active');
            $('.tab-pane').removeClass('active show');
            var id = $(hash).parents('.tab-pane').attr('id');
            $('a[href="#' + id + '"]').trigger('click');
            setTimeout(function() {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - adminbarHeight - siteheaderHeight
                }, 300);
            }, 2000);
        }
    }
    $('.schema-faq-section').on('click', function() {
        $('.schema-faq-section.active').find('.schema-faq-answer').slideUp(100);
        if ($(this).hasClass('active')) {
            $('.schema-faq-section.active').removeClass('active');
            $(this).find('.schema-faq-answer').slideUp(100);
        } else {
            $('.schema-faq-section.active').removeClass('active');
            $(this).addClass('active');
            $(this).find('.schema-faq-answer').slideDown(100);
        }
    });
    $('.comment .reply').on('click', function() {
        $('.form-comment').find('input[name="parent"]').remove();
        $('.form-comment').prepend('<input type="hidden" name="parent" value="' + $(this).data('parent') + '"/>');
        $('.form-comment').find('[name="comment"]').focus();
        $('html, body').animate({
            scrollTop: $('.form-comment').offset().top - adminbarHeight - siteheaderHeight
        }, 600);
    });
    if ($('body[data-post-id]').length > 0) {
        $.ajax({
            type: 'POST',
            url: ajax.ajax_url,
            cache: false,
            data: {
                'action': 'k_update_post_views',
                'post_id': $('body[data-post-id]').data('post-id')
            }
        });
    }
    if ($('#download-loading').length > 0) {}
});

function convertToSlug(Text) {
    return Text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
}