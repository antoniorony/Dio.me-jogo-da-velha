class Velha {

    constructor() {
        this._jogador = null;
        this.quadrado = null;
        this.vencedor = null;
        this.vencedorSelecionado = document.getElementById('vencedor-selecionado');
        this.jogadorSelecionado = document.getElementById('jogador-selecionado');
        this.quadrados = document.getElementsByClassName('quadrado');
        this.mudarJogador('X');
    }

    escolherQuadrado(id) {

        if (this.vencedor !== null) {
            return;
        }

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
        this.checarVencedor();
    }

    mudarJogador(valor) {
        this._jogador = valor;
        this.jogadorSelecionado.innerHTML = this._jogador;
    }

    checarVencedor() {
        var quadrado1 = document.getElementById('1');
        var quadrado2 = document.getElementById('2');
        var quadrado3 = document.getElementById('3');
        var quadrado4 = document.getElementById('4');
        var quadrado5 = document.getElementById('5');
        var quadrado6 = document.getElementById('6');
        var quadrado7 = document.getElementById('7');
        var quadrado8 = document.getElementById('8');
        var quadrado9 = document.getElementById('9');

        if (this.checarSeguencia(quadrado1, quadrado2, quadrado3)) {
            this.mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
            this.mudarVencedor(quadrado1);
            return;
        }

        if (this.checarSeguencia(quadrado4, quadrado5, quadrado6)) {
            this.mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
            this.mudarVencedor(quadrado4);
            return;
        }

        if (this.checarSeguencia(quadrado7, quadrado8, quadrado9)) {
            this.mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
            this.mudarVencedor(quadrado7);
            return;
        }

        if (this.checarSeguencia(quadrado1, quadrado4, quadrado7)) {
            this.mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
            this.mudarVencedor(quadrado1);
            return;
        }
        
        if (this.checarSeguencia(quadrado2, quadrado5, quadrado8)) {
            this.mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
            this.mudarVencedor(quadrado2);
            return;
        }

        if (this.checarSeguencia(quadrado3, quadrado6, quadrado9)) {
            this.mudarCorQuadrado(quadrado3, quadrado6, quadrado9);
            this.mudarVencedor(quadrado3);
            return;
        }

        if (this.checarSeguencia(quadrado1, quadrado5, quadrado9)) {
            this.mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
            this.mudarVencedor(quadrado1);
            return;
        }

        if (this.checarSeguencia(quadrado3, quadrado5, quadrado7)) {
            this.mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
            this.mudarVencedor(quadrado3);
            return;
        }
        
    }

    mudarVencedor(quadrado) {
        this.vencedor = quadrado.innerHTML
        this.vencedorSelecionado.innerHTML = this.vencedor;
    }

    mudarCorQuadrado(quadrado1, quadrado2, quadrado3) {
        if (((quadrado1.innerHTML).trim() !== '-') && ((quadrado2.innerHTML).trim() !== '-') && ((quadrado3.innerHTML).trim() !== '-')) {
            quadrado1.style.background = '#0f0';
            quadrado2.style.background = '#0f0';
            quadrado3.style.background = '#0f0';    
        }

        return;
        
    }

    checarSeguencia(quadrado1, quadrado2, quadrado3) {
        var eIgual = false;
        
        if (((quadrado1.innerHTML.trim() !== '-') && (quadrado2.innerHTML.trim() !== '-') && (quadrado3.innerHTML.trim() !== '-')) && (quadrado1.innerHTML.trim() === quadrado2.innerHTML.trim()) && (quadrado1.innerHTML.trim() === quadrado3.innerHTML.trim())) {
            eIgual = true;
        }

        return eIgual;
    }

    reiniciar() {
        this.vencedor = null;
        this.vencedorSelecionado.innerHTML = '';
        this._jogador = 'X'
        for (let index = 0; index < 9; index++) {
            this.quadrados[index].innerHTML = '-';
            this.quadrados[index].style.background = '#eee';
            this.quadrados[index].style.color = '#eee';
            
        }
    }
}