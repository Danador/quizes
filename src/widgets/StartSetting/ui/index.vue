<template>
    <fieldset
        class="row-start-2 grid gap-6 lg:col-start-2 lg:row-start-1 max-w-[450px] lg:grid-rows-aa1"
    >
        <div class="flex flex-col gap-6">
            <div class="grid grid-cols-a1 gap-6">
                <div class="relative">
                    <div>
                        <p class="text-xs max-w-[56px] uppercase mb-1 text-gray-6">цвет</p>
                        <div class="p-2.5 bg-white shadow-common rounded">
                            <button 
                                @click="showPicker = 1"
                                :style="`
                                    background-color: ${model.titleColor}
                                `"
                                class="w-9 h-9 rounded border-2 border-gray-light"
                            ></button>
                        </div>
                    </div>
                    <Dropdown
                        :open="showPicker === 1"
                        customClass="top-10 left-0 z-20 w-[240px]"
                    >
                        <BaseColorPicker 
                            v-on-click-outside="() => showPicker = null"
                            v-model="model.titleColor"
                        />
                    </Dropdown>
                </div>
                <div>
                    <p class="text-xs uppercase mb-1 text-gray-6">Шрифт заголовка</p>
                    <Select 
                        :list="fonts" 
                        v-model="model.titleFont" 
                        class="!h-auto"
                    >
                        <template #content>
                            <li v-for="(font, i) in fonts" :key="i">
                                <button @click="model.titleFont = font" class="option">
                                    <span>{{ font }}</span>
                                </button>
                            </li>
                        </template>
                    </Select>
                </div>
            </div>
            <div class="grid grid-cols-a1 gap-6">
                <div class="relative">
                    <p class="text-xs uppercase mb-1 max-w-[56px] text-gray-6">цвет</p>
                    <div class="p-2.5 bg-white shadow-common rounded">
                        <button 
                            @click="showPicker = 2"
                            :style="`
                                background-color: ${model.subtitleColor}
                            `"
                            class="w-9 h-9 rounded border-2 border-gray-light"
                        ></button>
                    </div>
                    <Dropdown
                        :open="showPicker === 2"
                        customClass="top-10 left-0 z-20 w-[240px]"
                    >
                        <BaseColorPicker 
                            v-on-click-outside="() => showPicker = null"
                            v-model="model.subtitleColor"
                        />
                    </Dropdown>
                </div>
                <div>
                    <p class="text-xs uppercase mb-1 text-gray-6">Шрифт заголовка</p>
                    <Select 
                        :list="fonts" 
                        v-model="model.subtitleFont" 
                        class="!h-auto"
                    >
                        <template #content>
                            <li v-for="(font, i) in fonts" :key="i">
                                <button @click="model.subtitleFont = font" class="option">
                                    <span>{{ font }}</span>
                                </button>
                            </li>
                        </template>
                    </Select>
                </div>
            </div>
            <div class="flex gap-6 flex-wrap items-end">
                <div class="relative">
                    <p class="text-xs uppercase max-w-[56px] mb-1 text-gray-6">фон кнопки </p>
                    <div class="p-2.5 bg-white shadow-common rounded">
                        <button 
                            @click="showPicker = 3"
                            :style="`
                                background-color: ${model.buttonBackground}
                            `"
                            class="w-9 h-9 rounded border-2 border-gray-light"
                        ></button>
                    </div>
                    <Dropdown
                        :open="showPicker === 3"
                        customClass="top-10 left-0 z-20 w-[240px]"
                    >
                        <BaseColorPicker 
                            v-on-click-outside="() => showPicker = null"
                            v-model="model.buttonBackground"
                        />
                    </Dropdown>
                </div>
                <div class="relative">
                    <p class="text-xs uppercase max-w-[56px] mb-1 text-gray-6">текст кнопки</p>
                    <div class="p-2.5 bg-white shadow-common rounded">
                        <button 
                            @click="showPicker = 4"
                            :style="`
                                background-color: ${model.buttonColor}
                            `"
                            class="w-9 h-9 rounded border-2 border-gray-light"
                        ></button>
                    </div>
                    <Dropdown
                        :open="showPicker === 4"
                        customClass="top-10 left-0 z-20 w-[240px]"
                    >
                        <BaseColorPicker 
                            v-on-click-outside="() => showPicker = null"
                            v-model="model.buttonColor"
                        />
                    </Dropdown>
                </div>
                <div class="flex flex-col gap-4">
                    <div class="flex gap-2.5 items-center">
                        <p class="text-xs uppercase text-gray-6">Заполнение цветом</p>
                        <Switcher v-model="model.buttonFill"/>
                    </div>
                    <div class="flex gap-6 items-center">
                        <p class="text-xs uppercase text-gray-6">скругление углов</p>
                        <Switcher v-model="model.buttonRounded"/>
                    </div>
                </div>
                <div class="relative">
                    <p class="text-xs max-w-[56px] uppercase mb-1 text-gray-6">фильтр фона</p>
                    <div class="p-2.5 bg-white shadow-common rounded">
                        <button 
                            @click="showPicker = 5"
                            :style="`
                                background-color: ${model.backgroundFilter}
                            `"
                            class="w-9 h-9 rounded border-2 border-gray-light"
                        ></button>
                    </div>
                    <Dropdown
                        :open="showPicker === 5"
                        customClass="top-10 -left-[100%] -translate-x-1/2 z-20 w-[240px]"
                    >
                        <BaseColorPicker
                            v-on-click-outside="() => showPicker = null"
                            v-model="model.backgroundFilter"
                        />
                    </Dropdown>
                </div>
            </div>
        </div>
        <div class="hidden flex-col items-end gap-2 lg:flex xl:hidden">
            <div class="flex flex-col gap-2">
                <Button customClass="!p-2.5 !rounded" type="secondary">
                    <Icon class="!h-4 !w-4" name="laptop" />
                </Button>
                <Button customClass="!p-2.5 !rounded" type="secondary">
                    <Icon class="!h-4 !w-4" name="phone" />
                </Button>
                <Button customClass="!p-2.5 !rounded" type="secondary">
                    <Icon class="!h-4 !w-4" name="wide" />
                </Button>
            </div>
            <Button
                type="stroke"
                customClass="rounded-full !p-2.5 text-light-orange border border-light-orange"
            >
                <Icon class="!h-4 !w-4" name="eye" />
            </Button>
        </div>
    </fieldset>
</template>

<script setup>
import { ref, watch } from 'vue';
import { Button, Icon, useModelProxy, Select, BaseColorPicker, Dropdown, Switcher, Input } from '@/shared';
import { vOnClickOutside } from '@vueuse/components';

const props = defineProps({
    modelValue: { type: Object, default: () => null },
});
const showPicker = ref(null)

const emit = defineEmits(['update:modelValue']);
const model = useModelProxy();

const fonts = ['Montserrat', 'Poppins', 'TimesNewRoman', 'Arial'];
</script>
