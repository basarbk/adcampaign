
import axios from 'axios';

export const getCampaigns = () => {
  return axios.get('/api/campaigns');
};

export const getCampaignById = (id) => {
  return axios.get(`/api/campaigns/${id}`);
};