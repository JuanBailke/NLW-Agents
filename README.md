# NLW Agents – Rocketseat

Projeto desenvolvido durante o evento **NLW Agents** da Rocketseat.

---

## Estrutura do Projeto

- `backend/` – API Node.js com Fastify, Drizzle ORM e PostgreSQL
- `frontend/` – SPA React com Vite, TailwindCSS e TanStack Query

---

## Backend

### Tecnologias & Bibliotecas

- [Node.js](https://nodejs.org/)
- [Fastify](https://www.fastify.io/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [PostgreSQL](https://www.postgresql.org/)
- [Zod](https://zod.dev/) (validação)
- [drizzle-seed](https://github.com/drizzle-team/drizzle-seed) (seed de dados)
- [fastify-type-provider-zod](https://github.com/fastify/fastify-type-provider-zod)
- [pgvector](https://github.com/pgvector/pgvector) (extensão para IA)

### Padrões de Projeto

- Organização por domínio (`db`, `http`, `env`)
- Validação de ambiente com Zod
- Rotas desacopladas
- Migrations e seeds com Drizzle

### Setup

1. Instale as dependências:
   ```sh
   cd backend
   npm install
   ```
2. Configure o banco de dados:
   - Renomeie `.env.example` para `.env` e ajuste as variáveis.
   - Suba o banco com Docker:
     ```sh
     docker-compose up -d
     ```
3. Rode as migrations e seed:
   ```sh
   npm run db:seed
   ```
4. Inicie o servidor:
   ```sh
   npm run dev
   ```

---

## Frontend

### Tecnologias & Bibliotecas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [TanStack Query](https://tanstack.com/query/latest)
- [React Router DOM](https://reactrouter.com/)
- [clsx](https://github.com/lukeed/clsx)
- [class-variance-authority](https://cva.style/)
- [lucide-react](https://lucide.dev/)
- [@radix-ui/react-slot](https://www.radix-ui.com/)
- [tw-animate-css](https://github.com/robinverton/tw-animate-css)

### Padrões de Projeto

- Componentização por domínio (`components`, `pages`, `lib`)
- Utilização de hooks e contextos
- Estilização com TailwindCSS e variantes utilitárias

### Setup

1. Instale as dependências:
   ```sh
   cd frontend
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```

---

## Observações

- O frontend espera que o backend esteja rodando em `http://localhost:3333`.
- O projeto utiliza TypeScript em ambos os lados.
- Para rodar localmente, é necessário Node.js >= 18 e