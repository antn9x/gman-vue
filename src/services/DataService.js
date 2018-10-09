import Api from '@/services/Api';

export default {
  getData(params) {
    return Api().get('/');
  },
};
