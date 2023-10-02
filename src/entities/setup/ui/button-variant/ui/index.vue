<template>
    <div class="grid gap-8">
        <Toggle
            :list="buttonType"
            v-model="dataVariantButton.buttonType"
        />
        <div v-if="dataVariantButton.buttonType === 'default'" class="grid gap-8">
            <div class="flex gap-3">
                <Switcher v-model="dataVariantButton.enable"/>
                <p class="text-gray-5">Включить на сайте</p>
            </div>
            <div>
                <p class="uppercase text-gray-light-3 text-xs">устройство</p>
                <div class="mt-1 flex gap-3 items-center">
                    <Toggle
                        size="small"
                        variant="yellow"
                        :list="deviceList"
                        v-model="dataVariantButton.display"
                        class="max-w-max"
                    />
                    <p class="text-gray-5">На выбранных устройствах кнопка будет активна</p>
                </div>
            </div>
            <i class="w-full h-[1px] bg-gray-3"></i>
            <div class="grid items-end gap-6">
                <Input
                    label="Текст на кнопке"
                    placeholder="Введите текст"
                    v-model="dataVariantButton.buttonText"
                />
                <div class="relative flex flex-wrap gap-[15px] xl:mt-5">
                    <div class="flex items-center gap-3">
                        <Button
                            @click="openPaint = 0"
                            size="small"
                            type="stroke"
                            :customClass="[
                                dataVariantButton.backgroundColor ? 'text-green' : 'text-white',
                                '!p-4 !rounded hover:text-green bg-gray-light',
                            ]"
                        >
                            <Icon name="paint" />
                        </Button>
                        <p class="font-light text-gray-2">Кнопка</p>
                        <Dropdown
                            :open="openPaint === 1"
                            customClass="top-0 -translate-y-[calc(100%+24px)]"
                        >
                            <BaseColorPicker v-model="dataVariantButton.backgroundColor" />
                        </Dropdown>
                    </div>
                    <div class="flex items-center gap-3">
                        <Button
                            @click="openPaint = 2"
                            size="small"
                            type="stroke"
                            :customClass="[
                                dataVariantButton.textColor ? 'text-green' : 'text-white',
                                '!p-4 !rounded hover:text-green bg-gray-light',
                            ]"
                        >
                            <Icon name="paint" />
                        </Button>
                        <p class="font-light text-gray-2">Текст</p>
                        <Dropdown
                            :open="openPaint === 2"
                            v-on-click-outside="() => (openPaint = null)"
                            customClass="top-0 -translate-y-[calc(100%+24px)]"
                        >
                            <BaseColorPicker v-model="dataVariantButton.textColor" />
                        </Dropdown>
                    </div>
                    <div class="flex items-center gap-3">
                        <Button
                            @click="openPaint = 3"
                            size="small"
                            type="stroke"
                            :customClass="[
                                dataVariantButton.borderColor ? 'text-green' : 'text-white',
                                '!p-4 !rounded hover:text-green bg-gray-light',
                            ]"
                        >
                            <Icon name="paint" />
                        </Button>
                        <p class="font-light text-gray-2">Обводка</p>
                        <Dropdown
                            :open="openPaint === 3"
                            v-on-click-outside="() => (openPaint = null)"
                            customClass="top-0 -translate-y-[calc(100%+24px)]"
                        >
                            <BaseColorPicker v-model="dataVariantButton.borderColor" />
                        </Dropdown>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4 w-max">
                <Checkbox v-model="dataVariantButton.rounded" label="Закругленная" />
                <Checkbox v-model="dataVariantButton.shadow" label="С тенью" />
                <Checkbox v-model="dataVariantButton.border" label="С обводкой" />
                <Toggle
                    size="small"
                    class="w-max"
                    variant="yellow"
                    :list="buttonPosition"
                    v-model="dataVariantButton.fixedSide"
                />
            </div>
        </div>
        <div v-else class="grid gap-6">
            <p class="text-gray-5">Если вы хотите открывать квиз по собственной кнопке, добавьте в ее html код следующий класс</p>
            <div 
                v-for="(mount, i) in mountingList" 
                :key="i" 
                class="grid gap-6"
            >
                <div>
                    <p class="uppercase text-xs text-gray-light-3">{{ mount.title }}</p>
                    <div class="px-3 py-2 bg-white rounded shadow-common flex items-center justify-between text-gray-5">
                        <span>{{ mount.value }}</span>
                        <div class="relative">
                            <Button
                                @click="copyText(mount.value), copied = i + 1"
                                type="stroke"
                                customClass="bg-gray-light rounded !p-[3px] lg:hover:text-orange"
                            >
                                <Icon class="transition-none" name="copy"/>
                            </Button>
                            <Tooltip 
                                :class="copied === i + 1 ? '' : 'opacity-0 invisible'"
                                class="-bottom-[calc(100%+12px)] right-1/2 translate-x-1/2"
                                message="Скопировано!"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue';
import { Button, Icon, Checkbox, Input, Dropdown, BaseColorPicker, useModelProxy, Toggle, Switcher, Tooltip, copyText, deviceList } from '@/shared';
import { vOnClickOutside } from '@vueuse/components';
import { dataVariantButton } from '@/entities';

const openPaint = ref(null);
const copied = ref(null)

const emit = defineEmits(['update:modelValue']);
const model = useModelProxy();

const buttonPosition = [
    {
        value: 'left',
        icon: 'fixed-left',
    },
    {
        value: 'right',
        icon: 'fixed-right',
    },
];

const buttonType = [
    {
        value: 'default',
        title: 'стандартная кнопка'
    },
    {
        value: 'custom',
        title: 'своя кнопка'
    },
]

const mountingList = [
    {
        title: 'Класс',
        value: 'quizmarket_button quizmarket_bef86f'
    },
    {
        title: 'Cсылка',
        value: '#quizmarket_button quizmarket_bef86f'
    },
    {
        title: 'или  событие',
        value: "onClick=\'Marquiz.showModal(\'6467676767\')\'"
    }
]

watch(copied, () => {
    if (copied.value) {
        setTimeout(() => {
            copied.value = null
        }, 600);
    }
})

onMounted(() => {
    model.value = dataVariantButton;
});
</script>
