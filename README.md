# Uhuu Teste Técnico

Este projeto foi desenvolvido como um teste técnico no processo seletivo para o cargo de desenvolvedor frontend.

## O Projeto

Trata-se de uma página de pesquisa de filmes onde o usuário, após clicar em algum botão de filtragem, poderá ver os detalhes do filme escolhido na listagem.

## Para rodar localmente

Para executar o projeto, você precisa cloná-lo usando o seguinte comando:
git clone https://github.com/ericsporto/uhuu-test.git

Após clonar o repositório, navegue até o diretório do projeto em seu terminal e siga estas etapas:
Instale as dependências do projeto:

`yarn`

Inicie o servidor de desenvolvimento:

`yarn dev`

## Tecnologias usadas
Para desenvolver o projeto foram utilizadas as seguintes tecnologias e bibliotecas:

.ReactJs e NextJs para construir o Frontend.
=> Porque o NextJs e não React puro?
   R: Porque quis demonstrar que além do React, também possuo conhecimentos em NextJs.
    Para esse tipo de aplicação, acredito que não seria necessário a utilização do NextJs por ser uma aplicação pequena. A medida que muitos acessos fossem requeridos, acredito que o NextJs teria uma melhor atuação quanto a renderizações do lado do servidor. Isso poderia melhorar o desempenho da aplicação.

.Zustand para gestão estadual e persist de dados.
=> Porque o Zustand?
   R: Na verdade, utilizei o Zustand para demonstrar o conhecimento em gerenciamento de   estados, porém utilizei também do localStorage para persistir dados de layout dos botões, como pode ser analisado no código. Apenas quis demonstrar que posso utilizar várias abordagens para resolver um mesmo problema.


.TypeScript para verificação de tipos e redução do riscos de bugs na produção.

.React-Query e Axios para requisições.
=> Porque o React-Query e não somente o Axios?
   R: Gosto do react-query por conta do contexto próprio e pela facilidade de obter um estado de loading, success e outros dados em uma requisição. Crio, em arquivo separado um hook que me traz somente o response.data da requisição e todos os outros atributos do react-query. Ao chamar o hook dentro de um componente e passar os parâmetros de pesquisa, consigo deixar o código mais limpo, legível e de fácil manutenção. A paginação também fica mais simples de ser feita e a qualquer mudança no estado do número da página passado, o refetch é feito automaticamente. Não precisei fazer um mutate (post, delete, etc) neste projeto, mas ao fazer, fica muito fácil fazer um refetch com o recurso de refetch próprio do react-query ou até mesmo invalidando uma query (que é um string associada a um get específico), atualizando a minha aplicação inteira por onde o resultado daquele get passar. Acho muito prático e vantajoso. Por isso a escolha.

.Tailwind para estilização e layout.
=> Porque Tailwind?
   R: Já trabalhei com todas as formas de CSS possíveis: Puro, Styled Components, Material UI, Chakra UI, Bootstrap, etc. Gosto das suas classes que evitam conflitos e fica muito tranquilo trabalhar a responsividade das aplicações.


## Author
Eric de Souza Porto Carvalho