const inputsAll = document.querySelectorAll('.input__form')
const f_nome = document.querySelector('#f_nome')
const i_nome = document.querySelector('#nome')

const f_sobrenome = document.querySelector('#f_sobrenome')
const i_sobrenome = document.querySelector('#i_sobrenome')

const f_email = document.querySelector('#f_email')
const i_email = document.querySelector('#i_email')

const f_telefone = document.querySelector('#f_telefone')
const i_telefone = document.querySelector('#i_telefone')

const f_cidade = document.querySelector('#f_cidade')
const i_cidade = document.querySelector('#i_cidade')





i_nome.addEventListener('input', function(evt){
    console.log(evt)
    requiredInputs(i_nome, f_nome)
})
i_sobrenome.addEventListener('input', function(evt){
    console.log(evt)
    requiredInputs(i_sobrenome, f_sobrenome)
})
i_email.addEventListener('input', function(evt){
    console.log(evt)
    requiredInputs(i_email, f_email)
})
i_telefone.addEventListener('input', function(evt){
    console.log(evt)
    requiredInputs(i_telefone, f_telefone)
})
i_cidade.addEventListener('input', function(evt){
    console.log(evt)
    requiredInputs(i_cidade, f_cidade)
})

function requiredInputs(i_param, f_param){
    if(i_param.value.length > 0){
        f_param.classList.add('labels_form-destaque')
        i_param.style.outline = 'none'
    }else if(i_param.value == ''){
        f_param.classList.remove('labels_form-destaque')
         i_param.style.borderBottom = '1px solid red'

    }
}
