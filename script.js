const navbarLinks = document.querySelectorAll('nav ul li a');

navbarLinks.forEach(link => {
    link.addEventListener('click', function () {
        navbarLinks.forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});