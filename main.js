// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Testimonials data
const testimonials = [
    {
        name: "Christine Njau",
        image: "https://placehold.co/80x80",
        text: "Mungai helped me find the perfect life insurance policy. His expertise and patience made the process so easy.",
        role: "Client"
    },
    {
        name: "Salex Kwamboka",
        image: "https://placehold.co/80x80",
        text: "Outstanding service! Mungai took the time to understand my needs and found me the best rates for my home insurance.",
        role: "Client"
    },
    {
        name: "Joseph Karanja",
        image: "https://placehold.co/80x80",
        text: "I've been working with Mungai for over 1 year now. His professionalism and knowledge are unmatched.",
        role: "Client"
    }
];

// Load testimonials
function loadTestimonials() {
    const container = document.getElementById('testimonials-carousel');
    testimonials.forEach(testimonial => {
        const div = document.createElement('div');
        div.className = 'col-md-4 mb-4';
        div.innerHTML = `
            <div class="testimonial-card text-center">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="mx-auto">
                <h5>${testimonial.name}</h5>
                <p class="text-muted">${testimonial.role}</p>
                <p class="mt-3">${testimonial.text}</p>
            </div>
        `;
        container.appendChild(div);
    });
}

// Form validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
    }

    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
    form.classList.remove('was-validated');
});

// Scroll animation for elements
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Initialize testimonials on page load
document.addEventListener('DOMContentLoaded', loadTestimonials);