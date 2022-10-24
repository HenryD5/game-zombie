import { defineStore } from "pinia";
import { User } from '../interfaces/user';

interface UserState {
    userArr:  User[];
    user:     User | undefined;
    page: number;
    perPage: number;
    usersWin: User[],
    listUsersWins: User[],
    loading: boolean
}

export const useUserStore =  defineStore('user', {

    state: (): UserState => ({
        userArr: [],
        user: undefined,
        page: 1,
        perPage: 8,
        usersWin: [],
        listUsersWins: [],
        loading: false
    }),

    actions: {
        loadUsers( users: User[] ) {
            this.userArr = users;
        },
        loadUsersWins( users: User[] ) {
            this.listUsersWins = users;
        },
        setUser( user: User ) {
            this.user = user;
        },
        setLoading( val: boolean ) {
            this.loading = val;
        },
        setUserWin(user: User) {
           this.usersWin.push(user)
        },
        clearUserWins() {
           this.usersWin = []
        },
        clearState() {
            this.userArr = [];
            this.user = undefined;
        }
    }

})