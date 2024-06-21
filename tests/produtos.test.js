const request = require('supertest');
const app = require('../app.js');
describe('GET /clientes', () => {
    it('clientes responds with response!', async () => {
        const response = await request(app).get('/clientes');
        expect(response.status).toBe(200);
    });

    // Validação de nome e sobrenome
    it('campos nome e sobrenome válidos', async () => {
        const response = await request(app).get('/clientes');
        for (let i = 0; i < response.body.length; i++) {
            const tamanhoNome = response.body[i].nome.length;
            const tamanhoSobrenome = response.body[i].sobrenome.length;
            // Tamanho entre 3 e 255 caracteres
            expect(tamanhoNome).toBeGreaterThan(2);
            expect(tamanhoNome).toBeLessThan(256);
            expect(tamanhoSobrenome).toBeGreaterThan(2);
            expect(tamanhoSobrenome).toBeLessThan(256);
        }
    });

    // Validação de email
    it('campos de email válidos', async () => {
        const response = await request(app).get('/clientes');
        for (let i = 0; i < response.body.length; i++) {
            const email = response.body[i].email;
            const regex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@a-zA-Z0-9?(?:\.a-zA-Z0-9?)*$/;
            expect(regex.test(email)).toBeTruthy;
        }
    });

    // Validação de idade
    it('campos de idade válidos', async () => {
        const response = await request(app).get('/clientes');
        for (let i = 0; i < response.body.length; i++) {
            const idade = response.body[i].idade;
            // Checa se idade é positivo e menor do que 120
            expect(idade).toBeGreaterThanOrEqual(0);
            expect(idade).toBeLessThan(120);
        }
    });
    /*
    it('Checado por nomes e sobrenomes válidos'), async () => {
        const response = await request(app).get('/users');
        expect(response.status).toBe(200);
    }
    */
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
