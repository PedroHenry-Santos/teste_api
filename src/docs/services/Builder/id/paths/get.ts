export default {
  tags: ['Construtoras'],
  summary: 'Listar todas as construtoras em que o token fornece acesso',
  description: 'A Lista das construtoras acessíveis pelo token de autenticação',
  parameters: [
    {
      name: 'id',
      in: 'path',
      required: true,
      schema: {
        type: 'number'
      },
      description: 'Identificador do usuário'
    }
  ],
  responses: {
    '200': {
      description: 'Sucesso',
      content: {
        'application/json': {
          schema: {
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
    },
    '404': {
      description: 'Usuário não encontrado'
    }
  }
};
