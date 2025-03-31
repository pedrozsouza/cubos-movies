

## Cubos Movies

Este é o projeto **Cubos Movies**, uma aplicação desenvolvida com **Next.js** para exibir informações sobre filmes. O projeto utiliza boas práticas de desenvolvimento, e uma estrutura modular para facilitar a manutenção e escalabilidade.

## Funcionalidades

- Listagem de filmes.
- Detalhes de cada filme.
- Interface responsiva e moderna.


## Estrutura do Projeto
A estrutura do projeto está organizada da seguinte forma:

```
cubos-movies/    # Diretório principal do projeto
  .next/         # Arquivos gerados pelo build do Next.js
  public/        # Arquivos públicos acessíveis diretamente
  src/           # Código-fonte principal
    app/         # Configuração da aplicação
    components/  # Componentes reutilizáveis
    context/     # Context API para gerenciamento de estado
    hooks/       # Hooks customizados
    lib/         # Funções utilitárias
    services/    # Serviços para integração com APIs
    store/       # Gerenciamento de estado global
    styles/      # Estilos globais e temas
    types/       # Tipos TypeScript
    ui/          # Componentes de interface do usuário
    utils/       # Funções auxiliares e helpers para reutilização no projeto
   
```

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Como baixar e rodar o projeto

Siga os passos abaixo para configurar e executar o projeto localmente:

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/cubos-movies.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd cubos-movies
   ```

3. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. Abra o navegador e acesse:

   ```
   http://localhost:3000
   ```