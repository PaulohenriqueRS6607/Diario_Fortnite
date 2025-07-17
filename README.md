# Fortnite Agenda de Tempestade

Este projeto foi desenvolvido para uma apresentação de consumo de API, utilizando React e Vite. O objetivo é demonstrar como consumir dados de uma API pública (https://fortnite-api.com) e exibi-los de forma interativa e visual.

## Sobre o Projeto

O **Fortnite Agenda de Tempestade** é uma aplicação web que permite ao usuário:

- Visualizar os itens disponíveis na loja do Fortnite em tempo real.
- Explorar cosméticos do jogo, como skins e acessórios.
- Adicionar itens de interesse a um "Diário", com anotações personalizadas, armazenadas localmente no navegador.

O projeto foi criado para fins didáticos e de demonstração, sendo ideal para apresentações sobre consumo de APIs REST em aplicações front-end.

## Funcionalidades

- **Página Inicial:** Apresentação do projeto e navegação.
- **Loja:** Consome a API do Fortnite para exibir os itens da loja atual.
- **Cosméticos:** Consome a API do Fortnite para listar cosméticos disponíveis.
- **Diário:** Permite salvar itens favoritos com notas, utilizando o armazenamento local do navegador.

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Fortnite API](https://fortnite-api.com/)

## Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd Fortnite-agenda-de-tempestade
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
4. **Acesse no navegador:**
   Abra [http://localhost:5173](http://localhost:5173) para visualizar a aplicação.

## Observações
- O projeto consome dados da API pública do Fortnite, portanto, a disponibilidade e o conteúdo dependem da API externa.
- O Diário utiliza o `localStorage` do navegador para salvar os itens e anotações do usuário.

## Licença

Projeto desenvolvido para fins educacionais e de apresentação.
