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

