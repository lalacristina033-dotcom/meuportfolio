const canvas = document.getElementById('matrix-bg');
if (canvas) {
    const ctx = canvas.getContext('2d');

    function ajustarTela() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    ajustarTela();
    window.addEventListener('resize', ajustarTela);

    const letras = '01010110ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/{}[]$#@%';
    const tamanhoFonte = 14;
    let colunas = canvas.width / tamanhoFonte;
    let gotas = Array(Math.floor(colunas)).fill(1);

    function desenhar() {
        ctx.fillStyle = 'rgba(11, 17, 32, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#38bdf8';
        ctx.font = tamanhoFonte + 'px monospace';

        for (let i = 0; i < gotas.length; i++) {
            const texto = letras.charAt(Math.floor(Math.random() * letras.length));
            ctx.fillText(texto, i * tamanhoFonte, gotas[i] * tamanhoFonte);

            if (gotas[i] * tamanhoFonte > canvas.height && Math.random() > 0.975) {
                gotas[i] = 0;
            }
            gotas[i]++;
        }
    }

    setInterval(desenhar, 45);
}
