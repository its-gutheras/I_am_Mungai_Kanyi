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
        text: "Mungai's savings and investment plan recommendations have transformed my financial growth. His strategies are tailored and effective.",
        role: "Client"
    },
    {
        name: "Joseph Karanja",
        image: "https://placehold.co/80x80",
        text: "Mungai guided me in setting up a secure education plan for my child. His advice was clear and invaluable. Its a relief knowing his future is financially secure",
        role: "Client"
    },
    {
        name: "Mirriam Nyambura",
        image: "https://placehold.co/80x80",
        text: "Mungai's saving plan recommendations have transformed the way I manage my finances. I'm now prepared for emergencies and big milestones..",
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