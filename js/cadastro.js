const cadastro= document.getElementById('cadastro');
cadastro.addEventListener('submit', cadastrar);
        
async function cadastrar(e) {
  e.preventDefault(); 

  const noticiaData = {
    proponente: proponente.value,
    cpf: cpf.value,
    grupo: coletivo.value,
    cnpj: cnpj.value,
    email: email.value,
    telefone: telefone.value,
    inscricao_id: document.querySelector('input[name="inscricao"]:checked').value,
    cota_id: document.querySelector('input[name="cotas"]:checked').value,
    curriculo: curriculo.value,

    titulo: titulo.value,
    duracao: duracao.value,
    publico: document.querySelector('input[name="publico"]:checked').value,
    sinopse: sinopse.value,
    //equipe:
    
    //sessoes:
    montagem: chegada.value,
    desmontagem: saida.value
  };
            
  try {
    const response = await fetch(API_URL+'eventos', {
      method: 'POST',
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY,
        'Content-Type': 'application/json',
        Prefer: 'return=representation'
      },
      body: JSON.stringify(noticiaData)
    });
    const newNoticia = await response.json();
    mensagem.innerHTML = `Evento cadastrado com sucesso!`;
    comentarios.reset();
    buscarNoticias();
  } catch (error) {
    console.error('Erro ao cadastrar evento:', error);
  }
}





































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