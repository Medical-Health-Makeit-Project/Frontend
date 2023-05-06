import { loginConstants } from './login.constants';
const { url, adminEmail, adminPassword } = loginConstants;
export const loginAdmin = () => {
  cy.visit(url);
  cy.get('#email').type(adminEmail);
  cy.get('#password').type(adminPassword);
  cy.get('.login__button').click();
  cy.contains('Profile').should('not.exist');
  cy.contains('Our Doctors').should('exist');
  cy.contains('Shop').should('exist');
  cy.contains('Your Panel').should('exist');
  cy.contains('Logout').should('exist');
};
