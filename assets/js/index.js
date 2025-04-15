const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const contactButton = document.querySelector('.contact-button');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    
    if (!document.querySelector('.mobile-menu')) {
        const mobileMenu = document.createElement('div');
        mobileMenu.classList.add('mobile-menu');
        
        const mobileNav = nav.cloneNode(true);
        const mobileContact = contactButton.cloneNode(true);
        
        mobileMenu.appendChild(mobileNav);
        mobileMenu.appendChild(mobileContact);
        
        document.body.appendChild(mobileMenu);
        

        mobileMenu.style.position = 'fixed';
        mobileMenu.style.top = '0';
        mobileMenu.style.left = '0';
        mobileMenu.style.width = '100%';
        mobileMenu.style.height = '100vh';
        mobileMenu.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        mobileMenu.style.zIndex = '99';
        mobileMenu.style.display = 'flex';
        mobileMenu.style.flexDirection = 'column';
        mobileMenu.style.justifyContent = 'center';
        mobileMenu.style.alignItems = 'center';
        mobileMenu.style.padding = '2rem';
        mobileMenu.style.transform = 'translateY(-100%)';
        mobileMenu.style.transition = 'transform 0.4s ease';
        
        mobileNav.style.display = 'block';
        mobileNav.style.marginBottom = '2rem';
        
        const mobileNavLinks = mobileNav.querySelectorAll('ul');
        mobileNavLinks.forEach(ul => {
            ul.style.display = 'flex';
            ul.style.flexDirection = 'column';
            ul.style.alignItems = 'center';
            ul.style.gap = '1.5rem';
        });
        
        const mobileNavItems = mobileNav.querySelectorAll('li a');
        mobileNavItems.forEach(item => {
            item.style.fontSize = '1.2rem';
        });
        
        setTimeout(() => {
            mobileMenu.style.transform = 'translateY(0)';
        }, 10);
    } else {
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu.style.transform === 'translateY(0px)') {
            mobileMenu.style.transform = 'translateY(-100%)';
            setTimeout(() => {
                mobileMenu.remove();
            }, 400);
        } else {
            mobileMenu.style.transform = 'translateY(0)';
        }
    }
});


const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        header.style.padding = '1rem 4rem';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.padding = '1.5rem 4rem';
    }
    
    // Responsive padding adjustment
    if (window.innerWidth <= 992) {
        if (window.scrollY > 50) {
            header.style.padding = '1rem 2rem';
        } else {
            header.style.padding = '1.5rem 2rem';
        }
    }
    
    if (window.innerWidth <= 576) {
        if (window.scrollY > 50) {
            header.style.padding = '0.8rem 1.5rem';
        } else {
            header.style.padding = '1rem 1.5rem';
        }
    }
});

// Responsive padding adjustment for header on resize
window.addEventListener('resize', () => {
    if (window.innerWidth <= 992) {
        header.style.padding = window.scrollY > 50 ? '1rem 2rem' : '1.5rem 2rem';
    } else if (window.innerWidth <= 576) {
        header.style.padding = window.scrollY > 50 ? '0.8rem 1.5rem' : '1rem 1.5rem';
    } else {
        header.style.padding = window.scrollY > 50 ? '1rem 4rem' : '1.5rem 4rem';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const subjectSelect = document.getElementById('subject');
    const ratingGroup = document.getElementById('rating-group');
    
    if (subjectSelect && ratingGroup) {
        subjectSelect.addEventListener('change', function() {
            if (this.value === 'calificacion') {
                ratingGroup.style.display = 'block';
            } else {
                ratingGroup.style.display = 'none';
            }
        });
    }
    
    // Form submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            
            contactForm.addEventListener('formsparkFormSubmitted', function() {
                alert('¡Gracias! Su mensaje ha sido enviado correctamente.');
                contactForm.reset();
            });
        });
    }
});