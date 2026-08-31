let blogpage = document.querySelector(".code-blog-main")
let body = document.querySelector("body")
let careerpage = document.querySelector(".code-career-main")
let eventpage = document.querySelector(".code-event-main")
let educationpage = document.querySelector(".code-education-main")
let educationMarketingpage = document.querySelector(".code-education-marketing-main")
let educationProgrammingpage = document.querySelector(".code-education-programming-main")
let educationCyberpage = document.querySelector(".code-education-cyber-main")

let educationCorporatePage = document.querySelector(".code-corporate-education-main")
let educationCorporateVirtuPage = document.querySelector(".code-corporate-education-virtu-main")
let corporateEducationDesgin2 = document.querySelector(".code-corporate-education-desgin-main")
let corporateEducationGame2 = document.querySelector(".code-corporate-education-game-main")
let container = document.querySelector(".code-container")
let corporateContaier = document.querySelector(".code-corporate")
let coporateHomePage = document.querySelector(".code-corporate-home-main")
let studentPage = document.querySelector(".code-student-main")
let educationModelPage = document.querySelector(".code-education-model-main")

if (blogpage) {
    let height = container.offsetHeight

    let blogcarditem = document.querySelectorAll(".blog-cards-item")
    let blogdetail = document.querySelector(".blog-detail")
    let closeBtn = document.querySelector(".code-close-btn")
    let blogDetailBox = document.querySelector(".blog-detail-box");

    window.addEventListener('scroll', (event) => {
        if(blogDetailBox!=null){
            if (window.scrollY >= 64) {
                blogDetailBox.style.setProperty('--after-pos', `fixed`);

            } else {
                blogDetailBox.style.setProperty('--after-pos', `absolute`);

            }
        }
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const currentScroll = window.scrollY;
        const scrollPercentage = (currentScroll / maxScroll) * 100;

        const afterWidth = Math.min(scrollPercentage, 100);

        blogDetailBox.style.setProperty('--after-width', `${afterWidth}%`);
    });



    let previousScrollPosition = 0;
    blogcarditem.forEach(element => {
        element.addEventListener("click", function () {
            previousScrollPosition = window.scrollY;
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            blogdetail.style.display = "block"
            container.style.height = `${blogdetail.offsetHeight}px`
            // container.style.overflow = "hidden"

            // setTimeout(() => {
                blogdetail.querySelector(".blog-detail-top").style.height = "64px"
                blogdetail.querySelector(".blog-detail-box").style.height = "calc(100vh - 64px)"
                blogdetail.querySelector(".blog-detail-box").style.overflowY = "scroll"
                document.querySelector("body").style.overflowY = "hidden"
            // }, 500);
        })
    });

    if(closeBtn!=undefined)
    closeBtn.addEventListener("click", function () {
        blogdetail.style.display = "none"
        container.style.height = `auto`

        blogdetail.querySelector(".blog-detail-top").style.height = null
        blogdetail.querySelector(".blog-detail-box").style.height = null
        blogdetail.querySelector(".blog-detail-box").style.overflowY = null
        document.querySelector("body").style.overflowY = null

        window.scrollTo({
            top: previousScrollPosition,
            behavior: 'smooth'
        });

    })
}
if (careerpage) {
    let careerDetailBtn = document.querySelectorAll(".career-detail-btn")
    let careerDetail = document.querySelector(".career-detail")
    let closeBtn = document.querySelector(".code-close-btn")
    let height = container.offsetHeight
    let blogDetailBox = document.querySelector(".career-detail-box");

    if(blogDetailBox!=null)
    window.addEventListener('scroll', (event) => {
        if (window.scrollY >= 64) {
            blogDetailBox.style.setProperty('--after-pos', `fixed`);

        } else {
            blogDetailBox.style.setProperty('--after-pos', `absolute`);

        }
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const currentScroll = window.scrollY;
        const scrollPercentage = (currentScroll / maxScroll) * 100;

        const afterWidth = Math.min(scrollPercentage, 100);

        blogDetailBox.style.setProperty('--after-width', `${afterWidth}%`);
    });

    let previousScrollPosition = 0;
    careerDetailBtn.forEach(element => {
        element.addEventListener("click", function () {
            previousScrollPosition = window.scrollY;
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            careerDetail.style.display = "block"
            container.style.height = `${careerDetail.offsetHeight}px`
            // container.style.overflow = "hidden"

            // setTimeout(() => {
                careerDetail.querySelector(".career-detail-top").style.height = "64px"
                careerDetail.querySelector(".career-detail-box").style.height = "calc(100vh - 64px)"
                careerDetail.querySelector(".career-detail-box").style.overflowY = "scroll"
                document.querySelector("body").style.overflowY = "hidden"
            // }, 500);

        })
    });

    if(closeBtn!=undefined)
    closeBtn.addEventListener("click", function () {
        careerDetail.style.display = "none"
        container.style.height = `auto`
        container.style.overflow = ""

        careerDetail.querySelector(".career-detail-top").style.height = null
        careerDetail.querySelector(".career-detail-box").style.height = null
        careerDetail.querySelector(".career-detail-box").style.overflowY = null
        document.querySelector("body").style.overflowY = null

        window.scrollTo({
            top: previousScrollPosition,
            behavior: 'smooth'
        });
    })
}

if (educationModelPage) {
    let careerDetailBtn = document.querySelectorAll(".code-education-model-card")
    let careerDetail = document.querySelector(".education-model-detail")
    let closeBtn = document.querySelector(".code-close-btn")
    let height = container.offsetHeight
    let blogDetailBox = document.querySelector(".education-model-detail-box");

    window.addEventListener('scroll', (event) => {
        if (window.scrollY >= 64) {
            blogDetailBox.style.setProperty('--after-pos', `fixed`);

        } else {
            blogDetailBox.style.setProperty('--after-pos', `absolute`);

        }
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const currentScroll = window.scrollY;
        const scrollPercentage = (currentScroll / maxScroll) * 100;

        const afterWidth = Math.min(scrollPercentage, 100);

        blogDetailBox.style.setProperty('--after-width', `${afterWidth}%`);
    });

    let previousScrollPosition = 0;
    careerDetailBtn.forEach(element => {
        element.addEventListener("click", function () {
            previousScrollPosition = window.scrollY;
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            careerDetail.style.display = "block"
            container.style.height = `${careerDetail.offsetHeight}px`

            const detailBoxContent = careerDetail.querySelector(".education-model-detail-box-content .text");
            let rawHtmlContent = this.getAttribute("data-information"); // Get the encoded HTML from the attribute
            
            rawHtmlContent = rawHtmlContent.replace(/%/g, '%25');


            detailBoxContent.innerHTML = decodeURIComponent(rawHtmlContent); // Decode and set the content as HTML


            if(this.getAttribute("data-inimage")!=null){
                detailBoxContent.innerHTML=detailBoxContent.innerHTML+'<img class="d-none d-sm-block" src="'+this.getAttribute("data-inimage")+'" style="max-width:100%">';
            }

            if(this.getAttribute("data-inimage-mobile")!=null){
                detailBoxContent.innerHTML=detailBoxContent.innerHTML+'<img class="d-sm-none" src="'+this.getAttribute("data-inimage-mobile")+'" style="max-width:100%">';
            }

            if(this.getAttribute("data-video")!=null && this.getAttribute("data-video")!=""){
                detailBoxContent.innerHTML=detailBoxContent.innerHTML+this.getAttribute("data-video");
            }

            var videoHTML = jQuery(this).data('video'); // Get encoded video HTML
            jQuery('.video').html(videoHTML); // Render v

            const detailBoxTitle = careerDetail.querySelector(".education-model-detail-box h4");
            const rawHtmlTitle = this.getAttribute("data-title"); // Get the encoded HTML from the attribute
            detailBoxTitle.innerHTML = decodeURIComponent(rawHtmlTitle); // Decode and set the content as HTML
    

            // setTimeout(() => {
                careerDetail.querySelector(".education-model-detail-top").style.height = "64px"
                careerDetail.querySelector(".education-model-detail-box").style.height = "calc(100vh - 64px)"
                careerDetail.querySelector(".education-model-detail-box").style.overflowY = "scroll"
                document.querySelector("body").style.overflowY = "hidden"
            // }, 500);

        })
    });

    if(closeBtn!=undefined)
    closeBtn.addEventListener("click", function () {
        careerDetail.style.display = "none"
        container.style.height = `auto`
        container.style.overflow = ""

        careerDetail.querySelector(".education-model-detail-top").style.height = null
        careerDetail.querySelector(".education-model-detail-box").style.height = null
        careerDetail.querySelector(".education-model-detail-box").style.overflowY = null
        document.querySelector("body").style.overflowY = null

        window.scrollTo({
            top: previousScrollPosition,
            behavior: 'smooth'
        });
    })
}


if (eventpage) {
    let eventcarditem = document.querySelectorAll(".code-all-event .event-cards-item")
    let eventdetail = document.querySelector(".event-detail")
    let closeBtn = document.querySelector(".code-close-btn")
    let previousScrollPosition = 0;
    eventcarditem.forEach(element => {
        element.addEventListener("click", function () {
            previousScrollPosition = window.scrollY;
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            eventdetail.style.display = "block"
            container.style.height = `${eventdetail.offsetHeight}px`
            // container.style.overflow = "hidden"


            // setTimeout(() => {
                eventdetail.querySelector(".event-detail-top").style.height = "64px"
                eventdetail.querySelector(".event-detail-box").style.height = "calc(100vh - 64px)"
                eventdetail.querySelector(".event-detail-box").style.overflowY = "scroll"
                document.querySelector("body").style.overflowY = "hidden"
            // }, 500);


        })
    });

    if(closeBtn!=undefined)
    closeBtn.addEventListener("click", function () {
        eventdetail.style.display = "none"
        container.style.height = `auto`

        eventdetail.querySelector(".event-detail-top").style.height = null
        eventdetail.querySelector(".event-detail-box").style.height = null
        eventdetail.querySelector(".event-detail-box").style.overflowY = null
        document.querySelector("body").style.overflowY = null

        window.scrollTo({
            top: previousScrollPosition,
            behavior: 'smooth'
        });

    })
}

if (educationpage || educationMarketingpage || educationProgrammingpage || educationCyberpage) {
    let educationcarditem = document.querySelectorAll(".code-education-instructors .code-education-instructors-card")
    let educationdetail = document.querySelector(".education-detail")
    let closeBtn = document.querySelector(".code-close-btn")
    let previousScrollPosition = 0;
    educationcarditem.forEach(element => {
        element.addEventListener("click", function () {
            previousScrollPosition = window.scrollY;
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            educationdetail.style.display = "block"
            container.style.height = `${educationdetail.offsetHeight}px`
            // container.style.overflow = "hidden"

            // setTimeout(() => {
                educationdetail.querySelector(".education-detail-top").style.height = "64px"
                educationdetail.querySelector(".education-detail-box").style.height = "calc(100vh - 64px)"
                educationdetail.querySelector(".education-detail-box").style.overflowY = "scroll"
                document.querySelector("body").style.overflowY = "hidden"
            // }, 500);



        })
    });

    if(closeBtn!=undefined)
    closeBtn.addEventListener("click", function () {
        educationdetail.style.display = "none"
        container.style.height = `auto`

        educationdetail.querySelector(".education-detail-top").style.height = null
        educationdetail.querySelector(".education-detail-box").style.height = null
        educationdetail.querySelector(".education-detail-box").style.overflowY = null
        document.querySelector("body").style.overflowY = null

        window.scrollTo({
            top: previousScrollPosition,
            behavior: 'smooth'
        });
    })
}
// if (educationCorporatePage || corporateEducationDesgin2 || corporateEducationGame2 || educationCorporateVirtuPage) {
//     let educationcarditem = document.querySelectorAll(".code-corporate-education-instructors .code-education-instructors-card")
//     let educationdetail = document.querySelector(" .code-corporate-education-instructors .education-corporate-detail")
//     let closeBtn = document.querySelector(" .code-corporate-education-instructors .code-close-btn")
//     let previousScrollPosition = 0;

//     educationcarditem.forEach(element => {

//         element.addEventListener("click", function () {
//             previousScrollPosition = window.scrollY;
//             window.scrollTo({
//                 top: 0,
//                 behavior: 'smooth'
//             });
//             educationdetail.style.display = "block"
//             corporateContaier.style.height = `${educationdetail.offsetHeight}px`
//             corporateContaier.style.overflow = "hidden"

//             setTimeout(() => {
//                 educationdetail.querySelector(".education-corporate-detail-top").style.height = "64px"
//                 educationdetail.querySelector(".education-corporate-detail-box").style.height = "calc(100vh - 64px)"
//                 educationdetail.querySelector(".education-corporate-detail-box").style.overflowY = "scroll"
//                 document.querySelector("body").style.overflowY = "hidden"
//             }, 500);


//         })
//     });
//     closeBtn.addEventListener("click", function () {
//         educationdetail.style.display = "none"
//         corporateContaier.style.height = `auto`

//         educationdetail.querySelector(".education-corporate-detail-top").style.height = null
//         educationdetail.querySelector(".education-corporate-detail-box").style.height = null
//         educationdetail.querySelector(".education-corporate-detail-box").style.overflowY = null
//         document.querySelector("body").style.overflowY = null

//         window.scrollTo({
//             top: previousScrollPosition,
//             behavior: 'smooth'
//         });
//     })
// }

if (coporateHomePage) {
    let educationcarditem = document.querySelector(".corporate-tools-avatars span")
    let detilOpenBtn = document.querySelector(".corporate-tools button")
    let educationdetail = document.querySelector(".tools-detail")
    let closeBtn = document.querySelector(".code-close-btn")

    let previousScrollPosition = 0;
    let detailOpen = (element) => {
        element.addEventListener("click", function () {
            previousScrollPosition = window.scrollY;
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            educationdetail.style.display = "block"
            container.style.height = `${educationdetail.offsetHeight}px`
            // container.style.overflow = "hidden"

            // setTimeout(() => {
                educationdetail.querySelector(".tools-detail-top").style.height = "64px"
                educationdetail.querySelector(".tools-detail-box").style.height = "calc(100vh - 64px)"
                educationdetail.querySelector(".tools-detail-box").style.overflowY = "scroll"
                document.querySelector("body").style.overflowY = "hidden"
            // }, 500)

        })
    }

    detailOpen(educationcarditem);
    detailOpen(detilOpenBtn)

    if(closeBtn!=undefined)
    closeBtn.addEventListener("click", function () {
        let educationdetail = document.querySelector(".tools-detail")

        document.querySelector("body").style.overflowY = null
        educationdetail.querySelector(".tools-detail-top").style.height = null
        educationdetail.querySelector(".tools-detail-box").style.height = null
        educationdetail.querySelector(".tools-detail-box").style.overflowY = null

        educationdetail.style.display = "none"
        container.style.height = `auto`

        window.scrollTo({
            top: previousScrollPosition,
            behavior: 'smooth'
        });
    })
}

if (studentPage || educationpage) {
    let videoCard = document.querySelectorAll(".code-video-cards .item")
    videoCard.forEach((element, index) => {
        element.addEventListener("click", function () {
            jQuery(".videoyoutube iframe").attr("src",element.getAttribute("data-video"));
            document.querySelector(".code-video-card-modal").style.display = "block"
        })
    })
    document.querySelector(".code-video-card-modal .close").addEventListener("click", function () {
        var videoFrame = document.querySelector(".code-video-card-modal iframe");
        videoFrame.src = videoFrame.src;
        document.querySelector(".code-video-card-modal").style.display = "none"

    })






    let studentcarditem = document.querySelectorAll(".code-blog .code-blog-cards-item")
    let studentdetail = document.querySelector(".student-detail")
    let closeBtn = document.querySelector(".code-close-btn")
    let previousScrollPosition = 0;
    studentcarditem.forEach(element => {
        element.addEventListener("click", function () {
            previousScrollPosition = window.scrollY;
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            studentdetail.style.display = "block"
            container.style.height = `${studentdetail.offsetHeight}px`
            // container.style.overflow = "hidden"
            // setTimeout(() => {
                jQuery(".student-detail-box").hide();
                let tempid="#student-detail-box-"+  element.getAttribute("data-id");
                jQuery(tempid).show();
                console.log(tempid+" .student-detail-top");
                studentdetail.querySelector(".student-detail-top").style.height = "64px"
                studentdetail.querySelector(tempid).style.height = "calc(100vh - 64px)"
                studentdetail.querySelector(tempid).style.overflowY = "scroll"
                document.querySelector("body").style.overflowY = "hidden"
            // }, 500)

        })
    });

    if(closeBtn!=undefined)
    closeBtn.addEventListener("click", function () {
        studentdetail.querySelector(".student-detail-top").style.height = null
        studentdetail.querySelector(".student-detail-box").style.height = null
        studentdetail.querySelector(".student-detail-box").style.overflowY = null
        document.querySelector("body").style.overflowY = null

        studentdetail.style.display = "none"
        container.style.height = `auto`
        window.scrollTo({
            top: previousScrollPosition,
            behavior: 'smooth'
        });
    })
}