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
  "username": "string" //optional
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

- - 401 (`if email id or username not exists`)

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

Admin sign in

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

- - 401 (`if email id or username  exists`)

```json
{
  "message": "[error] email Id or username ] exists"
}
```

- response header

```txt
cookie:token=JWT_TOKEN,Path=/,httpOnly=true;

```

##### Admin Update

Admin update

- Request Header

```text
cookie: token=JWT_TOKEN,Path=/,httpOnly=true;
```

- Request body

```json
{
  "bio": "string" // optional
}
```

- response body
- - 200

```json
{
  "message": "[Info] Admin bio update"
}
```

##### Admin Delete

Admin delete

- Request Header

```text
cookie: token=JWT_TOKEN,Path=/,httpOnly=true;
```

- Request body

```bash
NULL
```

- response body
- - 200

```json
{
  "message": "[Info] Admin delete"
}
```

#### Blog

| name                 | method   | link                               |
| -------------------- | -------- | ---------------------------------- |
| Add blog             | `POST`   | [/add-blog](#add-blog)             |
| Add like             | `POST`   | [/add-like](#add-like)             |
| Delete Like          | `DELETE` | [/delete-like](#add-blog)          |
| Delete blog          | `DELETE` | [/delete-blog](#add-blog)          |
| Add sub              | `POST`   | [/add-sub](#add-blog)              |
| update blog          | `POST`   | [/update-blog](#add-blog)          |
| Get blog by username | `GET`    | [/:username](#add-blog)            |
| Get blog by slug     | `GET`    | [/:username/:blog_slug](#add-blog) |

##### Add blog

##### Add like

##### delete like

##### delete blog

##### Add Sub

##### update blog

##### Get all Blog by username

##### Get Blog by Slug

#### Comment

| name                   | method | link                                                          |
| ---------------------- | ------ | ------------------------------------------------------------- |
| crate comment          | `POST` | [/add-comment-to-blog](#create-comment)                       |
| add comment to comment | `POST` | [/add-comment-to-comment/:commentId](#add-comment-to-comment) |
| add comment link       | `POST` | [/add-comment-link/:commentId](#add-comment-link)             |
| get comment            | `GET`  | [/get-comment/:blogId](#get-comment)                          |

##### Create comment

Create Comment

- Request Header

```text
cookie: token=JWT_TOKEN,Path=/,httpOnly=true;

```

- Request body

```json
{
  "comment": "$string",
  "blogId": "$blog-id"
}
```

- response body

* - 200

```json
{
  "message": "[Info] comment add",
  "data": "CommentsType"
}
```

- - 404 (`if blog id not found`)

```json
{
  "message": "[Not Fount] blog not found"
}
```

- - 402

```json
[
...
    {
    "label":"$string",
    "message":"$string"
    },
...
]

```

##### Add comment to comment

- Request Header

```text
cookie: token=JWT_TOKEN,Path=/,httpOnly=true;
```

##### add comment link

- Request Header

```text
cookie: token=JWT_TOKEN,Path=/,httpOnly=true;
```

##### get comment

- Request Header

```text
cookie: token=JWT_TOKEN,Path=/,httpOnly=true;
```

#### User

| name       | method | link |
| ---------- | ------ | ---- |
| login user | `POST` | []() |
| sing in    | `POST` | []() |

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
