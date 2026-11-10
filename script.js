const SUPABASE_URL = "https://tbilczvprmyvizrlvewr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_lzyGhvv-QA5tNc06ubvFCA_mLFc8dnA";

const formulario = document.getElementById("formulario");
const enviar = document.getElementById("enviar");

formulario.addEventListener("submit", async (event) => {
  event.preventDefault()
  enviar.disabled = true
  enviar.textContent = 'Enviando...'

  const dados = {
    nome: document.getElementById("name").value,
    email: document.getElementById("email").value,
    mensagem: document.getElementById("coment").value
  }

  const { data, error } = await supabase
    .from('public.Comentarios')
    .insert([dados])

  if (error) {
    console.error('Erro ao salvar:', error.message)
    alert('Algo deu errado, verifique')
  } else {
    alert('Comentário publicado')
    form.reset()
  }

  enviar.disabled = false
  enviar.textContent = 'Enviar'

});
