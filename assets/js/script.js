/* =========================================================
   SPARTA FITNESS
   JAVASCRIPT PRINCIPAL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MENU MOBILE
    ====================================================== */

    const header = document.querySelector(".header");
    const menu = document.querySelector(".menu");

    if (header && menu) {

        // Cria botão do menu mobile
        const menuButton = document.createElement("button");

        menuButton.classList.add("menu-mobile-button");

        menuButton.setAttribute(
            "aria-label",
            "Abrir menu"
        );

        menuButton.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;

        // Adiciona botão ao header
        header.querySelector(".container").appendChild(menuButton);


        // Abre e fecha menu
        menuButton.addEventListener("click", () => {

            menu.classList.toggle("menu-open");

            menuButton.classList.toggle("active");

        });


        // Fecha menu ao clicar em um link
        const menuLinks = menu.querySelectorAll("a");

        menuLinks.forEach(link => {

            link.addEventListener("click", () => {

                menu.classList.remove("menu-open");

                menuButton.classList.remove("active");

            });

        });

    }


    /* =====================================================
       BOTÃO VOLTAR AO TOPO
    ====================================================== */

    const backToTop = document.querySelector(".back-to-top");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        });


        backToTop.addEventListener("click", (event) => {

            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =====================================================
       HEADER AO ROLAR A PÁGINA
    ====================================================== */

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {

                header.classList.add("header-scrolled");

            } else {

                header.classList.remove("header-scrolled");

            }

        });

    }


    /* =====================================================
       MÁSCARA DE WHATSAPP
    ====================================================== */

    const whatsappInput = document.querySelector("#whatsapp");

    if (whatsappInput) {

        whatsappInput.addEventListener("input", (event) => {

            let value = event.target.value;

            // Remove tudo que não for número
            value = value.replace(/\D/g, "");

            // Limita a 11 números
            value = value.substring(0, 11);


            // Celular
            if (value.length > 6) {

                value = value.replace(
                    /^(\d{2})(\d{5})(\d{0,4}).*/,
                    "($1) $2-$3"
                );

            } else if (value.length > 2) {

                value = value.replace(
                    /^(\d{2})(\d{0,5})/,
                    "($1) $2"
                );

            } else if (value.length > 0) {

                value = value.replace(
                    /^(\d{0,2})/,
                    "($1"
                );

            }

            event.target.value = value;

        });

    }


    /* =====================================================
       FORMULÁRIO DE CONTATO
    ====================================================== */

    const form = document.querySelector(".contact-form form");

    if (form) {

        form.addEventListener("submit", (event) => {

            event.preventDefault();


            // Captura os campos
            const nome =
                document.querySelector("#nome")?.value.trim();

            const sobrenome =
                document.querySelector("#sobrenome")?.value.trim();

            const email =
                document.querySelector("#email")?.value.trim();

            const whatsapp =
                document.querySelector("#whatsapp")?.value.trim();

            const mensagem =
                document.querySelector("#mensagem")?.value.trim();


            /* =================================================
               VALIDAÇÃO
            ================================================== */

            if (!nome) {

                alert("Digite seu nome.");

                document.querySelector("#nome").focus();

                return;

            }


            if (!sobrenome) {

                alert("Digite seu sobrenome.");

                document.querySelector("#sobrenome").focus();

                return;

            }


            if (!email) {

                alert("Digite seu e-mail.");

                document.querySelector("#email").focus();

                return;

            }


            if (!whatsapp) {

                alert("Digite seu WhatsApp.");

                document.querySelector("#whatsapp").focus();

                return;

            }


            /* =================================================
               MONTA MENSAGEM
            ================================================== */

            const mensagemWhatsApp =

                `Olá, Sparta Fitness! 👋

Gostaria de obter mais informações sobre a academia.

Nome: ${nome} ${sobrenome}

E-mail: ${email}

WhatsApp: ${whatsapp}

Mensagem:
${mensagem || "Gostaria de conhecer a academia e os planos."}`;


            /* =================================================
               NÚMERO DA ACADEMIA
            ================================================== */

            const numeroAcademia =
                "5511953275996";


            /* =================================================
               CRIA LINK DO WHATSAPP
            ================================================== */

            const url =

                `https://wa.me/${numeroAcademia}?text=${encodeURIComponent(
                    mensagemWhatsApp
                )}`;


            /* =================================================
               ABRE WHATSAPP
            ================================================== */

            window.open(
                url,
                "_blank"
            );

        });

    }


    /* =====================================================
       ANIMAÇÃO AO ENTRAR NA TELA
    ====================================================== */

    const animatedElements = document.querySelectorAll(
        ".benefit-card, " +
        ".plan-card, " +
        ".structure-item, " +
        ".modality-card, " +
        ".testimonial-card, " +
        ".about-content, " +
        ".about-image"
    );


    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "element-visible"
                    );

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    animatedElements.forEach(element => {

        element.classList.add(
            "element-hidden"
        );

        observer.observe(element);

    });


    /* =====================================================
       ANO AUTOMÁTICO
    ====================================================== */

    const footerCopy = document.querySelector(
        ".footer-copy"
    );

    if (footerCopy) {

        const currentYear =
            new Date().getFullYear();

        const firstParagraph =
            footerCopy.querySelector("p");

        if (firstParagraph) {

            firstParagraph.innerHTML =
                `© ${currentYear} Todos os Direitos Reservados`;

        }

    }


    /* =====================================================
       LINKS DE WHATSAPP
    ====================================================== */

    const whatsappLinks =
        document.querySelectorAll(
            'a[href*="wa.me"]'
        );

    whatsappLinks.forEach(link => {

        link.addEventListener("click", () => {

            console.log(
                "WhatsApp aberto."
            );

        });

    });


    /* =====================================================
       PROTEÇÃO CONTRA ENVIO DUPLO
    ====================================================== */

    if (form) {

        form.addEventListener("submit", () => {

            const submitButton =
                form.querySelector(
                    'button[type="submit"]'
                );

            if (submitButton) {

                submitButton.textContent =
                    "Abrindo WhatsApp...";

                setTimeout(() => {

                    submitButton.textContent =
                        "Enviar mensagem";

                }, 3000);

            }

        });

    }

});