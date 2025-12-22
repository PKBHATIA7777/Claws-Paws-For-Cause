// --- Navbar Scroll Effect ---
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- Mobile Menu Toggle ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change icon based on state
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.replace('ph-list', 'ph-x');
    } else {
        icon.classList.replace('ph-x', 'ph-list');
    }
});

// --- Animated Counters ---
const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

const animateCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target + (target > 100 ? '+' : ''); // Add + sign for large numbers
            }
        };
        updateCount();
    });
};

// Trigger counters when scrolled into view
let hasAnimated = false;
const statsSection = document.querySelector('.stats-strip');

window.addEventListener('scroll', () => {
    const sectionPos = statsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos && !hasAnimated) {
        animateCounters();
        hasAnimated = true;
    }
});

// --- Copy to Clipboard for Bank Details ---
const copyBtns = document.querySelectorAll('.copy-btn');

copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const textToCopy = e.target.parentElement.previousElementSibling.innerText.split(': ')[1];
        navigator.clipboard.writeText(textToCopy);
        
        // Visual Feedback
        const originalIcon = btn.innerHTML;
        btn.innerHTML = '<i class="ph-bold ph-check"></i>';
        setTimeout(() => {
            btn.innerHTML = originalIcon;
        }, 2000);
    });
});