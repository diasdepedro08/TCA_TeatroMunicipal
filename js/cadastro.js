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

//Surtos!!

comentarios.addEventListener('submit_evento', cadastrar);
        
async function cadastrar(e) {
  e.preventDefault(); 

  const noticiaData = {
    proponente: proponente.value,
    cpf: cpf.value,
    grupo: coletivo.value,
    cnpj: cnpj.value,
    email: email.value,
    telefone: telefone.value,
    curriculo: curriculo.value
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
    mensagem.innerHTML = `Notícia criada com sucesso!<br>Preencha o formulário novamente para criar outra notícia.`;
    comentarios.reset();
    buscarNoticias();
  } catch (error) {
    console.error('Erro ao criar notícia:', error);
  }
}