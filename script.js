document.addEventListener('DOMContentLoaded', function () {
    // Responsive Navigation Menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    };

    scrollToTopBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    // Subscription Form Validation
    const subscribeForm = document.getElementById('subscribeForm');
    const emailInput = document.getElementById('email');
    const formMessage = document.getElementById('formMessage');

    subscribeForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = emailInput.value;

        if (validateEmail(email)) {
            formMessage.textContent = 'Subscription successful!';
            formMessage.style.color = '#2ecc71';
        } else {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.style.color = '#e74c3c';
        }
    });

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.[^<>()\[\]\\.,;:\s@"]{2,}))$/i;
        return re.test(String(email).toLowerCase());
    }
});
