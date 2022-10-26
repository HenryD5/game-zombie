import gameApi from '../api/gameApi'
import { User } from '../interfaces/user';


const getListUsersWins = async (): Promise<User[] | undefined> => {
    const result = await gameApi.get(`users/ranking`)
    return result.data !== undefined ? result.data.data.users : result.data
}

const getUsersWins = async () => {
    const users = await getListUsersWins();
    return users;
}



export default getUsersWins;



