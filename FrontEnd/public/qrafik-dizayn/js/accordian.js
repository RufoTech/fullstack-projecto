let eduProgAboutShortCorporate = document.querySelectorAll(
  ' .code-corporate-education-program .inner-about-short'
);

let currentActive;

let questionsCorEdu = document.querySelectorAll(
  '.code-corporate-education-question .questions-item'
);

let questionsContact = document.querySelectorAll(
  '.code-contact-question .questions-item'
);
let scholarQuestions = document.querySelectorAll(
  '.code-scholar-question .questions-item'
);
let corporateQuestions = document.querySelectorAll(
  '.code-corporate-question .questions-item'
);

let questionCorEduTagLi = document.querySelectorAll(
  '.code-coporate-education-question .tag li'
);

let corporateTagLi = document.querySelectorAll(
  '.code-corporate-question .tag li'
);

let contactquestionTagLi = document.querySelectorAll(
  '.code-contact-question .tag li'
);
let scholarquestionTagLi = document.querySelectorAll(
  '.code-scholar-question .tag li'
);

let blogLi = document.querySelectorAll('.code-blog .code-blog-nav p');

let aboutQuestions = document.querySelectorAll(
  '.code-about-question .questions-item'
);
let aboutquestionTagLi = document.querySelectorAll(
  '.code-about-question .tag li'
);
const educationMarketingPage3 = document.querySelector(
  '.code-education-marketing-main'
);
const educationPage3 = document.querySelector('.code-education-main');
const educationProgrammingPage3 = document.querySelector(
  '.code-education-programming-main'
);
const educationCyberPage3 = document.querySelector(
  '.code-education-cyber-main'
);

let openAccordianAndClose = (accordian) => {
  let subElement;
  accordian.forEach((element) => {
    element.addEventListener('click', function () {
      if (element.querySelector('.questions-item-desc')) {
        subElement = element.querySelector('.questions-item-desc');
      } else {
        subElement = element.querySelector('.inner-about-short-text');
      }
      const height = subElement.clientHeight;

      let wasActive = element.classList.contains('active');

      accordian.forEach((accordianElement) => {
        accordianElement.classList.remove('active');
        if (accordianElement.querySelector('.questions-item-desc')) {
          accordianElement.querySelector(
            '.questions-item-desc'
          ).style.height = 0;
        } else {
          accordianElement.querySelector(
            '.inner-about-short-text'
          ).style.height = 0;
        }
      });
      if (wasActive) {
        element.classList.remove('active');
        subElement.style.height = 0;
      } else {
        element.classList.add('active');
        if (height === 0) {
          subElement.style.height = subElement.scrollHeight + 32 + 'px';
        } else {
          subElement.style.height = height + 'px';
        }
      }
    });

    if(element.querySelector('.inner-about-short'))
    element.querySelector('.minus').addEventListener('click', function (event) {
      event.stopPropagation();
      element.classList.remove('active');
      subElement.style.height = 0;
      console.log(element);
    });

    // if (element.classList.contains('inner-about-short')) {
    //   element.addEventListener('click', function (event) {
    //     if (element.classList.contains('active')) {
    //       console.log(element);
    //       event.stopPropagation();
    //       element.classList.remove('active');
    //       // subElement.style.height = 0;
    //     }
    //   });
    // }

    element
      .querySelector('.inner-about-short')?.addEventListener('click', function (event) {
        if (element.classList.contains('active')) {
          event.stopPropagation();
          element.classList.remove('active');
          subElement.style.height = 0;
        }
      });

    element.querySelector('.copy').addEventListener('click', function (event) {
      event.stopPropagation();
      navigator.clipboard.writeText(element.innerText);
      element.querySelector('.copy span').style.animationName = 'showCopy';
      setTimeout(function () {
        element.querySelector('.copy span').style.animationName = '';
      }, 3000);
    });
    if (element.querySelectorAll('.tag p').length != 0) {
      element.querySelectorAll('.tag p').forEach((tag) => {
        tag.addEventListener('click', function () {
          const searchText = encodeURIComponent(tag.innerHTML);
          const serchURL = `https://www.google.com/search?q=${searchText}`;
          window.open(serchURL, '_blank');
        });
      });
    }
  });
};

if (
  educationPage3 ||
  educationMarketingPage3 ||
  educationProgrammingPage3 ||
  educationCyberPage3
) {
  let eduProgAboutShort = document.querySelectorAll(
    ' .code-education-program .inner-about-short'
  );
  let questions = document.querySelectorAll(
    '.code-education-question .questions-item'
  );
  let questionTagLi = document.querySelectorAll(
    '.code-education-question .tag li'
  );

  openAccordianAndClose(eduProgAboutShort);
  openAccordianAndClose(questions);

  // questionTagLi.forEach((element) => {
  //   element.addEventListener("click", function () {
  //     questionTagLi.forEach((element) => {
  //       element.classList.remove("active");
  //     });
  //     element.classList.add("active");
  //   });
  // });
}

openAccordianAndClose(eduProgAboutShortCorporate);
openAccordianAndClose(questionsCorEdu);
openAccordianAndClose(questionsContact);
openAccordianAndClose(scholarQuestions);
openAccordianAndClose(aboutQuestions);
openAccordianAndClose(corporateQuestions);

questionCorEduTagLi.forEach((element) => {
  element.addEventListener('click', function () {
    questionCorEduTagLi.forEach((element) => {
      element.classList.remove('active');
    });
    element.classList.add('active');
  });
});

contactquestionTagLi.forEach((element) => {
  element.addEventListener('click', function () {
    contactquestionTagLi.forEach((element) => {
      element.classList.remove('active');
    });
    element.classList.add('active');
  });
});

scholarquestionTagLi.forEach((element) => {
  element.addEventListener('click', function () {
    scholarquestionTagLi.forEach((element) => {
      element.classList.remove('active');
    });
    element.classList.add('active');
  });
});

// aboutquestionTagLi.forEach((element) => {
//   element.addEventListener("click", function () {
//     aboutquestionTagLi.forEach((element) => {
//       element.classList.remove("active");
//     });
//     element.classList.add("active");
//   });
// });

corporateTagLi.forEach((element) => {
  element.addEventListener('click', function () {
    corporateTagLi.forEach((element) => {
      element.classList.remove('active');
    });
    element.classList.add('active');
  });
});

const technestPage = document.querySelector('.code-technest-main');
const corporateHomePage2 = document.querySelector('.code-corporate-home-main');
const careerPage = document.querySelector('.code-career-main');
const corporateUsecasePage2 = document.querySelector('.code-usecases-about');

if (corporateHomePage2) {
  const corporateAbout = document.querySelectorAll(
    '.code-corporate-about .code-corporate-about-option'
  );
  const corporateAboutImg = document.querySelectorAll(
    '.code-corporate-about .img'
  );

  let currentElementIndex = 0;
  let allOptions = document.querySelectorAll('.code-corporate-about-option');
  let intervalId;
  currentActive = document.querySelector('.code-corporate-about-option.active');


  allOptions.forEach(elem => {
    elem.addEventListener('click', function(){
      if(!elem.classList.contains('active')){
        clearInterval(intervalId);
        currentActive.classList.remove('active')
        elem.classList.add('active')
        document.querySelector(`[data-img=${currentActive.getAttribute('data')}]`).classList.remove('active');
        currentActive = elem;
        document.querySelector(`[data-img=${currentActive.getAttribute('data')}]`).classList.add('active');
        startInterval();
      }
    })
  });
  

  function showNextElement() {
    corporateAbout[currentElementIndex].classList.remove('active');
    corporateAboutImg[currentElementIndex].classList.remove('active');
    currentElementIndex = (currentElementIndex + 1) % corporateAbout.length;
    corporateAbout[currentElementIndex].classList.add('active');
    corporateAboutImg[currentElementIndex].classList.add('active');
    setTimeout(() => {
      document.querySelector(
        '.code-corporate-about .code-corporate-about-box-right .active img '
      ).style.height = `${
        document.querySelector(
          '.code-corporate-about .code-corporate-about-box-left '
        ).offsetHeight
      }px`;
    }, 300);
  }

  corporateAbout[currentElementIndex].classList.add('active');
  corporateAboutImg[currentElementIndex].classList.add('active');
  document.querySelector(
    '.code-corporate-about .code-corporate-about-box-right .active img '
  ).style.height = `${
    document.querySelector(
      '.code-corporate-about .code-corporate-about-box-left '
    ).offsetHeight
  }px`;

  setInterval(showNextElement, 10000);
}
if (corporateUsecasePage2) {
  const corporateAbout = document.querySelectorAll(
    '.code-usecases-about .code-usecases-about-option'
  );
  const corporateAboutImg = document.querySelectorAll(
    '.code-usecases-about .img'
  );

  let currentElementIndex = 0;

  function showNextElement() {
    corporateAbout[currentElementIndex].classList.remove('active');
    corporateAboutImg[currentElementIndex].classList.remove('active');
    currentElementIndex = (currentElementIndex + 1) % corporateAbout.length;
    corporateAbout[currentElementIndex].classList.add('active');
    corporateAboutImg[currentElementIndex].classList.add('active');
    setTimeout(() => {
      document.querySelector(
        '.code-usecases-about .code-usecases-about-box-right .active img '
      ).style.height = `${
        document.querySelector(
          '.code-usecases-about .code-usecases-about-box-left '
        ).offsetHeight
      }px`;
    }, 300);
  }

  corporateAbout[currentElementIndex].classList.add('active');
  corporateAboutImg[currentElementIndex].classList.add('active');
  document.querySelector(
    '.code-usecases-about .code-usecases-about-box-right .active img '
  ).style.height = `${
    document.querySelector(
      '.code-usecases-about .code-usecases-about-box-left '
    ).offsetHeight
  }px`;

  setInterval(showNextElement, 10000);
}

if (document.querySelector('.code-scholar-about-option')) {

  currentActive = document.querySelector('.code-scholar-about-option.active');
  let intervalId;
  let allOptions = document.querySelectorAll('.code-scholar-about-option');

  allOptions.forEach(elem => {
    elem.addEventListener('click', function(){
      if(!elem.classList.contains('active')){
        clearInterval(intervalId);
        currentActive.classList.remove('active')
        elem.classList.add('active')
        document.querySelector(`[data-img=${currentActive.getAttribute('data')}]`).classList.remove('active');
        currentActive = elem;
        document.querySelector(`[data-img=${currentActive.getAttribute('data')}]`).classList.add('active');
        startInterval();
      }
    })
  })


  startInterval();
}



function startInterval(){
  intervalId = setInterval(() => {
    function showNextElement(){
      currentActive.classList.remove('active');
      if(currentActive.nextElementSibling){
        currentActive.nextElementSibling.classList.add('active')
        let img = document.querySelector(`[data-img=${currentActive.getAttribute('data')}]`);
        img.classList.remove('active');
        img.nextElementSibling.classList.add('active')
        currentActive = currentActive.nextElementSibling
      }else{
        currentActive.classList.remove('active');
        document.querySelector(`[data-img=${currentActive.getAttribute('data')}]`).classList.remove('active');
        currentActive = document.querySelector('.code-scholar-about-option');
        currentActive.classList.add('active')
        document.querySelector(`[data-img=${currentActive.getAttribute('data')}]`).classList.add('active');
      }
    }
    showNextElement();
  }, 10000)
}