# README - Como rodar o Frontend e o Backend

Este projeto é dividido em duas partes: **Frontend** e **Backend**. O **Frontend** utiliza **Vite** com **React**, enquanto o **Backend** é desenvolvido com **NestJS**. Abaixo estão as instruções para rodar ambos, além de uma explicação sobre as bibliotecas utilizadas.

---

## Índice

1. [Frontend - Vite + React](#frontend---vite--react)
2. [Backend - NestJS](#backend---nestjs)
3. [Bibliotecas Usadas](#bibliotecas-usadas)
4. [Execução](#execução)

---

## Frontend - Vite + React

### 1. Instalação das dependências

No frontend, estamos usando o **Vite** como bundler para otimizar o processo de build e desenvolvimento. O **React** é usado para criar a interface do usuário.

```bash
# Navegue até a pasta do frontend
cd frontend

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

Isso abrirá a aplicação em http://localhost:5173.

## Bibliotecas Usadas

Vite: É uma ferramenta de build extremamente rápida para projetos em JavaScript e TypeScript. O vite otimiza o tempo de construção e oferece uma experiência de desenvolvimento rápida.

React Hook Form: Usei para gerenciar formulários no React de forma simples.

React-Leaflet: Biblioteca para criar e manipular mapas de maneira eficiente.

Zustand: Uso no meu trabalho essa biblioteca, ela serva para gerenciamento de estado para React. Eu gosto dela devido à sua simplicidade e alta performance. Ela oferece um modelo de estado global reativo, sem a necessidade de complexidade como o Redux.

Tailwind CSS: Framework de CSS utilitário para uma maneira rápida e eficiente de estilizar componentes. Com o talwind consigo criar uma UI responsiva facilmente utilizando classes utilitárias em vez de escrever CSS personalizado.

## Backend - NestJS

1. Instalação das dependências
   No backend, estamos usando o NestJS, que é um framework de Node.js para construir APIs eficientes, escaláveis e de fácil manutenção

### 1. Instalação das dependências

```bash
# Navegue até a pasta do backend
cd backend

# Instale as dependências
npm install

# Execute o servidor NestJS
npm run start:dev

```

Isso abrirá a API do backend em http://localhost:3000.

## Bibliotecas Usadas

NestJS: Framework baseado no Express e projetado para facilitar a construção de aplicativos backend escaláveis. Primeira vez que estou utilizando e achei bem simples a implementação e também facilita a organização.

Mongoose: Biblioteca para integrar o MongoDB ao NestJS.

Geocoding Service: Para a conversão de endereços em coordenadas geográficas.
