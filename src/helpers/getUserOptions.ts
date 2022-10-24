// import gameApi from '../api/gameApi'
import { User } from '../interfaces/user';

const getUsersNames = async (): Promise<User[]> => {
    const img = ['/1.png', '/2.png']
    return [
        { id: 1, name: 'Henry', email: 'henry@manzanaverde.la', position: 'Tech', images: img, completed: true, points: 10 },
        { id: 2, name: 'Henry 2', email: 'henry2@manzanaverde.la', position: 'Tech', images: img, completed: false, points: 9 },
        { id: 3, name: 'Henry 3', email: 'henry3@manzanaverde.la', position: 'Tech', images: img, completed: false, points: 8 },
        { id: 4, name: 'Henry 4', email: 'henry4@manzanaverde.la', position: 'Tech', images: img, completed: false, points: 7 },
        { id: 5, name: 'Henry 5', email: 'henry5@manzanaverde.la', position: 'Tech', images: img, completed: false, points: 6 },
        { id: 6, name: 'Henry 6', email: 'henry6@manzanaverde.la', position: 'Tech', images: img, completed: false, points: 5 },
        { id: 7, name: 'Henry 7', email: 'henry7@manzanaverde.la', position: 'Tech', images: img, completed: false, points: 4 },
        { id: 8, name: 'Henry 8', email: 'henry8@manzanaverde.la', position: 'Tech', images: img, completed: false, points: 3 },
        { id: 9, name: 'Henry 9', email: 'henry9@manzanaverde.la', position: 'Tech', images: img, completed: false, points: 2 },
        { id: 10, name: 'Henry 10', email: 'henry10@manzanaverde.la', position: 'Tech', images: img, completed: false, points: 1 },
        { id: 11, name: 'Henry 11', email: 'henry11@manzanaverde.la', position: 'Tech', images: img, completed: false, points: 0 },
    ]

}

const getUserOptions = async () => {
    const users = await getUsersNames();
    return users;
}



export default getUserOptions;



