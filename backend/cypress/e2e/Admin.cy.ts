describe("Admin API TESTING", () => {
  describe("Admin API TESTING", () => {
    describe("Sign-in", () => {
      it("Empty body", () => {
        cy.request({
          method: "POST",
          url: "/admin/admin-sign-in",
          failOnStatusCode: false,
        }).then((req) => {
          cy.log(req.body);

          expect(req.status).eq(402);
        });
      });
      it("Half body", () => {
        cy.request({
          method: "POST",
          url: "/admin/admin-sign-in",
          failOnStatusCode: false,
          body: {
            emailId: "paragkoche0@gmail.com",
          },
        }).then((req) => {
          cy.log(req.body);
          expect(req.status).eq(402);
        });
      });
      it("SignIn", () => {
        cy.request({
          method: "POST",
          url: "/admin/admin-sign-in",
          failOnStatusCode: false,
          body: {
            emailId: "paragkoche0@gmail.com",
            password: "Koche3588@123",
            username: "parag",
          },
        }).then((req) => {
          cy.log(req.body);
          expect(req.status).eq(200);
        });
      });
    });
    describe("login", () => {
      it("Empty body", () => {
        cy.request({
          method: "POST",
          url: "/admin/admin-login",
          failOnStatusCode: false,
        }).then((req) => {
          cy.log(req.body);

          expect(req.status).eq(402);
        });
      });
      it("Half body", () => {
        cy.request({
          method: "POST",
          url: "/admin/admin-login",
          failOnStatusCode: false,
          body: {
            emailId: "paragkoche0@gmail.com",
          },
        }).then((req) => {
          cy.log(req.body);
          expect(req.status).eq(402);
        });
      });
      it("Invalid password", () => {
        cy.request({
          method: "POST",
          url: "/admin/admin-login",
          failOnStatusCode: false,
          body: {
            emailId: "paragkoche0@gmail.com",
            password: "Koche3588#111",
          },
        }).then((req) => {
          cy.log(req.body);
          expect(req.status).eq(402);
        });
      });
      it("Login by email", () => {
        cy.request({
          method: "POST",
          url: "/admin/admin-login",
          failOnStatusCode: false,
          body: {
            emailId: "paragkoche0@gmail.com",
            password: "Koche3588@123",
          },
        }).then((req) => {
          cy.log(req.body);
          expect(req.status).eq(200);
        });
      });
      it("Login by username", () => {
        cy.request({
          method: "POST",
          url: "/admin/admin-login",
          failOnStatusCode: false,
          body: {
            username: "parag",
            password: "Koche3588@123",
          },
        }).then((req) => {
          console.log(req.headers["set-cookie"] as any);
          cy.setCookie(
            "token",
            req.headers["set-cookie"][0].split("=")[1].split(";")[0]
          );
          // cy.setCookie("token",req.headers.cookie.toString())
          expect(req.status).eq(200);
        });
      });
    });
  });
});
