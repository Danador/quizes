<template>
    <div class="grid gap-6">
        <div class="grid gap-6">
            <Input
                type="number"
                label="ширина рх"
                placeholder="Введите ширину"
                v-model="dataVariantBody.width"
            />
            <Input
                type="number"
                label="высота рх"
                placeholder="Введите высоту"
                v-model="dataVariantBody.height"
            />
        </div>
        <div class="flex flex-col gap-3 3xl:flex-row 3xl:items-center">
            <Checkbox label="Кнопка на мобильной версии" v-model="dataVariantBody.mobileBtn" />
            <p class="text-gray-light-3 font-light">
                (Вместо квиза будет показана кнопка, открывающая POPUP окно)
            </p>
        </div>
        <div class="grid items-end gap-6">
            <Input
                label="текст кнопки на мобильной версии"
                placeholder="Введите текст"
                v-model="dataVariantBody.mobileButtonText"
            />
            <div class="relative flex flex-wrap gap-[15px] xl:mt-5">
                <div class="flex items-center gap-3">
                    <Button
                        @click="openPaint = 1"
                        size="small"
                        type="stroke"
                        :customClass="[
                            dataVariantBody.buttonColor ? 'text-green' : 'text-white',
                            '!p-4 !rounded hover:text-green bg-gray-light',
                        ]"
                    >
                        <Icon name="paint" />
                    </Button>
                    <p class="font-light text-gray-2">Кнопка</p>
                    <Dropdown
                        :open="openPaint === 1"
                        v-on-click-outside="() => (openPaint = null)"
                        customClass="top-0 -translate-y-[calc(100%+24px)]"
                    >
                        <BaseColorPicker v-model="dataVariantBody.buttonColor" />
                    </Dropdown>
                </div>
                <div class="flex items-center gap-3">
                    <Button
                        @click="openPaint = 2"
                        size="small"
                        type="stroke"
                        :customClass="[
                            dataVariantBody.buttonTextColor ? 'text-green' : 'text-white',
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
                        <BaseColorPicker v-model="dataVariantBody.buttonTextColor" />
                    </Dropdown>
                </div>
                <div class="flex items-center gap-3">
                    <Button
                        @click="openPaint = 3"
                        size="small"
                        type="stroke"
                        :customClass="[
                            dataVariantBody.buttonBorderColor ? 'text-green' : 'text-white',
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
                        <BaseColorPicker v-model="dataVariantBody.buttonBorderColor" />
                    </Dropdown>
                </div>
            </div>
        </div>
        <div class="grid lg:grid-cols-2 2xl:grid-cols-4 gap-4 w-max">
            <Checkbox v-model="dataVariantBody.buttonRounded" label="Закругленная" />
            <Checkbox v-model="dataVariantBody.buttonShadow" label="С тенью" />
            <Checkbox v-model="dataVariantBody.buttonGlare" label="С бликом" />
            <Checkbox v-model="dataVariantBody.buttonBorder" label="С обводкой" />
        </div>
        <i class="w-full bg-gray h-[1px]"></i>
        <CopyBox
            title="код для установки"
            value="quizmarket_button quizmarket_bef86f"
        />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Button, Icon, Checkbox, Input, Dropdown, BaseColorPicker, useModelProxy, CopyBox } from '@/shared';
import { vOnClickOutside } from '@vueuse/components';
import { dataVariantBody } from '@/entities';

const openPaint = ref(null);

const emit = defineEmits(['update:modelValue']);
const model = useModelProxy();

onMounted(() => {
    model.value = dataVariantBody;
});
</script>
