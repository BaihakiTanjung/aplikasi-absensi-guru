<template>
    <ion-page>
        <the-header title="profile
        "></the-header>
        <ion-content class="h-screen">
            <div class="grid h-screen place-items-center w-100">
                <ion-grid>
                    <ion-row class="h-100">
                        <ion-col>
                            <ion-card class="bg-transparent shadow-none">
                                <ion-img src="assets/img/logo.png" class="w-1/2 mx-auto rounded-full" />
                                <ion-card-header class="text-center">
                                    <ion-card-title>{{ user.name }}</ion-card-title>
                                </ion-card-header>
                                <ion-card-content class="flex flex-col justify-center">
                                   
                                    <table>
                                        <tr>
                                            <td class="p-1">Email</td>
                                            <td>{{ user.email }}</td>
                                        </tr>
                                        <tr>
                                            <td class="p-1">Phone</td>
                                            <td>{{ user.phone }}</td>
                                        </tr>
                                        <tr>
                                            <td class="p-1">Address</td>
                                            <td>{{ user.address }}</td>
                                        </tr>
                                        <tr>
                                            <td class="p-1">Sex</td>
                                            <td>{{ user?.sex?.toLowerCase() === 'l' ? 'Laki - Laki' :
                                                'Perempuan'
                                        }}</td>
                                        </tr>
                                    </table>
                                </ion-card-content>
                            </ion-card>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </div>
        </ion-content>
    </ion-page>
</template>
  
<script lang="ts" setup>
import { IonPage, IonContent, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/vue';
import TheHeader from '@/components/TheHeader.vue';
import { computed } from 'vue';
import { useAuthStore } from '@/stores/auth';

type User = {
    name: string;
    email: string;
    phone: number;
    address: string;
    sex: string;
};

const authStore = useAuthStore();

const user = computed(() => {
    return authStore.getState.user as User;
});

</script>
  