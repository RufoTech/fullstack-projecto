let contactPage = document.querySelector(".code-contact-main")
if (contactPage) {
    contactPage.querySelector(".tel").addEventListener('click', () => {
        if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
            window.location.href = 'tel:+994504442633';
        } else if (navigator.userAgent.match(/Android/)) {
            window.location.href = 'tel:+994504442633';
        } else {
            window.location.href = 'facetime://example@example.com';
        }
    });

    contactPage.querySelector(".mail").addEventListener('click', () => {
        window.location.href = 'mailto:info@code.edu.az';
    });

    contactPage.querySelector(".corporate").addEventListener('click', () => {
        window.location.href = 'mailto:corporate@code.edu.az';
    });


}