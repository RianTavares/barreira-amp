const api = require('express').Router();
const dotenv = require('dotenv');
dotenv.config();

module.exports = () => {

    api.post('/amp/json', (req,res) => {
        const url = process.env.URL;
        const aid = process.env.A_ID;
        const loginURL = process.env.LOGIN_URL;
        const materiaURL = req.materiaURL;
        const tipoConteudoPiano = req.tipoConteudoPiano;
        const ambienteUtilizadoPiano = req.ambienteUtilizadoPiano;
        const conteudoExclusivo = req.conteudoExclusivo;
        const nomeProdutoPiano = req.nomeProdutoPiano;

        let ampJson = {
            "authorizatio": `${url}/xbuilder/experience/executeAmp?protocol_version=1&aid=${aid}&reader_id=READER_ID&url=SOURCE_URL&referer=DOCUMENT_REFERRER&_=RANDOM&custom_variables=${tipoConteudoPiano}${ambienteUtilizadoPiano}${conteudoExclusivo}${nomeProdutoPiano}`,
            "noPingback": "true",
            "login": {
                "sign-in": `${loginURL}?url=${materiaURL}`,
                "subscribe": "https://assinaturaglobo.globo.com/o-globo/oferta/globo-digital-2-meses-gratis?campanha=nao&interno_origem=siteoglobo&interno_midia=barreiramp&interno_campanha=barreiraamp_2meses"
            },
        }
    });

  return api;
};