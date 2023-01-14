<template>
    <ion-page>
        <the-header title="report"></the-header>
        <ion-content class="h-screen">
            <div class="grid h-screen place-items-center w-100">
            <ion-grid>
            <ion-row class="place-items-center">
                <ion-col>
                    <ion-card class="bg-transparent shadow-none">
                        <ion-card-header>
                            <ion-card-title class="text-center">Report</ion-card-title>
                        </ion-card-header>
                        <ion-card-content class="flex flex-col justify-center">
                            <ion-row>
                                <ion-col class="flex flex-col justify-center">
                                    <ion-label class="mb-1 text-center">Start Date</ion-label>
                                    <ion-datetime-button datetime="datetime_start_date"></ion-datetime-button>
                                    <ion-modal :keep-contents-mounted="true">
                                        <ion-datetime v-model="state.start_date"  presentation="date" id="datetime_start_date"></ion-datetime>
                                    </ion-modal>
                                </ion-col>
                                <ion-col class="flex flex-col justify-center">
                                    <ion-label class="mb-1 text-center">End Date</ion-label>
                                    <ion-datetime-button datetime="datetime_end_date"></ion-datetime-button>
                                    <ion-modal :keep-contents-mounted="true">
                                        <ion-datetime v-model="state.end_date" presentation="date" id="datetime_end_date"></ion-datetime>
                                    </ion-modal>
                                </ion-col>
                            </ion-row>

                            <ion-button @click="handleDownload" class="mx-auto mt-5">Download</ion-button>
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
import { IonPage, IonContent, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonDatetime, IonDatetimeButton, IonModal, IonButton, IonLabel } from '@ionic/vue';
import TheHeader from '@/components/TheHeader.vue';
import { reactive } from 'vue';
import { useAttendanceStore } from '@/stores/attendance';

const attendanceStore = useAttendanceStore();
const state = reactive({
    start_date: new Date().toISOString(),
    end_date: new Date().toISOString(),
});


const handleDownload = () => {
    attendanceStore.report(state);
};
</script>
  