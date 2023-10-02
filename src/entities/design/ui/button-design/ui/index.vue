<template>
    <div>
        <p class="uppercase text-gray-2">дизайн кнопки</p>
        <div class="relative mt-[18px] flex flex-wrap items-center gap-6 uppercase">
            <div>
                <p class="mb-1 text-gray-light-5">фон</p>
                <div class="relative rounded bg-white p-2 shadow-common">
                    <button
                        @click="openPaint = 3"
                        :style="`background-color: ${model.buttonColor}`"
                        class="h-9 w-9 rounded border-2 border-gray-light-3"
                    ></button>
                </div>
                <Dropdown
                    :open="openPaint === 3"
                    v-on-click-outside="() => (openPaint = null)"
                    customClass="top-0 z-[20] -translate-y-[calc(100%+24px)]"
                >
                    <BaseColorPicker v-model="model.buttonColor" />
                </Dropdown>
            </div>
            <div>
                <p class="mb-1 text-gray-light-5">текст</p>
                <div class="relative rounded bg-white p-2 shadow-common">
                    <button
                        @click="openPaint = 4"
                        :style="`background-color: ${model.buttonTextColor}`"
                        class="h-9 w-9 rounded border-2 border-gray-light-3"
                    ></button>
                </div>
                <Dropdown
                    :open="openPaint === 4"
                    v-on-click-outside="() => (openPaint = null)"
                    customClass="top-0 z-20 -translate-y-[calc(100%+24px)]"
                >
                    <BaseColorPicker v-model="model.buttonTextColor" />
                </Dropdown>
            </div>
            <div class="flex items-center gap-1">
                <p class="text-xs font-medium text-pink">скругление углов</p>
                <Switcher v-model="model.buttonRounded" />
            </div>
            <div class="flex items-center gap-1">
                <p class="text-xs font-medium text-pink">Заполнение цветом</p>
                <Switcher v-model="model.colorFill" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { Button, Switcher, BaseColorPicker, Dropdown, useModelProxy } from '@/shared';
import { vOnClickOutside } from '@vueuse/components';

const props = defineProps({
    modelValue: { type: Object, default: () => null },
});

const openPaint = ref(null);

const emit = defineEmits(['update:modelValue']);
const model = useModelProxy();
</script>
