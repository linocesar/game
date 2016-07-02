 var SOM_BURACO = new Audio();
 SOM_BURACO.src = 'snd/pneu-estouro.mp3';
 SOM_BURACO.volume = 0.4;
 SOM_BURACO.load();
function Buracada(context, imagem, x, y) {
   this.context = context;
   this.imagem = imagem;
   this.spritesheet = new Spritesheet(context, imagem, 1, 4);
   this.spritesheet.intervalo = 75;
   this.x = x;
   this.y = y;
   this.animando = false;

   var buracada = this;
   this.fimDaBuracada = null;
   this.spritesheet.fimDoCiclo = function() {
      buracada.animacao.excluirSprite(buracada);
      if (buracada.fimDaBuracada) buracada.fimDaBuracada();
   }

  SOM_BURACO.currentTime = 0.0;
  SOM_BURACO.play();
}
Buracada.prototype = {
   atualizar: function() {

   },
   desenhar: function() {
      this.spritesheet.desenhar(this.x, this.y);
      this.spritesheet.proximoQuadro();
   }
}
