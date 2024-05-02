let resposta = document.getElementById('resposta')
let consultar = document.getElementById('consultar')


consultar.addEventListener('click', ()=>{
    let cep = document.getElementById('cep').value
    fetch('https://viacep.com.br/ws/'+cep+'/json/')
    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados)
        resposta.innerHTML = "CEP  :"+ dados.cep + '<br>'
        resposta.innerHTML += "localidade  : "+ dados.localidade + '<br>'
        resposta.innerHTML += "Logradouro  : "+ dados.logradouro + '<br>'
        resposta.innerHTML += "Bairro  : "+ dados.bairro + '<br>'
        resposta.innerHTML += "Estado  : "+ dados.uf + '<br>'
        resposta.style.fontSize = "1.2rem"
    })
    .catch((err)=> {
        console.error("erro de banco de dados",err)
    })
})