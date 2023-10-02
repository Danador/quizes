<template>
    <Card 
        title="Настройки квиза"
        class="p-0"
    >
        <div
            class="grid 2xl:grid-cols-1a items-start gap-6"
        >   
            <CompanyInfo v-model="quizSettings"/>
            <DisableNReset class="row-start-3 2xl:row-start-auto 2xl:max-w-[645px]" v-model="quizSettings" />
            <PrivacyPolicy v-model="quizSettings" />
        </div>
    </Card>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { Card } from '@/shared';
import { PrivacyPolicy, DisableNReset, CompanyInfo } from '@/entities';

const quizSettings = reactive({
    policyInQuiz: false,
    autoTransition: false,
    stepRemember: false,
    sharesAnalysis: false,
    disableQuiz: false,
    company: {
        phone: '',
        phoneClickable: false,
        name: '',
        site: '',
        requisites: ''
    }
});
</script>
