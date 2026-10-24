# Lista de Tarefas — Angular + Spring Boot

Aplicação full stack de lista de tarefas, com front-end em **Angular** e back-end em **Java com Spring Boot**, comunicando-se por uma API REST.

Projeto pessoal desenvolvido para praticar a integração entre Angular e Spring Boot, aplicando arquitetura em camadas no back-end e componentes reativos com signals no front-end.

## Funcionalidades

- Listar tarefas
- Adicionar uma nova tarefa
- Marcar e desmarcar uma tarefa como concluída
- Excluir uma tarefa
- Contador de tarefas pendentes
- Validação de título obrigatório no back-end

## Tecnologias

**Back-end**

- Java 21
- Spring Boot
- Spring Web (API REST)
- Spring Data JPA
- Bean Validation
- Banco de dados H2 (em memória)
- Maven

**Front-end**

- Angular
- TypeScript
- Signals
- HttpClient
- CSS

## Arquitetura do back-end

O back-end segue a arquitetura em camadas:

```
controller  →  recebe as requisições HTTP e define as rotas da API
service     →  concentra as regras de negócio
repository  →  acessa o banco de dados com Spring Data JPA
model       →  define a entidade Tarefa
```

## Endpoints da API

| Método | Rota                | Descrição                 |
|--------|---------------------|---------------------------|
| GET    | `/api/tarefas`      | Lista todas as tarefas    |
| GET    | `/api/tarefas/{id}` | Busca uma tarefa pelo id  |
| POST   | `/api/tarefas`      | Cria uma nova tarefa      |
| PUT    | `/api/tarefas/{id}` | Atualiza uma tarefa       |
| DELETE | `/api/tarefas/{id}` | Exclui uma tarefa         |

## Estrutura do projeto

```
lista-tarefas/
├── backend/    → API REST em Spring Boot
└── frontend/   → Aplicação Angular
```

## Como executar

### Pré-requisitos

- Java 21 ou superior
- Node.js 20 ou superior
- Angular CLI (`npm install -g @angular/cli`)

### 1. Back-end

```bash
cd backend
./mvnw spring-boot:run
```

No Windows (PowerShell):

```powershell
cd backend
.\mvnw.cmd spring-boot:run
```

A API ficará disponível em `http://localhost:8080/api/tarefas`.

### 2. Front-end

Em outro terminal:

```bash
cd frontend
npm install
ng serve
```

A aplicação ficará disponível em `http://localhost:4200`.

> O banco H2 roda em memória, então os dados são apagados sempre que o back-end é reiniciado.

## Autora

**Silvia Moura Barbosa**

- LinkedIn: [linkedin.com/in/silvia-mm-barbosa-a88566428](https://www.linkedin.com/in/silvia-mm-barbosa-a88566428)
- GitHub: [github.com/silvia050](https://github.com/silvia050)