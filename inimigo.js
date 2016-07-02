function Inimigo(context, imagem, imgExplosao) {
   this.context = context;
   this.imagem = imagem;
   this.x = 0;
   this.y = 0;
   this.velocidade = 0;
   this.imgExplosao = imgExplosao;
}
Inimigo.prototype = {
   atualizar: function() {
      this.y +=
         this.velocidade * this.animacao.decorrido / 1000;

      if (this.y > this.context.canvas.height) {
         this.animacao.excluirSprite(this);
         this.colisor.excluirSprite(this);
      }
   },

   desenhar: function() {
      var ctx = this.context;
      var img = this.imagem;
      ctx.drawImage(img, this.x, this.y, img.width, img.height);
   },

   retangulosColisao: function() {

      var rets =  [   {x: this.x+10, y: this.y+3, largura: 40, altura: 50},  ];

      return rets;
   },

   colidiuCom: function(outro) {

   }
}
