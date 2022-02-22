import { inputColor } from "./editorColor.js";
import { mensagemErro } from "./mensagem.js";

const nomeProjeto = document.querySelector("[data-dados=nome]");
const descricaoProjeto = document.querySelector("[data-dados=descricao]");
const boatoaSalvar = document.querySelector("[data-dados=salvar]");
const codigo = document.querySelector("[data-codigo=code]");

function salvarProjetos(){
    
    const projeto = JSON.parse(localStorage.getItem('projetos')) || [];
    const dados = {
        usuario: document.querySelector("[data-header=login-usuario]").textContent,
        avatar: document.querySelector("[data-header=login-avatar]").src,
        nome: nomeProjeto.value,
        descricao: descricaoProjeto.value,
        codigo : codigo.innerHTML,
        cor: inputColor.value,

    }
    
    const projetosAtualizados = [...projeto, dados];
    
    localStorage.setItem('projetos',JSON.stringify(projetosAtualizados))

    nomeProjeto.value = '';
    descricaoProjeto.value = '';
    codigo.textContent = ''   
    

}

boatoaSalvar.addEventListener('click', ()=>{
     salvarProjetos()
     mensagemErro('salvo')
})
