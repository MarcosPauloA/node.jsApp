const request = require('supertest');
const app = require('../app.js');
describe('GET /usuarios', () => {
    it('USERS responds with response!', async () => {
        const response = await request(app).get('/usuarios');
        expect(response.status).toBe(200);
    });
});

/*
 Crie testes para:
 ○ Checar se os campos nome, sobrenome, produto, descrição são válidos
 ■ Tamanho entre 3 e 255 caracteres
 ○ Checar se o campo email é um email válido
 ○ Checar se idade é positivo e menor do que 120
 ○ Checar se preço é positivo
 ○ Checar se data é uma data válida
    entre 1 de Janeiro de 2000 até dia 20 de Junho de 2024
 ○ Checar se chamada a endpoint usuarios funciona
 ○ Checar se chamada para endpoint clientes possui token
 */
