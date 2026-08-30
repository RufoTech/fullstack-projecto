


const navbarMenuFull = document.getElementById('code-navbar-menu-full');
const navmain = document.querySelector('nav');
const dropDownSlider = document.getElementById('code-dropdown-slider-menu');
const dropDownSliderLi = document.querySelectorAll('.code-nav-dropdown-left li');
const dropDownSliderLeft = document.querySelector('.code-nav-dropdown-left');
const navbarMenuTitle = document.querySelector('.code-navbar-menu-item');
const dropDownSliderRightInner = document.querySelector('.code-nav-dropdown-right-inner');
const li = document.querySelectorAll('li');
const dropDownMain = document.querySelector(".code-dropdown-menu");
const dropDownSliderRight = document.querySelector(".code-nav-dropdown-right")
const overlay = document.querySelector(".overlay")

let maxDropDownHeight = 0

if(navbarMenuFull.querySelectorAll('li')[1]!=undefined)
navbarMenuFull.querySelectorAll('li')[1].addEventListener('mouseover', () => {

    dropDownMain.style.setProperty('--after-background-image', `url(../../../assets/images/navbar/type=programming.png)`);
})

if (dropDownSliderLeft) {
    dropDownSliderLeft.querySelectorAll('li').forEach(element => {
        element.addEventListener('mouseover', () => {
            let color = element.getAttribute("data-color");
            dropDownMain.style.setProperty("--after-background-color", color);
            let newImageUrl = `url(../../../assets/images/navbar/${color})`
            dropDownMain.style.setProperty('--after-background-image', newImageUrl);

        })
    })
}


navbarMenuFull.addEventListener('mouseover', () => {

    // maxDropDownHeight = dropDownSliderLeft.clientHeight
    //console.log(maxDropDownHeight ,"aaa")
    maxDropDownHeight = 0
    for (const liElement of dropDownSliderLi) {

        maxDropDownHeight = maxDropDownHeight + liElement.offsetHeight
        dropDownSliderRightInner.style.height = `${maxDropDownHeight}px`
        dropDownSliderRight.style.height = `${maxDropDownHeight + dropDownSliderRight.style.paddingTop * 2}px`
        dropDownSliderRightInner.querySelectorAll(".code-nav-dropdown-right-inner-item").forEach(x => {
            x.style.height = `${maxDropDownHeight}px`

        })
        liElement.addEventListener('mouseover', () => {
            dropDownSliderLeft.style.setProperty("--after-top", `${liElement.offsetTop}px`);
            position = -maxDropDownHeight
            var value = dropDownSlider.getAttribute("data-hover");
            dropDownSliderRightInner.style.transform = `translateY(${position * value}px)`
            dropDownSliderRightInner.querySelectorAll(".code-nav-dropdown-right-inner-item")[value].style.opacity = "1"

        });
        liElement.addEventListener('mouseleave', () => {

            var value = dropDownSlider.getAttribute("data-hover");
            dropDownSliderRightInner.querySelectorAll(".code-nav-dropdown-right-inner-item")[value].style.opacity = "1"
            dropDownSliderRightInner.querySelectorAll(".code-nav-dropdown-right-inner-item")[value].style.height = `${maxDropDownHeight}px`

        });
    }
    setTimeout(() => {
        // navbarMenuTitle.querySelectorAll("li").forEach(element => {
        //     if(element.classList.contains('has-drop'))
        // })
        navbarMenuFull.classList.add('open');

    });

});

navbarMenuFull.addEventListener('mouseleave', () => {
    setTimeout(() => {
        navbarMenuFull.classList.remove('open');
        // dropDownMain.querySelectorAll('.code-dropdown-menu-item')[Array.from(navbarMenuTitle.querySelectorAll("li")).indexOf(liElement)].style.setProperty("--animation", `moveLeft`);
        dropDownMain.querySelectorAll('.code-dropdown-menu-item').forEach(item=>{
            item.style.setProperty("--animation","")
            item.style.opacity="0"
        })
    });
});


if (dropDownSlider) {
    dropDownSlider.addEventListener('mouseover', () => {
        setTimeout(() => {
            dropDownSlider.classList.add('open');
        });
    });

    dropDownSlider.addEventListener('mouseleave', () => {
        dropDownSlider.classList.remove('open');
    });
}





for (const liElement of navbarMenuTitle.querySelectorAll("li")) {
    let x = dropDownMain.style.width

    liElement.addEventListener('mouseover', (e) => {

        if (liElement.classList.contains('has-drop')) {
            dropDownMain.style.height = 'auto'
            overlay.style.opacity = '1'

        }
        else {
            dropDownMain.style.height = '0px'
            overlay.style.opacity = '0'

        }


        if (dropDownMain.querySelectorAll('.code-dropdown-menu-item')[Array.from(navbarMenuTitle.querySelectorAll("li")).indexOf(liElement)]) {
            var computedStyle = window.getComputedStyle(dropDownMain.querySelectorAll('.code-dropdown-menu-item')[Array.from(navbarMenuTitle.querySelectorAll("li")).indexOf(liElement)]);
            var opacityValue = computedStyle.getPropertyValue('opacity');
            if(opacityValue!="1"){
                dropDownMain.querySelectorAll('.code-dropdown-menu-item')[Array.from(navbarMenuTitle.querySelectorAll("li")).indexOf(liElement)].style.setProperty("--animation", `moveRight`)
                dropDownMain.querySelectorAll('.code-dropdown-menu-item')[Array.from(navbarMenuTitle.querySelectorAll("li")).indexOf(liElement)].style.opacity="1"
            }

        }

        navbarMenuTitle.style.setProperty("--after-width", `${liElement.offsetWidth}px`);
        navbarMenuTitle.style.setProperty("--after-left", `${liElement.offsetLeft}px`);
        //overlay.style.opacity = '1'



        dropDownMain.style.width = x;

        navbarMenuFull.setAttribute('data-hover', Array.from(navbarMenuTitle.querySelectorAll("li")).indexOf(liElement));
        if (dropDownSlider) {
            dropDownSliderLeft.style.setProperty("--after-top", `${liElement.offsetTop}px`);
            dropDownSliderRightInner.style.transform = `translateY(${0}px)`

            dropDownSliderRightInner.querySelectorAll(".code-nav-dropdown-right-inner-item")[0].style.opacity = "1"

        }

        const rect = liElement.getBoundingClientRect();
        const t = e.clientX - rect.left;

        if (dropDownMain.querySelectorAll('.code-dropdown-menu-item')[Array.from(navbarMenuTitle.querySelectorAll("li")).indexOf(liElement)]) {
            var computedStyle = window.getComputedStyle(dropDownMain.querySelectorAll('.code-dropdown-menu-item')[Array.from(navbarMenuTitle.querySelectorAll("li")).indexOf(liElement)]);
            var opacityValue = computedStyle.getPropertyValue('opacity');
            console.log(opacityValue);
            if(opacityValue!="1"){
                dropDownMain.querySelectorAll('.code-dropdown-menu-item').forEach(item=>{
                    item.style.setProperty("--animation","")
                    item.style.opacity="0"
                })
            if (t < rect.width / 2) {
                dropDownMain.querySelectorAll('.code-dropdown-menu-item')[Array.from(navbarMenuTitle.querySelectorAll("li")).indexOf(liElement)].style.setProperty("--animation", `moveLeft`);
                dropDownMain.querySelectorAll('.code-dropdown-menu-item')[Array.from(navbarMenuTitle.querySelectorAll("li")).indexOf(liElement)].style.opacity="1";
            } else {
                dropDownMain.querySelectorAll('.code-dropdown-menu-item')[Array.from(navbarMenuTitle.querySelectorAll("li")).indexOf(liElement)].style.setProperty("--animation", `moveRight`);
                dropDownMain.querySelectorAll('.code-dropdown-menu-item')[Array.from(navbarMenuTitle.querySelectorAll("li")).indexOf(liElement)].style.opacity="1";
            }
            }
            
        }else{
            dropDownMain.querySelectorAll('.code-dropdown-menu-item').forEach(item=>{
                item.style.setProperty("--animation","")
                item.style.opacity="0"
            })
        }





        const listItems = Array.from(navbarMenuTitle.querySelectorAll("li"));
        const index = listItems.indexOf(liElement);
        let q = dropDownMain.querySelectorAll(".code-dropdown-menu-item")[index]
        if (q) {
            if (q.children.length == 1) {
                let t = q.children[0].offsetWidth
                // dropDownMain.style.width = `${t}px`
            }
        }


        dropDownMain.addEventListener('mouseover', () => {
            navbarMenuTitle.style.setProperty("--after-width", `${liElement.offsetWidth}px`);
            overlay.style.opacity = '1'

        })
    })


    dropDownMain.addEventListener('mouseleave', () => {
        navbarMenuTitle.style.setProperty("--after-width", `0px`);
        overlay.style.opacity = '0'

    })
    navbarMenuFull.addEventListener("mouseleave", () => {
        navbarMenuTitle.style.setProperty("--after-width", `0px`);
        overlay.style.opacity = '0'

    })
    // liElement.addEventListener("mouseleave", (e) => {
    //     const rect = liElement.getBoundingClientRect();
    //     const t = e.clientX - rect.left;

    //     if (t < rect.width / 2) {
    //         dropDownMain.querySelectorAll('.code-dropdown-menu-item')[Array.from(navbarMenuTitle.querySelectorAll("li")).indexOf(liElement)].style.setProperty("--animation", `moveLeft`);
    //     } else {
    //         dropDownMain.querySelectorAll('.code-dropdown-menu-item')[Array.from(navbarMenuTitle.querySelectorAll("li")).indexOf(liElement)].style.setProperty("--animation", `moveRight`);
    //     }
    // })

}


if (dropDownSlider) {
    for (const liElement of dropDownSlider.children[0].children) {
        liElement.addEventListener('mouseover', () => {
            dropDownSlider.setAttribute('data-hover', Array.from(dropDownSlider.children[0].children).indexOf(liElement));
        });
    }
}





let mobilMenuBtn = document.querySelector(".mobile .mobile-menu")
let mobilCloseBtn = document.querySelector(".mobile .mobile-close")
let mobilSendBtn = document.querySelector(".mobile .mobile-send")
let mobilDropMenu = document.querySelector(".mobile-dropdown")
const bodyChildren = document.body.children;
let continerChild = document.querySelector('.code-container').children
let educationItem = document.querySelectorAll(".education-item")
let codeLogo = document.querySelector(".code-logo")
let beforeBtn = document.querySelector(".before-btn")

mobilMenuBtn.addEventListener("click", function () {
    mobilCloseBtn.style.display = "block"
    mobilSendBtn.style.display = "none"
    mobilMenuBtn.style.display = "none"
    mobilDropMenu.classList.remove("nav-active")
    for (let i = 0; i < continerChild.length; i++) {
        if (continerChild[i].tagName !== 'HEADER') {
            continerChild[i].classList.add('nav-active');

        }
    }


})

mobilCloseBtn.addEventListener("click", function () {
    mobilMenuBtn.style.display = "block"
    mobilSendBtn.style.display = "block"
    mobilCloseBtn.style.display = "none"
    mobilDropMenu.classList.add("nav-active")
    for (let i = 0; i < continerChild.length; i++) {
        if (continerChild[i].tagName !== 'HEADER') {
            continerChild[i].classList.remove('nav-active');

        }
    }


})

educationItem.forEach(element => {
    element.addEventListener('click', function () {
        if (element.querySelector(".education-dropdown")) {
            element.querySelector(".education-dropdown").classList.remove("nav-active")
            mobilDropMenu.style.height = `${element.querySelector(".education-dropdown").offsetHeight}px`
            mobilDropMenu.style.overflow = "hidden"
            beforeBtn.classList.remove("nav-active")
            codeLogo.classList.add("nav-active")

        }
        else {
            
        }

        beforeBtn.addEventListener("click", function () {
            element.querySelector(".education-dropdown").classList.add("nav-active")
            mobilDropMenu.style.height = "auto"
            beforeBtn.classList.add("nav-active")
            codeLogo.classList.remove("nav-active")

        })

        mobilCloseBtn.addEventListener("click", function () {
            mobilDropMenu.style.height = "auto"
            element.querySelector(".education-dropdown").classList.add("nav-active")
            beforeBtn.classList.add("nav-active")
            codeLogo.classList.remove("nav-active")
        })
    })
})


jQuery(document).ready(function ($) {
    $('.accordion-button').on('click', function () {
        var button = $(this);
        var target = $(button.attr('data-bs-target'));

        if (target.hasClass('show')) {
            target.slideUp(300, function () {
                target.removeClass('show');
                button.addClass('collapsed');
                button.attr('aria-expanded', 'false');
            });
        } else {
            var parent = $(button.attr('data-bs-parent'));
            if (parent.length) {
                parent.find('.accordion-collapse.show').slideUp(300, function () {
                    $(this).removeClass('show');
                    parent.find('.accordion-button').addClass('collapsed').attr('aria-expanded', 'false');
                });
            }
            target.slideDown(300, function () {
                target.addClass('show');
                button.removeClass('collapsed');
                button.attr('aria-expanded', 'true');
            });
        }
    });
    if (window.innerWidth < 768) {
        jQuery("a.amuraciet").each(function(){
            let targetUrl='/muraciet/';
            let tedris_id='?mbl=1';
            if(jQuery("body").data("tedris_id")!=undefined)tedris_id='?tdrs='+jQuery("body").data("tedris_id");
            targetUrl='/muraciet/'+tedris_id;
            var urlParams = new URLSearchParams(window.location.search);
            var utmParams = [];
            urlParams.forEach(function(value, key) {
                if (key.startsWith('utm_')) {
                    utmParams.push(key + '=' + encodeURIComponent(value));
                }
            });
            if (utmParams.length > 0) {
                targetUrl += '&' + utmParams.join('&');
            }
            jQuery(this).attr("href",targetUrl);
        });
    }
});





(function() {
    function setCookie(name, value, expires) {
        var d = new Date();
        d.setTime(d.getTime() + (expires * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function getUTMParameters() {
        var utmParams = ["utm_campaign", "utm_medium", "utm_source"];
        var utmValues = [];
        utmParams.forEach(function(param) {
        var value = new URLSearchParams(window.location.search).get(param);
        if (value) {
            utmValues.push(param + "=" + value);
        }
        });
        return utmValues.join(',');
    }

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear(),
            hour = '' + d.getHours(),
            minute = '' + d.getMinutes(),
            second = '' + d.getSeconds();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        if (hour.length < 2) hour = '0' + hour;
        if (minute.length < 2) minute = '0' + minute;
        if (second.length < 2) second = '0' + second;

        return [year, month, day].join('-') + ' ' + [hour, minute, second].join(':');
    }

    if (!getCookie("ca_1stvis")) {
        var referrer = document.referrer ? new URL(document.referrer).hostname : "direct";
        var utmParameters = getUTMParameters();
        var currentTime = formatDate(new Date());
        var cookieValue = referrer + (utmParameters ? "|" + utmParameters : "|") + "|" + currentTime;

        setCookie("ca_1stvis", cookieValue, 365);
        setCookie("ca_lastvis", cookieValue, 365);
    }

    var referrer_last = document.referrer ? new URL(document.referrer).hostname : "direct";
    var utmParameters_last = getUTMParameters();
    if(referrer_last!='direct' || utmParameters_last!=''){
        var currentTime_last = formatDate(new Date());
        var cookieValue_last = referrer_last + (utmParameters_last ? "|" + utmParameters_last : "|") + "|" + currentTime_last;
        setCookie("ca_lastvis", cookieValue_last, 365);
    }


    
    
  
  })();