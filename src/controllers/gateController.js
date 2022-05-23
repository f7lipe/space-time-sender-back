import { v4 as uuid } from 'uuid';

export function getFiles(req, res){
    const files = req.files
    console.log(files)
    if (!files) return res.sendStatus(400)
    const token = uuid()
    const year = randomNumber(2023, 3033)
    res.status(201).send(
        {message: `Seu envio foi feito para o ano de ${year}. \n\n 
                   Volte ou autorize alguém à retornar 
                   nesta data para rever os itens enviados. \n\n
                   Guarde a chave de acesso.`, 
        token, 
        status: 'Portal fechado.'
    })

}


function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
}