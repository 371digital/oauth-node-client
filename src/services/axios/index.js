
import axios from "axios";
import { oauthApiIP } from "_constants";

const instance = axios.create({
    baseURL: oauthApiIP
});

export default instance;