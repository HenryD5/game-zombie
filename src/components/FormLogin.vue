<template>
  <form id="taskForm" class="w-full" @submit.prevent="validEmail()">
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:w-9/12 md:pr-12 py-5">
        <input
          type="email"
          name="email"
          v-model="state.email"
          required
          class="bg-input px-2 py-3 rounded-md block mb-2 placeholder:px-2 placeholder:cl-place w-full"
          autofocus
          placeholder="Usa tu correo de manzana"
          @focus="state.active = true"
          @blur="state.active = false"
        />
        <div class="my-4 text-error" v-if="state.msgError">
          {{ state.msgError }}
        </div>
      </div>
      <div class="w-full md:w-3/12 md:pl-5 py-5">
        <button
          type="submit"
          class="block px-2 py-0 rounded-md w-full btn-form text-btn"
          :class="{active : state.active}"
        >
          ¡AYUDANOS!
        </button>
      </div>
    </div>
  </form>
</template>
<script lang="ts" setup>
import { useToken } from '../composables/useToken';
import { reactive } from "vue";
import { useUserStore } from "../store/user";
import { useRouter } from "vue-router";
import { useUsers } from "../composables/useUsers";

const { setToken, setAuthData } = useToken();
const users = useUserStore();
const router = useRouter();

const { authUser } = useUsers();

const state = reactive({
  email: "",
  msgError: "",
  active: false
});

function setMsgError() {
  state.msgError =
    "¿Seguro que formas parte del equipo?. Introduce un correo valido.";
}

function validEmail() {
  users.setLoading(true);
  state.msgError = "";
  if (!isEmailValid()) {
    setMsgError();
    users.setLoading(false);
    return null;
  }
  login()
}
function regexValidate(prop: any, regex: any) {
  return prop === "" ? false : !!regex.test(prop);
}

function isEmailValid() {
  const regex = /^\w+([\.-]?\w+)*@(?:|manzanaverde)\.(?:|la)+$/;
  return regexValidate(state.email, regex);
}

async function login() {
  const data = await authUser(state.email) 
  if (data !== undefined) {
    setToken(data?.id)
    setAuthData(JSON.stringify(data))
    users.setLoading(false);
    router.push({ name: "Welcome" });
  } else {
    users.setLoading(false);
    setMsgError();
  }
}
</script>
