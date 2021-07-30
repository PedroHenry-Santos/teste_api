export default {
  tags: ['Construtoras'],
  summary: 'Registrar uma construtora',
  description:
    'Cadastra uma nova construtora. Caso tenha permissão para faze-lo',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            name: {
              type: 'string'
            },
            website: {
              type: 'string'
            },
            street: {
              type: 'string'
            },
            number: {
              type: 'string'
            },
            cep: {
              type: 'string'
            },
            latitude: {
              type: 'number'
            },
            longitude: {
              type: 'number'
            },
            neighborhood_id: {
              type: 'uuid'
            },
            city_id: {
              type: 'uuid'
            },
            state_id: {
              type: 'uuid'
            },
            logo: {
              type: 'string'
            }
          },
          exemplo: {
            name: 'Construtora A',
            website: 'https://construtora.com.br',
            street: 'Rua das construtoras',
            number: '789',
            cep: '11704000',
            latitude: -0.59,
            longitude: -0.59,
            neighborhood_id: '3bcf2e89-8a8b-4ad7-943a-8b2a0a6075bc',
            city_id: '3bcf2e89-8a8b-4ad7-943a-8b2a0a6075bc',
            state_id: '3bcf2e89-8a8b-4ad7-943a-8b2a0a6075bc',
            logo: 'https://storage.com.br/4ad7-943a-8b2a0a6075bc'
          }
        }
      }
    }
  },
  responses: {
    '201': {
      description: 'Construtora cadastrada com sucesso'
    },
    '400': {
      description: 'Algum erro ocorreu ao cadastrar a construtora'
    }
  }
};
