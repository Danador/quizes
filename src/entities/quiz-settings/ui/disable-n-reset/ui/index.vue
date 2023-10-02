<template>
    <form @submit.prevent class="grid gap-6 rounded-2lg 3xl:gap-8 bg-light p-8">
        <p class="uppercase text-gray-2">отключение и сброс статистики</p>
        <div class="flex flex-col gap-6 3xl:pr-10">
            <div class="grid items-center gap-4 lg:grid-cols-a1">
                <div class="flex items-center gap-1">
                    <span class="uppercase text-gray-2">отключить квиз</span>
                    <Switcher v-model="model.disableQuiz" />
                </div>
                <span class="text-gray-light-3 font-light">При выключенном квизе будет показываться страница-заглушка</span>
            </div>
            <div class="grid gap-4 lg:grid-cols-a1">
                <Button
                    type="stroke"
                    customClass="flex group text-light-orange gap-1 !p-1     items-center"
                >
                    <Icon
                        name="reset"
                        class="transition-transform duration-300 group-hover:rotate-[360deg]"
                    />
                    <span class="uppercase text-gray-2 transition-colors duration-300 group-hover:text-green">сбросить статистику</span>
                </Button>
                <span class="text-gray-light-3 font-light">Все накопленная статистика обнулится и начнется сбор данных заново</span>
            </div>
        </div>
    </form>
</template>
<script setup>
import { Switcher, Icon, Button, useModelProxy } from '@/shared';
import { onMounted, reactive, ref } from 'vue';

const props = defineProps({
    modelValue: { type: Object, default: () => null },
});

const emit = defineEmits(['update:modelValue']);
const model = useModelProxy();
</script>
