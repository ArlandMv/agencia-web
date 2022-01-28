//get objects.. querySeletor
const options = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

options.addEventListener('click', () => {
    options.classList.toggle('active');
    navigation.classList.toggle('active')
})

/* VALIDACION DE FORMULARIO */

const btnRepos = document.getElementById('repos')
btnRepos.addEvventListener("click", getRepos)

//async getRepos               

