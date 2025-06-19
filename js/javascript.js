
    // JavaScript para o menu responsivo e dropdowns
    document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');
            const dropdowns = document.querySelectorAll('.dropdown');

            mobileMenuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });

            dropdowns.forEach(dropdown => {
                const link = dropdown.querySelector('.nav-link');
                
                link.addEventListener('click', function(e) {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        dropdown.classList.toggle('active');
                    }
                });
            });

            // Fechar menu quando clicar fora
            document.addEventListener('click', function(e) {
                if (window.innerWidth <= 768 && 
                    !e.target.closest('.nav-links') && 
                    !e.target.closest('.mobile-menu-btn')) {
                    navLinks.classList.remove('active');
                    dropdowns.forEach(dropdown => {
                        dropdown.classList.remove('active');
                    });
                }
            });
    });
  