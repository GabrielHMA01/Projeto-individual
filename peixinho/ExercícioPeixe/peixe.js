var width = 1200
var height = 1200

var config = {
    type: Phaser.AUTO,
    width: width,
    height: height,

    scene: {
        preload: preload,
        create: create,
        update: update
    },
    scale: {
        mode: Phaser.Scale.RESIZE
    }
};

var game = new Phaser.Game(config);

function preload() {
    //carrega a imagem de fundo
    this.load.image('Mar', 'assets/fundoMar.png');

    //carrega a imagem das bolhas
    this.load.image('bolhas', 'assets/bolhas.png');

    //carrega a imagem das algas
    this.load.image('algas', 'assets/Algas.png');

    //carrega a logo do inteli
    this.load.image('logo', 'assets/logo-inteli_branco.png');

    //carrega a imagem do peixe
    this.load.image('peixe', 'assets/peixe/tubarao.png');

    //carrega a música de fundo
    this.load.audio('main_theme', 'assets/audio/musica_de_fundo.mp3');
    }

function create () {

    //adiciona música
    var main_theme = this.sound.add("main_theme", {volume: 0.7} );

    //dá play na música
    main_theme.play();

    //adiciona o fundo
    this.add.image(width/2, height/2, 'Mar').setScale();

    //adiciona a imagem das algas
    this.add.image(400, 1000, 'algas') .setScale (0.2);

    //adiciona a logo do inteli
    this.add.image(600, 75, 'logo') .setScale (1);

    //guarda o tubarão em uma variável
    tubarao = this.add.image(400, 300, 'peixe').setScale(2);

    //guarda as bolhas em uma variável
    bolhas = this.add.image(375, 250, 'bolhas') .setScale (0.3);

    //flipa a imagem do tubarão
    tubarao.setFlip(true, false);

    //flipa a iamgem das bolhas
    bolhas.setFlip(true, false);
    }

function update () {
    //adiciona movimento ao tubarão
    tubarao.x = this.input.x;
    tubarao.y = this.input.y;

    //adiciona movimentos às bolhas que acompanham o tubarão com um deslocamento no eixo X
    bolhas.x = this.input.x-200;
    bolhas.y = this.input.y;
}
    //exibe mensagens antes de iniciar o jogo
    // window.alert ("Bem vindo!");
    // window.confirm ("Vamos começar? obs: O carregamento pode levar alguns instantes");