import { doctorConstants } from '../../constants/flowDoctor.constants';
import { loginAdmin } from '../../constants/loginAdmin';

const {
  doctorName,
  doctorLastname,
  monthBirthdate,
  yearBirthdate,
  area,
  email,
  phone,
  invalidPhone,
  country,
  city,
  qualification,
  membership,
  skills,
} = doctorConstants;

describe('Doctor flow test', () => {
  it('Should render add doctor page successfully', () => {
    loginAdmin();
    cy.get('.desktop-navigation-options > [href="/home/admin/dashboard"]').click();
    cy.get('[href="/home/admin/doctors"] > .admin-welcome__button').click();
    cy.contains('Doctors').should('exist');
  });

  it('Show warnig text for empty name input', () => {
    loginAdmin();
    cy.get('.desktop-navigation-options > [href="/home/admin/dashboard"]').click();
    cy.get('[href="/home/admin/doctors"] > .admin-welcome__button').click();
    cy.get('.form-doctors__btn-submitter').click();
    cy.contains('You must to provide a firstname').should('exist');
  });

  it('Show warnig text for empty area input', () => {
    loginAdmin();
    cy.get('.desktop-navigation-options > [href="/home/admin/dashboard"]').click();
    cy.get('[href="/home/admin/doctors"] > .admin-welcome__button').click();
    cy.get('.form-doctors__btn-submitter').click();
    cy.contains('You must to provide an area').should('exist');
  });

  it('Show warnig text for empty email input', () => {
    loginAdmin();
    cy.get('.desktop-navigation-options > [href="/home/admin/dashboard"]').click();
    cy.get('[href="/home/admin/doctors"] > .admin-welcome__button').click();
    cy.get('.form-doctors__btn-submitter').click();
    cy.contains('You must use only @drmebid.com').should('exist');
  });

  it('Show warnig text for empty phone input', () => {
    loginAdmin();
    cy.get('.desktop-navigation-options > [href="/home/admin/dashboard"]').click();
    cy.get('[href="/home/admin/doctors"] > .admin-welcome__button').click();
    cy.get('.form-doctors__btn-submitter').click();
    cy.contains('You must to provide at leaste 10 digits').should('exist');
  });

  it('Show warnig text for empty qualificaions input', () => {
    loginAdmin();
    cy.get('.desktop-navigation-options > [href="/home/admin/dashboard"]').click();
    cy.get('[href="/home/admin/doctors"] > .admin-welcome__button').click();
    cy.get('.form-doctors__btn-submitter').click();
    cy.contains('You must to provide at least one qualification').should('exist');
  });

  it('Show input text for qualifications added', () => {
    loginAdmin();
    cy.get('.desktop-navigation-options > [href="/home/admin/dashboard"]').click();
    cy.get('[href="/home/admin/doctors"] > .admin-welcome__button').click();
    cy.get('#firstname').type(doctorName);
    cy.get('#lastname').type(doctorLastname);
    cy.get('#birthdate').click();
    cy.get('.react-datepicker__month-select').select(monthBirthdate);
    cy.get('.react-datepicker__year-select').select(yearBirthdate);
    cy.get(':nth-child(2) > .react-datepicker__day--009').click();
    cy.get('#area').select(area);
    cy.get('#email').type(email);
    cy.get('#phone').type(phone);
    cy.get('#country').select(country);
    cy.get('#city').select(city);
    cy.get('#male').click();
    cy.get('#qualifications').type(qualification);
    cy.get(
      ':nth-child(10) > :nth-child(2) > .form-doctors__input-with-button > .form-doctors__button-add'
    ).click();
    cy.get('#memberships').type(membership).click();
    cy.get(
      ':nth-child(11) > :nth-child(2) > .form-doctors__input-with-button > .form-doctors__button-add'
    ).click();
    cy.get('#skills').type(skills).click();
    cy.get(
      ':nth-child(12) > :nth-child(2) > .form-doctors__input-with-button > .form-doctors__button-add'
    ).click();
    cy.contains(qualification).should('exist');
    cy.contains(membership).should('exist');
    cy.contains(skills).should('exist');
  });

  it('Should clear the inputs', () => {
    loginAdmin();
    cy.get('.desktop-navigation-options > [href="/home/admin/dashboard"]').click();
    cy.get('[href="/home/admin/doctors"] > .admin-welcome__button').click();
    cy.get('#firstname').type(doctorName);
    cy.get('#lastname').type(doctorLastname);
    cy.get('#birthdate').click();
    cy.get('.react-datepicker__month-select').select(monthBirthdate);
    cy.get('.react-datepicker__year-select').select(yearBirthdate);
    cy.get(':nth-child(2) > .react-datepicker__day--009').click();
    cy.get('#area').select(area);
    cy.get('#email').type(email);
    cy.get('#phone').type(phone);
    cy.get('#country').select(country);
    cy.get('#city').select(city);
    cy.get('#male').click();
    cy.get('#qualifications').type(qualification);
    cy.get(
      ':nth-child(10) > :nth-child(2) > .form-doctors__input-with-button > .form-doctors__button-add'
    ).click();
    cy.get('#memberships').type(membership);
    cy.get(
      ':nth-child(11) > :nth-child(2) > .form-doctors__input-with-button > .form-doctors__button-add'
    ).click();
    cy.get('#skills').type(skills);
    cy.get(
      ':nth-child(12) > :nth-child(2) > .form-doctors__input-with-button > .form-doctors__button-add'
    ).click();
    cy.get('.form-doctors__btn-clear').click();
    cy.get('#firstname').should('have.text', '');
    cy.get('#lastname').should('have.text', '');
    cy.get('#email').should('have.text', '');
    cy.get('#phone').should('have.text', '');
    cy.contains(qualification).should('not.exist');
    cy.contains(membership).should('not.exist');
    cy.contains(skills).should('not.exist');
  });

  it('Show alert to confirm doctor was deleted', () => {
    loginAdmin();
    cy.get('.desktop-navigation-options > [href="/home/admin/dashboard"]').click();
    cy.get('[href="/home/admin/doctors"] > .admin-welcome__button').click();
    cy.get(':nth-child(2) > .buttons-action-container > .outline-danger').click();
    cy.contains('Are you sure?').should('exist');
    cy.get('.swal2-confirm').click();
    cy.contains('Doctor deleted successfully!').should('exist');
  });

  it('Show alert for doctor updated', () => {
    loginAdmin();
    cy.get('.desktop-navigation-options > [href="/home/admin/dashboard"]').click();
    cy.get('[href="/home/admin/doctors"] > .admin-welcome__button').click();
    cy.get(':nth-child(1) > .buttons-action-container > .solid-info').click();
    cy.get('#firstname').should('not.have.value', '');
    cy.get('#lastname').should('not.have.value', '');
    cy.get('#email').should('not.have.value', '');
    cy.get('#phone').should('not.have.value', '');
    cy.get('#country').should('not.have.value', '');
    cy.get('#city').should('not.have.value', '');
    cy.get('#area').should('not.have.value', '');
  });
});
