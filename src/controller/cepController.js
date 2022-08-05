const axios = require('axios')

class CepController {
    get(request, response) {

        let cep = request.query.cep

        axios.get(`https://viacep.com.br/ws/${cep}/json`).then((res) => {

            response.status(200).json({
                "cep": res.data.cep,
                "logradouro": res.data.logradouro,
                "complemento": res.data.complemento,
                "bairro": res.data.bairro,
                "localidade": res.data.localidade,
                "uf": res.data.uf
            })
        })
    }
}

module.exports = new CepController()
