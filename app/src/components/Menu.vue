<template>
    <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar v-if="isAdmin" slot="bottom">
            <ion-tab-button tab="tab1" href="/report">
                <ion-icon :icon="downloadOutline" />
                <ion-label>Report</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="tab2" href="/user">
                <ion-icon :icon="peopleOutline" />
                <ion-label>User</ion-label>
            </ion-tab-button>
        </ion-tab-bar>
        <ion-tab-bar v-else slot="bottom">
            <ion-tab-button tab="tab1" href="/attendance">
                <ion-icon :icon="timeOutline" />
                <ion-label>Attendance</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="tab2" href="/profile">
                <ion-icon :icon="peopleCircleOutline" />
                <ion-label>Profile</ion-label>
            </ion-tab-button>
        </ion-tab-bar>
    </ion-tabs>
</template>
  
<script setup lang="ts" name="MenuComponent">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonRouterOutlet } from '@ionic/vue';
import { downloadOutline, peopleOutline, timeOutline, peopleCircleOutline } from 'ionicons/icons';
import { useAuthStore } from "../stores/auth";
import { computed } from 'vue';

const authStore = useAuthStore();

const isAdmin = computed(() => authStore.isAdmin);
</script>
  