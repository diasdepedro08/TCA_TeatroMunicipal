const SUPABASE_URL = "https://tbilczvprmyvizrlvewr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_lzyGhvv-QA5tNc06ubvFCA_mLFc8dnA";
const API_URL = "https://tbilczvprmyvizrlvewr.supabase.co/rest/v1/"

const cadastro= document.getElementById('cadastro');
cadastro.addEventListener('submit', cadastrar);


async function cadastrar(e) {
  e.preventDefault();

    const dadosevento = {
      titulo: titulo.value,
      duracao: Number(duracao.value),
      publico_id: Number(document.querySelector('input[name="publico"]:checked').value),
      sinopse: sinopse.value
    };

    try{
        const responseE = await fetch(`${API_URL}eventos`, {
        method: 'POST',
        headers: {
            apikey: SUPABASE_PUBLISHABLE_KEY,
            'Content-Type': 'application/json',
            Prefer: 'return=representation'
        },
        body: JSON.stringify(dadosevento)
        });


        const dadosproponente = {
            evento_id: evento.id,
            nome: proponente.value,
            cpf: cpf.value,
            grupo: coletivo.value,
            cnpj: cnpj.value,
            email: email.value,
            telefone: telefone.value,
            inscricao_id: Number(document.querySelector('input[name="inscricao"]:checked').value),
            cota_id: Number(document.querySelector('input[name="cotas"]:checked').value),
            curriculo: curriculo.value
        };

        const responseP = await fetch(`${API_URL}proponente`, {
            method: 'POST',
            headers: {
                apikey: SUPABASE_PUBLISHABLE_KEY,
                'Content-Type': 'application/json',
                Prefer: 'return=representation'
            },
            body: JSON.stringify(dadosproponente)
        });
        if (!responseP.ok) throw new Error(await responseP.text());
        await responseP.json();

        mensagem.innerHTML = 'Evento cadastrado com sucesso!';
        cadastro.reset();
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
    <td><input type="time" id="horario"></td>
    <td><input type="text" placeholder="Solidário, Gratuito, XX,XX"></td>
  `;

  tbody.appendChild(sessao);
}