<template>
    <div class="grid gap-6">
        <Input
            class="max-w-[430px]"
            label="показывать через сек"
            v-model="dataVariantOpen.openTime"
        />
        <div class="flex gap-3 items-center">
            <Checkbox label="Открывать каждый раз" v-model="dataVariantOpen.initialOpen" />
            <span class="font-light text-gray-light-3">(Либо будет блокировка показа одним и тем же пользователям)</span>
        </div>
        <Checkbox
            label="Включается при попытке пользователя уйти с сайта"
            v-model="dataVariantOpen.logOff"
        />
        <Checkbox
            label="Отключать на мобильных устройствах"
            v-model="dataVariantOpen.mobilesDisabled"
        />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Checkbox, Input, useModelProxy } from '@/shared';
import { dataVariantOpen } from '@/entities';

const openPaint = ref(null);

const emit = defineEmits(['update:modelValue']);
const model = useModelProxy();

onMounted(() => {
    model.value = dataVariantOpen;
});
</script>
