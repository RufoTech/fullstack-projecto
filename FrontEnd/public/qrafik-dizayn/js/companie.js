//let studentPage = document.querySelector(".code-student-main")

jQuery(document).ready(function ($) {
  const companiesSlider = document.querySelector(
    '.companies-slider .companies-list'
  );
  const homeSlider = document.querySelector('.code-home-slider-main');
  const cororateHomeSlider = $('.code-corporate-slider');
  const graduetsSlider = $('.code-graduates-carousel-inner');
  const sertificate = $('.code-education-certificate');
  const sertificateCompanyEl = sertificate.find('.company li');
  const partnerCorusel = $('.partners-carousel .carousel');
  const partnerCarouselImages = $('.partners-carousel .carousel-imgs');
  const careerCorusel = $('.career-carousel .carousel');
  const eventCorusel = $('.event-carousel .carousel');
  const vacansyCorusel = $('.vacancy-carousel .carousel');
  const aboutCorusel = $('.about-carousel .carousel');
  const partnerCoruselCoporate = $('.partners-carousel-coporate .carousel');
  const usecasesCoruselCoporate = $('.usecases-carousel-coporate .carousel');
  const usecasesInnerCoruselCoporate = $(
    '.usecases-inner-carousel-coporate .carousel'
  );

  const blogNav = $('.code-blog .code-blog-nav');
  const videoNav = $('.code-video .code-video-nav');
  const contactNav = $('.code-contact-question .tag');
  const homeNav = $('.code-home-main .code-graduates .nav');
  let questionNav = $('.code-education-question .tag');
  let eventNav = $('.code-all-event .event-type');
  let vacansyNav = $('.code-active-vacancies .vacancie-type');
  let blogPageNav = $('.code-all-blog .blog-type');
  let allCoursesNav = $('.code-all-courses-study-areas .course-type');
  let corporateAllCoursesNav = $(
    '.code-corporate-all-courses-study-areas .course-type'
  );

  let questionCorEduNav = $('.code-corporate-education-question .tag');
  let scholarquestionNav = $('.code-scholar-question .tag');
  let corporatequestionNav = $('.code-corporate-question .tag');
  let aboutquestionNav = $('.code-about-question .tag');
  let aboutPage = $('.code-about-main');
  const scholarRuleSlider = $('.code-scholar-rules .code-scholar-rules-cards');
  const corporateRuleSlider = $(
    '.code-corporate-rules .code-corporate-rules-cards'
  );

  let studentPage = document.querySelector('.code-student-main');
  let educationPage = $('.code-education-main');
  let contactPage = $('.code-contact-main');
  let scholarPage = $('.code-scholar-mainn');
  let corporatePage = $('.code-corporate-home-main');
  let corporateEduPage = $('.code-corporate-education-main');
  let eventPage2 = $('.code-event-main');
  let vacansyPage2 = $('.code-vacancy-main');
  let blogPage2 = $('.code-blog-main');
  let homePage2 = $('.code-home-main');
  let allCoursesPage = $('.code-all-courses-main');
  let corporateAllCoursesPage = $('.code-corporate-all-courses-main');

  partnerCoruselCount();
  careerCoruselCount();
  eventCoruselCount();
  vacansyCoruselCount();
  aboutCoruselCount();
  partnerCoruselCorporateCount();
  usecasesCoruselCorporateCount();
  usecasesInnerCoruselCorporateCount();

  

  const settings = {
    slidesToShow: 6,
    slidesToScroll: 6,
    //dots: true,
    arrows: false,
    rows: 3,
    autoplaySpeed: 5000,
    focusOnSelect: false,
    focusOnChange: false,
    accessibility: false,
    pause: false,
    pauseOnFocus: false,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 3,
          dots: true,
        },
      },
    ],
  };

  const corporateRuleSettings = {
   
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: false,
    arrows: false,
    focusOnSelect: false,
    focusOnChange: false,
    accessibility: false,
    pause: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const settingsSlider = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
    focusOnSelect: false,
    focusOnChange: false,
    accessibility: false,
    pause: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  };

  const settingsGraduet = {
    slidesToShow: 6,
    slidesToScroll: 6,
    rows: 2,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    focusOnSelect: false,
    focusOnChange: false,
    accessibility: false,
    pause: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
    ],
  };

  const sertificateSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    focusOnSelect: false,
    focusOnChange: false,
    accessibility: false,
    pause: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  };

  const partnerCoruselSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    focusOnSelect: false,
    focusOnChange: false,
    accessibility: false,
    pause: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  };

  

  const scholarRuleSettings = {
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: false,
    arrows: false,
    focusOnSelect: false,
    focusOnChange: false,
    accessibility: false,
    pause: false,
    pauseOnFocus: false,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  };
  

  const blogNavSettings = {
    slidesToShow: 1,
    variableWidth: true,
    arrows: false,
    focusOnSelect: false,
    focusOnChange: false,
    accessibility: false,
    pause: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  };

  const partnersThoughtsSettings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    focusOnSelect: false,
    focusOnChange: false,
    accessibility: false,
    pause: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  let blogNavWidth = blogNav.width() + 32;
  let homeNavWidth = homeNav.width() + 32;
  let videoNavWidth = videoNav.width() + 32;
  let contactNavWidth = contactNav.width() + 32;
  let questionNavWidth = questionNav.width() + 32;
  let scholarquestionNavWidth = scholarquestionNav.width() + 32;
  let corporatequestionNavWidth = corporatequestionNav.width() + 32;
  let questionCorEduNavWidth = questionCorEduNav.width() + 32;
  let aboutquestionNavWidth = aboutquestionNav.width() + 32;
  let eventNavWidth = eventNav.width() + 32;
  let vacansyNavWidth = vacansyNav.width() + 32;
  let blogPageNavWidth = blogPageNav.width() + 32;
  let allCoursesNavWidth = allCoursesNav.width() + 32;
  let corporateAllCoursesNavWidth = corporateAllCoursesNav.width() + 32;

  miniNav(blogNav, blogNavSettings);
  miniNav(homeNav, blogNavSettings);
  miniNav(videoNav, blogNavSettings);
  miniNav(contactNav, blogNavSettings);
  miniNav(questionNav, blogNavSettings);
  miniNav(scholarquestionNav, blogNavSettings);
  miniNav(corporatequestionNav, blogNavSettings);
  miniNav(questionCorEduNav, blogNavSettings);
  miniNav(aboutquestionNav, blogNavSettings);
  miniNav(eventNav, blogNavSettings);
  miniNav(vacansyNav, blogNavSettings);
  miniNav(blogPageNav, blogNavSettings);
  miniNav(allCoursesNav, blogNavSettings);
  miniNav(corporateAllCoursesNav, blogNavSettings);

  $(window).on('resize', function () {
    miniNav(blogNav, blogNavSettings, blogNavWidth);
    miniNav(homeNav, blogNavSettings, homeNavWidth);
    miniNav(videoNav, blogNavSettings, videoNavWidth);
    miniNav(contactNav, blogNavSettings, contactNavWidth);
    miniNav(questionNav, blogNavSettings, questionNavWidth);
    miniNav(scholarquestionNav, blogNavSettings, scholarquestionNavWidth);
    miniNav(aboutquestionNav, blogNavSettings, aboutquestionNavWidth);
    miniNav(eventNav, blogNavSettings, eventNavWidth);
    miniNav(vacansyNav, blogNavSettings, vacansyNavWidth);
    miniNav(blogPageNav, blogNavSettings, blogPageNavWidth);
    miniNav(allCoursesNav, blogNavSettings, allCoursesNavWidth);
    miniNav(
      corporateAllCoursesNav,
      blogNavSettings,
      corporateAllCoursesNavWidth
    );

    miniNav(corporatequestionNav, blogNavSettings, corporatequestionNavWidth);
    miniNav(questionCorEduNav, blogNavSettings, questionCorEduNavWidth);
  });

  //$(companiesSlider).slick(settings);
  $(homeSlider).slick(settingsSlider);

  $(cororateHomeSlider).slick(settingsSlider);
  $(sertificate).slick(sertificateSettings);
  $(partnerCorusel).slick(partnerCoruselSettings);
  $(partnerCarouselImages).slick(partnerCoruselSettings)
  // $(careerCorusel).slick(partnerCoruselSettings);
  $(eventCorusel).slick(partnerCoruselSettings);
  $(vacansyCorusel).slick(partnerCoruselSettings);
  $(aboutCorusel).slick(partnerCoruselSettings);
  $(partnerCoruselCoporate).slick(partnerCoruselSettings);
  $(usecasesCoruselCoporate).slick(partnerCoruselSettings);
  $(usecasesInnerCoruselCoporate).slick(partnerCoruselSettings);
  $(scholarRuleSlider).slick(scholarRuleSettings);
  $(corporateRuleSlider).slick(corporateRuleSettings);

  $('.code-corporate-partners-thoughts-cards').slick(partnersThoughtsSettings);

  videoNav.find('p').each(function () {
    $(this).click(function () {
      videoNav.find('p').removeClass('active');
      $(this).addClass('active');
    });
  });
  blogNav.find('p').each(function () {
    $(this).click(function () {
      blogNav.find('p').removeClass('active');
      $(this).addClass('active');
    });
  });

  homeNav.find('li').each(function () {
    $(this).click(function () {
      homeNav.find('li').removeClass('active');
      homeNav.find('li button').removeClass('active');

      $(this).addClass('active');
      $(this).find('button').addClass('active');
    });
  });

  questionNav.find('li').each(function () {
    $(this).click(function (event) {
      questionAnimation($(this), questionNav);
    });
  });
  questionCorEduNav.find('li').each(function () {
    $(this).click(function () {
      questionAnimation($(this), questionCorEduNav);
    });
  });
  scholarquestionNav.find('li').each(function () {
    $(this).click(function () {
      questionAnimation($(this), scholarquestionNav);
    });
  });
  aboutquestionNav.find('li').each(function () {
    $(this).click(function (event) {
      questionAnimation($(this), aboutquestionNav);
    });
  });

  eventNav.find('li').each(function () {
    $(this).click(function () {
      eventNav.find('li').removeClass('active');
      $(this).addClass('active');
    });
  });
  vacansyNav.find('li').each(function () {
    $(this).click(function () {
      vacansyNav.find('li').removeClass('active');
      $(this).addClass('active');
    });
  });

  allCoursesNav.find('li').each(function () {
    $(this).click(function () {
      allCoursesNav.find('li').removeClass('active');
      $(this).addClass('active');
    });
  });

  corporateAllCoursesNav.find('li').each(function () {
    $(this).click(function () {
      corporateAllCoursesNav.find('li').removeClass('active');
      $(this).addClass('active');
    });
  });

  blogPageNav.find('li').each(function () {
    $(this).click(function () {
      blogPageNav.find('li').removeClass('active');
      $(this).addClass('active');
    });
  });

  corporatequestionNav.find('li').each(function () {
    $(this).click(function () {
      questionAnimation($(this), corporatequestionNav);
    });
  });
  contactNav.find('li').each(function () {
    $(this).click(function () {
      questionAnimation($(this), contactNav);
    });
  });

  $('.partners-carousel .left').click(function () {
    $(partnerCorusel).slick('slickPrev');
    $(partnerCarouselImages).slick('slickPrev');
  });

  $('.partners-carousel .right').click(function () {
    $(partnerCorusel).slick('slickNext');
    $(partnerCarouselImages).slick('slickNext');

  });

  

  $('.partners-carousel-coporate .left').click(function () {
    $(partnerCoruselCoporate).slick('slickPrev');
  });

  $('.partners-carousel-coporate .right').click(function () {
    $(partnerCoruselCoporate).slick('slickNext');
  });

  partnerCoruselCoporate.on(
    'init',
    function (event, slick, currentSlide, totalSlides) {
      const currentPage = currentSlide + 1;
      const currentSlideElement = partnerCoruselCoporate.find('.count');
      currentSlideElement.each(function () {
        $(this).text(currentPage + '/' + slick.slideCount);
      });
    }
  );

  partnerCoruselCoporate.on(
    'afterChange',
    function (event, slick, currentSlide, totalSlides) {
      const currentPage = currentSlide + 1;
      const currentSlideElement = partnerCoruselCoporate.find('.count');
      currentSlideElement.each(function () {
        $(this).text(currentPage + '/' + slick.slideCount);
      });
    }
  );

  $('.usecases-carousel-coporate .left').click(function () {
    $(usecasesCoruselCoporate).slick('slickPrev');
  });

  $('.usecases-carousel-coporate .right').click(function () {
    $(usecasesCoruselCoporate).slick('slickNext');
  });

  usecasesCoruselCoporate.on(
    'init',
    function (event, slick, currentSlide, totalSlides) {
      const currentPage = currentSlide + 1;
      const currentSlideElement = usecasesCoruselCoporate.find('.count');
      currentSlideElement.each(function () {
        $(this).text(currentPage + '/' + slick.slideCount);
      });
    }
  );

  usecasesCoruselCoporate.on(
    'afterChange',
    function (event, slick, currentSlide, totalSlides) {
      const currentPage = currentSlide + 1;
      const currentSlideElement = usecasesCoruselCoporate.find('.count');
      currentSlideElement.each(function () {
        $(this).text(currentPage + '/' + slick.slideCount);
      });
    }
  );

  $('.usecases-inner-carousel-coporate .left').click(function () {
    $(usecasesInnerCoruselCoporate).slick('slickPrev');
  });

  $('.usecases-inner-carousel-coporate .right').click(function () {
    $(usecasesInnerCoruselCoporate).slick('slickNext');
  });

  usecasesInnerCoruselCoporate.on(
    'init',
    function (event, slick, currentSlide, totalSlides) {
      const currentPage = currentSlide + 1;
      const currentSlideElement = usecasesInnerCoruselCoporate.find('.count');
      currentSlideElement.each(function () {
        $(this).text(currentPage + '/' + slick.slideCount);
      });
    }
  );

  usecasesInnerCoruselCoporate.on(
    'afterChange',
    function (event, slick, currentSlide, totalSlides) {
      const currentPage = currentSlide + 1;
      const currentSlideElement = usecasesInnerCoruselCoporate.find('.count');
      currentSlideElement.each(function () {
        $(this).text(currentPage + '/' + slick.slideCount);
      });
    }
  );

  // $('.career-carousel .left').click(function () {
  //   $(careerCorusel).slick('slickPrev');
  // });

  // $('.career-carousel .right').click(function () {
  //   $(careerCorusel).slick('slickNext');
  // });

  careerCorusel.on('init', function (event, slick, currentSlide, totalSlides) {
    const currentPage = currentSlide + 1;
    const currentSlideElement = careerCorusel.find('.count');
    currentSlideElement.each(function () {
      $(this).text(currentPage + '/' + slick.slideCount);
    });
  });

  careerCorusel.on(
    'afterChange',
    function (event, slick, currentSlide, totalSlides) {
      const currentPage = currentSlide + 1;
      const currentSlideElement = careerCorusel.find('.count');
      currentSlideElement.each(function () {
        $(this).text(currentPage + '/' + slick.slideCount);
      });
    }
  );

  $('.event-carousel .left').click(function () {
    $(eventCorusel).slick('slickPrev');
  });

  $('.event-carousel .right').click(function () {
    $(eventCorusel).slick('slickNext');
  });

  eventCorusel.on('init', function (event, slick, currentSlide, totalSlides) {
    const currentPage = currentSlide + 1;
    const currentSlideElement = eventCorusel.find('.count');
    currentSlideElement.each(function () {
      $(this).text(currentPage + '/' + slick.slideCount);
    });
  });

  eventCorusel.on(
    'afterChange',
    function (event, slick, currentSlide, totalSlides) {
      const currentPage = currentSlide + 1;
      const currentSlideElement = eventCorusel.find('.count');
      currentSlideElement.each(function () {
        $(this).text(currentPage + '/' + slick.slideCount);
      });
    }
  );

  $('.vacancy-carousel .left').click(function () {
    $(vacansyCorusel).slick('slickPrev');
  });

  $('.vacancy-carousel .right').click(function () {
    $(vacansyCorusel).slick('slickNext');
  });

  vacansyCorusel.on('init', function (event, slick, currentSlide, totalSlides) {
    const currentPage = currentSlide + 1;
    const currentSlideElement = vacansyCorusel.find('.count');
    currentSlideElement.each(function () {
      $(this).text(currentPage + '/' + slick.slideCount);
    });
  });

  vacansyCorusel.on(
    'afterChange',
    function (event, slick, currentSlide, totalSlides) {
      const currentPage = currentSlide + 1;
      const currentSlideElement = vacansyCorusel.find('.count');
      currentSlideElement.each(function () {
        $(this).text(currentPage + '/' + slick?.slideCount);
      });
    }
  );

  $('.about-carousel .left').click(function () {
    $(aboutCorusel).slick('slickPrev');
  });

  $('.about-carousel .right').click(function () {
    $(aboutCorusel).slick('slickNext');
  });

  aboutCorusel.on('init', function (event, slick, currentSlide, totalSlides) {
    const currentPage = currentSlide + 1;
    const currentSlideElement = aboutCorusel.find('.count');
    currentSlideElement.each(function () {
      $(this).text(currentPage + '/' + slick.slideCount);
    });
  });

  aboutCorusel.on(
    'afterChange',
    function (event, slick, currentSlide, totalSlides) {
      const currentPage = currentSlide + 1;
      const currentSlideElement = aboutCorusel.find('.count');
      currentSlideElement.each(function () {
        $(this).text(currentPage + '/' + slick.slideCount);
      });
    }
  );

  // graduetsSlider.each(function () {
  //   $(this).slick(settingsGraduet);
  // });

  sertificate.on('afterChange', function (currentSlide) {
    // let newAutoPlaySpeed = 1000;
    sertificate.slick('slickSetOption', 'autoplay', true);
    sertificate.find('.company li').removeClass('active');
    const currentSlideElement = sertificate.find('.slick-active');
    let currentSlideIndex = sertificate.slick('slickCurrentSlide');
    currentSlideElement.find('li').eq(currentSlideIndex).addClass('active');

    sertificate
      .find('.slick-current')
      .find('.company li')
      .on('click', function (e) {
        var clickedIndex = $(this).index();
        sertificate.slick('slickGoTo', clickedIndex);
      });
  });

  sertificate
    .find('.slick-current')
    .find('.company li')
    .on('click', function (e) {
      var clickedIndex = $(this).index();
      sertificate.slick('slickGoTo', clickedIndex);
    });

  // $('.nav-pills .code-btn').on('click', function () {
  //   var index = $('.nav-pills .code-btn').index(this);
  //   $('.code-graduates-carousel').each(function () {
  //     $(this).addClass('test');
  //   });
  //   $('.code-graduates-carousel').eq(index).removeClass('test');
  // });

  function partnerCoruselCount() {
    let partnerCoruselItem = $('.partners-carousel .carousel .item');
    partnerCoruselItem.find('.count').each(function () {
      $(this).text('1' + '/' + partnerCoruselItem.length);
    });
  }

  function partnerCoruselCorporateCount() {
    let partnerCoruselItem = $('.partners-carousel-coporate .carousel .item');
    partnerCoruselItem.find('.count').each(function () {
      $(this).text('1' + '/' + partnerCoruselItem.length);
    });
  }

  function usecasesCoruselCorporateCount() {
    let partnerCoruselItem = $('.usecases-carousel-coporate .carousel .item');
    partnerCoruselItem.find('.count').each(function () {
      $(this).text('1' + '/' + partnerCoruselItem.length);
    });
  }

  function usecasesInnerCoruselCorporateCount() {
    let partnerCoruselItem = $(
      '.usecases-inner-carousel-coporate .carousel .item'
    );
    partnerCoruselItem.find('.count').each(function () {
      $(this).text('1' + '/' + partnerCoruselItem.length);
    });
  }

  function careerCoruselCount() {
    let partnerCoruselItem = $('.career-carousel .carousel .item');
    partnerCoruselItem.find('.count').each(function () {
      $(this).text('1' + '/' + partnerCoruselItem.length);
    });
  }

  function eventCoruselCount() {
    let partnerCoruselItem = $('.event-carousel .carousel .item');
    partnerCoruselItem.find('.count').each(function () {
      $(this).text('1' + '/' + partnerCoruselItem.length);
    });
  }

  function vacansyCoruselCount() {
    let partnerCoruselItem = $('.vacancy-carousel .carousel .item');
    partnerCoruselItem.find('.count').each(function () {
      $(this).text('1' + '/' + partnerCoruselItem.length);
    });
  }

  function aboutCoruselCount() {
    let partnerCoruselItem = $('.about-carousel .carousel .item');
    partnerCoruselItem.find('.count').each(function () {
      $(this).text('1' + '/' + partnerCoruselItem.length);
    });
  }
  function miniNav(nav, slickSet, width = nav.width() + 32) {
    if ($(window).width() < width) {
      nav.css('display', 'block');
      nav.css('max-width', '100%');
      $(nav).slick(slickSet);
      $(nav).data('slick-initialized', true);
      $(nav).removeClass('big');
      //  $(nav).find('li').eq(1).addClass("active");
    } else {
      $(nav).addClass('big');

      // $(nav).find('li').eq(0).addClass("active");
      if ($(nav).data('slick-initialized')) {
        nav.css('display', 'inline-flex');
        $(nav).slick('unslick');
        $(nav).data('slick-initialized', false);

        // var li = nav.find('li.active')
        // var offset = li.offset()
        // var parentOffset = li.parent().offset();
        // var offsetY = offset.left - parentOffset.left;
        // var elementOuterWidth = li.outerWidth(true)
        // li.parent().css("--after-width", elementOuterWidth + "px");
        // li.parent().css("--after-left", offsetY + "px");
      }
    }

    var li = nav.find('li.active');
    var clickedDataFor = li.data('for');
    nav.find('li').each(function () {
      if ($(this).data('for') === clickedDataFor) {
        $(this).addClass('allBg');
      } else {
        $(this).removeClass('allBg');
      }
    });
    var offset = li.offset();
    var parentOffset = li.parent().offset();
    if (parentOffset && offset) {
      var offsetY = offset.left - parentOffset.left;
      var elementOuterWidth = li.outerWidth(true);
      li.parent().css('--after-width', elementOuterWidth + 'px');
      li.parent().css('--after-left', offsetY + 'px');
    }
  }

  if (studentPage) {
    let videoNav = $('.code-video-nav');
    let videoContent = $('.code-video .tab-content');

    videoContent.find('.code-video-cards').hide();
    videoContent.find('.code-video-cards').eq(0).show();
    videoNav.find('p').eq(0).addClass('active');

    videoNav.find('p').click(function () {
      let forEl = $(this).attr('data-for');
      videoContent.find('.code-video-cards').hide();
      $('.code-video #' + forEl).show();
    });

    let blogNav = $('.code-blog-nav');
    let blogContent = $('.code-blog .tab-content');

    blogContent.find('.code-blog-cards').hide();
    blogContent.find('.code-blog-cards').eq(0).show();
    blogNav.find('p').eq(0).addClass('active');

    blogNav.find('p').click(function () {
      let forEl = $(this).attr('data-for');
      blogContent.find('.code-blog-cards').hide();
      $('#' + forEl).show();
    });

    blogNav.find('p.slick-slide').click(function () {
      let forEl = $(this).attr('data-for');
      blogContent.find('.code-blog-cards').hide();
      $('#' + forEl).show();
    });
  }

  if (educationPage) {
    let questionContent = $('.code-education-question .tab-content');
    questionContent.find('.questions').hide();
    questionContent.find('.questions').eq(0).show();
    // questionNav.find('li').eq(0).addClass("active");

    questionNav.find('li').click(function () {
      let forEl = $(this).attr('data-for');
      questionContent.find('.questions').hide();
      $('.code-education-question #' + forEl).show();
    });
  }
  if (corporateEduPage) {
    let questionContent = $('.code-corporate-education-question .tab-content');
    questionContent.find('.questions').hide();
    questionContent.find('.questions').eq(0).show();
    //questionCorEduNav.find('li').eq(0).addClass("active");

    questionCorEduNav.find('li').click(function () {
      let forEl = $(this).attr('data-for');
      questionContent.find('.questions').hide();
      $('.code-corporate-education-question #' + forEl).show();
    });
  }

  if (contactPage) {
    let questionContent = $('.code-contact-question .tab-content');
    questionContent.find('.questions').hide();
    questionContent.find('.questions').eq(0).show();
    // contactNav.find('li').eq(0).addClass("active");

    contactNav.find('li').click(function () {
      let forEl = $(this).attr('data-for');
      questionContent.find('.questions').hide();
      $('.code-contact-question #' + forEl).show();
    });
  }

  if (scholarPage) {
    let questionContent = $('.code-scholar-question .tab-content');
    questionContent.find('.questions').hide();
    questionContent.find('.questions').eq(0).show();
    // scholarquestionNav.find('li').eq(0).addClass("active");

    scholarquestionNav.find('li').click(function () {
      let forEl = $(this).attr('data-for');
      questionContent.find('.questions').hide();
      $('.code-scholar-question #' + forEl).show();
    });
  }

  if (aboutPage) {
    let questionContent = $('.code-about-question .tab-content');
    questionContent.find('.questions').hide();
    questionContent.find('.questions').eq(0).show();

    aboutquestionNav.find('li').click(function () {
      let forEl = $(this).attr('data-for');
      questionContent.find('.questions').hide();
      $('.code-about-question #' + forEl).show();
    });
  }

  if (eventPage2) {
    let questionContent = $('.code-all-event .tab-content');
    questionContent.find('.event-cards').hide();
    questionContent.find('.event-cards').removeClass('show');
    questionContent.find('.event-cards').eq(0).show();
    questionContent.find('.event-cards').eq(0).addClass('show');
    eventNav.find('li').eq(0).addClass('active');

    eventNav.find('li').click(function () {
      let forEl = $(this).attr('data-for');
      questionContent.find('.event-cards').hide();
      questionContent.find('.event-cards').removeClass('show');
      $('.code-all-event #' + forEl).show();
      $('.code-all-event #' + forEl).addClass('show');
    });
  }

  if (vacansyPage2) {
    let questionContent = $('.code-active-vacancies .tab-content');
    questionContent.find('.code-active-vacancies-cards').removeClass('show');
    questionContent.find('.code-active-vacancies-cards').hide();
    questionContent.find('.code-active-vacancies-cards').eq(0).show();
    questionContent.find('.code-active-vacancies-cards').eq(0).addClass('show');
    vacansyNav.find('li').eq(0).addClass('active');

    vacansyNav.find('li').click(function () {
      let forEl = $(this).attr('data-for');
      questionContent.find('.code-active-vacancies-cards').hide();
      questionContent.find('.code-active-vacancies-cards').removeClass('show');
      $('.code-active-vacancies #' + forEl).show();
      $('.code-active-vacancies #' + forEl).addClass('show');
    });
  }

  if (blogPage2) {
    let questionContent = $('.code-all-blog .tab-content');
    questionContent.find('.blog-cards').hide();
    questionContent.find('.blog-cards').removeClass('show');
    questionContent.find('.blog-cards').eq(0).show();
    questionContent.find('.blog-cards').eq(0).addClass('show');
    blogPageNav.find('li').eq(0).addClass('active');

    /*
    blogPageNav.find('li').click(function () {
      let forEl = $(this).attr('data-for');
      questionContent.find('.blog-cards').hide();
      questionContent.find('.blog-cards').removeClass('show');
      $('.code-all-blog #' + forEl).show();
      $('.code-all-blog #' + forEl).addClass('show');
    });
    */
  }

  /*
  if (homePage2) {
    let questionContent = $('.code-graduates .tab-content');
    // questionContent.find(".blog-cards").hide();
    // questionContent.find(".code-graduates-carousel").eq(0).show();
    // homeNav.find('li').eq(0).addClass("active");

    homeNav.find('li').click(function () {
      var index = $(this).index();
      var x = index % 4;
      questionContent.find('.code-graduates-carousel').addClass('test');
      questionContent.find('.code-graduates-carousel').removeClass('show');
      questionContent.find('.code-graduates-carousel').removeClass('active');
      questionContent
        .find('.code-graduates-carousel')
        .eq(x)
        .removeClass('test');
      questionContent.find('.code-graduates-carousel').eq(x).addClass('show');
      questionContent.find('.code-graduates-carousel').eq(x).addClass('active');
    });
  }
  */
  if (corporatePage) {
    let questionContent = $('.code-corporate-question .tab-content');
    questionContent.find('.questions').hide();
    questionContent.find('.questions').eq(0).show();
    // corporatequestionNav.find('li').eq(0).addClass("active");

    corporatequestionNav.find('li').click(function () {
      let forEl = $(this).attr('data-for');
      questionContent.find('.questions').hide();
      $('.code-corporate-question #' + forEl).show();
    });
  }

  if (allCoursesPage) {
    let questionContent = $('.code-all-courses-study-areas .tab-content');
    questionContent.find('.code-study-areas-cards-section').hide();
    questionContent.find('.code-study-areas-cards-section').removeClass('show');
    questionContent.find('.code-study-areas-cards-section').eq(0).show();
    questionContent
      .find('.code-study-areas-cards-section')
      .eq(0)
      .addClass('show');
    allCoursesNav.find('li').eq(0).addClass('active');

    allCoursesNav.find('li').click(function () {
      let forEl = $(this).attr('data-for');
      questionContent.find('.code-study-areas-cards-section').hide();
      questionContent
        .find('.code-study-areas-cards-section')
        .removeClass('show');
      $('.code-all-courses-study-areas #' + forEl).show();
      $('.code-all-courses-study-areas #' + forEl).addClass('show');
    });
  }

  if (homePage2) {
    let questionContent = $('.code-home-study-areas .tab-content');
    let homePage2Nav=$('.homecoursenav ul');
    homePage2Nav.find('li').click(function () {

      jQuery('.code-home-study-areas .more-btn').click();

      let forEl = $(this).attr('data-for');
      if(forEl=='all'){
        questionContent.find(".code-study-areas-card").show();
      }
      else {
        questionContent.find(".code-study-areas-card").hide();
        questionContent.find('.edulevel_'+forEl).show();  
      }

      questionContent.find('.edulevel_universal').show();
      $('.code-home-study-areas .' + forEl).show();
      $('.code-home-study-areas .' + forEl).addClass('show');
      
    });
  }

  if (corporateAllCoursesPage) {
    let questionContent = $(
      '.code-corporate-all-courses-study-areas .tab-content'
    );
    questionContent.find('.code-study-areas-cards-section').hide();
    questionContent.find('.code-study-areas-cards-section').removeClass('show');
    questionContent.find('.code-study-areas-cards-section').eq(0).show();
    questionContent
      .find('.code-study-areas-cards-section')
      .eq(0)
      .addClass('show');
    corporateAllCoursesNav.find('li').eq(0).addClass('active');

    corporateAllCoursesNav.find('li').click(function () {
      let forEl = $(this).attr('data-for');
      questionContent.find('.code-study-areas-cards-section').hide();
      questionContent
        .find('.code-study-areas-cards-section')
        .removeClass('show');
      $('.code-corporate-all-courses-study-areas #' + forEl).show();
      $('.code-corporate-all-courses-study-areas #' + forEl).addClass('show');
    });
  }

  function questionAnimation(element, navParent) {
    var clickedDataFor = element.data('for');
    navParent.find('li').removeClass('active');
    element.addClass('active');
    // var offsetX = event.offsetX;

    navParent.find('li').each(function () {
      if ($(this).data('for') === clickedDataFor) {
        $(this).addClass('allBg');
      } else {
        $(this).removeClass('allBg');
      }
    });

    var offset = element.offset();
    var parentOffset = element.parent().offset();
    var offsetY = offset.left - parentOffset.left;
    var elementOuterWidth = element.outerWidth(true);
    element.parent().css('--after-width', elementOuterWidth + 'px');
    element.parent().css('--after-left', offsetY + 'px');
  }
  const allSlickSliders = document.querySelectorAll('.slick-slider');
  allSlickSliders.forEach((slider) => {
    const dotsElements = slider.querySelectorAll('.slick-dots li');
    dotsElements.forEach((item) => {
      const spanCircle = document.createElement('span');
      spanCircle.classList.add('span-circle');
      spanCircle.innerHTML = `
      <svg class="progress-svg" width="19" height="19">
        <g transform="translate(9,8)">
          <circle class="circle-go" r="8" cx="0" cy="1"></circle>
        </g>
        </svg>`;
      item.append(spanCircle);
    });

    $(slider)
      .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        dotsElements.forEach((item) => {
          item.querySelector('span').innerHTML = ``;
        });
      })
      .trigger('beforeChange');

    $(slider)
      .on('afterChange', function (event, slick, currentSlide) {
        dotsElements.forEach((item) => {
          item.querySelector('span').innerHTML = ``;
        });
        dotsElements.forEach((item) => {
          if (item.classList.contains('slick-active')) {
            item.querySelector('span').innerHTML = `
          <svg class="progress-svg" width="19" height="19">
         <g transform="translate(9,8)">
           <circle class="circle-go" r="8" cx="0" cy="1"></circle>
         </g>
         </svg>`;
          }
        });
      })
      .trigger('afterChange');
  });

  partnerCorusel.on('init', function (event, slick, currentSlide, totalSlides) {
    const currentPage = currentSlide + 1;
    const currentSlideElement = partnerCorusel.find('.count');
    currentSlideElement.each(function () {
      $(this).text(currentPage + '/' + slick?.slideCount);
    });
  });

  partnerCorusel.on(
    'afterChange',
    function (event, slick, currentSlide, totalSlides) {
      const currentPage = currentSlide + 1;
      const currentSlideElement = partnerCorusel.find('.count');
      currentSlideElement.each(function () {
        $(this).text(isNaN(currentPage) ? 1 : currentPage + '/' + slick?.slideCount);
      });
    }
  );
});