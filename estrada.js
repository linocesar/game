function Estrada(context, imagem){

this.context = context;
this.imagem = imagem;
this.velocidade = 0;
this.posicaoMetade = 0;


}

Estrada.prototype.atualizar = function () {
  this.posicaoMetade += this.velocidade;
};

Estrada.prototype.desenhar = function () {
  var img = this.imagem;
  var py = this.posicaoMetade - img.heigth;
  this.context.drawImage(img, 0, py, img.width, img.heigth);
  this.context.drawImage(img, 0, py, img.width, img.heigth);
};
