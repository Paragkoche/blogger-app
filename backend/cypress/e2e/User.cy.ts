describe("Admin API TESTING", () => {
  describe("Admin API TESTING", () => {
    describe("Sign-in", () => {
      it("Empty body", () => {
        cy.request({
          method: "POST",
          url: "/user/sing-in-user",
          failOnStatusCode: false,
        }).then((req) => {
          cy.log(req.body);

          expect(req.status).eq(402);
        });
      });
      it("Half body", () => {
        cy.request({
          method: "POST",
          url: "/user/sing-in-user",
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
          url: "/user/sing-in-user",
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
    });
    describe("login", () => {
      it("Empty body", () => {
        cy.request({
          method: "POST",
          url: "/user/login-user",
          failOnStatusCode: false,
        }).then((req) => {
          cy.log(req.body);

          expect(req.status).eq(402);
        });
      });
      it("Half body", () => {
        cy.request({
          method: "POST",
          url: "/user/login-user",
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
          url: "/user/login-user",
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
          url: "/user/login-user",
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
    });
  });
});
