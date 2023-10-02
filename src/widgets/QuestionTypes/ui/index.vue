<template>
    <transition
        enter-active-class="animate-opacity-enter-active"
        leave-active-class="animate-opacity-leave-active"
        mode="out-in"
    >
        <TypeText v-if="questionType === 'text-field'" v-model="model" />
        <TypeCards v-else-if="questionType === 'cards'" v-model="model" />
        <TypeRange v-else-if="questionType === 'range'" v-model="model" />
        <TypeVideo v-else-if="questionType === 'video'" v-model="model" />
        <TypeDropdown v-else-if="questionType === 'dropdown'" v-model="model" />
        <TypeDate v-else-if="questionType === 'date'" v-model="model" />
        <TypeDownload v-else-if="questionType === 'download'" v-model="model" />
        <TypeDownload v-else-if="questionType === 'download'" v-model="model" />
        <TypeFields v-else-if="questionType === 'input'" v-model="model" />
        <TypeImagesAndFields v-else-if="questionType === 'imageAndField'" v-model="model" />
    </transition>
</template>

<script setup>
import { useModelProxy } from '@/shared';
import {
    TypeCards,
    TypeDate,
    TypeDownload,
    TypeDropdown,
    TypeFields,
    TypeImagesAndFields,
    TypeRange,
    TypeText,
    TypeVideo,
} from '@/entities';

const props = defineProps({
    questionType: { type: String, default: () => 'text-field' },
    modelValue: { type: Object, default: () => null },
});

const emit = defineEmits(['update:modelValue']);
const model = useModelProxy();
</script>
