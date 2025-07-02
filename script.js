const consultarCep = () => {
    console.log('chamou a api');
    const cep = document.getElementById("cep").value

    let uri = `https://cep.awesomeapi.com.br/json/${cep}`

    console.log(`URI: ${uri}`);
    fetch(uri)
      .then(response => response.json())
      .then(json => {
        console.log(json)

        document.getElementById("logradouro").value = json.address
        document.getElementById("uf").value = json.state    
        document.getElementById("localidade").value = json.city
        document.getElementById("bairro").value = json.district
        document.getElementById("ddd").value = json.ddd


   })

}

const fetchEstados = () => {
  let uri = `https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`

    console.log(`URI: ${uri}`);

      fetch(uri)
      .then(response => response.json())
      .then(data => {
        console.log(data)

      let options = '<option selected disabled>Selecione...</option>'

        data.forEach(estado => {
          options = options + `<option value="${estado.sigla}">${estado.nome}</option>`
        });

        document.getElementById('uf').innerHTML = options
})

}

fetchEstados () 


const fethMunicipios = (uf) => { 

  fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
  .then(response => response.json())
  .then(json => {
    console.log(json)

    let options = '<option selected disabled>Selecione...</option>'

    json.forEach(localidade => {
      options = options + `<option value="${localidade.nome}">${localidade.nome}</option>`
    });

    document.getElementById('localidade').innerHTML = options
  })
}

fethMunicipios()