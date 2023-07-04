Feature('login');

Scenario('Login com Sucesso', ({ I }) => {
    I.amOnPage('http://automationpratice.com.br')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', 'r.luanafreitas@gmail.com')
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('Login realizado', 3)

}).tag('positivo')

Scenario('Tentando logar digitando apenas email', ({ I }) => {
    I.amOnPage('http://automationpratice.com.br')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', 'r.luanafreitas@gmail.com')
    I.click('#btnLogin')
    I.waitForText('Senha inválida.', 3)

}).tag('negativo')

Scenario('Tentando logar digitando apenas senha', ({ I }) => {
    I.amOnPage('http://automationpratice.com.br')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 3)

}).tag('negativo')

Scenario('Tentando logar com dados em branco', ({ I }) => {
    I.amOnPage('http://automationpratice.com.br')
    I.click('Login')
    I.waitForText('Login', 10)
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 3)

}).tag('negativo')
