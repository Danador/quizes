<template>
    <div class="grid gap-8">
        <div class="flex items-center space-x-3">
            <Checkbox color="yellow" value="optional" v-model="dataTypeDownload.optionalQuestion" />
            <p class="text-gray-2">Необязательный вопрос</p>
        </div>
        <div class="flex items-center space-x-3">
            <Checkbox color="yellow" value="optional" v-model="dataTypeDownload.multipleFiles" />
            <p class="text-gray-2">Несколько файлов</p>
        </div>
        <div class="grid items-center gap-4 3xl:grid-cols-[170px,1fr]">
            <Uploader class="max-w-[160px]" />
            <span class="text-gray-2"
                >Вы можете добавить задний фон вопроса PNG, JPEG, SVG, GIF. Размер файла не более
                2MB</span
            >
        </div>
        <div class="flex flex-col gap-6 3xl:flex-row">
            <div class="flex items-center gap-x-3">
                <Switcher />
                <span class="text-gray-2">Логика ветвления</span>
            </div>
            <span class="text-green underline">*Что такое логика ветвления?</span>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { Button, Checkbox, Input, Uploader, Switcher, useModelProxy } from '@/shared';
import { dataTypeDownload } from '@/entities';

const props = defineProps({
    modelValue: { type: Object, default: null },
});

const emit = defineEmits(['update:modelValue']);

const model = useModelProxy();

onMounted(() => {
    model.value = dataTypeDownload;
});
</script>
