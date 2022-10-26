import { defineStore } from "pinia";
import { User } from '../interfaces/user';

interface UserState {
    userArr:  User[];
    user:     User | undefined;
    page: number;
    perPage: number;
    usersWin: number[],
    listUsersWins: User[],
    loading: boolean
}

export const useUserStore =  defineStore('user', {

    state: (): UserState => ({
        userArr: [],
        user: undefined,
        page: 1,
        perPage: 10,
        usersWin: [],
        listUsersWins: [],
        loading: false
    }),

    actions: {
        loadUsers( users: User[] | undefined) {
            if(users !== undefined) {
                this.userArr = users;
            }
        },
        loadUsersWins( users: User[] | undefined ) {
            if(users !== undefined) {
                this.listUsersWins = users;
            }
        },
        setUser( user: User ) {
            this.user = user;
        },
        setLoading( val: boolean ) {
            this.loading = val;
        },
        setUserWin(userId: number) {
           this.usersWin.push(userId)
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