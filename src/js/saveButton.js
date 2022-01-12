const nomeProjeto = document.querySelector("[data-dados=nome]");
const descricaoProjeto = document.querySelector("[data-dados=descricao]");
const boatoaSalvar = document.querySelector("[data-dados=salvar]");
const codigo = document.querySelector("[data-codigo=code]");




function salvarProjetos(){

    const projeto = JSON.parse(localStorage.getItem('projetos')) || [];
    const dados  = {
        nome: nomeProjeto.value,
        descricao: descricaoProjeto.value,
        codigo : codigo.textContent
    }
    
    const projetosAtualizados = [...projeto, dados];
    
    localStorage.setItem('projetos',JSON.stringify(projetosAtualizados))

    nomeProjeto.value = '';
    descricaoProjeto.value = '';
    codigo.textContent = '';
    

}

boatoaSalvar.addEventListener('click', salvarProjetos)