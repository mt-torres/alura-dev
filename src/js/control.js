import { deletaCard } from "./deleteCard.js";
import { carregaCards } from "./loadCard.js";
const projetos = JSON.parse(localStorage.getItem("projetos"));
const elementoPai = document.querySelector('[data-social=container]');

carregaCards(projetos) 

elementoPai.addEventListener('click', (event)=>{
    deletaCard(event,projetos)
})

