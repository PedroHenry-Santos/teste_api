export default {
  tags: ['Construtoras'],
  summary:
    'Deleta uma construtora, e junto com ela todos os recursos atrelados.',
  description:
    'Deleta uma das construtoras acessíveis pelo token de autenticação',
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
      description: 'Sucesso'
    },
    '404': {
      description: 'Usuário não encontrado'
    }
  }
};
