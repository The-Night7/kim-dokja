document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const navLinks = document.querySelectorAll('#main-nav a');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all links and sections
            navLinks.forEach(link => link.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');

            // Get the target section and make it active
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Stats Chart
    const ctx = document.getElementById('statChart').getContext('2d');
    const statChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Power', 'Speed', 'Trick', 'Recovery', 'Defense'],
            datasets: [{
                label: 'Kim Dokja',
                data: [5, 5, 8, 5, 4],
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                borderColor: 'rgba(52, 152, 219, 1)',
                pointBackgroundColor: 'rgba(52, 152, 219, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(52, 152, 219, 1)'
            }]
        },
        options: {
            maintainAspectRatio: true,
            responsive: true,
            scales: {
                r: {
                    min: 0,
                    max: 10,
                    ticks: {
                        stepSize: 1,
                        display: false,
                    },
                    grid: {
                        circular: false,
                        color: 'rgba(255,255,255,0.1)', // Lignes de grille plus claires pour le mode sombre
                    },
                    angleLines: {
                        color: 'rgba(255,255,255,0.2)', // Lignes d'angle plus claires pour le mode sombre
                    },
                    pointLabels: {
                        color: '#ffffff', // Texte blanc pour le mode sombre
                        font: {
                            size: 14,
                            weight: 'bold',
                        },
                    },
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}`;
                        }
                    }
                }
            },
            elements: {
                line: {
                    tension: 0 // Les lignes sont droites comme ça
                }
            },
        },
    });

    // Ajouter un effet de lueur après le rendu du graphique
    setTimeout(() => {
        const canvas = document.getElementById('statsRadarChart');
        canvas.style.filter = 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))';
    }, 100);

    // Card Flip Animation (optional enhancement)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.querySelector('.card-inner').classList.toggle('flipped');
        });
    });

    // Aura Animation
    const auraVisual = document.querySelector('.aura-visual');
    if (auraVisual) {
        setInterval(() => {
            const shadowSize = Math.floor(Math.random() * 10) + 10;
            auraVisual.style.boxShadow = `0 0 ${shadowSize}px rgba(52, 152, 219, 0.6)`;
        }, 1500);
    }
});