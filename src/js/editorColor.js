export const inputColor = document.querySelector("[data-dados=color]");

inputColor.addEventListener('change', (event)=> { 
    const editor = event.target.closest("[data-projeto=main]").querySelector("[data-codigo=color]");
    editor.style.backgroundColor = event.target.value
    
})