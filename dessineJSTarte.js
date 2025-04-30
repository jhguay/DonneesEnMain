function dessinerTarte(souverainistes, centristes, federalistes) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) * 0.8;

    // Calculer les angles de début et de fin pour chaque portion
    const total = souverainistes + centristes + federalistes;
    const angleSouverainistes = (souverainistes / total) * 2 * Math.PI;
    const angleCentristes = (centristes / total) * 2 * Math.PI;
    const angleFederalistes = (federalistes / total) * 2 * Math.PI;

    let startAngle = 0;

    // Dessiner les portions
    // Souverainistes (bleu clair)
    ctx.fillStyle = 'rgba(173, 216, 230, 1)'; // Bleu clair
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, startAngle + angleSouverainistes);
    ctx.closePath();
    ctx.fill();

    startAngle += angleSouverainistes;

    // Centristes (gris clair)
    ctx.fillStyle = 'rgba(220, 220, 220, 1)'; // Gris clair
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, startAngle + angleCentristes);
    ctx.closePath();
    ctx.fill();

    startAngle += angleCentristes;

    // Federalistes (rouge clair)
    ctx.fillStyle = 'rgba(240, 128, 128, 1)'; // Rouge clair
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, startAngle + angleFederalistes);
    ctx.closePath();
    ctx.fill();
}

// Exemple d'utilisation
dessinerTarte(30, 40, 30);
