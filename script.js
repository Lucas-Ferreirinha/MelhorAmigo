function actionSim() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "Sabe muito!! <br> O Feris é um cara legal, bonito, inteligente e tudo mais.";
    resultado.classList.add('padrao');
}

const btnNao = document.getElementById("btnNao");
btnNao.addEventListener("mouseover", function () {
    const containerWidth = window.innerWidth; 
    const containerHeight = window.innerHeight; 

    const randomX = Math.random() * (containerWidth - btnNao.offsetWidth);
    const randomY = Math.random() * (containerHeight - btnNao.offsetHeight);

    btnNao.style.position = "absolute"; // Garante que o botão possa se mover
    btnNao.style.left = `${randomX}px`;
    btnNao.style.top = `${randomY}px`;
});

