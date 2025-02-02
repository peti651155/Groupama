document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.card-header');
    const truncateLinks = document.querySelectorAll('.truncate-link');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const cardBody = toggle.nextElementSibling;

            if (cardBody.classList.contains('details-hidden')) {
                cardBody.classList.remove('details-hidden');
                cardBody.classList.add('details-visible');
            } else {
                cardBody.classList.remove('details-visible');
                cardBody.classList.add('details-hidden');
            }
        });
    });

    truncateLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const fullText = link.dataset.fullText;
            link.textContent = fullText;
            link.style.pointerEvents = 'none';
        });
    });
});

document.querySelectorAll('.btn-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const entryBody = button.parentElement.nextElementSibling;
        entryBody.classList.toggle('details-hidden');
        entryBody.classList.toggle('details-visible');
    });
});
