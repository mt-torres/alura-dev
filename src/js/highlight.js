const codeArea = document.querySelector("[data-codigo=code-area]");
const codeEditor = document.querySelector("[data-codigo=code]");
const btnHl = document.querySelector("[ data-codigo=button]");

codeArea.addEventListener('click', ()=> {
    codeEditor.focus();
    
})


btnHl.addEventListener('click',(evento)=> {
    const language = evento.target.closest("[data-projeto=main]").querySelector("[data-dados=linguagem]").value;
    const codigo = codeArea.innerText;
    codeArea.querySelector('code').textContent = codigo
    hljs.highlightElement(codeArea.querySelector('code'))

})


