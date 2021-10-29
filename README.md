<p align="center">
  <img 
   src="https://user-images.githubusercontent.com/53442803/139374817-9c5dc6fc-9690-444c-b16d-ddd83023ce90.png"
    width="30%"
  />
</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias-utilizadas">Funcionalidades</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Aprendizados">Aprendizados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## 📃 Sobre o projeto
A setima edição do [NLW](https://nextlevelweek.com) promovido pela **[@RocketSeat](https://www.rocketseat.com.br/)** serviu como aquecimento para o **[DoWhile 2021](https://dowhile.io/inscricao)**, então nada melhor que o tema do projeto fosse nesse sentido. 
O objetivo é o desenvolvimento de uma aplicação fullstack que permita os usuarios compartilharem suas expectativas para o evento, utilizando as tecnologias mais atuais do mercado. Aqui se encontra o back-end da nossa aplicação com NodeJs, Prisma ORM, Socket.io e autenticação com OAuth do Github.

### Outras etapas do projeto: 
- [Web](https://github.com/weversonneri/nlw-heat-web)
- [Mobile](https://github.com/weversonneri/nlw-heat-mobile)

## ⚙ Funcionalidades
- [x] Cadastro de usuario com OAuth Github
- [x] Cadastro de mensagens
- [x] Listagem de mensagens recebidas do servidor
- [x] Atualização de mensagens em tempo real com socket.io
- [x] Listagem de dados do perfil
### Extras adicionados pós NLW
  - [x] Validação de serviceType, possibilitando integrar web e mobile no mesmo backend

## ✨ Tecnologias
Projeto desenvolvido utilizando as seguintes tecnologias:

- [Typescript](https://www.typescriptlang.org/)
- [NodeJs](https://nodejs.org/)
- [ExpressJs](https://expressjs.com/pt-br/)
- [Prisma ORM](https://www.prisma.io/)
- [Postgres]()
- [OAuth Github](https://github.com/settings/developers)
- [Socket.IO](https://socket.io/)
- [Axios](https://github.com/axios/axios)
- [JsonWebToken](https://github.com/auth0/node-jsonwebtoken)

## 🤔 Como usar
Para usar o projeto é necessario seguir os seguintes passos:
``` bash
  # 1. Clonar o projeto:
  $ git clone https://github.com/weversonneri/nlw-heat-node.git

  # 2. Entrar no diretório:
  $ cd nlw-heat-node

  # 3. Instalar as dependências:
  $ yarn

  # 4. Configurar as variaveis de ambiente de acordo com o .env.example

  # 5. Rodar a aplicação:
  $ yarn dev
```

## 📝 Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

## Aprendizados
- Algumas das principais coisas que aprendi nessa etapa
  - Introdução ao Prisma ORM 
  - Introdução ao socket.io
  - Autenticação com OAuth Github
  - Node com typescript

