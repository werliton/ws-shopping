# 🛒 WS Shopping

Projeto fullstack desenvolvido com **Laravel**, **Inertia.js** e **React**, com objetivo de demonstrar domínio em aplicações modernas utilizando PHP no backend e React no frontend. A proposta é simular um sistema de e-commerce com autenticação, listagem de produtos e fluxo básico de compra.

## ⚙️ Stack Principal

### Backend

- [Laravel 11](https://laravel.com/)
- [PHP 8+](https://www.php.net/)
- [Eloquent ORM](https://laravel.com/docs/eloquent)
- [SQLite/MySQL/PostgreSQL] (a depender do ambiente)

### Frontend

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Inertia.js](https://inertiajs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## 🧪 Funcionalidades

- [x] Autenticação (Login / Registro / Logout)
- [x] Listagem de produtos
- [x] Adição de produtos ao carrinho
- [ ] Finalização de pedido
- [ ] Área administrativa para gestão de produtos

## 📦 Instalação e Uso

### 1. Clone o projeto

```bash
git clone https://github.com/werliton/ws-shopping.git
cd ws-shopping
```

### 2. Instale as dependências PHP

```bash
composer install
```

### 3. Instale as dependências JS

```bash
npm install
```

### 4. Copie e configure o `.env`

```bash
cp .env.example .env
php artisan key:generate
```

Edite o `.env` conforme o seu banco de dados.

### 5. Rode as migrations

```bash
php artisan migrate
```

### 6. Inicie os servidores

```bash
php artisan serve
npm run dev
```

Acesse: [http://localhost:8000](http://localhost:8000)

## 📁 Estrutura do Projeto

```
ws-shopping/
├── app/               # Backend (Laravel)
├── resources/js/      # Frontend (React + Inertia)
├── routes/            # Rotas Laravel
├── public/            # Assets públicos
├── database/          # Migrations e seeds
├── .env               # Configurações do projeto
└── ...
```

## 🎯 Objetivo

Esse projeto foi criado para demonstrar fluência na construção de aplicações fullstack com Laravel e React via Inertia.js, voltado a oportunidades como desenvolvedor Fullstack.

## 🙋‍♂️ Autor

Desenvolvido por [Werliton Silva](https://www.linkedin.com/in/werliton-silva/)
