<template>
    <fieldset
        class="grid items-start gap-6 lg:border-r lg:border-gray-light lg:pr-6 xl:pr-8"
    >
        <Input
            v-for="(field, i) in fields.slice(0, 5)"
            :key="i"
            v-model="model[field.name]"
            :name="field.name"
            :id="field.id"
            :label="field.label"
            :placeholder="field.placeholder"
        />
        <Input
            v-for="field in fields.slice(5, 7)"
            :name="field.name"
            :id="field.id"
            :label="field.label"
            :placeholder="field.placeholder"
            v-model="model[field.name]"
        />
        <fieldset class="flex gap-6 flex-wrap">
            <Toggle
                class="w-full lg:max-w-[450px]"
                v-model="model.locationFirstPage"
                :list="toggleSwitches.locationFirstPage.list"
                :title="toggleSwitches.locationFirstPage.title"
            />
            <Toggle
                class="w-full lg:w-auto"
                v-model="model.background"
                :list="toggleSwitches.background.list"
                :title="toggleSwitches.background.title"
            />
            <Toggle
                class="w-full lg:w-auto"
                v-model="model.locationElelement"
                :list="toggleSwitches.locationElelement.list"
                :title="toggleSwitches.locationElelement.title"
            />
        </fieldset>
        <fieldset class="grid grid-cols-2 items-end gap-6">
            <Uploader v-if="model.background === 'image'" class="w-full" customClass="w-full 2xl:h-40" label="Изображение"/>
            <Uploader v-if="model.background === 'video'" class="w-full" customClass="w-full 2xl:h-40" label="Видео"/>
            <Uploader v-if="model.background === 'video'" class="w-full" customClass="w-full 2xl:h-40" label="Изображение вместо видео(моб. версия)"/>
        </fieldset>
    </fieldset>
</template>

<script setup>
import { Input, Checkbox, useModelProxy, Toggle, Uploader, toggleSwitches } from '@/shared';

const props = defineProps({
    modelValue: { type: Object, default: () => null },
});

const fields = [
    {
        name: 'title',
        id: 'title',
        label: 'Заголовок',
        placeholder: 'Пройдите тест и узнайте какой у вас темперамент',
    },
    {
        name: 'subTitle',
        id: 'subTitle',
        label: 'Подзаголовок',
        placeholder: 'Пройдите тест и получите скидку 10%',
    },
    {
        name: 'buttonText',
        id: 'buttonText',
        label: 'Текст на кнопке',
        placeholder: 'Пройти тест',
    },
    // {
    //     name: 'phone',
    //     id: 'phone',
    //     label: 'Номер телефона',
    //     placeholder: '+7**********',
    // },
    // {
    //     name: 'companyName',
    //     id: 'companyName',
    //     label: 'Название компании',
    //     placeholder: 'Твой сайт',
    // },
    // {
    //     name: 'website',
    //     id: 'website',
    //     label: 'Сайт',
    //     placeholder: 'www.info.ru',
    // },
    // {
    //     name: 'requisites',
    //     id: 'requisites',
    //     label: 'Реквизиты',
    //     placeholder: 'ООО “Квизмаркет” ОГРН 1234567890',
    // },
];

const emit = defineEmits(['update:modelValue']);
const model = useModelProxy();
</script>
