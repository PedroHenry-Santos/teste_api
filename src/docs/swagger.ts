import { del, get, get_id, put, post } from './services/Builder';

export default {
  openapi: '3.0.0',
  info: {
    title: 'Documentação API Meu Imóvel',
    description: 'Essa é uma API Rest para aplicação Meu Imóvel',
    version: '1.0.0',
    contact: {
      name: 'Pedro Henrique Viana dos Santos',
      email: 'pedrohenry.viana@gmail.com'
    }
  },
  servers: [
    {
      url: '/api'
    }
  ],
  tags: [
    {
      name: 'Construtoras'
    }
  ],
  paths: {
    '/builders': {
      post,
      get
    },
    '/builders/{id}': {
      get: get_id,
      put,
      delete: del
    }
  }
};
