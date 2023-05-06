import { loginConstants } from '../../constants/login.constants';
const {
  url,
  wrongEmail,
  wrongPassword,
  adminEmail,
  adminPassword,
  userEmail,
  userPassword,
  docEmail,
  docPassword,
} = loginConstants;

describe('Login flow test', () => {
  it('Render login page successfully', () => {
    cy.visit(url);
    cy.contains('Login').should('exist');
  });

  it('Show alert for wrong credentials', () => {
    cy.visit(url);
    cy.get('#email').type(wrongEmail);
    cy.get('#password').type(adminPassword);
    cy.get('.login__button').click();
    cy.contains('Authentication credential failed').should('exist');
  });

  it('Show alert for wrong credentials', () => {
    cy.visit(url);
    cy.get('#email').type(adminEmail);
    cy.get('#password').type(wrongPassword);
    cy.get('.login__button').click();
    cy.contains('Authentication credential failed').should('exist');
  });

  it('Show alert for form incomplete', () => {
    cy.visit(url);
    cy.get('#email').type(adminEmail);
    cy.get('.login__button').click();
    cy.contains('You need to complete the form').should('exist');
  });

  it('Show alert for form incomplete', () => {
    cy.visit(url);
    cy.get('#password').type(wrongPassword);
    cy.get('.login__button').click();
    cy.contains('You need to complete the form').should('exist');
  });

  it('Show alert for form incomplete', () => {
    cy.visit(url);
    cy.get('.login__button').click();
    cy.contains('You need to complete the form').should('exist');
  });

  it('Admin login succesfully', () => {
    cy.visit(url);
    cy.get('#email').type(adminEmail);
    cy.get('#password').type(adminPassword);
    cy.get('.login__button').click();
    cy.contains('Profile').should('not.exist');
    cy.contains('Our Doctors').should('exist');
    cy.contains('Shop').should('exist');
    cy.contains('Your Panel').should('exist');
    cy.contains('Logout').should('exist');
  });

  it('User login succesfully', () => {
    cy.visit(url);
    cy.get('#email').type(userEmail);
    cy.get('#password').type(userPassword);
    cy.get('.login__button').click();
    cy.contains('Your Panel').should('not.exist');
    cy.contains('Our Doctors').should('exist');
    cy.contains('Shop').should('exist');
    cy.contains('Profile').should('exist');
    cy.contains('Logout').should('exist');
  });

  it('Doctor login succesfully', () => {
    cy.visit(url);
    cy.get('#email').type(docEmail);
    cy.get('#password').type(docPassword);
    cy.get('.login__button').click();
    cy.contains('Your Panel').should('not.exist');
    cy.contains('Our Doctors').should('not.exist');
    cy.contains('Shop').should('exist');
    cy.contains('Profile').should('exist');
    cy.contains('Logout').should('exist');
  });
});
