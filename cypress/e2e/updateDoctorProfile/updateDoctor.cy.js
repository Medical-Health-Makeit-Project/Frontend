import { loginDoctor } from '../../constants/loginDoctor';
import { doctorUpdate } from '../../constants/updateDoctor.constants';
const { currentEmail, newEmail, currentPassword, newPassword, currentPhone, newPhone, newIntro } =
  doctorUpdate;

describe('Update doctor data test', () => {
  it('Should render doctor profile page', () => {
    loginDoctor();
    cy.get('.desktop-navigation-options > [href="/home/profile"]').click();
    cy.contains('Profile').should('exist');
  });

  it('Should change email only', () => {
    loginDoctor();
    cy.get('.desktop-navigation-options > [href="/home/profile"]').click();
    cy.get('.edit__icon').click();
    cy.get('.email__info > .editOn > .edit__input').clear();
    cy.get('.email__info > .editOn > .edit__input').type(newEmail);
    cy.get('.save__button').click();
    cy.contains(newEmail).should('exist');
    cy.contains('Your data was updated!').should('exist');
  });

  it('Should change phone only', () => {
    loginDoctor();
    cy.get('.desktop-navigation-options > [href="/home/profile"]').click();
    cy.get('.edit__icon').click();
    cy.get('.phone__info > .editOn > .edit__input').clear();
    cy.get('.phone__info > .editOn > .edit__input').type(newPhone);
    cy.get('.save__button').click();
    cy.contains(newPhone).should('exist');
    cy.contains('Your data was updated!').should('exist');
  });

  it('Should the introduction', () => {
    loginDoctor();
    cy.get('.desktop-navigation-options > [href="/home/profile"]').click();
    cy.get('.edit__icon').click();
    cy.get('#intro').clear();
    cy.get('#intro').type(newIntro);
    cy.get('.save__button').click();
    cy.contains(newIntro).should('exist');
    cy.contains('Your data was updated!').should('exist');
  });
  it('Should cancel the updating', () => {
    loginDoctor();
    cy.get('.desktop-navigation-options > [href="/home/profile"]').click();
    cy.get('.edit__icon').click();
    cy.get('.cancel__button').click();
    cy.get('.email__info > .info__containers > p').should('have.text', newEmail);
    cy.get('.phone__info > .info__containers > p').should('have.text', newPhone);
    cy.get('.intro-paragraph > p').should('have.text', newIntro);
  });

  it('Should cancel the updating', () => {
    loginDoctor();
    cy.get('.desktop-navigation-options > [href="/home/profile"]').click();
    cy.get('.updatePasswordBtn').click();
    cy.contains('Update your password').should('exist');
    cy.get('#currentPassword').type(currentPassword);
    cy.get('#newPassword').type(newPassword);
    cy.get('#repeatedPassword').type(newPassword);
    cy.get('.css-f2hjvb').click();
    cy.contains('Your password was updated').should('exist');
  });
});
