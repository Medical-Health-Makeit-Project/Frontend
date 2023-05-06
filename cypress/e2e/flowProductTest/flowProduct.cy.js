import { addProductConstants } from '../../constants/flowProduct.constants';
import { loginAdmin } from '../../constants/loginAdmin';

const {
  productName,
  labelName,
  price,
  stock,
  dose,
  discount,
  categoryValue,
  newCategory,
  image,
  description,
} = addProductConstants;

describe('Product flow test', () => {
  it('Render add product page successfully', () => {
    loginAdmin();
    cy.get('.desktop-navigation-options > [href="/home/admin/dashboard"]').click();
    cy.get('[href="/home/admin/products"] > .admin-welcome__button').click();
    cy.contains('Products').should('exist');
  });

  it('Show warning of empty fields', () => {
    loginAdmin();
    cy.get('.desktop-navigation-options > [href="/home/admin/dashboard"]').click();
    cy.get('[href="/home/admin/products"] > .admin-welcome__button').click();
    cy.get('.form-products__btn-submitter').click();
    cy.contains('You must complete the fields').should('exist');
  });

  it('Show warning of empty new category field', () => {
    loginAdmin();
    cy.get('.desktop-navigation-options > [href="/home/admin/dashboard"]').click();
    cy.get('[href="/home/admin/products"] > .admin-welcome__button').click();
    cy.get('#product').type(productName);
    cy.get('#label').type(labelName);
    cy.get('#price').type(price);
    cy.get('#stock').type(stock);
    cy.get('#dose').type(dose);
    cy.get('#discount').type(discount);
    cy.get('#category').select(categoryValue);
    cy.fixture('gail.jpg', 'base64').then((fileContent) => {
      cy.get('.form-products__btn-upload-image').attachFile(
        { fileContent, fileName: 'gail.jpg', mimeType: 'image/jpg' },
        { subjectType: 'input' }
      );
    });
    cy.get('#description').type(description);
    cy.get('.form-products__btn-submitter').click();
    cy.contains('You must provide a new category name').should('exist');
  });

  it('Should clear the fields', () => {
    loginAdmin();
    cy.get('.desktop-navigation-options > [href="/home/admin/dashboard"]').click();
    cy.get('[href="/home/admin/products"] > .admin-welcome__button').click();
    cy.get('#product').type(productName);
    cy.get('#label').type(labelName);
    cy.get('#price').type(price);
    cy.get('#stock').type(stock);
    cy.get('#dose').type(dose);
    cy.get('#discount').type(discount);
    cy.get('#category').select(categoryValue);
    cy.get('.form-products-selects-container > .form-products__input-text').type(newCategory);
    cy.fixture('gail.jpg', 'base64').then((fileContent) => {
      cy.get('.form-products__btn-upload-image').attachFile(
        { fileContent, fileName: 'gail.jpg', mimeType: 'image/jpg' },
        { subjectType: 'input' }
      );
    });
    cy.get('#description').type(description);
    cy.get('.form-products__btn-clear').click();
    cy.get('#product').should('have.text', '');
    cy.get('#label').should('have.text', '');
    cy.get('#price').should('have.text', '');
    cy.get('#stock').should('have.text', '');
    cy.get('#dose').should('have.text', '');
    cy.get('#description').should('have.text', '');
  });

  it('Should delete a product', () => {
    loginAdmin();
    cy.get('.desktop-navigation-options > [href="/home/admin/dashboard"]').click();
    cy.get('[href="/home/admin/products"] > .admin-welcome__button').click();
    cy.get(':nth-child(1) > .product-list__buttons-action-container > .outline-danger').click();
    cy.contains('Are you sure?').should('exist');
    cy.get('.swal2-confirm').click();
    cy.contains('Product deleted successfully!').should('exist');
  });

  it('Should update product', () => {
    loginAdmin();
    cy.get('.desktop-navigation-options > [href="/home/admin/dashboard"]').click();
    cy.get('[href="/home/admin/products"] > .admin-welcome__button').click();
    cy.get(':nth-child(1) > .product-list__buttons-action-container > .solid-info').click();
    cy.wait(1000);
    cy.get('#product').should('not.have.value', '');
    cy.get('#label').should('not.have.value', '');
    cy.get('#price').should('not.have.value', '');
    cy.get('#stock').should('not.have.value', '');
    cy.get('#dose').should('not.have.value', '');
    cy.get('#discount').should('not.have.value', '');
    cy.get('#product').type(productName);
    cy.get('.form-products__btn-submitter').click();
    cy.contains('Product updated succesfully!').should('exist');
  });

  it('Show alert for providing sting instead numbers in price input', () => {
    loginAdmin();
    cy.get('.desktop-navigation-options > [href="/home/admin/dashboard"]').click();
    cy.get('[href="/home/admin/products"] > .admin-welcome__button').click();
    cy.get('#price').type('s');
    cy.contains('You must provide only numbers');
  });

  it('Show alert for providing sting instead numbers in stock input', () => {
    loginAdmin();
    cy.get('.desktop-navigation-options > [href="/home/admin/dashboard"]').click();
    cy.get('[href="/home/admin/products"] > .admin-welcome__button').click();
    cy.get('#stock').type('s');
    cy.contains('You must provide only numbers');
  });

  it('Show alert for providing sting instead numbers in discount input', () => {
    loginAdmin();
    cy.get('.desktop-navigation-options > [href="/home/admin/dashboard"]').click();
    cy.get('[href="/home/admin/products"] > .admin-welcome__button').click();
    cy.get('#discount').type('s');
    cy.contains('You must provide only numbers');
  });
});
