# Contents

| name        | link               |
| ----------- | ------------------ |
| `get start` | [link](#get-start) |

# Get start

## Folder Structures

```bash

+---cypress
|   +---e2e
|   |       Admin.cy.ts
|   |       blog.api.cy.ts
|   |       blog.users.cy.ts
|   |       home.admin.cy.ts
|   |       User.cy.ts
|   |
|   +---fixtures
|   |       example.json
|   |
|   +---support
|           commands.ts
|           e2e.ts
|
+---src
|  |   app.ts
|  |   env.ts
|  |   index.ts
|  |
|  +---controller
|  |       Admin.controller.ts
|  |       blog.controller.ts
|  |       User.controller.ts
|  |
|  +---database
|  |   |   db.ts
|  |   |   index.ts
|  |   |   repo.ts
|  |   |
|  |   +---tables
|  |           admin.ts
|  |           blogs.ts
|  |           comments.ts
|  |           index.ts
|  |           users.ts
|  |
|  +---helpers
|  |       admin.validate.ts
|  |       auth.helper.ts
|  |       body.validate.ts
|  |       console.ts
|  |       user.validate.ts
|  |
|  +---interface
|  |       request.interface.d.ts
|  |
|  +---routers
|  |       admin.routes.ts
|  |       blog.routes.ts
|  |       comments.routes.ts
|  |       index.routes.ts
|  |       users.routes.ts
|  |
|  +---types
|  |       admin.controller.types.d.ts
|  |       authHelper.types.d.ts
|  |       blog.controller.types.d.ts
|  |       body.type.d.ts
|  |       console.d.ts
|  |       environment.d.ts
|  |       user.controller.types.d.ts
|  |
|  +---utility
|          jwt.ts
|          password.ts
|   .env
|   .gitignore
|   cypress.config.ts
|   db.sql
|   nodemon.json
|   package-lock.json
|   package.json
|   tree.txt
|   tsconfig.json

```
