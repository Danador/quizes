<template>
    <div class="grid gap-8">
        <draggable
            v-if="dataTypeFieldsAndImages.answers.length"
            v-model="dataTypeFieldsAndImages.answers"
            class="grid w-full gap-8"
            tag="div"
            :animation="300"
            itemKey="answers"
        >
            <template
                v-for="(answer, i) in dataTypeFieldsAndImages.answers"
                :key="answer"
                #item="{ element: answer }"
            >
                <Answer
                    :id="answer.id"
                    v-model="answer[i]"
                    @delete="
                        dataTypeFieldsAndImages.answers = removeItem(
                            dataTypeFieldsAndImages.answers,
                            id,
                        )
                    "
                    @cheked="
                        dataTypeFieldsAndImages.answers = addCorrect(
                            dataTypeFieldsAndImages.answers,
                            id,
                        )
                    "
                />
            </template>
        </draggable>
        <div class="flex flex-wrap gap-6">
            <div class="flex items-center space-x-3">
                <Checkbox
                    color="yellow"
                    value="multiple"
                    v-model="dataTypeFieldsAndImages.multipleAnswers"
                />
                <p class="text-gray-2">Несколько вариантов ответа</p>
            </div>
            <div class="flex items-center space-x-3">
                <Checkbox
                    color="yellow"
                    value="optional"
                    v-model="dataTypeFieldsAndImages.optionalQuestion"
                />
                <p class="text-gray-2">Необязательный вопрос</p>
            </div>
            <div class="flex items-center space-x-3">
                <Checkbox
                    color="yellow"
                    value="yourAnswer"
                    v-model="dataTypeFieldsAndImages.yourAnswer"
                />
                <p class="text-gray-2">Вариант “свой ответ”</p>
            </div>
        </div>
        <Input
            label="Подсказка для “свой ответ”"
            v-model="dataTypeFieldsAndImages.yourAnswerHint"
            name="question"
            id="question"
        />
        <div class="grid items-center gap-4 3xl:grid-cols-[170px,1fr]">
            <Uploader class="max-w-[56px]" type="image" />
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
import { Checkbox, Input, Uploader, Switcher, useModelProxy, Answer } from '@/shared';
import { dataTypeFieldsAndImages } from '@/entities';
import { removeItem, addCorrect } from '@/shared/ui/_util/helpers';
import draggable from 'vuedraggable';

const props = defineProps({
    modelValue: { type: Object, default: null },
});

const emit = defineEmits(['update:modelValue']);

const model = useModelProxy();

onMounted(() => {
    model.value = dataTypeFieldsAndImages;
});
</script>
