describe("Devbook application", () => {
  it("Visit the DevBook", () => {
    cy.visit("http://localhost:3001/");
    cy.get('h2[data-test="heading"]').contains("hello!");
  });
});
