describe('Scenario One', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/pages');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();
    cy.get('[data-cy="signInButton"]').click();
    cy.get('[data-cy="imputEmail1"]').type('xyz@gmail.com');
    cy.get('#inputPassword2').type('xyz');
    cy.get('button[type="submit"]', { timeout: 10000 }).should('be.visible');
  })
})
describe('Scenario Two', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/pages');
    cy.contains('Forms').click();
    cy.contains('Form Layouts').click();
    cy.get('input[type="radio"][value="undefined"]').should("not.be.checked");
    //radio button 1
    cy.contains('span', 'Option 1').parent('label').find('input[type="radio"][value="undefined"]').should('be.enabled');
    cy.contains('span', 'Option 1').parent('label').find('input[type="radio"][value="undefined"]').check({force:true});
    //radio button 2
    cy.contains('span', 'Option 2').parent('label').find('input[type="radio"][value="undefined"]').should('be.enabled');
    //radio button disabled
   cy.contains('span', 'Option 2').parent('label').find('input[type="radio"][value="undefined"]').check({force:true});
  //radio button 3 disabled
   cy.contains('span', 'Disabled Option').parent('label').find('input[type="radio"][value="undefined"]').should('be.disabled');

  })
})
describe('Scenario Three', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/pages');
    //Selecting Modal & Overlays
    cy.contains('Modal & Overlays').click();
    //Selecting Toaster
    cy.contains('Toastr').click();
    // Hide on click checkbox
    cy.contains('span', 'Hide on click').parent('label').find('input[type="checkbox"]').should('be.checked');
    //Show toast with icon checkbox
    cy.contains('span', 'Show toast with icon').parent('label').find('input[type="checkbox"]').should('be.checked');
    //prevent arising of duplicate toast checkbox
    cy.contains('span', 'Prevent arising of duplicate toast').parent('label').find('input[type="checkbox"]').check({force:true});
  })
})
