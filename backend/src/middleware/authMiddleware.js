import jwt from 'jsonwebtoken'

const ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET;

if(!ACCESS_SECRET){
    throw new Error('chave secreta nao esta definida no ambiente')
};

export function verificarToken(res,req,next){
    const authHeader = req.headers.authoriztion;

    if(!authHeader){
        return res.status(401).json({erro: 'token nao fornecido'})
    }
}

