export default {
  tags: ['Construtoras'],
  summary: 'Listar todas as construtoras em que o token fornece acesso',
  description: 'A Lista das construtoras acessíveis pelo token de autenticação',
  responses: {
    '200': {
      description: 'Sucesso',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: {
                  type: 'string'
                },
                city_id: {
                  type: 'string'
                },
                state_id: {
                  type: 'string'
                },
                logo: {
                  type: 'string'
                }
              }
            }
          }
        }
      }
    }
  }
};
