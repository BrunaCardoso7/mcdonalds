const inputsAll = document.querySelectorAll('.input__form')
const f_nome = document.querySelector('#f_nome')
const i_nome = document.querySelector('#nome')

i_nome.addEventListener('input', function(evt){
    f_nome.removeAttribute('class', 'labels_form')
    f_nome.classList.add('labels_form-destaque')
    
})

