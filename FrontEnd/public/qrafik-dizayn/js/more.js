let homePage3 = document.querySelector(".code-home-main")
let corporatehomePage = document.querySelector(".code-corporate-home-main")
let educationPage4 = document.querySelector(".code-education-main")
let educationMarketingPage4 = document.querySelector(".code-education-marketing-main")
let educationProgramPage4 = document.querySelector(".code-education-programming-main")
let educationCyberPage4 = document.querySelector(".code-education-cyber-main")
let allCoursesPage = document.querySelector(".code-all-courses-main")
let corporateAllCoursesPage = document.querySelector(".code-corporate-all-courses-main")
let studentsPage = document.querySelector(".code-student-main")
let blogPage = document.querySelector(".code-blog-main")



if (homePage3) {

    let cardView = 8
    let cardViewNext = 4
    let cards = homePage3.querySelectorAll(".code-home-study-areas .code-study-areas-card")
    for (let index = 0; index < (cards.length < cardView ? cards.length : cardView); index++) {
        cards[index].style.display = 'block'
    }

    if (cards.length <= 8) {
        homePage3.querySelector(".code-home-study-areas .more-btn").style.display = 'none'
    }

    homePage3.querySelector(".code-home-study-areas .more-btn").addEventListener('click', function () {

        for (let index = cardView; index < cardView + cardViewNext; index++) {
            if (cards[index]) {
                cards[index].style.display = 'block'
            }
            else {
                homePage3.querySelector(".code-home-study-areas .more-btn").style.display = 'none'
            }
        }

        cardView += cardViewNext
    })
}

if (educationPage4) {
    let cardView = 4
    let cardViewNext = 2
    let cards = educationPage4.querySelectorAll(".code-education-student-works .code-education-student-project")
    for (let index = 0; index < (cards.length < cardView ? cards.length : cardView); index++) {
        cards[index].style.display = 'block'
    }
    
    if(educationPage4.querySelector(".code-education-student-works .more-btn")!=null){
        if (cards.length <= 4 ) {
            educationPage4.querySelector(".code-education-student-works .more-btn").style.display = 'none'
        }

        educationPage4.querySelector(".code-education-student-works .more-btn").addEventListener('click', function () {

            for (let index = cardView; index < cardView + cardViewNext; index++) {
                if (cards[index]) {
                    cards[index].style.display = 'block'
                }
                else {
                    educationPage4.querySelector(".code-education-student-works .more-btn").style.display = 'none'
                }
                if (cards[cards.length - 1].style.display == "block") {
                    educationPage4.querySelector(".code-education-student-works .more-btn").style.display = 'none'

                }
            }

            cardView += cardViewNext
        });
    }
}

if (educationMarketingPage4) {
    let cardView = 4
    let cardViewNext = 2
    let cards = educationMarketingPage4.querySelectorAll(".code-education-student-works .code-education-student-project")
    for (let index = 0; index < (cards.length < cardView ? cards.length : cardView); index++) {
        cards[index].style.display = 'block'
    }

    if (cards.length <= 4) {
        educationMarketingPage4.querySelector(".code-education-student-works .more-btn").style.display = 'none'
    }
    educationMarketingPage4.querySelector(".code-education-student-works .more-btn").addEventListener('click', function () {

        for (let index = cardView; index < cardView + cardViewNext; index++) {
            if (cards[index]) {
                cards[index].style.display = 'block'
            }
            else {
                educationMarketingPage4.querySelector(".code-education-student-works .more-btn").style.display = 'none'
            }
            if (cards[cards.length - 1].style.display == "block") {
                educationMarketingPage4.querySelector(".code-education-student-works .more-btn").style.display = 'none'

            }
        }

        cardView += cardViewNext
    })
}

if (educationProgramPage4) {
    let cardView = 4
    let cardViewNext = 2
    let cards = educationProgramPage4.querySelectorAll(".code-education-student-works .code-education-student-project")
    for (let index = 0; index < (cards.length < cardView ? cards.length : cardView); index++) {
        cards[index].style.display = 'block'
    }

    if (cards.length <= 4) {
        educationProgramPage4.querySelector(".code-education-student-works .more-btn").style.display = 'none'
    }
    educationProgramPage4.querySelector(".code-education-student-works .more-btn").addEventListener('click', function () {

        for (let index = cardView; index < cardView + cardViewNext; index++) {
            if (cards[index]) {
                cards[index].style.display = 'block'
            }
            else {
                educationProgramPage4.querySelector(".code-education-student-works .more-btn").style.display = 'none'
            }
            if (cards[cards.length - 1].style.display == "block") {
                educationProgramPage4.querySelector(".code-education-student-works .more-btn").style.display = 'none'

            }
        }

        cardView += cardViewNext
    })
}

if (educationCyberPage4) {
    let cardView = 4
    let cardViewNext = 2
    let cards = educationCyberPage4.querySelectorAll(".code-education-student-works .code-education-student-project")
    for (let index = 0; index < (cards.length < cardView ? cards.length : cardView); index++) {
        cards[index].style.display = 'block'
    }

    if (cards.length <= 4) {
        educationCyberPage4.querySelector(".code-education-student-works .more-btn").style.display = 'none'
    }
    educationCyberPage4.querySelector(".code-education-student-works .more-btn").addEventListener('click', function () {

        for (let index = cardView; index < cardView + cardViewNext; index++) {
            if (cards[index]) {
                cards[index].style.display = 'block'
            }
            else {
                educationCyberPage4.querySelector(".code-education-student-works .more-btn").style.display = 'none'
            }
            if (cards[cards.length - 1].style.display == "block") {
                educationCyberPage4.querySelector(".code-education-student-works .more-btn").style.display = 'none'

            }
        }

        cardView += cardViewNext
    })
}

if (corporatehomePage) {

    let cardView = 8
    let cardViewNext = 4
    let cards = corporatehomePage.querySelectorAll(".code-corporate-study-areas .code-study-areas-card")
    for (let index = 0; index < (cards.length < cardView ? cards.length : cardView); index++) {
        cards[index].style.display = 'block'
    }

    if (cards.length <= 8) {
        corporatehomePage.querySelector(".code-corporate-study-areas .more-btn").style.display = 'none'
    }
    corporatehomePage.querySelector(".code-corporate-study-areas .more-btn").addEventListener('click', function () {

        for (let index = cardView; index < cardView + cardViewNext; index++) {
            if (cards[index]) {
                cards[index].style.display = 'block'
            }
            else {
                corporatehomePage.querySelector(".code-corporate-study-areas .more-btn").style.display = 'none'
            }
        }

        cardView += cardViewNext
    })
}

if (allCoursesPage) {

    let allCardsSections = document.querySelectorAll(".code-study-areas-cards-section")
    allCardsSections.forEach(element => {
        let cardView = 8
        let cardViewNext = 4
        let cards = element.querySelectorAll(".code-study-areas-card")
        for (let index = 0; index < (cards.length < cardView ? cards.length : cardView); index++) {
            cards[index].style.display = 'block'
        }

        if (cards.length <= 8) {
            element.querySelector(".code-all-courses-study-areas .more-btn").style.display = 'none'
        }

        element.querySelector(".code-all-courses-study-areas .more-btn").addEventListener('click', function () {

            for (let index = cardView; index < cardView + cardViewNext; index++) {
                if (cards[index]) {
                    cards[index].style.display = 'block'
                }
                else {
                    element.querySelector(".code-all-courses-study-areas .more-btn").style.display = 'none'
                }
            }

            cardView += cardViewNext
        })
    })


}

if (corporateAllCoursesPage) {


    let allCardsSections = document.querySelectorAll(".code-study-areas-cards-section")
    allCardsSections.forEach(element => {
        let cardView = 8
        let cardViewNext = 4
        let cards = element.querySelectorAll(".code-study-areas-card")
        for (let index = 0; index < (cards.length < cardView ? cards.length : cardView); index++) {
            cards[index].style.display = 'block'
        }

        if( element.querySelector(".code-corporate-all-courses-study-areas .more-btn")!=null){
            if (cards.length <= 8) {
                element.querySelector(".code-corporate-all-courses-study-areas .more-btn").style.display = 'none'
            }
            element.querySelector(".code-corporate-all-courses-study-areas .more-btn").addEventListener('click', function () {

                for (let index = cardView; index < cardView + cardViewNext; index++) {
                    if (cards[index]) {
                        cards[index].style.display = 'block'
                    }
                    else {
                        element.querySelector(".code-corporate-all-courses-study-areas .more-btn").style.display = 'none'
                    }
                }

                cardView += cardViewNext
            });
        }
    })


}

if (studentsPage) {

    let allCardsSections = document.querySelectorAll(".code-video-cards")
    allCardsSections.forEach(element => {
        let cardView = 4
        let cardViewNext = 4
        let cards = element.querySelectorAll(".item")
        for (let index = 0; index < (cards.length < cardView ? cards.length : cardView); index++) {
            cards[index].style.display = 'block'
        }

        if (cards.length <= 4) {
            element.querySelector(".more-btn").style.display = 'none'
        }
        element.querySelector(".more-btn").addEventListener('click', function () {

            for (let index = cardView; index < cardView + cardViewNext; index++) {
                if (cards[index]) {
                    cards[index].style.display = 'block'
                }
                if (!cards[index + 1]) {
                    element.querySelector(".more-btn").style.display = 'none'
                }
            }

            cardView += cardViewNext
        })
    })

    let allCardsSectionsFeedback = document.querySelectorAll(".code-blog-cards")
    allCardsSectionsFeedback.forEach(element => {
        let cardView = 9
        let cardViewNext = 3
        let cards = element.querySelectorAll(".code-blog-cards-item")
        for (let index = 0; index < (cards.length < cardView ? cards.length : cardView); index++) {
            cards[index].style.display = 'inline-block'
        }

        if (cards.length <= 9) {
            element.querySelector(".more-btn").style.display = 'none'
        }
        element.querySelector(".more-btn").addEventListener('click', function () {

            for (let index = cardView; index < cardView + cardViewNext; index++) {
                if (cards[index]) {
                    cards[index].style.display = 'inline-block'
                }
                if (!cards[index + 1]) {
                    element.querySelector(".more-btn").style.display = 'none'
                }
            }

            cardView += cardViewNext
        })
    })


}

if (blogPage) {

    console.log("@22")

    let allCardsSections = document.querySelectorAll(".blog-cards")
    allCardsSections.forEach(element => {
        let cardView = 6
        let cardViewNext = 3
        let cards = element.querySelectorAll(".blog-cards-item")
        for (let index = 0; index < (cards.length < cardView ? cards.length : cardView); index++) {
            cards[index].style.display = 'block'
        }

        if (cards.length <= 6) {
            element.querySelector(".more-btn").style.display = 'none'
        }

        element.querySelector(".more-btn").addEventListener('click', function () {

            for (let index = cardView; index < cardView + cardViewNext; index++) {
                if (cards[index]) {
                    cards[index].style.display = 'block'
                }
                else {
                    element.querySelector(".more-btn").style.display = 'none'
                }
            }

            cardView += cardViewNext
        })
    })


}