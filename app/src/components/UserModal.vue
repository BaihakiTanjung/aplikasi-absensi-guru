<template>
    <ion-modal :is-open="isOpen">
        <ion-header>
            <ion-toolbar>
                <ion-title>User</ion-title>
                <ion-buttons slot="end">
                    <ion-button @click="hideModal()">Close</ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <form @submit="onSubmit">
                <ion-item>
                    <ion-label position="stacked">Enter your name</ion-label>
                    <ion-input v-model="name" ref="input" type="text" placeholder="Your name"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">Enter your email</ion-label>
                    <ion-input v-model="email" ref="input" type="text" placeholder="Your Email"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">Enter your password</ion-label>
                    <ion-input v-model="password" ref="input" type="password" placeholder="Your Email"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">Enter your Phone</ion-label>
                    <ion-input v-model="phone" ref="input" type="text" placeholder="Your Phone"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">Enter your Sex</ion-label>
                    <ion-input v-model="sex" ref="input" type="text" placeholder="Your Sex"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">Enter your Address</ion-label>
                    <ion-input v-model="address" ref="input" type="text" placeholder="Your Sex"></ion-input>
                </ion-item>
                <ion-button class="mt-3" type="submit" expand="block">Submit</ion-button>
            </form>
        </ion-content>
    </ion-modal>
</template>
  
<script lang="ts">
import { IonButtons, IonButton, IonModal, IonHeader, IonToolbar, IonContent, IonTitle, IonInput } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();

export default defineComponent({
    components: { IonButtons, IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonInput },
    data() {
        return {
            isOpen: false,
            name: '',
            email: '',
            password : '',
            phone : '',
            sex : '',
            address : '',

        };
    },
    methods: {
        showModal() {
            this.isOpen = true;
        },
        hideModal() {
            this.isOpen = false;
        },
        async onSubmit(event: { preventDefault: () => void; }) {
            event.preventDefault();
            

            const payload = {
                name : this.name,
                email : this.email,
                password : this.password,
                phone : this.phone,
                sex : this.sex,
                address : this.address
            }

            await userStore.create(payload).then(() => {
                this.hideModal();
                userStore.get()
            })
        },
    },
});
</script>