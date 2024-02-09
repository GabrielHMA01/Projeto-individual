var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    //carrega a imagem de fundo
    this.load.image('Mar', 'assets/fundoMar.png');

    //carrega a imagem das algas
    this.load.image ('algas', 'assets/Algas.png');

    //carrega a logo do inteli
    this.load.image ('logo', 'assets/logo-inteli_branco.png');

    //carrega a imagem do peixe
    this.load.image ('peixe', 'assets/peixe/tubarao.png');
    }
function create () {
    //adiciona o fundo
    this.add.image(400, 300, 'Mar');

    //adiciona a imagem dad algas
    this.add.image(120, 500, 'algas') .setScale (0.12);

    //adiciona a logo do inteli
    this.add.image(400, 75, 'logo') .setScale (0.5);

    //guarda o peixe em uma variável
    tubarao = this.add.image(400, 300, 'peixe');

    tubarao.setFlip(true, false)
    }
function update () {
    tubarao.x = this.input.x
    tubarao.y = this.input.y
}
    //exibe mensagens antes de iniciar o jogo
    window.alert ("Bem vindo")
    window.confirm ("Vamos começar?")