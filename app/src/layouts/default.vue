<template>
    <ion-app>
        <ion-page>
            <Menu></Menu>
        </ion-page>
    </ion-app>
</template>
  
<script lang="ts" setup name="defaultLayout">
import { IonPage, IonApp } from '@ionic/vue';
import Menu from '@/components/Menu.vue';
import { useAuthStore } from "../stores/auth";
import { onMounted } from 'vue';

const authStore = useAuthStore();

onMounted(() => {
    getRoleFromUser();
    getUser();
})

const getRoleFromUser = async () => {
    const role = JSON.parse(localStorage.getItem('user') || "")?.[1] || [];
    await authStore.changeState('isRole',role);
}

const getUser = async () => {
    const user = JSON.parse(localStorage.getItem('profile') || "") || {};
    await authStore.changeState('user',user);
}

</script>
  