<template>
  <AppLayout :view="'game'">
    <div>
      <div class="container mx-auto section-game mt-img-game">
        <div class="flex flex-col md:flex-row md:items-center">
          <div class="w-full md:w-2/12"></div>
          <div class="title w-full md:w-8/12 mt-10 mb-8 py-4 text-center">
            ¿A QUIÉN RESCATARÁS?
          </div>
          <div
            class="w-full md:w-2/12 text-right flex justify-end text-number items-center"
          >
            {{ page - 1 }} / {{ totalPage }}
            <span class="ml-5"> <img src="/save.svg" alt="icon zombie mv"> </span>
          </div>
        </div>
        <div class="mt-8 mb-10 py-4">
          <div class="flex flex-row flex-wrap">
            <div
              class="w-1/2 md:w-1/5"
              v-for="userItem in paginatedDataUsers"
              :key="userItem.id"
            >
              <div class="card" @click="setSaveUser(userItem)">
                <div class="card__image">
                  <img :src="userItem.url_photo" alt="" />
                </div>
                <div class="card__image-hover">
                  <img :src="userItem.url_photo_horror" alt="" />
                </div>
                <div class="text-center card__footer">
                  <div class="text-name pt-2 pb-1">{{ userItem.name }}</div>
                  <div class="text-position">{{ userItem.area }}</div>
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
import { onMounted } from "vue";

const userStore = useUserStore();

userStore.setLoading(true);

setTimeout(() => {
  userStore.setLoading(false);
}, 1000);

const {
  userArr: users,
  mixUserArray,
  paginatedDataUsers,
  page,
  setSaveUser,
  totalPage,
} = useUsers();

onMounted(() => {
  mixUserArray();
})

</script>
