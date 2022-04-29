class Velha {

    constructor() {
        this._jogador = null;
        this.quadrado = null;
        this.jogadorSelecionado = document.getElementById('jogador-selecionado');
        this.mudarJogador('X');
    }

    escolherQuadrado(id) {
        this.quadrado = document.getElementById(id);
        this.quadrado.innerHTML = this._jogador;
        this.quadrado.style.color = '#000';
    }

    mudarJogador(valor) {
        this._jogador = valor;
        this.jogadorSelecionado.innerHTML = this._jogador;
    }
}