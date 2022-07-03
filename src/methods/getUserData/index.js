import { axios, container } from "services";
import { endPoints } from "_constants";

const getUserData = async (userId) => {
    if (container.get(userId)) {
        const data = await axios.get(endPoints.getProfile, {
            headers: {
                "x-access-token": container.get(userId)
            }
        }).then((res) => res.data);
        return data;
    }
    
    return {
        code: 400,
        message: "UserId not found in container."
    }
};

export default getUserData;