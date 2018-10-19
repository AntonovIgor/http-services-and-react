import axios from 'axios';
import { REMOTE_SERVER } from '../constants';

/**
 * Загрузка информации о предложения
 */
export const loadOffers = () => axios.get(`${REMOTE_SERVER}/data`);

/**
 * Публикация нового предложения
 * @param {Object} post 
 */
export const addOffer = (post) => {

}