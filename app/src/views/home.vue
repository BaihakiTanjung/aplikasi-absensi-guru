<template>
    <ion-page>
        <the-header title="home"></the-header>
        <ion-content :fullscreen="true">
            <ion-row>
                <ion-col>
                    <ion-card>
                        <ion-card-header>
                            <ion-card-title class="text-center">Selamat Datang di TimeZy</ion-card-title>
                        </ion-card-header>
                        <ion-card-content>
                            <p class="text-center">TimeZy adalah aplikasi yang dapat membantu anda dalam melakukan absensi</p>
                        </ion-card-content>
                    </ion-card>
                </ion-col>
            </ion-row>
        </ion-content>
    </ion-page>
</template>
  
<script lang="ts" setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
import TheHeader from '@/components/TheHeader.vue';
</script>
  