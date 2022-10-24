// import gameApi from '../api/gameApi'
import { User } from '../interfaces/user';


const setArrUsersWins = async (items: User[]): Promise<Boolean> => {
    console.log('save users wins ...', items)
    return true
}

const setUsersWins = async (items: User[]) => {
    const users = await setArrUsersWins(items);
    return users;
}

export default setUsersWins;



