<template>
    <div class="grid gap-8">
        {{ dataTypeText.answers }}
        <draggable
            v-if="dataTypeText.answers.length"
            v-model="dataTypeText.answers"
            class="grid w-full gap-8"
            tag="div"
            :animation="300"
            itemKey="answers"
        >
            <template
                v-for="(answer, i) in dataTypeText.answers"
                :key="answer"
                #item="{ element: answer }"
            >
                <Answer
                    :id="answer.id"
                    v-model="answer[i]"
                    @delete="dataTypeText.answers = removeItem(dataTypeText.answers, id)"
                    @cheked="dataTypeText.answers = addCorrect(dataTypeText.answers, id)"
                />
            </template>
        </draggable>
        <div class="flex flex-wrap gap-6">
            <div class="flex items-center space-x-3">
                <Checkbox color="yellow" value="multiple" v-model="dataTypeText.multipleAnswers" />
                <p class="text-gray-2">Несколько вариантов ответа</p>
            </div>
            <div class="flex items-center space-x-3">
                <Checkbox color="yellow" value="optional" v-model="dataTypeText.optionalQuestion" />
                <p class="text-gray-2">Необязательный вопрос</p>
            </div>
            <div class="flex items-center space-x-3">
                <Checkbox color="yellow" value="yourAnswer" v-model="dataTypeText.yourAnswer" />
                <p class="text-gray-2">Вариант “свой ответ”</p>
            </div>
        </div>
        <Input
            label="Подсказка для “свой ответ”"
            v-model="dataTypeText.yourAnswerHint"
            name="question"
            id="question"
        />
        <div class="flex flex-col items-center gap-4 lg:flex-row">
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
import { onMounted } from 'vue';
import { Uploader, Input, Switcher, Checkbox, useModelProxy, Answer } from '@/shared';
import { dataTypeText } from '@/entities';
import { removeItem, addCorrect } from '@/shared/ui/_util/helpers';
import draggable from 'vuedraggable';

const emit = defineEmits(['update:modelValue']);

const model = useModelProxy();

onMounted(() => {
    model.value = dataTypeText;
});
</script>
