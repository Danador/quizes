<template>
    <div class="grid gap-8">
        <Toggle v-model="dataTypeVideo.videoType" :list="videosTypes" />
        <div class="grid grid-cols-2 gap-4">
            <Uploader label="загрузите видео" />
            <Uploader label="обложка видео" />
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
import { onMounted, ref } from 'vue';
import { Toggle, Uploader, Switcher, useModelProxy } from '@/shared';
import { dataTypeVideo } from '@/entities';

const props = defineProps({
    modelValue: { type: Object, default: null },
});

const emit = defineEmits(['update:modelValue']);

const model = useModelProxy();

const videosTypes = ref([
    {
        title: 'Ссылка на видео',
        value: 'link',
    },
    {
        title: 'Загрузить свое видео',
        value: 'file',
    },
]);

onMounted(() => {
    model.value = dataTypeVideo;
});
</script>
