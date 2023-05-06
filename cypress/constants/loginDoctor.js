import { loginConstants } from './login.constants';
const { url } = loginConstants;

export const loginDoctor = () => {
  cy.visit(url);
  cy.get('#email').type('doc2@drmebid.com');
  cy.get('#password').type('1234');
  cy.get('.login__button').click();
};
