import { registerConstants } from '../../constants/register.constants';

const {
  url,
  name,
  lastName,
  username,
  email,
  phone,
  yearBirthdate,
  monthBirthdate,
  gender,
  country,
  bloodType,
  password,
  wrongPassword,
} = registerConstants;
describe('Register flow test', () => {
  it('Render register page successfully', () => {
    cy.visit(url);
    cy.contains('Register').should('exist');
  });

  it('Show warning of empty field', () => {
    cy.visit(url);
    cy.get('.register__buton').click();
    cy.contains('You must complete the form!').should('exist');
  });

  it('Show warning of empty field', () => {
    cy.visit(url);
    cy.get('#name').type(name);
    cy.get('#lastname').type(lastName);
    cy.get('#username').type(username);
    cy.get('#phone').type(phone);
    cy.get('#birthDate').click();
    cy.get('.react-datepicker__month-select').select(monthBirthdate);
    cy.get('.react-datepicker__year-select').select(yearBirthdate);
    cy.get('.react-datepicker__day--019').click();
    cy.get('#gender').select(gender);
    cy.get('#country').select(country);
    cy.get('#blood').select(bloodType);
    cy.get('#password').type(password);
    cy.get('#repeatPassword').type(wrongPassword);
    cy.get('.register__buton').click();
    cy.contains('You must complete the form!').should('exist');
  });

  it('Show warning of unmatch passwords', () => {
    cy.visit(url);
    cy.get('#name').type(name);
    cy.get('#lastname').type(lastName);
    cy.get('#username').type(username);
    cy.get('#email').type(email);
    cy.get('#phone').type(phone);
    cy.get('#birthDate').click();
    cy.get('.react-datepicker__month-select').select(monthBirthdate);
    cy.get('.react-datepicker__year-select').select(yearBirthdate);
    cy.get('.react-datepicker__day--019').click();
    cy.get('#gender').select(gender);
    cy.get('#country').select(country);
    cy.get('#blood').select(bloodType);
    cy.get('#password').type(password);
    cy.get('#repeatPassword').type(wrongPassword);
    cy.get('.register__buton').click();
    cy.contains('Passwords must match').should('exist');
  });

  it('Show warning of terms and conditions not accepted', () => {
    cy.visit(url);
    cy.get('#name').type(name);
    cy.get('#lastname').type(lastName);
    cy.get('#username').type(username);
    cy.get('#email').type(email);
    cy.get('#phone').type(phone);
    cy.get('#birthDate').click();
    cy.get('.react-datepicker__month-select').select(monthBirthdate);
    cy.get('.react-datepicker__year-select').select(yearBirthdate);
    cy.get('.react-datepicker__day--019').click();
    cy.get('#gender').select(gender);
    cy.get('#country').select(country);
    cy.get('#blood').select(bloodType);
    cy.get('#password').type(password);
    cy.get('#repeatPassword').type(password);
    cy.get('.register__buton').click();
    cy.contains('You must accept the terms and conditions').should('exist');
  });

  it('Show register successfully alert and navigate to login page', () => {
    cy.visit(url);
    cy.get('#name').type(name);
    cy.get('#lastname').type(lastName);
    cy.get('#username').type(username);
    cy.get('#email').type(email);
    cy.get('#phone').type(phone);
    cy.get('#birthDate').click();
    cy.get('.react-datepicker__month-select').select(monthBirthdate);
    cy.get('.react-datepicker__year-select').select(yearBirthdate);
    cy.get('.react-datepicker__day--019').click();
    cy.get('#gender').select(gender);
    cy.get('#country').select(country);
    cy.get('#blood').select(bloodType);
    cy.get('#password').type(password);
    cy.get('#repeatPassword').type(password);
    cy.get('#terms').click();
    cy.get('.register__buton').click();
    cy.contains('Your register was succeeded!').should('exist');
    cy.contains('Login').should('exist');
  });

  it('Show bad request alert, existing user', () => {
    cy.visit(url);
    cy.get('#name').type(name);
    cy.get('#lastname').type(lastName);
    cy.get('#username').type(username);
    cy.get('#email').type(email);
    cy.get('#phone').type(phone);
    cy.get('#birthDate').click();
    cy.get('.react-datepicker__month-select').select(monthBirthdate);
    cy.get('.react-datepicker__year-select').select(yearBirthdate);
    cy.get('.react-datepicker__day--019').click();
    cy.get('#gender').select(gender);
    cy.get('#country').select(country);
    cy.get('#blood').select(bloodType);
    cy.get('#password').type(password);
    cy.get('#repeatPassword').type(password);
    cy.get('#terms').click();
    cy.get('.register__buton').click();
    cy.contains('Existing user').should('exist');
  });
});
