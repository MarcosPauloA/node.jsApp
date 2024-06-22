const request = require('supertest');
const app = require('../app.js');
describe('GET /produtos', () => {
    it('produtos responds with response!', async () => {
        const response = await request(app).get('/produtos');
        expect(response.status).toBe(200);
    });

    // Validação de nome do produto e descrição
    it('campos produto e descrição válidos', async () => {
        const response = await request(app).get('/produtos');
        for (let i = 0; i < response.body.length; i++) {
            const tamanhoNome = response.body[i].nome.length;
            const tamanhoDescricao = response.body[i].descricao.length;
            // Tamanho entre 3 e 255 caracteres
            expect(tamanhoNome).toBeGreaterThan(2);
            expect(tamanhoNome).toBeLessThan(256);
            expect(tamanhoDescricao).toBeGreaterThan(2);
            expect(tamanhoDescricao).toBeLessThan(256);
        }
    });

    // Validação de preço
    it('campos de preço válidos', async () => {
        const response = await request(app).get('/produtos');
        for (let i = 0; i < response.body.length; i++) {
            const preco = response.body[i].preco;
            // Checa se o preço é positivo
            expect((preco)).toBeGreaterThan(0);
        }
    });

    // Validação de data
    it('campos de data válidos', async () => {
        const response = await request(app).get('/produtos');
        // Loop que percorre todos produtos checando data
        for (let i = 0; i < response.body.length; i++) {
            const dateString = response.body[i].data_atualizado;
            const inputDate = new Date(dateString);
            // entre 1 de Janeiro de 2000 até dia 20 de Junho de 2024
            const startDate = new Date('2000-01-01');
            const endDate = new Date('2024-06-20');
            const dataValida = inputDate >= startDate && inputDate <= endDate;

            // Checa se a data é válida
            expect(dataValida).toBeTruthy();
        }
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
