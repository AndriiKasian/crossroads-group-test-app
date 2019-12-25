import axios from "axios";

export const REPOSITORY_AUTHOR = 'AndriiKasian';
export const REPOSITORY_NAME = 'crossroads-group-test-app';

const baseURL = `https://api.github.com/repos/${REPOSITORY_AUTHOR}/${REPOSITORY_NAME}`;

export default axios.create({
    baseURL,
    responseType: "json"
});
