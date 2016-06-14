function Carro(context, imagem, teclado){
this.x = 0;
this.y = 0;
this.context = context;
this.imagem = imagem;
this.teclado = teclado;
this.velocidade = 0;

}

Carro.prototype.atualizar = function () {

    var limiteADireita = 2*this.context.canvas.width/3;
    var limiteAEsquerda = this.context.canvas.width/3;
    if(this.teclado.pressionada(SETA_DIREITA) && this.x <= limiteADireita){
      this.x += 10;
    }
    if(this.teclado.pressionada(SETA_ESQUERDA) && this.y >= limiteAEsquerda){
      this.x -= 10;
    }

};

Carro.prototype.desenhar = function () {

  var img = this.imagem;

  this.context.drawImage(img, this.x, this.y, img.width, img.height);

};
