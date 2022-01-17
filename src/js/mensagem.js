const erroContainer = document.querySelector('body');

const mensagens = {
    salvo:'Projeto salvo com sucesso!',
    excluido:'projeto excluido com sucesso!',
    nulo: 'Você não possui projetos salvos',
}


export async function mensagemErro(erro){
    erroContainer.insertAdjacentHTML(
        "beforeend", ` <div class="erro" data-erro="container">
    <p class="erro__mensagem">${mensagens[erro]}</p>
    </div>`
    )
   
    setTimeout(() =>{
        erroContainer.querySelector('[data-erro=container]').style.opacity = 0
        
    }, 2000)

    setTimeout(() =>{
        erroContainer.removeChild(document.querySelector('[data-erro=container]'))
        
    }, 3000)
    
   
}
