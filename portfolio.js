// Function to handle the login
function handleLogin(event) {
    event.preventDefault(); 
    console.log("Login button clicked");

    const loginGate = document.getElementById('login-gate');
    const username = document.getElementById('username').value;

    console.log("Username entered:", username);

    if (username.trim() !== '') {
        // Save the username to localStorage
        localStorage.setItem('username', username);

        // Add fade-out effect and hide the login gate
        loginGate.style.transition = 'opacity 1s ease';
        loginGate.style.opacity = '0';

        setTimeout(() => {
            loginGate.style.display = 'none';

            // Display the username in the welcome section
            const userNameElement = document.getElementById('user-name');
            userNameElement.textContent = username;

            // Trigger typing animation
            animateTypingEffect('.animated-text');
        }, 1000); 
    } else {
        alert("Please enter your name.");
    }
}

// Typing animation function
function animateTypingEffect(selector) {
    const animatedText = document.querySelector(selector);
    if (animatedText) {
        const textContent = animatedText.textContent;
        animatedText.textContent = '';

        let index = 0;
        const interval = setInterval(() => {
            animatedText.textContent += textContent[index];
            index++;

            if (index === textContent.length) {
                clearInterval(interval);
            }
        }, 50); 
    }
}

// When the page loads
window.onload = function () {
    console.log("Page loaded");

    // Check if user has already logged in
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        console.log("Found saved username:", savedUsername);

        // Hide the login gate
        const loginGate = document.getElementById('login-gate');
        loginGate.style.display = 'none';

        // Display the username in the welcome section
        const userNameElement = document.getElementById('user-name');
        userNameElement.textContent = savedUsername;

        // Trigger typing animation
        animateTypingEffect('.animated-text');
    } else {
        // Add event listener to the login form
        const loginForm = document.getElementById('login-form');
        loginForm.addEventListener('submit', handleLogin);
    }

    // Intersection Observer for Animated Headers
    const animatedHeaders = document.querySelectorAll('.animated-header');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 1.5s ease forwards';
            }
        });
    });

    animatedHeaders.forEach(header => {
        observer.observe(header);
    });
};

// Scroll when the arrow is clicked
document.querySelector('.scroll-arrow').addEventListener('click', () => {
    const currentSection = document.querySelector('.landing-screen'); 
    const nextSection = currentSection.nextElementSibling;
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
});

function openModal() {
    document.getElementById('resume-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('resume-modal').style.display = 'none';
}


// Toggle Hamburger Menu
document.addEventListener('DOMContentLoaded', () => {
const hamburgerMenu = document.getElementById('hamburger-menu');
const sideMenu = document.getElementById('side-menu');

 // Ensure the menu is hidden on load
sideMenu.classList.remove('open');

hamburgerMenu.addEventListener('click', () => {
    console.log('Hamburger clicked!'); 
    sideMenu.classList.toggle('open'); 
});
});


