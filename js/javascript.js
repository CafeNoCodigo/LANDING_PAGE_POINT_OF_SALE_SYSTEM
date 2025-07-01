//Vamos passar a organizar nossas declaracoes aqui
var cta_btn = document.querySelector(".cta-button");
var mobile_menu_btn = document.querySelector('.mobile-menu-btn');
var nav_links = document.querySelector('.nav-links');
var dropdowns = document.querySelectorAll('.dropdown');

//Sempre que passar o mouse no botao de cta
cta_btn.onmousemove = function(e){
    var x = e.pageX - cta_btn.offsetLeft;
    var y = e.pageY - cta_btn.offsetTop;

    cta_btn.style.setProperty('--eixoX', x + 'px');
    cta_btn.style.setProperty('--eixoY', y + 'px');
}

// JavaScript para o menu responsivo e dropdowns
document.addEventListener('DOMContentLoaded', function() { 
        mobile_menu_btn.addEventListener('click', function() {
            nav_links.classList.toggle('.active');
        });

        dropdowns.forEach(dropdown => {
            nav_links.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdowns.classList.toggle('.active');
                }
            });
        });

        // Fechar menu quando clicar fora
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 768 && 
                !e.target.closest('.nav-links') && 
                !e.target.closest('.mobile-menu-btn')) {
                nav_links.classList.remove('.active');
                dropdowns.forEach(dropdowns => {
                    dropdowns.classList.remove('.active');
                });
            }
        });
});
  