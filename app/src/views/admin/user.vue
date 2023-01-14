<template>

    <!-- Modal -->
    <UserModal ref="userModal"></UserModal>
    <!-- End Modal -->

    <ion-page>
        <the-header title="user"></the-header>
        <ion-content class="h-screen">
            <div class="grid h-screen w-100">
                <ion-grid class="w-full">

                    <ion-row>
                        <ion-col>
                            <ion-card class="bg-transparent shadow-none">
                                <ion-card-header>
                                    <ion-card-title class="text-center">User</ion-card-title>

                                </ion-card-header>

                                <ion-card-content>
                                    <ion-row class="mb-2">
                                        <ion-col>
                                            <ion-button @click="showModal" class="w-full">Add User</ion-button>
                                        </ion-col>
                                    </ion-row>
                                    <ion-list>
                                        <ion-item-sliding v-for="user in users" :key="user.id">
                                            <ion-item class="w-100">
                                                <ion-label class="w-100">{{ user.name }}</ion-label>
                                            </ion-item>

                                            <ion-item-options side="end">
                                                <!-- <ion-item-option>
                                                    <ion-icon slot="icon-only" :icon="pencil"></ion-icon>
                                                </ion-item-option> -->
                                                <ion-item-option color="danger">
                                                    <ion-icon @click="handleTrash(user.id)" slot="icon-only" :icon="trash"></ion-icon>
                                                </ion-item-option>
                                            </ion-item-options>
                                        </ion-item-sliding>
                                    </ion-list>
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
import { IonPage, IonContent, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
import { pencil, trash } from 'ionicons/icons';
import TheHeader from '@/components/TheHeader.vue';
import { useUserStore } from '@/stores/user';
import { onMounted, computed, ref } from 'vue';
import UserModal from '@/components/UserModal.vue';

const userStore = useUserStore();

type User = {
    id: number;
    name: string;
    email: string;
    phone: number;
    address: string;
};

type UserModalType = {
    showModal: () => void;
};

onMounted(() => {
    userStore.get();
});

const users = computed(() => {
    return userStore.users as User[];
});

const userModal = ref(null);

const showModal = () => {
    userModal?.value?.showModal() as UserModalType;
};

const handleTrash = async (id: any) => {
    await userStore.delete(id).then(() => {
        userStore.get();
    });
};
</script>
  