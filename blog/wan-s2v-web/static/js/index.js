/*
 * Wan-S2V Integrated Scripts
 * =================================
 * 
 * Unified JavaScript functionality combining:
 * - Original index.js (Bulma components)
 * - Modern scripts (navigation, scroll effects, video management)
 * - Before/After slider functionality
 * 
 * Features:
 * - Bulma carousel and slider initialization
 * - Smooth scrolling navigation
 * - Scroll progress indicator
 * - Back to top button
 * - Mobile navigation toggle
 * - Video management (auto-pause other videos)
 * - Intersection Observer for animations
 * - Performance optimizations
 * - Before/After image comparison
 * - Accessibility enhancements
 */

'use strict';

// ===== Global Variables =====
window.HELP_IMPROVE_VIDEOJS = false;

// ===== DOM Elements =====
const scrollProgress = document.getElementById('scrollProgress');
const backToTopButton = document.getElementById('backToTop');
const navbarBurger = document.getElementById('navbarBurger');
const navbarMenu = document.getElementById('navbarMenu');
const moreResearchTrigger = document.getElementById('moreResearchTrigger');
const allVideos = document.querySelectorAll('video');
const allNavLinks = document.querySelectorAll('a[href^="#"]');

// ===== Initialize on DOM Load =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bulma components (from original index.js)
    initializeBulmaComponents();
    
    // Initialize modern functionality
    initializeScrollEffects();
    initializeNavigation();
    initializeVideoManagement();
    initializeIntersectionObserver();
    initializePerformanceOptimizations();
    initializeBeforeAfterSliders();
    
    // Initialize accessibility and error handling
    initializeAccessibility();
    initializeErrorHandling();
});

// ===== Bulma Components Initialization (from index.js) =====
function initializeBulmaComponents() {
    // Bulma Carousel configuration
    const carouselOptions = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    // Initialize all div with carousel class
    const carousels = bulmaCarousel.attach('.carousel', carouselOptions);
    
    // Initialize Bulma Slider
    bulmaSlider.attach();
}

// ===== Scroll Effects =====
function initializeScrollEffects() {
    // Scroll Progress Indicator
    window.addEventListener('scroll', updateScrollProgress);
    
    // Back to Top Button
    window.addEventListener('scroll', toggleBackToTopButton);
    if (backToTopButton) {
        backToTopButton.addEventListener('click', scrollToTop);
    }
    
    // Smooth scrolling for navigation links
    allNavLinks.forEach(link => {
        link.addEventListener('click', handleSmoothScroll);
    });
}

function updateScrollProgress() {
    if (scrollProgress) {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    }
}

function toggleBackToTopButton() {
    if (backToTopButton) {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function handleSmoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (navbarMenu && navbarMenu.classList.contains('active')) {
            navbarMenu.classList.remove('active');
            if (navbarBurger) {
                navbarBurger.classList.remove('active');
            }
        }
    }
}

// ===== Navigation =====
function initializeNavigation() {
    // Mobile menu toggle
    if (navbarBurger) {
        navbarBurger.addEventListener('click', toggleMobileMenu);
    }
    
    // More Research dropdown toggle
    if (moreResearchTrigger) {
        moreResearchTrigger.addEventListener('click', toggleMoreResearchDropdown);
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', handleOutsideClick);
    
    // Active navigation highlighting
    window.addEventListener('scroll', highlightActiveNav);
}

function toggleMobileMenu() {
    if (navbarBurger && navbarMenu) {
        navbarBurger.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    }
}

function toggleMoreResearchDropdown(e) {
    if (!moreResearchTrigger) return;
    
    e.preventDefault();
    e.stopPropagation();
    const dropdown = moreResearchTrigger.closest('.has-dropdown');
    
    if (dropdown) {
        // Toggle active class on the dropdown
        dropdown.classList.toggle('is-active');
        
        // Rotate chevron icon
        const chevron = moreResearchTrigger.querySelector('.fa-chevron-down');
        if (chevron) {
            chevron.style.transform = dropdown.classList.contains('is-active') ? 'rotate(180deg)' : 'rotate(0deg)';
        }
    }
}

function handleOutsideClick(e) {
    // Close mobile menu when clicking outside
    if (navbarBurger && navbarMenu) {
        if (!navbarBurger.contains(e.target) && !navbarMenu.contains(e.target)) {
            navbarMenu.classList.remove('active');
            navbarBurger.classList.remove('active');
        }
    }
    
    // Close More Research dropdown when clicking outside
    if (moreResearchTrigger) {
        const dropdown = moreResearchTrigger.closest('.has-dropdown');
        if (dropdown && !dropdown.contains(e.target)) {
            // Only close if clicking completely outside the dropdown
            // and not clicking on a link inside the dropdown
            if (!e.target.closest('.navbar-dropdown .navbar-item')) {
                dropdown.classList.remove('is-active');
                
                // Reset chevron rotation
                const chevron = moreResearchTrigger.querySelector('.fa-chevron-down');
                if (chevron) {
                    chevron.style.transform = 'rotate(0deg)';
                }
            }
        }
    }
}

// Add click handler for dropdown items to close dropdown after clicking
document.addEventListener('click', function(e) {
    if (e.target.closest('.navbar-dropdown .navbar-item') && moreResearchTrigger) {
        // Close the dropdown after a short delay to allow the link to work
        setTimeout(() => {
            const dropdown = moreResearchTrigger.closest('.has-dropdown');
            if (dropdown) {
                dropdown.classList.remove('is-active');
                
                // Reset chevron rotation
                const chevron = moreResearchTrigger.querySelector('.fa-chevron-down');
                if (chevron) {
                    chevron.style.transform = 'rotate(0deg)';
                }
            }
        }, 200);
    }
});

function highlightActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            allNavLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===== Video Management =====
function initializeVideoManagement() {
    // Auto-pause other videos when one plays
    allVideos.forEach(video => {
        video.addEventListener('play', handleVideoPlay);
        video.addEventListener('pause', handleVideoPause);
        video.addEventListener('ended', handleVideoEnd);
        
        // Add loading optimization
        video.setAttribute('preload', 'metadata');
        video.setAttribute('loading', 'lazy');
    });
}

function handleVideoPlay(e) {
    const currentVideo = e.target;
    
    // Pause all other videos
    allVideos.forEach(video => {
        if (video !== currentVideo && !video.paused) {
            video.pause();
        }
    });
    
    // Add visual indicator for playing video
    if (currentVideo.parentElement) {
        currentVideo.parentElement.classList.add('video-playing');
    }
}

function handleVideoPause(e) {
    const video = e.target;
    if (video.parentElement) {
        video.parentElement.classList.remove('video-playing');
    }
}

function handleVideoEnd(e) {
    const video = e.target;
    if (video.parentElement) {
        video.parentElement.classList.remove('video-playing');
    }
}

// ===== Intersection Observer for Animations =====
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, observerOptions);
    
    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Observe video containers for lazy loading
    const videoContainers = document.querySelectorAll('.video-container');
    videoContainers.forEach(container => {
        observer.observe(container);
    });
}

// ===== Performance Optimizations =====
function initializePerformanceOptimizations() {
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(() => {
            // Throttled scroll operations
            updateScrollProgress();
            toggleBackToTopButton();
            highlightActiveNav();
        });
    });
    
    // Lazy load images
    initializeLazyLoading();
    
    // Optimize resize events
    let resizeTimeout;
    window.addEventListener('resize', () => {
        if (resizeTimeout) {
            clearTimeout(resizeTimeout);
        }
        resizeTimeout = setTimeout(() => {
            handleResize();
        }, 250);
    });
}

function initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

function handleResize() {
    // Handle responsive adjustments
    if (window.innerWidth > 768 && navbarMenu && navbarBurger) {
        navbarMenu.classList.remove('active');
        navbarBurger.classList.remove('active');
    }
}

// ===== Before/After Slider (from script.js) =====
function initializeBeforeAfterSliders() {
    // Find all before-after containers
    const beforeAfterContainers = document.querySelectorAll('.before-after-container, [class*="bal-"]');
    
    beforeAfterContainers.forEach(container => {
        new BeforeAfterIntegrated(container);
    });
}

class BeforeAfterIntegrated {
    constructor(container) {
        this.container = container;
        this.before = container.querySelector('.bal-before');
        this.beforeText = container.querySelector('.bal-beforePosition');
        this.afterText = container.querySelector('.bal-afterPosition');
        this.handle = container.querySelector('.bal-handle');
        
        if (!this.before || !this.handle) return;
        
        this.init();
    }
    
    init() {
        // Set initial styles
        const containerWidth = this.container.offsetWidth;
        const beforeInset = this.container.querySelector('.bal-before-inset');
        
        if (beforeInset) {
            beforeInset.setAttribute("style", "width: " + containerWidth + "px;");
        }
        
        this.before.setAttribute('style', "width: 100%;");
        this.handle.setAttribute('style', "left: 100%;");
        
        // Handle window resize
        window.addEventListener('resize', () => {
            if (beforeInset) {
                beforeInset.setAttribute("style", "width: " + this.container.offsetWidth + "px;");
            }
        });
        
        // Touch screen event listener
        this.container.addEventListener("touchstart", (e) => {
            this.container.addEventListener("touchmove", (e2) => this.handleMove(e2));
        });
        
        // Mouse move event listener
        this.container.addEventListener('mousemove', (e) => this.handleMove(e));
    }
    
    handleMove(e) {
        const containerWidth = this.container.offsetWidth;
        let currentPoint;
        
        if (e.type === 'touchmove') {
            currentPoint = e.changedTouches[0].clientX;
        } else {
            currentPoint = e.offsetX;
        }
        
        const startOfDiv = this.container.offsetLeft;
        const modifiedCurrentPoint = currentPoint - startOfDiv;
        
        if (modifiedCurrentPoint > 5 && modifiedCurrentPoint < this.container.offsetWidth - 5) {
            const newWidth = modifiedCurrentPoint * 100 / containerWidth;
            
            this.before.setAttribute('style', "width:" + newWidth + "%;");
            if (this.afterText) {
                this.afterText.setAttribute('style', "z-index: 1;");
            }
            this.handle.setAttribute('style', "left:" + newWidth + "%;");
        }
    }
}

// ===== Utility Functions =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== Accessibility Enhancements =====
function initializeAccessibility() {
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Focus management for modals and dropdowns
    initializeFocusManagement();
}

function handleKeyboardNavigation(e) {
    // Escape key to close mobile menu
    if (e.key === 'Escape' && navbarMenu && navbarBurger) {
        if (navbarMenu.classList.contains('active')) {
            navbarMenu.classList.remove('active');
            navbarBurger.classList.remove('active');
        }
    }
    
    // Tab navigation enhancements
    if (e.key === 'Tab') {
        handleTabNavigation(e);
    }
}

function handleTabNavigation(e) {
    // Add skip-to-content functionality
    if (!document.querySelector('.skip-to-content')) {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-to-content';
        skipLink.style.cssText = `
            position: absolute;
            top: '-40px';
            left: '0';
            background: 'var(--gradient-primary)';
            color: 'white';
            padding: '8px';
            text-decoration: 'none';
            z-index: '9999';
        `;
        
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '0';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
    }
}

function initializeFocusManagement() {
    if (!navbarMenu || !navbarBurger) return;
    
    // Trap focus in mobile menu when open
    const focusableElements = navbarMenu.querySelectorAll('a, button');
    if (focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    navbarMenu.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' && navbarMenu.classList.contains('active')) {
            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    });
}

// ===== Error Handling =====
function initializeErrorHandling() {
    // Handle video loading errors
    allVideos.forEach(video => {
        video.addEventListener('error', handleVideoError);
    });
    
    // Handle image loading errors
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', handleImageError);
    });
}

function handleVideoError(e) {
    const video = e.target;
    const container = video.parentElement;
    
    if (!container) return;
    
    // Show error message
    const errorMessage = document.createElement('div');
    errorMessage.className = 'video-error-message';
    errorMessage.textContent = 'Video failed to load. Please try again later.';
    errorMessage.style.cssText = `
        background: rgba(255, 0, 0, 0.1);
        border: 1px solid rgba(255, 0, 0, 0.3);
        border-radius: 8px;
        padding: 1rem;
        color: #ff6b6b;
        text-align: center;
        margin-top: 1rem;
    `;
    
    container.appendChild(errorMessage);
}

function handleImageError(e) {
    const img = e.target;
    img.style.opacity = '0.5';
    img.alt = 'Image failed to load';
    
    // Add error class for styling
    img.classList.add('image-error');
}

// ===== Export functions for external use =====
window.WanS2V = {
    scrollToTop,
    toggleMobileMenu,
    handleSmoothScroll,
    debounce,
    throttle,
    BeforeAfter: BeforeAfterIntegrated
};

// Console log for debugging (remove in production)
if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
    console.log('Wan-S2V Integrated Scripts initialized successfully');
}
