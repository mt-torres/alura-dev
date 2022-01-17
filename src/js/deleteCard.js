import { mensagemErro } from "./mensagem.js";


export function deletaCard(event, dados) {
      if (event.target.dataset.codigo == "fechar") {
            let alvo = event.target.closest(".projeto-codigo--social");
            alvo.style.opacity = 0;
            mensagemErro('excluido');
            setTimeout(()=>{
                  let index = event.target.closest(".projeto-codigo--social").dataset.index;
                  dados.splice(index, 1);
                  localStorage.setItem("projetos", JSON.stringify(dados));
                  alvo.remove()
                  
                  
            },1000)
      }
}