## API Points

### base url

```bash
http://localhost:8081/api/v1

```

### entry point

| name      | method                      | link                 |
| --------- | --------------------------- | -------------------- |
| `Admin`   | `GET` `POST` `PUT` `DELETE` | [/admin](#admin)     |
| `Blog`    | `GET` `POST` `PUT` `DELETE` | [/blog](#blog)       |
| `Comment` | `POST` `GET`                | [/comment](#comment) |
| `User`    | `POST`                      | [/user](#user)       |

### End Point

#### Admin

| name     | method   | link                              |
| -------- | -------- | --------------------------------- |
| HomeData | `GET`    | [/](#home-data)                   |
| Login    | `POST`   | [/admin-login](#admin-login)      |
| sign in  | `POST`   | [/update-sign-in](#admin-sign-in) |
| Update   | `PUT`    | [/update-user](#admin-update)     |
| Delete   | `DELETE` | [/delete-account](#admin-delete)  |

##### Home Data

Home data

- Request Header

```text
cookie: token=JWT_TOKEN,Path=/,httpOnly=true;
```

- request body

```bash
 NULL
```

- response body

* - 200

```json
{
  "message": "[INFO] ",
  "data": {
    "blog": [], // array of all blog
    "subs": [] // array of all subscribers
  }
}
```

- - 500

```json
{
  "message": "[ERROR] Internal server error"
}
```

##### Admin Login

Admin Login

- Request body

```json
{
  "emailId": "string", //optional
  "password": "string",
  "username": "string", //optional
  "bio": "string" // optional
}
```

- response body
- - 200

```json
{
  "message": "[Info] User Login",
  "data": "$AdminType"
}
```

- - 401 (`if body invalid or some required field not fill`)

```json
[
  {
    "message": "string",//message what is mistake
    "label": "string", //which field
  },
  ...
]
```

- - 401 (`if email id or username not exits`)

```json
{
  "message": "[error] email Id or username Not exists"
}
```

- - 401 (`if password not valid`)

```json
{
  "message": "[error] password not valid"
}
```

- response header

```txt
cookie:token=JWT_TOKEN,Path=/,httpOnly=true;

```

##### Admin sign in

##### Admin Update

##### Admin Delete

#### Blog

#### Comment

#### User

## Schema

### BLOG schema

```ts
type BlogType = {
  id: string;
  slug: string;
  title: string;
  image: string;
  description: string;
  views: string;
  createAt: Date;
  likeBy?: UserType[];
  admin: AdminType;
};
```

### USER schema

```ts
type UserType = {
  id: string;
  emailId: string;
  password: string;
};
```

### COMMENTS schema

```ts
type CommentsType = {
  id: string;
  comment: string;
  user: UserType;
  likes: UserType[];
  comments: CommentsType[];
};
```

### ADMIN schema

```ts
type AdminType = {
  id: string;
  password: string;
  username: string;
  bio: string;
  joinedAt: Date;
  blogs: BlogType[];
  subs: UserType[];
};
```
