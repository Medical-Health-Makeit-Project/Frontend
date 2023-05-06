import { loginConstants } from './login.constants';
const { url } = loginConstants;

export const loginUser = () => {
  cy.visit(url);
  cy.get('#email').type('salvarez@unal.edu.co');
  cy.get('#password').type('Makeit');
  cy.get('.login__button').click();
};
