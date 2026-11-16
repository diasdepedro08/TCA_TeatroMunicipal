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

//----------------------------------------------------------------------------------


const SUPABASE_URL = "https://tbilczvprmyvizrlvewr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_lzyGhvv-QA5tNc06ubvFCA_mLFc8dnA";
const API_URL = "https://tbilczvprmyvizrlvewr.supabase.co/rest/v1/Comentarios"




//-------------------------------------------CRUD do Teleken-----------------------------------------------------------------


        const noticiaForm = document.querySelector('#noticiaForm');
        const noticiaIdInput = document.querySelector('#noticiaId');
        const noticiaTitleInput = document.querySelector('#noticiaTitle');
        const noticiaBodyInput = document.querySelector('#noticiaBody');
        const submitBtn = document.querySelector('#submitBtn');
        const noticiasContainer = document.querySelector('#noticiasContainer');
        const mensagem = document.querySelector('#mensagem');


  
        let localNoticias = [];
        
        //Ouvintes de eventos
        noticiaForm.addEventListener('submit', updateNoticia);
        

        // 1. READ - Buscar as noticias *********
        async function buscarNoticias() {
            try {
                const response = await fetch(`${API_URL}`, {
                    headers: {
                        apikey: SUPABASE_PUBLISHABLE_KEY
                    }
                });
                localNoticias = await response.json();
                renderNoticias();
            } catch (error) {
                noticiasContainer.innerHTML = 'Erro ao carregar os dados.';
            }
        }

        // Renderizar os elementos na tela
        function renderNoticias() {
            if (localNoticias.length === 0) {
                noticiasContainer.innerHTML = '<p>Nenhuma notícia encontrada.</p>';
                return;
            }

            noticiasContainer.innerHTML = '';
            localNoticias.forEach(noticia => {
                noticiasContainer.innerHTML += `
                    <div class="noticia-card" id="noticia-${noticia.id}">
                        <h3>${noticia.titulo}</h3>
                        <p>${noticia.corpo}</p>
                        <div class="actions">
                            <button class="btn-edit" onclick="prepararEdit(${noticia.id})">Editar</button>
                        </div>
                    </div>
                `;
            });
        }

       

        // Preenche o formulário com os dados da noticia selecionada para edição
        function prepararEdit(id) {
            const noticia = localNoticias.find(n => n.id === id);
            if (noticia) {
                noticiaForm.classList.remove('oculto');
                mensagem.innerHTML = 'Informe os dados que serão alterados';

                noticiaIdInput.value = noticia.id;
                noticiaTitleInput.value = noticia.titulo;
                noticiaBodyInput.value = noticia.corpo;
                          
            }
        }

        // 3. UPDATE - Função que envia o PUT para a API *********
        async function updateNoticia(e) {
            e.preventDefault(); // Impede o HTML de recarregar a página inteira
            
            const id = noticiaIdInput.value;
            const noticiaData = {
                titulo: noticiaTitleInput.value,
                corpo: noticiaBodyInput.value
            };

            try {
                const url = `${API_URL}?id=eq.${id}`;
                const response = await fetch(url, {
                    method: 'PATCH',
                    headers: {    
                         apikey: PUBLISHABLE_KEY,
                        'Content-Type': 'application/json',  
                         Prefer:'return=representation'
                    },
                    body: JSON.stringify(noticiaData)
                });
                const updatedNoticia = await response.json();
                
                noticiaForm.classList.add('oculto');
                noticiasContainer.classList.remove('oculto');
                mensagem.innerHTML = `Notícia alterada com sucesso!<br>
                                    Escolha outra notícia para editar.`;
                buscarNoticias(); // Atualiza a lista de notícias após a alteração
            } catch (error) {
                console.error('Erro ao alterar notícia:', error);
            }
        }

        buscarNoticias(); // Carrega as notícias ao iniciar a página