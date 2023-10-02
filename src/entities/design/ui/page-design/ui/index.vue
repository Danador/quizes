<template>
    <div>
        <p class="uppercase text-gray-2">дизайн страницы</p>
        <div class="relative mt-[18px] flex flex-wrap gap-6 uppercase">
            <div>
                <p class="mb-1 text-gray-light-5">фон</p>
                <div class="relative rounded bg-white p-2 shadow-common">
                    <button
                        @click="openPaint = 1"
                        :style="`background-color: ${pageDesignData.backgroundColor}`"
                        class="h-9 w-9 rounded border-2 border-gray-light-3"
                    ></button>
                </div>
                <Dropdown
                    :open="openPaint === 1"
                    v-on-click-outside="() => (openPaint = null)"
                    customClass="top-0 !z-[51] -translate-y-[calc(100%+24px)]"
                >
                    <BaseColorPicker v-model="pageDesignData.backgroundColor" />
                </Dropdown>
            </div>
            <div>
                <p class="mb-1 text-gray-light-5">текст</p>
                <div class="relative rounded bg-white p-2 shadow-common">
                    <button
                        @click="openPaint = 2"
                        :style="`background-color: ${pageDesignData.textColor}`"
                        class="h-9 w-9 rounded border-2 border-gray-light-3"
                    ></button>
                </div>
                <Dropdown
                    :open="openPaint === 2"
                    v-on-click-outside="() => (openPaint = null)"
                    customClass="top-0 !z-[51] -translate-y-[calc(100%+24px)]"
                >
                    <BaseColorPicker v-model="pageDesignData.textColor" />
                </Dropdown>
            </div>
            <div class="w-full max-w-[280px]">
                <p class="mb-1 text-gray-light-5">Шрифт</p>
                <Select :list="fonts" v-model="selectFont" class="!h-auto">
                    <template #content>
                        <li v-for="(font, i) in fonts" :key="i">
                            <button @click="selectFont = font" class="option">
                                <span>{{ font }}</span>
                            </button>
                        </li>
                    </template>
                </Select>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { Button, Select, BaseColorPicker, Dropdown, useModelProxy } from '@/shared';
import { vOnClickOutside } from '@vueuse/components';
import { pageDesignData } from '@/entities';
const props = defineProps({
    modelValue: { type: Object, default: () => null },
});

const openPaint = ref(null);
const selectFont = ref('Poppins');

const fonts = ['Montserrat', 'Poppins', 'TimesNewRoman', 'Arial'];

const emit = defineEmits(['update:modelValue']);
const model = useModelProxy();

watch(selectFont, () => {
    pageDesignData.font = selectFont.value;
});

onMounted(() => {
    model.value = pageDesignData;
});
</script>

<style>
.option-active {
    padding: 13px;
}
</style>
