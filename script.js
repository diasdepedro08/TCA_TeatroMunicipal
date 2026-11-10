const SUPABASE_URL = "https://tbilczvprmyvizrlvewr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_lzyGhvv-QA5tNc06ubvFCA_mLFc8dnA";

const formulario = document.getElementById("formulario");
const enviar = document.getElementById("enviar");

formulario.addEventListener("submit", async (event) => {
    event.preventDefault()
    enviar.textContent = 'Enviando...'

    const formData = new FormData(form)
    const dados = {
        nome: formData.get('nome'),
        email: formData.get('email'),
        mensagem: formData.get('mensagem')
    }

    const { data, error } = await supabase
    .from('Comentarios')
    .insert([dados])

  if (error) {
    console.error('Erro ao salvar:', error.message)
    alert('Algo deu errado, verifique')
  } else {
    alert('Comentário publicado')
    form.reset()
  }

});
