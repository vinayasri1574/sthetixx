function toggleMenu() {
    var overlayMenu = document.getElementById("overlayMenu");
    if (overlayMenu.style.width === "100%") {
        overlayMenu.style.width = "0";
    } else {
        overlayMenu.style.width = "100%";
    }
}

        
// heading
document.addEventListener('DOMContentLoaded', function () {
    const heading = document.querySelector('.carousel-heading');

    function checkVisibility() {
        const rect = heading.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Check if the element is in the viewport
        if (rect.top < windowHeight && rect.bottom >= 0) {
            heading.classList.add('visible');
        } else {
            heading.classList.remove('visible');
        }
    }

    // Initial check
    checkVisibility();

    // Check on scroll
    window.addEventListener('scroll', checkVisibility);
});

document.addEventListener('DOMContentLoaded', function() {
    const roseBar = document.querySelector('.rose-bar');
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            roseBar.classList.add('sticky');
            navbar.classList.add('sticky-navbar');
        } else {
            // Scrolling up
            roseBar.classList.remove('sticky');
            navbar.classList.remove('sticky-navbar');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });
});
let slideIndex = 0;
        let slides = document.getElementsByClassName("testimonial-slide");

        function showSlides() {
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active");
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1; }
            slides[slideIndex - 1].classList.add("active");
            setTimeout(showSlides, 2000); // Change slide every 2 seconds
        }

        showSlides();
// Show back-to-top button on scroll
window.addEventListener('scroll', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show-back-to-top');
    } else {
        backToTopButton.classList.remove('show-back-to-top');
    }
});

// Smooth scroll to top
document.querySelector('.back-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// scroll

// featured products


// featured products
// Toggle dropdown visibility
        function toggleDropdown(button) {
            const dropdown = button.parentElement;
            const dropdownContent = dropdown.querySelector('.sunflower-dropdown-content');

            // Close other dropdowns
            document.querySelectorAll('.sunflower-dropdown').forEach(function(d) {
                if (d !== dropdown) {
                    d.classList.remove('show');
                }
            });

            // Toggle the clicked dropdown
            dropdown.classList.toggle('show');
        }

        // Close dropdown if clicked outside
        window.onclick = function(event) {
            if (!event.target.matches('.sunflower-dropdown button')) {
                document.querySelectorAll('.sunflower-dropdown').forEach(function(d) {
                    d.classList.remove('show');
                });
            }
        }
// animation
document.addEventListener('DOMContentLoaded', () => {
    // Function to handle scroll-triggered animations
    const scroll = () => {
        document.querySelectorAll('.switcher-content--sticky').forEach((el, index) => {
            const isLast = index === document.querySelectorAll('.switcher-content--sticky').length - 1;

            gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: 'top top',
                    end: '+=100%',
                    scrub: true
                }
            })
            .to(el.querySelector('.switcher-content__title'), {
                yPercent: isLast ? -120 : -101
            }, 0)
            .to(el.querySelector('.switcher-content__text'), {
                yPercent: isLast ? -80 : -101
            }, 0);
        });
    };

    // Initializes Lenis for smooth scrolling with specific properties
    const initSmoothScrolling = () => {
        const lenis = new Lenis({
            lerp: 0.2,
            smoothWheel: true
        });

        lenis.on('scroll', () => ScrollTrigger.update());

        const scrollFn = (time) => {
            lenis.raf(time);
            requestAnimationFrame(scrollFn);
        };
        requestAnimationFrame(scrollFn);
    };

    // Preload images and initialize animations once loaded
    imagesLoaded(document.querySelectorAll('img'), {background: true}, () => {
        document.body.classList.remove('loading');
        initSmoothScrolling();
        scroll();
    });

    // Navigation tabs functionality
    document.querySelectorAll('.switcher-nav .switcher-tab').forEach((tab, index) => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.switcher-content--sticky').forEach((section, secIndex) => {
                if (secIndex === index) {
                    gsap.to(window, {scrollTo: {y: section, offsetY: 80}, duration: 1});
                }
            });
        });
    });

    // Highlight active tab based on scroll position
    gsap.utils.toArray('.switcher-content--sticky').forEach((section, index) => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top top+=80',
            end: 'bottom top+=80',
            onEnter: () => updateActiveTab(index),
            onLeaveBack: () => updateActiveTab(index - 1),
        });
    });

    function updateActiveTab(index) {
        document.querySelectorAll('.switcher-nav .switcher-tab').forEach((tab, tabIndex) => {
            tab.classList.toggle('active', tabIndex === index);
        });
    }
});
// top gttreatments

