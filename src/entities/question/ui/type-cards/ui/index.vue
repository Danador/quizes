<template>
    <div class="grid gap-8">
        <draggable
            v-if="dataTypeCards.answers.length"
            v-model="dataTypeCards.answers"
            class="grid w-full gap-8"
            tag="div"
            :animation="300"
            itemKey="answers"
        >
            <template
                v-for="(answer, i) in dataTypeCards.answers"
                :key="answer"
                #item="{ element: answer }"
            >
                <Answer
                    :id="answer.id"
                    v-model="answer[i]"
                    @delete="dataTypeCards.answers = removeItem(dataTypeCards.answers, id)"
                    @cheked="dataTypeCards.answers = addCorrect(dataTypeCards.answers, id)"
                />
            </template>
        </draggable>
        <div class="flex gap-4">
            <template v-for="setting in cardSettingsList">
                <Toggle
                    variant="yellow"
                    v-model="dataTypeCards[setting.id]"
                    :list="setting.list"
                    :title="setting.title"
                />
            </template>
        </div>
        <div class="flex flex-wrap gap-6">
            <div class="flex items-center space-x-3">
                <Checkbox color="yellow" value="multiple" v-model="dataTypeCards.multipleAnswers" />
                <p class="text-gray-2">Несколько вариантов ответа</p>
            </div>
            <div class="flex items-center space-x-3">
                <Checkbox
                    color="yellow"
                    value="optional"
                    v-model="dataTypeCards.optionalQuestion"
                />
                <p class="text-gray-2">Необязательный вопрос</p>
            </div>
            <div class="flex items-center space-x-3">
                <Checkbox color="yellow" value="yourAnswer" v-model="dataTypeCards.yourAnswer" />
                <p class="text-gray-2">Вариант “свой ответ”</p>
            </div>
        </div>
        <div>
            <p class="uppercase text-gray-6">Подсказка для “свой ответ”</p>
            <div class="grid grid-cols-a1 items-center gap-3">
                <Uploader type="image" />
                <Input v-model="dataTypeCards.yourAnswerHint" name="question" id="question" />
            </div>
        </div>
        <div class="grid items-center gap-4 3xl:grid-cols-[170px,1fr]">
            <Uploader class="max-w-[160px]" />
            <span class="text-gray-2"
                >Вы можете добавить задний фон вопроса PNG, JPEG, SVG, GIF. Размер файла не более
                2MB</span
            >
        </div>
        <div class="flex flex-col gap-6 3xl:flex-row">
            <div class="flex items-center gap-x-3">
                <Switcher />
                <span class="text-gray-2">Логика ветвления</span>
            </div>
            <span class="text-green underline">*Что такое логика ветвления?</span>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Uploader, Toggle, Input, Switcher, Checkbox, useModelProxy, Answer } from '@/shared';
import { removeItem, addCorrect } from '@/shared/ui/_util/helpers';
import { dataTypeCards } from '@/entities';
import draggable from 'vuedraggable';

const props = defineProps({
    modelValue: { type: Object, default: null },
});

const emit = defineEmits(['update:modelValue']);

const model = useModelProxy();

const cardSettingsList = ref([
    {
        id: 'ratio',
        title: 'пропорции',
        list: [
            {
                value: 'vertical',
                icon: 'vertical-ratio',
            },
            {
                value: 'full',
                icon: 'full-ratio',
            },
            {
                value: 'horizontal',
                icon: 'horizontal-ratio',
            },
        ],
    },
    {
        id: 'text',
        title: 'текст',
        list: [
            {
                value: 'left',
                icon: 'left',
            },
            {
                value: 'center',
                icon: 'center',
            },
        ],
    },
    {
        id: 'format',
        title: 'Формат',
        list: [
            {
                value: 'grid',
                icon: 'grid-vertical',
            },
            {
                value: 'flex',
                icon: 'flex-horizontal',
            },
        ],
    },
]);

onMounted(() => {
    model.value = dataTypeCards;
});
</script>
