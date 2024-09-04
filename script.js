class Ditado {

    constructor() {
        this.Ditado = document.getElementById("Ditado");
        this.saida = document.getElementById('output');
        this.botao = document.getElementById('Enviar');
        this.botao.addEventListener('click', this.ExibirDitado.bind(this));
    }

    ExibirDitado() {
        const ditado1 = this.Ditado.value.trim();
        if (ditado1 === "peixinho é") {
            this.saida.textContent = "Acertou!!!";
        } else {
            this.saida.textContent = "Resposta Errada!";
        }
    }
}

window.onload = () => {
    new Ditado();
};
