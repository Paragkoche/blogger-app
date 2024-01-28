describe("Blog API TESTING", () => {
  let token = "";
  let blogs: any[] = [];
  beforeEach("get blogs", () => {
    cy.request("GET", "/blog/parag").then((res) => {
      cy.log(res.body);
      blogs.push(res.body.data);
    });
  });
  beforeEach("Login by username", () => {
    cy.request({
      method: "POST",
      url: "/user/login-user",
      failOnStatusCode: false,
      body: {
        emailId: "paragkoche0@gmail.com",
        password: "Koche3588@123",
      },
    }).then((req) => {
      token = req.headers["set-cookie"][0].split("=")[1].split(";")[0];
      // cy.setCookie("token",req.headers.cookie.toString())
      expect(req.status).eq(200);
    });
  });

  describe("User Blog", () => {
    it("get all blogs", () => {
      cy.request("GET", "/blog/parag").then((res) => {
        cy.log(res.body);
      });
    });
    it("add like", () => {
      cy.log(blogs[0][0]);
      cy.request({
        method: "POST",
        url: "/blog/add-like",
        failOnStatusCode: false,
        body: {
          id: blogs[0].id,
        },
        headers: {
          cookies: {
            token,
          },
        },
      }).then((res) => {
        cy.log(res.body);
      });
    });
    it("delete like", () => {});
    it("add sub", () => {});
  });
});
