var SOM_DERRAPAGEM = new Audio();
SOM_DERRAPAGEM.src = 'snd/derrapagem.mp3';
SOM_DERRAPAGEM.volume = 0.4;
SOM_DERRAPAGEM.load();
function Derrapagem(context, imagem, x, y) {
   this.context = context;
   this.imagem = imagem;
   this.spritesheet = new Spritesheet(context, imagem, 1, 8);
   this.spritesheet.intervalo = 75;
   this.x = x;
   this.y = y;
   this.animando = false;

   var derrapagem = this;
   this.fimDaDerrapagem = null;
   this.spritesheet.fimDoCiclo = function() {
      derrapagem.animacao.excluirSprite(derrapagem);
      if (derrapagem.fimDaDerrapagem) derrapagem.fimDaDerrapagem();
   }

  SOM_DERRAPAGEM.currentTime = 0.7;
  SOM_DERRAPAGEM.play();
}
Derrapagem.prototype = {
   atualizar: function() {

   },
   desenhar: function() {
      this.spritesheet.desenhar(this.x, this.y);
      this.spritesheet.proximoQuadro();
   }
}
