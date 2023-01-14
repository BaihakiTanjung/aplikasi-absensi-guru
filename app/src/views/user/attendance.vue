<template>
    <ion-page>
        <the-header title="attendance"></the-header>
        <ion-content class="h-screen">
            <div class="grid h-screen place-items-center w-100">
                <ion-grid>
                    <ion-row class="h-100">
                        <ion-col>
                            <ion-card class="bg-transparent shadow-none">
                                <ion-card-header>
                                    <ion-card-title class="text-center">Attendance</ion-card-title>
                                </ion-card-header>
                                <ion-card-content class="flex flex-col justify-center">
                                    <div class="text-4xl font-bold text-center">{{ time }}</div>
                                    <ion-label class="mt-3 mb-1 text-center">Pilih Type Attendance</ion-label>
                                    <ion-select v-model="type" placeholder="Select Type">
                                        <ion-select-option value="1">Mengajar</ion-select-option>
                                        <ion-select-option value="2">Halaqoh</ion-select-option>
                                    </ion-select>
                                    <ion-button @click="handleAttend" :disabled="type === ''" class="mx-auto mt-5">Attend</ion-button>
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
import { IonPage, IonContent, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonSelect, IonSelectOption } from '@ionic/vue';
import TheHeader from '@/components/TheHeader.vue';
import { ref } from 'vue';
import { useAttendanceStore } from '@/stores/attendance';

const attendanceStore = useAttendanceStore();

const time = ref("");

const timeNow = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${hours}:${minutes}:${seconds}`;
};

setInterval(() => {
    time.value = timeNow()
}, 1000);

const type = ref('');

// Handle Attend
const handleAttend = () => {

    const params = {
        type_attendance_id: type.value,
    };

    attendanceStore.create(params);
};
</script>
  