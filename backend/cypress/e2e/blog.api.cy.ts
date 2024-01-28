describe("Admin Blog things", () => {
  let token = "";
  beforeEach("Login by username", () => {
    cy.request({
      method: "POST",
      url: "/admin/admin-login",
      failOnStatusCode: false,
      body: {
        username: "parag",
        password: "Koche3588@123",
      },
    }).then((req) => {
      token = req.headers["set-cookie"][0].split("=")[1].split(";")[0];
      // cy.setCookie("token",req.headers.cookie.toString())
      expect(req.status).eq(200);
    });
  });
  describe("Admin Blog", () => {
    it("Create blog with empty body", () => {
      cy.request({
        url: "/blog/add-blog",
        method: "POST",
        failOnStatusCode: false,
        headers: {
          cookies: {
            token,
          },
        },
      }).then((res) => {
        cy.log(res.body);
        expect(res.status).eq(402);
        expect(res.body.length).not.eq(0);
      });
    });
    it("Create blog with full body", () => {
      cy.request({
        url: "/blog/add-blog",
        method: "POST",
        failOnStatusCode: false,
        headers: {
          cookies: {
            token,
          },
        },
        body: {
          title: "First blog 2",
          image: "http://www.google.com/images",
          description: `
              # FIRST BLOG
              
              `,
        },
      }).then((res) => {
        cy.log(res.body);
        expect(res.status).eq(200);
        expect(res.body.data.title).eq("First blog 2");
        // expect(res.body.length).not.eq(0);
      });
    });
  });
});
