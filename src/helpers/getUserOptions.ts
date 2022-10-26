import gameApi from '../api/gameApi'
import { User } from '../interfaces/user';

const getUsersNames = async (userId: string): Promise<User[] | undefined> => {
    const result = await gameApi.get(`users/list?userId=${ userId }`)
    return result.data !== undefined ? result.data.data.users : result.data
}

const getUserOptions = async (userId: string | Number) => {
    const users = await getUsersNames(userId.toString());
    return users;
}

export default getUserOptions;



