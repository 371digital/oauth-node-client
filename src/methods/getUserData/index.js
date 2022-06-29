import { axios, container } from "services";
import { endPoints } from "_constants";

const getUserData = async (userId) => {
    const data = await axios.get(endPoints.getProfile, {
        headers: {
            "x-access-token": container.get(userId)
        }
    }).then((res) => res.data);
    return data;
};

export default getUserData;