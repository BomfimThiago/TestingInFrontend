describe('Login Component', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should show login form when user is not logged in', () => {
    cy.get('form').should('be.visible')
    cy.get('input[type="email"]').should('be.visible')
    cy.get('input[type="password"]').should('be.visible')
    cy.get('button[type="submit"]').should('contain', 'Login')
  })

  it('should log in the user with correct credentials', () => {
    cy.get('input[type="email"]').type('user@example.com')
    cy.get('input[type="password"]').type('123456')

    cy.get('button[type="submit"]').click()

    cy.contains('Hey! 👋, welcome back user@example.com!').should('be.visible')
    cy.get('button').contains('Logout').should('be.visible')
  })

  it('should log out the user after clicking the logout button', () => {
    cy.get('input[type="email"]').type('user@example.com')
    cy.get('input[type="password"]').type('123456')

    cy.get('button[type="submit"]').click()

    cy.contains('Hey! 👋, welcome back user@example.com!').should('be.visible')
    cy.get('button').contains('Logout').click()
    cy.get('form').should('be.visible')
  })

  it('should show an error message for invalid credentials', () => {
    cy.get('input[type="email"]').type('invalid@example.com')
    cy.get('input[type="password"]').type('wrong123456')

    cy.get('button[type="submit"]').click()

    cy.on('window:alert', str => {
      expect(str).to.equal('Invalid credentials')
    })

    cy.get('form').should('be.visible')
  })

  it('should redirect admin user to subscribe page when is inactive', () => {
    cy.get('input[type="email"]').type('admin@acme.com')
    cy.get('input[type="password"]').type('123456')
    cy.get('button[type="submit"]').click()

    cy.location('pathname', { timeout: 1000 }).should('include', '/subscribe')

    cy.contains('Your account is inactive').should('be.visible')
  })
})
