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
        <li><a href="principal.html">Início</a></li>
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



const SUPABASE_URL = "https://tbilczvprmyvizrlvewr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_lzyGhvv-QA5tNc06ubvFCA_mLFc8dnA";

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    const dados = {
        nome: document.getElementById("name").value,
        email: document.getElementById("mail").value,
        comentario: document.getElementById("coment").value
    };

    try {
        const resposta = await fetch(
            `${SUPABASE_URL}/rest/v1/Comentarios`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "apikey": SUPABASE_PUBLISHABLE_KEY,
                    "Authorization": `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
                    "Prefer": "return=minimal"
                },
                body: JSON.stringify(dados)
            }
        );

        if (!resposta.ok) {
            const erro = await resposta.json();
            console.error("Erro ao salvar:", erro);
            alert("Erro ao publicar comentário.");
            return;
        }

        alert("Comentário publicado com sucesso!");
        formulario.reset();

    } catch (erro) {
        console.error("Erro:", erro);
        alert("Não foi possível conectar ao servidor.");
    }
});



async function buscarEDisplayDados() {

  const SUPABASE_URL = 'https://tbilczvprmyvizrlvewr.supabase.co';
  const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiaWxjenZwcm15dml6cmx2ZXdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQyNjQ5NzAsImV4cCI6MjEwOTg0MDk3MH0.6DGsn5aLkJ0_igXuydcxtlGyNMjM1RpDnyOssAoMwjA';
  const TABELA = 'Comentarios';

  const postados = document.getElementById("postados");

  try {

    const response = await fetch(`${SUPABASE_URL}/rest/v1/${TABELA}?select=*`, {
      method: 'GET',
      headers: {
        'apikey': ANON_KEY,
        'Authorization': `Bearer ${ANON_KEY}`,
        'Content-Type': 'application/json'
      }
    });


    if (!response.ok) {
      throw new Error(`Erro do servidor: ${response.statusText}`);
    }

    const data = await response.json();


    if (data && data.length > 0) {

      const textoFormatado = data.map(item => `<p class="pcs"><strong>${item.nome}:</strong> ${item.comentario}</p>`).join("");

      postados.innerHTML = textoFormatado;

    }

  } catch (error) {
    postados.textContent = 'Erro ao carregar dados: ' + error.message;
  }
}


buscarEDisplayDados();