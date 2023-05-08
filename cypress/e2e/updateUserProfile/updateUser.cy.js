import { loginUser } from '../../constants/loginUser';
import { newUserData } from '../../constants/updateUser.constants';

const { currentEmail, newEmail, newPhone, currentPassword, newPassword } = newUserData;

describe('Update user data test', () => {
  it('Should render the profile page', () => {
    loginUser();
    cy.get('.desktop-navigation-options > [href="/home/profile"]').click();
    cy.contains('Profile').should('exist');
  });

  it('Should change email only', () => {
    loginUser();
    cy.get('.desktop-navigation-options > [href="/home/profile"]').click();
    cy.get('.edit__icon').click();
    cy.get(':nth-child(1) > .edit__input').clear();
    cy.get(':nth-child(1) > .edit__input').type(newEmail);
    cy.get('.save__button').click();
    cy.contains(newEmail).should('exist');
    cy.contains('Your data was updated!').should('exist');
  });

  it('Should change phone only', () => {
    loginUser();
    cy.get('.desktop-navigation-options > [href="/home/profile"]').click();
    cy.get('.edit__icon').click();
    cy.get(':nth-child(3) > .edit__input').clear();
    cy.get(':nth-child(3) > .edit__input').type(newPhone);
    cy.get('.save__button').click();
    cy.contains(newPhone).should('exist');
    cy.contains('Your data was updated!').should('exist');
  });

  it('Show alert for password updated', () => {
    loginUser();
    cy.get('.desktop-navigation-options > [href="/home/profile"]').click();
    cy.get('.updatePasswordBtn').click();
    cy.contains('Update your password').should('exist');
    cy.get('#currentPassword').type(newPassword);
    cy.get('#newPassword').type(currentPassword);
    cy.get('#repeatedPassword').type(currentPassword);
    cy.get('.css-f2hjvb').click();
    cy.contains('Your password was updated').should('exist');
  });

  it('Should cancel the updating', () => {
    loginUser();
    cy.get('.desktop-navigation-options > [href="/home/profile"]').click();
    cy.get('.edit__icon').click();
    cy.get('.cancel__button').click();
    cy.get('.email__container > .paragraph').should('have.text', newEmail);
    cy.get('.phone__container > .paragraph').should('have.text', newPhone);
  });
});
