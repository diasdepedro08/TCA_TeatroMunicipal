const SUPABASE_URL = "https://tbilczvprmyvizrlvewr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_lzyGhvv-QA5tNc06ubvFCA_mLFc8dnA";
const API_URL = "https://tbilczvprmyvizrlvewr.supabase.co/rest/v1/Comentarios"

const comentarios = document.querySelector('#comentarios');

const comentID = document.querySelector('#comentID');
const names = document.querySelector('#name');
const mail = document.querySelector('#mail');
const coment = document.querySelector('#coment');

const submitBtn = document.querySelector('#submitBtn');
const noticiasContainer = document.querySelector('#noticiasContainer');
const postados = document.querySelector('#postados');
const mensagem = document.querySelector('#mensagem');


let localNoticias = [];

//CRIAR:

comentarios.addEventListener('submit', criarNoticia);
        
async function criarNoticia(e) {
  e.preventDefault(); 

  const noticiaData = {
    nome: names.value,
    email: mail.value,
    comentario: coment.value
  };
            
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY,
        'Content-Type': 'application/json',
        Prefer: 'return=representation'
      },
      body: JSON.stringify(noticiaData)
    });
    const newNoticia = await response.json();
    mensagem.innerHTML = `Notícia criada com sucesso!<br>Preencha o formulário novamente para criar outra notícia.`;
    comentarios.reset();
    buscarNoticias();
  } catch (error) {
    console.error('Erro ao criar notícia:', error);
  }
}

async function buscarcoments() {
  try {
    const response = await fetch(`${API_URL}`, {
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY
      }
    });
    localNoticias = await response.json();
    rendercoments();
  } catch (error) {
    postados.innerHTML = 'Erro ao carregar os dados.';
  }
}

function rendercoments() {
  if (localNoticias.length === 0) {
    postados.innerHTML = '<p>Nenhuma notícia encontrada.</p>';
    return;
  }

  postados.innerHTML = '';
  localNoticias.forEach(Comentarios => {
  postados.innerHTML += `
    <div id="noticia-${Comentarios.id}">
      <h3>${Comentarios.nome}:</h3>
      <p>${Comentarios.comentario}</p>
    </div>`;
  });
}


//EDTAR:
        
comentarios.addEventListener('submit', updateNoticia);
        

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


function renderNoticias() {
  if (localNoticias.length === 0) {
    noticiasContainer.innerHTML = '<p>Nenhuma notícia encontrada.</p>';
    return;
  }

  noticiasContainer.innerHTML = '';
  localNoticias.forEach(Comentarios => {
  noticiasContainer.innerHTML += `
    <div class="noticia-card" id="noticia-${Comentarios.id}">
      <h3>${Comentarios.nome}:</h3>
      <p>${Comentarios.comentario}</p>

      <div class="actions">
        <button class="btn-edit" onclick="prepararEdit(${Comentarios.id})">Editar</button>
        <button class="btn-delete" onclick="deletarNoticia(${Comentarios.id})">Deletar</button>
      </div>
    </div>`;
  });
}


function prepararEdit(id) {
  const noticia = localNoticias.find(n => n.id === id);
  if (noticia) {
    comentarios.classList.remove('oculto');
    mensagem.innerHTML = 'Informe os dados que serão alterados';

    comentID.value = noticia.id;
    names.value = noticia.nome;
    coment.value = noticia.comentario;

    comentarios.scrollIntoView({ behavior: 'smooth' });
  }
}


async function updateNoticia(e) {
  e.preventDefault();
            
  const id = comentID.value;
  const noticiaData = {
    nome: names.value,
    comentario: coment.value
  };

  try {
    const url = `${API_URL}?id=eq.${id}`;
    const response = await fetch(url, {
      method: 'PATCH',
        headers: {    
          apikey: SUPABASE_PUBLISHABLE_KEY,
          'Content-Type': 'application/json',  
          Prefer:'return=representation'
        },
        body: JSON.stringify(noticiaData)
      });
    const updatedNoticia = await response.json();
                
    comentarios.classList.add('oculto');
    noticiasContainer.classList.remove('oculto');
    mensagem.innerHTML = `Notícia alterada com sucesso!<br>Escolha outra notícia para editar.`;
    buscarNoticias();
  } catch (error) {
    console.error('Erro ao alterar notícia:', error);
  }
}

//EXCLUIR:

async function deletarNoticia(id) {
  if (!confirm('Deseja realmente excluir esta notícia?')) return;

  try {
    const url = `${API_URL}?id=eq.${id}`;
    let resposta = await fetch(url, {
      method: 'DELETE',
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY
      }
    });
    mensagem.innerHTML = `Notícia excluída com sucesso! <br>Escolha outra notícia para excluir.`;       
               
    buscarNoticias();
  } catch (error) {
    console.error('Erro ao excluir notícia:', error);
  }
}

buscarNoticias();
buscarcoments();

function novalinha() {
  const tbody = document.querySelector("#tabelaequipe tbody");
  const n_linha = tbody.rows.length + 1;

  const equipe = document.createElement("tr");
  equipe.innerHTML = `
    <td class="col-num">${n_linha}</td>
    <td><input type="text" placeholder="Digite o nome"></td>
    <td><input type="text" placeholder="Digite a função"></td>
    <td><input type="text" placeholder="Link ou resumo"></td>
  `;

  tbody.appendChild(equipe);
}

function novadata() {
  const tbody = document.querySelector("#tabeladatas tbody");
  const n_linha = tbody.rows.length + 1;

  const sessao = document.createElement("tr");
  sessao.innerHTML = `
    <td class="col-num">${n_linha}</td>
    <td> <input type="date" id="datas"></td>
    <td><input type="text" placeholder="Ex: 00:00" id="horario"></td>
    <td><input type="text" placeholder="Solidário, Gratuito, XX,XX"></td>
  `;

  tbody.appendChild(sessao);
}