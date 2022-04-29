class Velha {

    constructor() {
        this._jogador = null;
        this.quadrado = null;
        this.jogadorSelecionado = document.getElementById('jogador-selecionado');
        this.quadrados = document.getElementsByClassName('quadrado');
        this.mudarJogador('X');
    }

    escolherQuadrado(id) {
        this.quadrado = document.getElementById(id);
        if (this.quadrado.innerHTML.trim() !== '-') {
            return;
        }
        this.quadrado.innerHTML = this._jogador;
        this.quadrado.style.color = '#000';

        if (this._jogador === 'X') {
            this._jogador = 'O';
        } else {
            this._jogador = 'X';
        }

        this.mudarJogador(this._jogador);
    }

    mudarJogador(valor) {
        this._jogador = valor;
        this.jogadorSelecionado.innerHTML = this._jogador;
    }

    checarVencedor() {
        var quadrado1 = document.getElementById('1');
        var quadrado1 = document.getElementById('2');
        var quadrado1 = document.getElementById('3');
        var quadrado1 = document.getElementById('4');
        var quadrado1 = document.getElementById('5');
        var quadrado1 = document.getElementById('6');
        var quadrado1 = document.getElementById('7');
        var quadrado1 = document.getElementById('8');
        var quadrado1 = document.getElementById('9');
        
    }

    checarSeguencia() {
        
    }
}