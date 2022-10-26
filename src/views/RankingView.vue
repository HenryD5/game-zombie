<template>
  <AppLayout>
    <div>
      <div class="container mx-auto section-game">
        <div class="flex flex-col md:flex-row md:justify-between">
          <div class="w-full md:w-6/12">
            <div class="title-2 py-4">¡Suficiente!</div>
            <div class="display-2 mt-8">
              Te ves agotado.
              <br />
              <br />
              Dejemos que alguien más se encargue.
              <br />
              <br />
              <span class="display-3">
                Aquí te dejo una lista de las personas rescatadas hasta el
                momento:
              </span>
            </div>
          </div>
          <div class="w-full md:w-5/12">
            <div class="ranking">
              <div
                class="ranking__item"
                v-for="userItem in listUsersWins"
                :key="userItem.id"
              >
                <div class="flex flex-row justify-between items-center">
                  <div class="w-2/12 text-center">
                    <div class="ranking__item-img">
                      <img :src="userItem.url_photo" alt="" />
                    </div>
                  </div>
                  <div class="w-8/12 text-center text-ranking">
                    {{ userItem.name }}
                  </div>
                  <div class="w-2/12 text-center text-ranking">
                    +{{ userItem.points }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
<script lang="ts" setup>

import AppLayout from "../layouts/AppLayout.vue";
import { useUsers } from "../composables/useUsers";
import { useUserStore } from "../store/user";

const {  mixUsersWinsArray, listUsersWins } = useUsers();

const userStore = useUserStore();


userStore.setLoading(true);

mixUsersWinsArray();

setTimeout(() => {
  userStore.setLoading(false);
}, 1000);

</script>
