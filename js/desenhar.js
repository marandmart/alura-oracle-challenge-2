const Desenhar = (part) => {

    let canvas = document.getElementById('hangman');
    let context = canvas.getContext('2d');

    switch (part) {
        case 'forca':
            context.lineWidth = 2;
            context.beginPath();
            context.moveTo(900, 900);
            context.lineTo(100, 900);
            context.moveTo(300, 900);
            context.lineTo(300, 100);
            context.lineTo(600, 100);
            context.lineTo(600, 200);
            context.stroke();
            break;

        case 'cabeça':
            context.lineWidth = 2;
            context.beginPath();
            context.arc(600, 260, 60, 0, Math.PI * 2);
            context.closePath();
            context.stroke();
            break;

        case 'corpo':
            context.lineWidth = 2;
            context.beginPath();
            context.moveTo(600, 320);
            context.lineTo(600, 600);
            context.stroke();
            break;

        case 'braços':
            context.lineWidth = 2;
            context.beginPath();
            context.moveTo(600, 400);
            context.lineTo(500, 500);
            context.moveTo(600, 400);
            context.lineTo(700, 500);
            context.stroke();
            break;

        case 'pernas':
            context.lineWidth = 2;
            context.beginPath();
            context.moveTo(600, 600);
            context.lineTo(550, 800);
            context.moveTo(600, 600);
            context.lineTo(650, 800);
            context.stroke();
            break;

        case 'olhos':
            context.lineWidth = 2;
            context.beginPath();
            context.arc(580, 250, 10, 0, Math.PI * 2);
            context.closePath(620, 250);
            context.stroke();
            context.beginPath();
            context.arc(620, 250, 10, 0, Math.PI * 2);
            context.closePath();
            context.stroke();
            break;

        case 'nariz':
            context.lineWidth = 2;
            context.beginPath();
            context.moveTo(600, 260);
            context.lineTo(605, 275);
            context.lineTo(600, 275);
            context.stroke();
            break;

        case 'boca':
            context.lineWidth = 2;
            context.beginPath();
            context.moveTo(615, 295);
            context.lineTo(585, 295);
            context.stroke();
            break;

    }

};