        function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
    // Close all submenus when main menu toggles
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.remove('active');
    });
}

        // Contact Modal Functions
        function openContactModal() {
            document.getElementById('contactModal').style.display = 'block';
        }

        function closeContactModal() {
            document.getElementById('contactModal').style.display = 'none';
        }

        // Inquiry Modal Functions
        function openInquiryModal() {
            document.getElementById('inquiryModal').style.display = 'block';
        }

        function closeInquiryModal() {
            document.getElementById('inquiryModal').style.display = 'none';
        }

        // Auto-show inquiry modal after 20 seconds
        setTimeout(function() {
            openInquiryModal();
        }, 20000);

        // Close modals when clicking outside
        window.onclick = function(event) {
            const contactModal = document.getElementById('contactModal'); // This is the old contact modal, still used on services.html etc.
            const inquiryModal = document.getElementById('inquiryModal');
            const readMoreModals = document.querySelectorAll('.read-more-modal');
            const contactPageModal = document.getElementById('contactPageModal'); // New: for custom message on contact page

            if (contactModal && event.target == contactModal) {
                closeContactModal();
            }
            if (inquiryModal && event.target == inquiryModal) {
                closeInquiryModal();
            }
            readMoreModals.forEach(modal => {
                if (event.target == modal) {
                    modal.style.display = 'none';
                }
            });
            if (contactPageModal && event.target == contactPageModal) { // Close custom message for contact page form
                contactPageModal.style.display = 'none';
            }
        }

        // Form Submissions (for existing modals)
        function submitContactForm(event) {
            event.preventDefault();
            showCustomMessage('Thank you for your message! We will contact you within 24 hours.');
            closeContactModal();
            document.getElementById('contactForm').reset();
        }

        function submitInquiryForm(event) {
            event.preventDefault();
            showCustomMessage('Thank you for your inquiry! Our visa experts will contact you within 24 hours with personalized guidance.');
            closeInquiryModal();
            document.getElementById('inquiryForm').reset();
        }

        // New Form Submission for contactus.html
        function submitContactPageForm(event) {
            event.preventDefault();
            // You can add an AJAX call here to send form data to a backend
            showCustomMessage('Your message has been sent successfully! We will get back to you soon.');
            document.getElementById('contactPageForm').reset();
        }


        // Custom Message Box (replaces alert)
        function showCustomMessage(message) {
            const messageBox = document.createElement('div');
            messageBox.className = 'custom-message-box';
            messageBox.innerHTML = `
                <div class="custom-message-content">
                    <p>${message}</p>
                    <button onclick="this.parentNode.parentNode.remove()">OK</button>
                </div>
            `;
            document.body.appendChild(messageBox);
            // Basic styling for the message box - ideally add this to style.css
            messageBox.style.position = 'fixed';
            messageBox.style.top = '50%';
            messageBox.style.left = '50%';
            messageBox.style.transform = 'translate(-50%, -50%)';
            messageBox.style.backgroundColor = '#fff';
            messageBox.style.padding = '20px';
            messageBox.style.borderRadius = '8px';
            messageBox.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
            messageBox.style.zIndex = '10001';
            messageBox.style.textAlign = 'center';
            messageBox.style.maxWidth = '300px';

            const button = messageBox.querySelector('button');
            button.style.marginTop = '15px';
            button.style.padding = '8px 15px';
            button.style.backgroundColor = '#000';
            button.style.color = '#fff';
            button.style.border = 'none';
            button.style.borderRadius = '5px';
            button.style.cursor = 'pointer';
        }
        document.querySelectorAll('.nav-menu a:not(.dropdown-toggle)').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-menu').classList.remove('active');
        // Also close submenus
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    });
});

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                document.querySelector('.nav-menu').classList.remove('active');
            });
        });

        // Add scroll effect to navbar
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.backgroundColor = '#fff';
                navbar.style.backdropFilter = 'none';
            }
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.addEventListener('DOMContentLoaded', function() {
            const animateElements = document.querySelectorAll('.service-card, .blog-card, .about-text, .stat-card, .process-card, .attestation-category-card, .support-card, .assistance-card, .country-card, .direct-contact-info, .message-form-container'); // Added new contact page elements
            animateElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
        });

        // Toggle FAQ answers (from index.html)
        document.addEventListener('DOMContentLoaded', function() {
            const faqQuestions = document.querySelectorAll('.faq-question');
            faqQuestions.forEach(question => {
                question.addEventListener('click', function() {
                    const answer = this.nextElementSibling;
                    const icon = this.querySelector('.faq-toggle-icon');

                    if (answer.classList.contains('hidden')) {
                        answer.classList.remove('hidden');
                        icon.textContent = '−';
                    } else {
                        answer.classList.add('hidden');
                        icon.textContent = '+';
                    }
                });
            });

            // Read More Modal Logic for Attestation Categories
            document.querySelectorAll('.read-more-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const modalId = this.dataset.modalTarget;
                    document.getElementById(modalId).style.display = 'block';
                });
            });

            document.querySelectorAll('.close-read-more').forEach(closeButton => {
                closeButton.addEventListener('click', function() {
                    const modalId = this.dataset.modalId;
                    document.getElementById(modalId).style.display = 'none';
                });
            });
        });


        // Prevent inquiry modal from showing multiple times
        let inquiryShown = false;
        setTimeout(function() {
            if (!inquiryShown) {
                openInquiryModal();
                inquiryShown = true;
            }
        }, 20000);

        // SEO tracking (placeholder for analytics)
        function trackEvent(eventName, properties) {
            // This would integrate with Google Analytics or other tracking
            console.log('Event tracked:', eventName, properties);
        }

        // Track form submissions for SEO
        document.getElementById('contactForm').addEventListener('submit', function() {
            trackEvent('contact_form_submit', {
                page: 'contact_modal',
                source: 'website'
            });
        });

        document.getElementById('inquiryForm').addEventListener('submit', function() {
                const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent navigation if it's a link
            const dropdown = this.parentElement;
            dropdown.classList.toggle('active');
            
            // Close other open dropdowns (optional, for better UX)
            document.querySelectorAll('.dropdown').forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('active');
                }
            });
        });
    });

    // Close submenus when clicking outside (for mobile)
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
        });

        // Track contact page form submission for SEO
        const contactPageForm = document.getElementById('contactPageForm');
        if (contactPageForm) { // Check if the form exists on the current page
            contactPageForm.addEventListener('submit', function() {
                trackEvent('contact_page_form_submit', {
                    page: 'contact_us_page',
                    source: 'website_form'
                });
            });
        }


        // Add structured data for local business (Existing in script.js, ensure it's present)
        const localBusinessSchema = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "JVM World Wide Travel",
            "description": "Leading visa and document attestation consultants in Delhi providing expert visa services",
            "image": "https://jvmworldwidetravel.com/logo.jpg", // Placeholder, ideally use your actual logo path
            "telephone": "+91-9999999999",
            "email": "info@jvmworldwidetravel.com",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "8/334 Lalita Park, Laxmi Nagar",
                "addressLocality": "New Delhi",
                "postalCode": "110092",
                "addressCountry": "IN"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "28.6139",
                "longitude": "77.2090"
            },
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "18:00"
            },
            "priceRange": "$",
            "serviceArea": {
                "@type": "City",
                "name": "Delhi"
            },
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Visa Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Tourist Visa Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Business Visa Services"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Student Visa Services"
                        }
                    }
                ]
            }
        };

        // Performance optimization
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img[loading="lazy"]');
            images.forEach(img => {
                img.src = img.dataset.src;
            });
        }

        // Add click tracking for SEO insights
        document.addEventListener('click', function(e) {
            if (e.target.matches('a[href^="tel:"]')) {
                trackEvent('phone_click', { number: e.target.href });
            }
            if (e.target.matches('a[href^="https://wa.me"]')) {
                trackEvent('whatsapp_click', { source: 'contact_buttons' });
            }
            if (e.target.matches('a[href^="mailto:"]')) {
                trackEvent('email_click', { email: e.target.href });
            }
        });
