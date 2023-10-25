const Router = require("express")
const verificaLogin = require("./middleware/verificaLogin")
const { login } = require("./controller/login")
const usuarios = require("./controller/usuarios")
const postagens = require("./controller/postagens")
const routes = Router()

//cadastro de usuario
routes.post("/cadastro", usuarios.cadastraUsuario)

//login
routes.post("/login", login)

//filtro para verificar usuario logado
routes.use(verificaLogin)

//obter e atualizar perfil do usuario logado
routes.get("/perfil", usuarios.obterPerfil)
routes.put("/perfil", usuarios.atualizaPerfil)

//postagens
routes.get("/postagens", postagens.feed)
routes.post("/postagens", postagens.novaPostagem)
routes.post("/postagens/:postagemId/curtir", postagens.curtir)
routes.post("/postagens/:postagemId/comentar", postagens.comentar)

module.exports = routes
