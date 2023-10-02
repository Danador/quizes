<template>
    <form @submit.prevent class="grid gap-6 rounded-2lg xl:gap-8 bg-light p-8">
        <div class="flex flex-col gap-4">
            <p class="font-light uppercase text-gray-2">политика конфиденциальности</p>
            <div class="flex items-center gap-x-2">
                <Checkbox v-model="model.policyInQuiz" />
                <span class="text-gray-2">Галочка в форме контактов по умолчанию</span>
            </div>
            <Input
                label="ссылка на свою политику конфиденциальности"
                placeholder="Введите ссылку"
            />
            <div class="grid items-center gap-4 lg:grid-cols-a1">
                <div class="flex items-center gap-1">
                    <span class="uppercase text-gray-2">автопромотка</span>
                    <Switcher v-model="model.autoTransition" />
                </div>
                <span class="text-gray-light-3 font-light"
                    >Автоматический переход к следующей странице после выбора из списка
                    ответов</span
                >
            </div>
            <div class="grid items-center gap-4 lg:grid-cols-a1">
                <div class="flex items-center gap-1">
                    <span class="uppercase text-gray-2">запоминать текущий шаг</span>
                    <Switcher v-model="model.stepRemember" />
                </div>
                <span class="text-gray-light-3 font-light"
                    >Срабатывает при повторном открытии пользователем квиза с шага, на котором
                    остановился в прошлый раз</span
                >
            </div>
            <div class="grid items-center gap-4 lg:grid-cols-a1">
                <div class="flex items-center gap-x-2">
                    <Checkbox v-model="model.sharesAnalysis" />
                    <span class="text-gray-2">Делиться своей аналитикой квиза с нами</span>
                </div>
                <div class="text-gray-light-3 font-light">Это поможет нам делать сервис лучше</div>
            </div>
        </div>
    </form>
</template>

<script setup>
import { Checkbox, Input, Switcher, useModelProxy } from '@/shared';
import { reactive, watch, ref, onMounted } from 'vue';

const props = defineProps({
    modelValue: { type: Object, default: () => {} },
});

const emit = defineEmits(['update:modelValue']);
const model = useModelProxy();
</script>
