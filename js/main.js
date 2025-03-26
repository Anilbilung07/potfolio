// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
darkModeToggle.className = 'fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50 hover:bg-blue-700 transition';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
    const icon = darkModeToggle.querySelector('i');
    if (document.documentElement.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

// Form Validation
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Form submission logic would go here
        alert('Message sent successfully!');
        contactForm.reset();
    });
}

// Enhanced animations
document.addEventListener('DOMContentLoaded', () => {
    // Typewriter effect initialization
    const typewriterElements = document.querySelectorAll('.typewriter');
    typewriterElements.forEach(el => {
        // Store original text
        const text = el.textContent;
        el.textContent = '';
        el.style.display = 'inline-block';
        
        // Animate typing
        let i = 0;
        const speed = 50; // typing speed in ms
        function typeWriter() {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            } else {
                // Remove cursor after animation completes
                setTimeout(() => {
                    el.style.borderRight = 'none';
                }, 1000);
            }
        }
        typeWriter();
    });

    // Scroll animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(el => {
            const elementPosition = el.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});

// Mobile menu toggle (would need HTML adjustment)
const mobileMenuButton = document.querySelector('.md\\:hidden');
const mobileMenu = document.createElement('div');
mobileMenu.className = 'hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-6';

if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}