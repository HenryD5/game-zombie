// import gameApi from '../api/gameApi'
import { User } from '../interfaces/user';


const getUserLogin = async (email: string): Promise<User | undefined> => {
    const img = ['/1.png', '/2.png']
    const data = [
        { id: 1, name: 'Henry', email: 'henry@manzanaverde.la', position: 'Tech', images: img, completed: true, points: 10 },
        { id: 2, name: 'Henry 2', email: 'henry2@manzanaverde.la', position: 'Tech', images: img, completed: false, points: 9 },
        { id: 3, name: 'Henry 3', email: 'henry3@manzanaverde.la', position: 'Tech', images: img, completed: false, points: 8 },
        { id: 4, name: 'Henry 4', email: 'henry4@manzanaverde.la', position: 'Tech', images: img, completed: false, points: 7 },
    ]
    const result = data.find((element: any) => element.email === email);
    return result
}

const getUser = async (email: string) => {
    const users = await getUserLogin(email);
    return users;
}



export default getUser;



