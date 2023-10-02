<template>
    <form @sumbit.prevent class="grid gap-6 rounded-2lg xl:gap-8 bg-light p-8">
        <fieldset class="grid sm:grid-cols-2 gap-6 items-start">
            <fieldset>
                <Input
                    label="Номер телефона"
                    placeholder="+7**********"
                    v-model="model.company.phone"
                />
                <Checkbox
                    class="mt-2.5"
                    label="Сделать кликабельным"
                    v-model="model.company.phoneClickable"
                />
            </fieldset>
            <Input
                label="Название компании"
                placeholder="Твой сайт"
                v-model="model.company.name"
            />
        </fieldset>
        <fieldset class="grid sm:grid-cols-2 gap-6">
            <Input
                label="Сайт"
                placeholder="www.info.ru"
                v-model="model.company.site"
            />
            <Input
                label="Реквизиты"
                placeholder="ООО “Квизмаркет” ОГРН 1234567890"
                v-model="model.company.requisites"
            />
        </fieldset>
        <fieldset class="flex gap-6">
            <Uploader class="w-full max-w-[214px]" customClass="w-full" label="логотип"/>
            <Uploader class="w-full max-w-[214px]" customClass="w-full" label="favicon"/>
        </fieldset>
    </form>
</template>
<script setup>
    import { Input, Checkbox, Uploader, useModelProxy } from '@/shared'

    const props = defineProps({
        modelValue: { type: Object, default: () => null },
    });

    const emit = defineEmits(['update:modelValue']);
    const model = useModelProxy();
</script>
