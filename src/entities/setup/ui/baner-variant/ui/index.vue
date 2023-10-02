<template>
    <div class="grid gap-6">
        <div class="flex gap-3">
            <Switcher v-model="dataVariantBaner.enable"/>
            <p class="text-gray-5">Включить на сайте</p>
        </div>
        <div>
            <p class="uppercase text-gray-light-3 text-xs">устройство</p>
            <div class="mt-1 flex gap-3 items-center">
                <Toggle
                    size="small"
                    variant="yellow"
                    :list="deviceList"
                    v-model="dataVariantBaner.display"
                    class="max-w-max"
                />
                <p class="text-gray-5">На выбранных устройствах кнопка будет активна</p>
            </div>
        </div>
        <Toggle :list="banersPositionVariants" v-model="dataVariantBaner.type" />
        <div class="grid gap-6">
            <Input
                label="Заголовок баннера"
                placeholder="Введите залоговок"
                v-model="dataVariantBaner.title"
            />
            <Input
                label="Подзаголовок баннера"
                placeholder="Введите подзаголовок"
                v-model="dataVariantBaner.subtitle"
            />
        </div>
        <div class="flex items-start gap-6">
            <div class="flex items-center gap-3">
                <Button
                    @click="openPaint = 1"
                    size="small"
                    type="stroke"
                    :customClass="[
                        dataVariantBaner.backgroundColor ? 'text-green' : 'text-white',
                        '!p-4 !rounded hover:text-green bg-gray-light',
                    ]"
                >
                    <Icon name="paint" />
                </Button>
                <p class="font-light text-gray-2">Фон</p>
                <Dropdown
                    :open="openPaint === 1"
                    v-on-click-outside="() => (openPaint = null)"
                    customClass="top-0 -translate-y-[calc(100%+24px)] w"
                >
                    <BaseColorPicker v-model="dataVariantBaner.backgroundColor" />
                </Dropdown>
            </div>
            <div class="flex items-center gap-3">
                <Button
                    @click="openPaint = 2"
                    size="small"
                    type="stroke"
                    :customClass="[
                        dataVariantBaner.textColor ? 'text-green' : 'text-white',
                        '!p-4 !rounded hover:text-green bg-gray-light',
                    ]"
                >
                    <Icon name="paint" />
                </Button>
                <p class="font-light text-gray-2">Текст</p>
                <Dropdown
                    :open="openPaint === 2"
                    v-on-click-outside="() => (openPaint = null)"
                    customClass="top-0 -translate-y-[calc(100%+24px)] w"
                >
                    <BaseColorPicker v-model="dataVariantBaner.textColor" />
                </Dropdown>
            </div>
            <div class="flex items-center gap-3">
                <Button
                    @click="openPaint = 3"
                    size="small"
                    type="stroke"
                    :customClass="[
                        dataVariantBaner.elementsColor ? 'text-green' : 'text-white',
                        '!p-4 !rounded hover:text-green bg-gray-light',
                    ]"
                >
                    <Icon name="paint" />
                </Button>
                <p class="font-light text-gray-2">Элементы</p>
                <Dropdown
                    :open="openPaint === 3"
                    v-on-click-outside="() => (openPaint = null)"
                    customClass="top-0 -translate-y-[calc(100%+24px)] w"
                >
                    <BaseColorPicker v-model="dataVariantBaner.elementsColor" />
                </Dropdown>
            </div>
        </div>
        <div class="grid items-start gap-6">
            <div class="flex flex-wrap gap-8">
                <Checkbox v-model="dataVariantBaner.rounded" label="Закругленный" />
                <Checkbox v-model="dataVariantBaner.shadow" label="С тенью" />
            </div>
            <div class="mt-6 flex flex-col gap-5 lg:mt-0">
                <div class="flex max-w-max gap-1 rounded bg-white p-1">
                    <template v-for="variant in getVariantsList()" :key="variant">
                        <button
                            @click="dataVariantBaner.positionSide = variant.value"
                            :class="
                                dataVariantBaner.positionSide === variant.value
                                    ? 'bg-light-orange/25 text-orange'
                                    : 'bg-gray-light-4 text-gray-3'
                            "
                            class="rounded p-2.5 transition-all duration-300"
                        >
                            <Icon class="!transition-none" size="small" :name="variant.icon" />
                        </button>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Button, Icon, Checkbox, Input, Dropdown, Toggle, BaseColorPicker, useModelProxy, Switcher, deviceList } from '@/shared';
import { vOnClickOutside } from '@vueuse/components';
import { dataVariantBaner } from '@/entities';

const openPaint = ref(null);

const emit = defineEmits(['update:modelValue']);
const model = useModelProxy();

const banersPositionVariants = ref([
    {
        value: 'sideways',
        title: 'Сбоку',
        list: [
            {
                icon: 'baner-tl',
                value: 'top-left',
            },
            {
                icon: 'baner-tr',
                value: 'top-right',
            },
            {
                icon: 'baner-bl',
                value: 'bottom-left',
            },
            {
                icon: 'baner-br',
                value: 'bottom-right',
            },
        ],
    },
    {
        value: 'fullWidth',
        title: 'на всю ширину',
        list: [
            {
                icon: 'baner-full-top',
                value: 'top',
            },
            {
                icon: 'baner-full-bottom',
                value: 'bottom',
            },
        ],
    },
]);

const getVariantsList = () => {
    const newArr = [];
    banersPositionVariants.value.forEach((i) => {
        if (i.value === dataVariantBaner.type) {
            newArr.push(i.list);
        }
    });
    return newArr.flat();
};

onMounted(() => {
    model.value = dataVariantBaner;
});
</script>
