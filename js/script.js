//get objects.. querySeletor
const options = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

options.addEventListener('click', () => {
    options.classList.toggle('active');
    navigation.classList.toggle('active')
})

/* VALIDACION DE FORMULARIO */
