var educationPage = document.querySelector(".code-education-main")
var educationMarketingPage = document.querySelector(".code-education-marketing-main")
var educationProgrammingPage = document.querySelector(".code-education-programming-main")
var educationCyberPage = document.querySelector(".code-education-cyber-main")
var vacansyInnerPage = document.querySelector(".code-vacancy-inner-main")
var corporateEducation = document.querySelector(".code-corporate-education-main")
var corporateEducationDesgin = document.querySelector(".code-corporate-education-desgin-main")
var corporateEducationGame = document.querySelector(".code-corporate-education-game-main")
var educationCorporateVirtuPage2 = document.querySelector(".code-corporate-education-virtu-main")
var corportaUsecasesInnerPage = document.querySelector(".code-corporate-usecases-inner-main")

let menuItems;
var sectionTargets = {};

//var studentPage = document.querySelector(".code-student-main")
if (educationPage || educationMarketingPage || educationProgrammingPage || educationCyberPage) {
  menuItems = document.querySelectorAll('.code-education-menu-top li a');
  var educationLeftMenu = document.querySelector(".code-education-menu")
  educationLeftMenu.querySelectorAll(".code-education-menu-top li a").forEach(element => {
    element.addEventListener("click", function () {
      educationLeftMenu.querySelectorAll(".code-education-menu-top li a").forEach(elementt => {
        elementt.classList.remove("active")
      })

      element.classList.add("active")
    })
  })


  var educationMobileMenu = document.querySelector(".code-education-menu-mobile")
  educationMobileMenu.querySelector(".menu-icon").addEventListener("click", function () {
    educationMobileMenu.classList.add("active")
  })
  educationMobileMenu.querySelector(".close-icon").addEventListener("click", function () {
    educationMobileMenu.classList.remove("active")
  })
  educationMobileMenu.querySelectorAll('li').forEach(element => {
    element.addEventListener("click", function () {
      educationMobileMenu.querySelectorAll('li').forEach(x => {
        x.classList.remove("active")
      })
      element.classList.add('active')
      educationMobileMenu.classList.remove("active")

    })
  })

}


if (corporateEducation || corporateEducationDesgin || corporateEducationGame || educationCorporateVirtuPage2) {
  menuItems = document.querySelectorAll('.code-corporate-education-menu-top li a');
  var educationLeftMenu = document.querySelector(".code-corporate-education-menu")
  educationLeftMenu.querySelectorAll(".code-corporate-education-menu-top li a").forEach(element => {
    element.addEventListener("click", function () {
      educationLeftMenu.querySelectorAll(".code-corporate-education-menu-top li a").forEach(elementt => {
        elementt.classList.remove("active")
      })

      element.classList.add("active")
    })
  })


  var educationMobileMenu = document.querySelector(".code-education-menu-mobile")
  educationMobileMenu.querySelector(".menu-icon").addEventListener("click", function () {
    educationMobileMenu.classList.add("active")
  })
  educationMobileMenu.querySelector(".close-icon").addEventListener("click", function () {
    educationMobileMenu.classList.remove("active")
  })
  educationMobileMenu.querySelectorAll('li').forEach(element => {
    element.addEventListener("click", function () {
      educationMobileMenu.querySelectorAll('li').forEach(x => {
        x.classList.remove("active")
      })
      element.classList.add('active')
      educationMobileMenu.classList.remove("active")

    })
  })
}

if (vacansyInnerPage) {
  menuItems = document.querySelectorAll('.code-vacancy-inner-menu-top li a');

  var educationMobileMenu = document.querySelector(".code-vacancy-inner-menu-mobile")
  educationMobileMenu.querySelector(".menu-icon").addEventListener("click", function () {
    educationMobileMenu.classList.add("active")
  })
  educationMobileMenu.querySelector(".close-icon").addEventListener("click", function () {
    educationMobileMenu.classList.remove("active")
  })
  educationMobileMenu.querySelectorAll('li').forEach(element => {
    element.addEventListener("click", function () {
      educationMobileMenu.querySelectorAll('li').forEach(x => {
        x.classList.remove("active")
      })
      element.classList.add('active')
      educationMobileMenu.classList.remove("active")

    })
  })
}
if (corportaUsecasesInnerPage) {
  var educationLeftMenu = document.querySelector(".code-corporate-usecases-inner-menu")
  educationLeftMenu.querySelectorAll(".code-corporate-usecases-inner-menu-top li a").forEach(element => {
    element.addEventListener("click", function () {
      educationLeftMenu.querySelectorAll(".code-corporate-usecases-inner-menu-top li a").forEach(elementt => {
        elementt.classList.remove("active")
      })

      element.classList.add("active")
    })
  })


  var educationMobileMenu = document.querySelector(".code-usecases-inner-menu-mobile")
  educationMobileMenu.querySelector(".menu-icon").addEventListener("click", function () {
    educationMobileMenu.classList.add("active")
  })
  educationMobileMenu.querySelector(".close-icon").addEventListener("click", function () {
    educationMobileMenu.classList.remove("active")
  })
  educationMobileMenu.querySelectorAll('li').forEach(element => {
    element.addEventListener("click", function () {
      educationMobileMenu.querySelectorAll('li').forEach(x => {
        x.classList.remove("active")
      })
      element.classList.add('active')
      educationMobileMenu.classList.remove("active")

    })
  })
}

if (menuItems) {

  menuItems.forEach((menuItem) => {
    const target = menuItem.getAttribute('data-target');
    sectionTargets[target] = menuItem;
  });

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', (event) => {
      event.preventDefault();
      const target = menuItem.getAttribute('data-target');
      const section = document.getElementById(target);
      if (section) {
        isScrolling = true;
        const sectionTop = section.offsetTop;
        window.scrollTo({
          top: sectionTop,
          behavior: 'smooth',
        });

        isScrolling = false;
      }
    });
  });

}
var activeSection;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (sectionTargets) {
    const visibleSection = Object.keys(sectionTargets).find((target) => {
      const section = document.getElementById(target);
      if (!section) return false;
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        activeSection = section;
      }
      if (scrollY >= sectionTargets[menuItems[0].getAttribute('data-target')].offsetTop &&
        scrollY <= sectionTargets[menuItems[0].getAttribute('data-target')].offsetTop + sectionTargets[menuItems[0].getAttribute('data-target')].offsetHeight) {
        activeSection = document.getElementById(menuItems[0].getAttribute('data-target'))
      }
    });

    menuItems.forEach((menuItem) => {
      menuItem.classList.remove('active');
    });

    if (activeSection) {
      const target = activeSection.getAttribute('id');
      const activeMenuItem = document.querySelector(`[data-target="${target}"]`);
      if (activeMenuItem) {
        activeMenuItem.classList.add('active');
      }
    }
  }

});

window.addEventListener('load', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});



