function Estrada(context, imagem) {
  this.context = context;
  this.imagem = imagem;
  this.velocidade = 0;
  this.posicaoEmenda = 0;
}

Estrada.prototype.atualizar = function () {
this.posicaoEmenda += this.velocidade;
  if(this.posicaoEmenda > this.imagem.height){
    this.posicaoEmenda = 0;
  }
};

Estrada.prototype.desenhar = function () {
    var img = this.imagem;

    var posicaoY = this.posicaoEmenda-img.height;
    this.context.drawImage(img, 0, posicaoY, img.width, img.height);

    posicaoY = this.posicaoEmenda;
    this.context.drawImage(img, 0, posicaoY, img.width, img.height);
};
// function Estrada(context, imagem) {
//    this.context = context;
//    this.imagem = imagem;
//    this.velocidade = 0;
//    this.posicaoEmenda = 0;
// }
// Estrada.prototype = {
//    atualizar: function() {
//       // Atualizar a posição de emenda
//       this.posicaoEmenda += this.velocidade;
//
//       // Emenda passou da posição
//       if (this.posicaoEmenda > this.imagem.height)
//       {
//          this.posicaoEmenda = 0;
//        }
//    },
//    desenhar: function() {
//       var img = this.imagem;  // Para facilitar a escrita :D
//
//       // Primeira cópia
//       var posicaoY = this.posicaoEmenda - img.height;
//       this.context.drawImage(img, 0, posicaoY, img.width, img.height);
//
//       // Segunda cópia
//       posicaoY = this.posicaoEmenda;
//       this.context.drawImage(img, 0, posicaoY, img.width, img.height);
//    }
// }
