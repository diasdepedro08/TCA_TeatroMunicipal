comentarios.addEventListener('submit', criarNoticia);
        
async function criarNoticia(e) {
  e.preventDefault(); 

  const noticiaData = {
    nome: names.value,
    email: mail.value,
    comentario: coment.value
  };
            
  try {
    const response = await fetch(API_URL+'Comentarios', {
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