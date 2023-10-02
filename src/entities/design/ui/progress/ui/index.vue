<template>
    <div>
        <div class="flex items-center gap-1">
            <p class="uppercase text-gray-2">прогресс-бар</p>
            <Switcher v-model="model.showProgress" />
        </div>
        <div
            class="grid overflow-hidden transition-all duration-300"
            :class="model.showProgress ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
        >
            <div class="min-h-0">
                <div class="mt-[18px] flex flex-wrap items-center gap-6 uppercase">
                    <div
                        @click="model.progressVariant = 'answers'"
                        :class="
                            model.progressVariant === 'answers'
                                ? 'border-green'
                                : 'border-transparent'
                        "
                        class="w-max cursor-pointer rounded border bg-white px-3 py-4 transition-all duration-300"
                    >
                        <p class="text-gray-2">Отвечено 2 из 10 вопросов</p>
                    </div>
                    <div
                        @click="model.progressVariant = 'progress'"
                        :class="
                            model.progressVariant === 'progress'
                                ? 'border-green'
                                : 'border-transparent'
                        "
                        class="grid w-[250px] cursor-pointer grid-cols-1a items-center gap-2.5 rounded border bg-white px-3 py-4 transition-all duration-300"
                    >
                        <div
                            class="relative h-1 w-full rounded-full bg-gray-light before:block before:h-1 before:w-1/2 before:rounded-full before:bg-green"
                        ></div>
                        <span class="text-dark">50%</span>
                    </div>
                    <div
                        @click="model.progressVariant = 'step'"
                        :class="
                            model.progressVariant === 'step'
                                ? 'border-green'
                                : 'border-transparent'
                        "
                        class="flex cursor-pointer items-center gap-2.5 rounded border bg-white px-3 py-4 transition-all duration-300"
                    >
                        <p>Шаг</p>
                        <div
                            class="flex h-8 w-8 items-center justify-center rounded bg-green text-white"
                        >
                            1
                        </div>
                        <p>из 10</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { Switcher, useModelProxy } from '@/shared';
// import { model } from '@/entities';
import { onMounted } from 'vue';

const props = defineProps({
    modelValue: { type: Object, default: () => null },
});

const emit = defineEmits(['update:modelValue']);
const model = useModelProxy();

// onMounted(() => {
//     model.value = model;
// });
</script>
