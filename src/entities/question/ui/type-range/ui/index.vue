<template>
    <div class="grid gap-8">
        <div class="flex space-x-3">
            <Switcher v-model="dataTypeRange.twoRange" />
            <span>Выбор из диапазона (два ползунка)</span>
        </div>
        <transition
            enter-active-class="animate-opacity-enter-active"
            leave-active-class="aimate-opacity-leave-active"
        >
            <div v-if="dataTypeRange.twoRange" class="grid gap-4 lg:grid-cols-2 lg:gap-y-8">
                <Input id="min" name="min" label="от" v-model="dataTypeRange.min" />
                <Input label="до" v-model="dataTypeRange.max" name="max" id="max" />
                <Input
                    id="minDefault"
                    name="minDefault"
                    label="по умолчанию от"
                    v-model="dataTypeRange.minDefault"
                />
                <Input
                    id="maxDefault"
                    name="maxDefault"
                    label="по умолчанию до"
                    v-model="dataTypeRange.maxDefault"
                />
                <Input label="шаг" v-model="dataTypeRange.step" name="step" id="step" />
                <Checkbox label="Необязательный вопрос" value="test" class="mt-5" color="yellow" />
            </div>
        </transition>
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
import { ref, onMounted, watch } from 'vue';
import { Uploader, Input, Switcher, Checkbox, useModelProxy } from '@/shared';
import { dataTypeRange } from '@/entities';

const props = defineProps({
    modelValue: { type: Object, default: null },
});

const emit = defineEmits(['update:modelValue']);

const model = useModelProxy();

onMounted(() => {
    model.value = dataTypeRange;
});
</script>
