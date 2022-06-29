import { axios, container } from "services";
import { isSuccessRequest } from "utils";
import { endPoints } from "_constants";

const verifyToken = async (token) => {
    const data = await axios.get(endPoints.verifyToken, {
        params: {
            token: token
        }
    }).then((res) => res.data);
    
    if (isSuccessRequest(data)) {
        container.set(data.data.userId, token);
    };
    
    return data;
};
export default verifyToken;