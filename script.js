// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Mobile navigation toggle
const navLinks = document.querySelector('.nav-links');
const toggleButton = document.createElement('button');
toggleButton.textContent = '☰';
toggleButton.className = 'mobile-toggle';
toggleButton.style.display = 'none';
toggleButton.style.background = 'none';
toggleButton.style.border = 'none';
toggleButton.style.color = '#00E5FF';
toggleButton.style.fontSize = '1.5rem';
toggleButton.style.cursor = 'pointer';
toggleButton.style.padding = '10px';
toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Add toggle button for mobile if screen is small
if (window.innerWidth <= 768) {
    toggleButton.style.display = 'block';
    document.querySelector('nav .container').appendChild(toggleButton);
}

// Active navigation link on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Contact form submission (prevent default for demo)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! (This is a demo - form submission not implemented)');
        contactForm.reset();
    });
}

// Add subtle animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animation to cards
document.querySelectorAll('.skill-card, .cert-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Typing effect for hero subtitle (optional enhancement)
const heroSubtitle = document.querySelector('.hero p');
if (heroSubtitle) {
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroSubtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    setTimeout(typeWriter, 1000);
}
