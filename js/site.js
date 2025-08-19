// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Get all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 100; // Account for fixed header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Download button functionality
    const downloadButtons = document.querySelectorAll('.download-btn, .btn-primary');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            // You can add actual download logic here
            alert('Download functionality will be implemented soon! 🚀');
        });
    });
    
    // Footer button functionality
    const footerButtons = document.querySelectorAll('.footer-buttons .btn-primary, .footer-buttons .btn-outline');
    
    footerButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent.includes('Contact')) {
                // Scroll to contact section
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else if (this.textContent.includes('Download')) {
                alert('Download functionality will be implemented soon! 🚀');
            }
        });
    });
    
    // Add hover effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card, .feature-item, .contact-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Animate stats on scroll
    const stats = document.querySelectorAll('.stat-number, .number');
    
    const animateStats = () => {
        stats.forEach(stat => {
            const rect = stat.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible && !stat.classList.contains('animated')) {
                stat.classList.add('animated');
                
                // Simple animation for numbers
                const finalValue = stat.textContent;
                const numericValue = parseInt(finalValue.replace(/[^\d]/g, ''));
                
                if (!isNaN(numericValue)) {
                    let currentValue = 0;
                    const increment = numericValue / 50;
                    
                    const timer = setInterval(() => {
                        currentValue += increment;
                        if (currentValue >= numericValue) {
                            currentValue = numericValue;
                            clearInterval(timer);
                        }
                        
                        if (finalValue.includes('+')) {
                            stat.textContent = Math.floor(currentValue) + '+';
                        } else if (finalValue.includes('%')) {
                            stat.textContent = Math.floor(currentValue) + '%';
                        } else {
                            stat.textContent = Math.floor(currentValue);
                        }
                    }, 30);
                }
            }
        });
    };
    
    window.addEventListener('scroll', animateStats);
    animateStats(); // Run once on page load
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
