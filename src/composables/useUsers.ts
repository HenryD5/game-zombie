import { computed } from "vue";
import { storeToRefs } from "pinia";
import getUserOptions from "../helpers/getUserOptions";
import getUsersWins from "../helpers/getUsersWins";
import getUser from "../helpers/getUser";
import setUsersWins from "../helpers/setUsersWins";
import { useUserStore } from "../store/user";
import { User } from "../interfaces/user";
import { useRouter } from "vue-router";
import { useToken } from '../composables/useToken';


export const useUsers = () => {

    const { updateAuthData } = useToken();
    const userStore = useUserStore();
    const router = useRouter();

    const { userArr, user, page, perPage, usersWin, listUsersWins } = storeToRefs(userStore);

    const paginatedDataUsers = computed(() =>
        userArr.value.slice(
            (page.value - 1) * perPage.value,
            page.value * perPage.value
        )
    );

    const totalPage = computed(() =>
        Math.ceil(userArr.value.length / perPage.value)
    );

    const setSaveUser = async (user: User) => {
        const total = Math.ceil(userArr.value.length / perPage.value)
        if (page.value !== total) {
            userStore.setLoading(true);
            page.value += 1;
            userStore.setUserWin(user.id)
            setTimeout(() => {
                userStore.setLoading(false);
            }, 1000);
        } else if (page.value === total) {

            userStore.setLoading(true);
            userStore.setUserWin(user.id)
            updateAuthData('has_vote', true)

            await setUsersWins(user.id, userStore.usersWin)
                .then((value) => {
                     // "Success!"
                    userStore.clearUserWins()
                    userStore.setLoading(false);
                    router.push({ name: "Ranking" });
                })
                .catch((e) => {
                    userStore.setLoading(false);
                    console.error(e.message); 
                    // "oh, no!"
                })
        }
    };

    const mixUserArray = async () => {
        if (user.value !== undefined) {
            userStore.loadUsers(await getUserOptions(user.value.id));
        }
    };

    const mixUsersWinsArray = async () => {
        userStore.loadUsersWins(await getUsersWins());
    };

    const authUser = async (email: string) => {
        const result = await getUser(email);
        return result
    };

    return {
        //! Properties
        user,
        userArr,
        perPage,
        page,
        totalPage,
        usersWin,
        listUsersWins,


        //! Metodos
        mixUserArray,
        mixUsersWinsArray,
        paginatedDataUsers,
        setSaveUser,
        authUser
    };
};
