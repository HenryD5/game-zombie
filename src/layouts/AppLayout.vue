<template>
  <div>
    <Loading  v-if="users.loading"/>
    <slot />
  </div>
</template>
<script lang="ts" setup>
import Loading from "../components/Loading.vue"
import { useToken } from "../composables/useToken";
import { useUserStore } from "../store/user";

const { getAuthData } = useToken();
const users = useUserStore();

if (users.user === undefined) {
  const data = getAuthData();
  if (Object.keys(data).length > 0) {
    const dataUser = JSON.parse(data);
    users.setUser(dataUser);
  }
}
</script>
