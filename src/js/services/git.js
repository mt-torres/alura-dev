const buttonLogin = document.querySelector("[data-header=button-login]");
const containerUsuario = document.querySelector("[data-header=usuario]");
const buttonForm = document.querySelector("[data-header=form-button]");
const userForm = document.querySelector("[data-header=form-user]");
const form = document.querySelector("[data-header=login-form]");
const spinner = document.querySelector("[data-header=form-spinner]");
const fecharLogin = document.querySelector("[data-header=close-login]");

async function loadUser(user) {
    let response = await fetch(`https://api.github.com/users/${user}`);
    if (!response.ok) {
        throw Error(response.statusText);
    } else {

        let data = await response.json();
        return data;
    }

}

buttonLogin.addEventListener("click", () => {
    form.classList.remove('login__form--hide');
    form.classList.add('login__form--show')
    fecharLogin.style.visibility = "visible"
});


buttonForm.addEventListener("click", async (event) => {
    event.preventDefault();

    addSpinner();

    try {
        const dados = await loadUser(userForm.value);

        setTimeout(() => {
            removeSpinner();
            criaUser(dados.avatar_url, dados.name);
            mensagemSucesso()
        }, 1000);

       setTimeout(()=>form.classList.add('login__form--hide'),2000) 
       setTimeout(()=>form.style.visibility = "hidden",2500) 
        userForm.value = '';
        buttonLogin.style.display = "none";
        fecharLogin.style.visibility = "hidden";


    } catch {
        setTimeout(() => {
            removeSpinner()
            mensagemErro()

        }, 1000);

    }
});



function criaUser(avatar, nome) {
    containerUsuario.insertAdjacentHTML(
        "beforeend",
        `<img class="usuario__foto" src=${avatar} alt="" data-header="login-avatar">
        <p class="usuario__nome" data-header="login-usuario" > ${nome}</p>`
    );
}

function addSpinner() {
    
    buttonForm.classList.add("form__button--hide");
    spinner.classList.remove("form__loading--hide");
}

function removeSpinner() {
    spinner.classList.add("form__loading--hide");
}

function mensagemSucesso() {
    form.lastChild.remove()
    form.insertAdjacentHTML(
        "beforeend",
        `<p class="form__mensagem form__mensagem--sucesso">Usuário carregado com sucesso!</p>`
    );

}

function mensagemErro() {
    form.lastChild.remove()
    buttonForm.classList.remove("form__button--hide");
    form.insertAdjacentHTML(
        "beforeend",
        `<p class="form__mensagem form__mensagem--erro">Usuário não encontrado</p>`
    );

}

fecharLogin.addEventListener('click',()=>{
        form.classList.add('login__form--hide');
        fecharLogin.style.visibility = "hidden";
        userForm.value = '';
        if(form.querySelector('.form__mensagem')){
            form.querySelector('.form__mensagem').remove();

        }
       setTimeout(()=>form.classList.remove('login__form--show'),300);
       
})