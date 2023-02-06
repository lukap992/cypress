/// <reference types="Cypress" />
describe("gallery test", () => {

    it("login test", () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get(".nav-link").eq(1).click();
        //cy.get("a[href='/login']")
        //cy.contains("Login").click();
        cy.get("#email").type("lukap@map.com");
        cy.get("#password").type("luka1234");
        cy.get(".btn-custom").click();
        cy.get(".nav-link").should("have.length", 4);//pozitivna asertacija
        cy.url().should("not.contain", "/login");//negativna asertacija
        cy.get(".nav-link").eq(3).click();
    });

    it.only("register test", () => {
        cy.visit("/");
        cy.get(".nav-link").eq(2).click();
        cy.url().should("contain", "/register");
        cy.get('#first-name').type("luka");
        cy.get('#last-name').type("persaj");
        cy.get('#email').type("luka.persaj99@gmail.com");
    });

});