// @codekit-prepend "/vendor/hammer-2.0.8.js";

$(document).ready(function() {
  
  // 初始化滾動交互
  function initScrollInteraction() {
    var canScroll = true, scrollController = null;
    $(document).on('mousewheel DOMMouseScroll', function(e) {
      if (!$('.outer-nav').hasClass('is-vis')) {
        e.preventDefault();
        handleScroll(e, canScroll, scrollController);
      }
    });
  }

  function handleScroll(e, canScroll, scrollController) {
    var delta = (e.originalEvent.wheelDelta) ? -e.originalEvent.wheelDelta : e.originalEvent.detail * 20;
    if (Math.abs(delta) > 50 && canScroll) {
      canScroll = false;
      clearTimeout(scrollController);
      scrollController = setTimeout(() => { canScroll = true; }, 800);
      updateHelper(delta > 0 ? 1 : -1);
    }
  }

  // 初始化導航交互
  function initNavigationInteraction() {
    $('.side-nav li, .outer-nav li').click(function() {
      if (!$(this).hasClass('is-active')) {
        var $this = $(this),
            curActive = $this.parent().find('.is-active'),
            curPos = $this.parent().children().index(curActive),
            nextPos = $this.parent().children().index($this),
            lastItem = $(this).parent().children().length - 1;
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }
    });

    $('.cta').click(function() {
      var curActive = $('.side-nav').find('.is-active'),
          curPos = $('.side-nav').children().index(curActive),
          lastItem = $('.side-nav').children().length - 1;
      updateNavs(lastItem);
      updateContent(curPos, lastItem, lastItem);
    });
  }

  // 更新導航狀態
  function updateNavs(nextPos) {
    $('.side-nav, .outer-nav').children().removeClass('is-active');
    $('.side-nav').children().eq(nextPos).addClass('is-active');
    $('.outer-nav').children().eq(nextPos).addClass('is-active');
  }

  // 更新主要內容
  function updateContent(curPos, nextPos, lastItem) {
    $('.main-content').children().removeClass('section--is-active');
    $('.main-content').children().eq(nextPos).addClass('section--is-active');
    $('.main-content .section').children().removeClass('section--next section--prev');
    if (curPos < nextPos) {
      $('.main-content').children().eq(curPos).children().addClass('section--next');
    } else {
      $('.main-content').children().eq(curPos).children().addClass('section--prev');
    }
    if (nextPos !== 0 && nextPos !== lastItem) {
      $('.header--cta').addClass('is-active');
    } else {
      $('.header--cta').removeClass('is-active');
    }
  }

  // 初始化 Swiper
  function initSwiper(container, options) {
    return new Swiper(container, {
      direction: "horizontal",
      effect: "slide",
      parallax: true,
      speed: 1600,
      rtl: true,
      loop: true,
      ...options
    });
  }

  function setupSwipers() {
    initSwiper(".swiper-container-h", {
      autoplay: { delay: 10000, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination", type: "progressbar" },
    });

    initSwiper(".swiper-container-h1", {
      autoplay: false,
      pagination: { el: ".swiper-pagination", type: "bullets", clickable: true },
    });
  }

  // 為觸屏設備設置手勢支持
  function initTouchInteraction() {
    var targetElement = document.getElementById('viewport');
    var mc = new Hammer(targetElement);
    mc.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
    mc.on('swipeup swipedown', function(e) {
      updateHelper(e.type === 'swipeup' ? 1 : -1);
    });
  }

  // 更新幫助器 (滾動、鍵盤或滑動事件)
  function updateHelper(param) {
    var curActive = $('.side-nav').find('.is-active'),
        curPos = $('.side-nav').children().index(curActive),
        lastItem = $('.side-nav').children().length - 1,
        nextPos = 0;

    if (param > 0 || param.keyCode === 40 || param.type === "swipeup") {
      nextPos = (curPos === lastItem) ? 0 : curPos + 1;
    } else if (param < 0 || param.keyCode === 38 || param.type === "swipedown") {
      nextPos = (curPos === 0) ? lastItem : curPos - 1;
    }
    updateNavs(nextPos);
    updateContent(curPos, nextPos, lastItem);
  }

  // 初始化所有交互
  function initInteractions() {
    initScrollInteraction();
    initNavigationInteraction();
    initTouchInteraction();
    setupSwipers();
  }

  initInteractions();

});

mc.on('swipeup swipedown', function(e) {
  // 僅在必要時更新內容，避免過度處理
  if (!$('.outer-nav').hasClass('is-vis')) {
    updateHelper(e.type === 'swipeup' ? 1 : -1);
  }
});

element.addEventListener('touchstart', function(event) {
  event.preventDefault();  // 這樣調用是可以的
}, { passive: false });


//左右輪播
$(document).ready(function() {
  // SLIDER
  var carouselslider = new Swiper('.carousel-slider', {
    spaceBetween: 0,
    slidesPerView: 3,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 1
      },
      320: {
        slidesPerView: 1
      }
    }
  });
});