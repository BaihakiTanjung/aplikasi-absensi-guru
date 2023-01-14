<template>
    <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-button>
                        {{capitalize(props.title)}}
                    </ion-button>
                </ion-buttons>
                <ion-buttons slot="end">
                    <ion-button @click="handleLogout">
                        <ion-icon :icon="exitOutline" size="large" />
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
</template>
<script lang="ts" setup name="TheHeader">
import { IonHeader, IonToolbar } from '@ionic/vue';
import { exitOutline } from 'ionicons/icons';
import { useAuthStore } from "../stores/auth";
import { defineProps } from 'vue';

const props = defineProps<{
    title: string;
}>();

const authStore = useAuthStore();

const handleLogout = async () => {
    await authStore.logout();
    window.location.href = '/home'; 
}

const capitalize = (s: string) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}
</script>