import axios from "axios";

export const REPOSITORY_AUTHOR = 'AChuyan';
export const REPOSITORY_NAME = 'dynasty-owner-test';

const baseURL = `https://api.github.com/repos/${REPOSITORY_AUTHOR}/${REPOSITORY_NAME}`;

export default axios.create({
    baseURL,
    responseType: "json"
});
