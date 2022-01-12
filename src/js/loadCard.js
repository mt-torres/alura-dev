const projetos = JSON.parse(localStorage.getItem("projetos"));
const containerCode = document.querySelector("[data-social=container]");

window.addEventListener("load", () => {
    projetos.map((item) => {
        containerCode.insertAdjacentHTML(
            "beforeend",
            /*html*/ ` <div class="projeto-codigo projeto-codigo--social">
        <div class="projeto-codigo__container projeto-codigo__container--social" data-codigo="color">
            <div class="circulos">
                <div class="circulos__vermelho"></div>
                <div class="circulos__amarelo"></div>
                <div class="circulos__verde"></div>
            </div>
            <div class="projeto-codigo__code-area" data-codigo="code-area">
                <code class="projeto-codigo__editor" spellcheck="false" data-codigo="code"
                    contenteditable="true">${item.codigo}</code>
            </div>
        </div>
        <div class="projeto-codigo__dados social">
            <h2 class="projeto-codigo__titulo">${item.nome}</h2>
            <p class="projeto-codigo__descricao">${item.descricao}</p>
            <div class="descricao__social">
                <span class="social__comentarios">9</span>
                <span class="social__like">10</span>
                <div class="cabecalho__usuario cabecalho__usuario--social ">
                    <img class="usuario__foto" src="./src/image/cracha.png" alt="">
                    <p class="usuario__nome">@Marcos</p>
                </div>
             </div>
            </div>
        </div>
        
        
        `
        );
    });
});

console.log(projetos[0].nome);
console.log(containerCode);