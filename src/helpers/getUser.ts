import gameApi from '../api/gameApi'
import { User } from '../interfaces/user';

const getUserLogin = async (email: string): Promise<User | undefined> => {
    try {
        const result = await gameApi.get(`users/validate-email/${ email }`)
        return result.data !== undefined ? result.data.data : result.data
      } catch (err) {
        console.log(err)
      }
}

const getUser = async (email: string) => {
    const users = await getUserLogin(email);
    return users;
}

export default getUser;



