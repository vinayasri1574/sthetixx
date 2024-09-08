function toggleMenu() {
    var overlayMenu = document.getElementById("overlayMenu");
    if (overlayMenu.style.width === "100%") {
        overlayMenu.style.width = "0";
    } else {
        overlayMenu.style.width = "100%";
    }
}
let currentSlide = 0;

        function showSlide(index) {
            const slides = document.querySelector('.carousel-slide');
            const totalSlides = document.querySelectorAll('.carousel-item').length;

            if (index >= totalSlides) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = totalSlides - 1;
            } else {
                currentSlide = index;
            }

            slides.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
            resetAnimations();
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        function resetAnimations() {
            const items = document.querySelectorAll('.carousel-item');
            items.forEach(item => {
                item.style.opacity = '0';
                item.style.animation = 'none';
                setTimeout(() => {
                    item.style.animation = '';
                }, 10); // Reset animation by re-adding it
            });
        }

        showSlide(currentSlide);


        
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

