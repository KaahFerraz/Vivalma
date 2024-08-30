// js do menu hamburguer

const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const offcanvasMenu = document.querySelector('.offcanvas-menu')

openBtn.addEventListener('click', function(e) {
    e.preventDefault();
    offcanvasMenu.classList.add('active');
});

closeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    offcanvasMenu.classList.remove('active');
});

// timeline
document.addEventListener('DOMContentLoaded', function () {
    const indicators = document.querySelectorAll('.indicator');
    const card = document.getElementById('eventCard');
    const timelinePages = document.querySelectorAll('.timeline-page');
    let currentPage = 0;

    function updateCard(index) {
        const descriptions = [
            "1989 - Prêmio Nacional de Jornalismo Areosa Pena",
            "1990 - Grande prêmio da Ficção Narrativa ",
            "1995 - Prêmio Nacional de Ficção da Associação dos Escritores Moçambicanos",
            "1999 - Prêmio Vergílio Ferreira, pelo conjunto da sua obra",
            "2001 - Prêmio Mário António, pelo livro O último voo do flamingo",
            "2007 - Prêmio União Latina de Literaturas Românicas",
            "2007 - Prêmio Passo Fundo Zaffari e Bourbon de Literatura, na Jornada Nacional de Literatura",
            "2008 - Prêmio Rosalía de Castro do Centro PEN Galiza.",
            "2012 - Prêmio Eduardo Lourenço 2012",
            "2013 - Prêmio Camões 2013",
            "2014 - Neustadt International Prize for Literature",
            "2021 - França: prêmio Albert Bernard com base na trilogia As areias do Imperador.",
            "2022 - Recebeu o prêmio José Craveirinha de Literatura",
            "2024 - Conto Branquinho da Fonseca da Associação Portuguesa de Escritores pelo livro “Compêndio para Desenterrar Nuvens”",
        ];
        card.innerHTML = `<h2>Premiação no ano de...</h2><p>${descriptions[index]}</p>`;
        card.style.display = 'block';
        

        // Adiciona o evento de clique ao botão de fechar
        const indicators = document.getElementById('closeCard');
        closeButton.addEventListener('click', closeCard);
    }

    function updateIndicators(index) {
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    function handleIndicatorClick(event) {
        const index = parseInt(event.target.getAttribute('data-index'), 10);
        updateIndicators(index);
        updateCard(index);
    }

    function closeCard() {
        card.style.display = 'none';
        updateIndicators(-1); // Remove a classe 'active' de todos os indicadores
    }

    function updateNavigationButtons() {
        document.getElementById('prevButton').disabled = currentPage === 0;
        document.getElementById('nextButton').disabled = currentPage === timelinePages.length - 1;
    }

    function showPage(pageIndex) {
        timelinePages.forEach((page, i) => {
            page.style.display = i === pageIndex ? 'flex' : 'none';
        });
        updateNavigationButtons();
    }

    indicators.forEach(indicator => {
        indicator.addEventListener('click', handleIndicatorClick);
    });

    document.getElementById('prevButton').addEventListener('click', function () {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    });

    document.getElementById('nextButton').addEventListener('click', function () {
        if (currentPage < timelinePages.length - 1) {
            currentPage++;
            showPage(currentPage);
        }
    });

    showPage(currentPage);
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))