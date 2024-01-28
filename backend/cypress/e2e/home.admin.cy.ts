describe("Auth request", () => {
  let token = "";
  before("Login by username", () => {
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
  it("Get all Home data", () => {
    cy.request({
      url: "/admin/",
      method: "GET",
      failOnStatusCode: false,
      headers: {
        cookies: {
          token,
        },
      },
    }).then((res) => {
      cy.log(res.body);
    });
  });
});
