import { someFunction } from './sandconsole.cy.js';
require('cypress-xpath');
describe('template spec', () => {
    it('passes', () => {
      cy.visit("https://sandconsole.com/portfolio")
      cy.xpath("(//button[@class='rounded-full px-8 py-4 text-white flex items-center gap-2 hover:shadow-lg duration-200'][normalize-space()='Read All'])[1]").click();
    })
})