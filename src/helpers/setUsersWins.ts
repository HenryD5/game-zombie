import gameApi from '../api/gameApi'

const setArrUsersWins = async (userId: number, items: number[]): Promise<object | undefined> => {
    const result = gameApi.post(`votes/save-vote`, {userId: userId, votes: items})
    return result
}

const setUsersWins = async (userId: number, items: number[]) => {
    const users = await setArrUsersWins(userId, items);
    return users;
}

export default setUsersWins;



