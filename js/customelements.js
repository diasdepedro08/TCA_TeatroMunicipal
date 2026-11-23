class MeuHeader extends HTMLElement {
  constructor() {
  super();
  this.innerHTML = `
  <header>
    <nav>
      <input type="checkbox" id="menu">

      <label for="menu">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <ul>
        <li><h2>Menu:</h2></li>
        <li><a href="index.html">Início</a></li>
        <li><a href="museu.html">Museu Online</a></li>
        <li><a href="cadastro.html">Editais</a></li>
      </ul>
    </nav>

    <img src="img/logo.png" id="logo" alt="Logo">
  </header>`;
  }
 }
 customElements.define('meu-header', MeuHeader);

class MeuFooter extends HTMLElement {
  constructor() {
  super();
  this.innerHTML = `
    <footer>
      <h1>Siga nossas redes:</h1>
      <div><img src="img/Instagram_logo.png" alt="Instagram_logo"><a href="https://www.instagram.com/teatromunicipaldoriogrande?utm_source=ig_web_button_share_sheet&obrf=ZDNlZDc0MzIxNw==">@teatromunicipaldoriogrande</a></div>
      <section><h3>Idealizadora</h3><p>Raquel Valério, Rio Grande-RS <br>Diretora do teatro municipal de Rio Grande</p></section>
      <section><h3>Programador</h3><p>Pedro Dias de Souza, Rio Grande-RS,  @2026 <br> Contatos: 53 99927-6278, diasdesouzapedro3@gmail.com <br> Aluno IFRS campus Rio Grande.</p></section>
    </footer>`;
  }
 }
 customElements.define('meu-footer', MeuFooter);

 class Topo extends HTMLElement {
  constructor() {
  super();
  this.innerHTML = `<a href="#Bem-vindo" id="ini"><img src="img/seta.png" alt="Minha Imagem" onmouseover="this.src='img/setahover.png'" onmouseout="this.src='img/seta.png'"></a>`;
  }
 }
 customElements.define('botao-topo', Topo);
