import axios from '../utils/API';

/**
 * Load the commit list
 * @returns {Promise<AxiosResponse<T>>}
 */
export const getCommits = () => {
    return axios.get('/commits');
};
