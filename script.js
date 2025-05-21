 // JavaScript para el efecto de fade-in al hacer scroll
        document.addEventListener('DOMContentLoaded', function () {
            const sections = document.querySelectorAll('.section-container');

            const observerOptions = {
                root: null, // viewport
                rootMargin: '0px',
                threshold: 0.1 // 10% de la sección visible para activar
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    } else {
                        // Opcional: Si quieres que el efecto se reinicie al salir de la vista
                        entry.target.classList.remove('is-visible');
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
            });
        });