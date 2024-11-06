// Smooth scrolling for navigation
document.querySelectorAll('nav ul li a, #mobile-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');

        // Check if the target is the About Me section
        if (targetId === '#about-tutoring-services') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animation for sections on scroll
const sections = document.querySelectorAll('.section-content');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach(section => {
    observer.observe(section);
});

document.addEventListener('DOMContentLoaded', function() {
    const serviceItems = document.querySelectorAll('.service-item');

    const options = {
        root: null, // Use the viewport as the container
        threshold: 0.1 // Trigger when 10% of the box is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, options);

    serviceItems.forEach(item => {
        observer.observe(item); // Start observing each service item
    });
});

document.getElementById('hamburger').addEventListener('click', function() {
    const nav = document.getElementById('mobile-nav');
    nav.classList.toggle('visible'); // Toggle the 'visible' class
});

document.querySelectorAll('#mobile-nav a').forEach(link => {
    link.addEventListener('click', function() {
        const nav = document.getElementById('mobile-nav');
        nav.classList.remove('visible'); // Remove the 'visible' class to hide the menu
    });
});



const formId = '3ll8ZB';

