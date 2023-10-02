<template>
    <div class="grid gap-8">
        <Input label="текст в выпадающем списке" v-model="dataTypeDropdown.title" />
        <draggable
            v-if="dataTypeDropdown.answers.length"
            v-model="dataTypeDropdown.answers"
            class="grid w-full gap-8"
            tag="div"
            :animation="300"
            itemKey="answers"
        >
            <template
                v-for="answer in dataTypeDropdown.answers"
                :key="answer"
                #item="{ element: answer }"
            >
                <Answer
                    :id="answer.id"
                    v-model="answer[i]"
                    @delete="dataTypeDropdown.answers = removeItem(dataTypeDropdown.answers, id)"
                    @cheked="dataTypeDropdown.answers = addCorrect(dataTypeDropdown.answers, id)"
                />
            </template>
        </draggable>
        <div class="flex items-center space-x-3">
            <Checkbox color="yellow" value="optional" v-model="dataTypeDropdown.optionalQuestion" />
            <p class="text-gray-2">Необязательный вопрос</p>
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
import { onMounted } from 'vue';
import {
    Checkbox,
    Input,
    Uploader,
    Switcher,
    useModelProxy,
    removeItem,
    addCorrect,
    Answer,
} from '@/shared';
import { dataTypeDropdown } from '@/entities';
import draggable from 'vuedraggable';

const props = defineProps({
    modelValue: { type: Object, default: null },
});

const emit = defineEmits(['update:modelValue']);
const model = useModelProxy();

onMounted(() => {
    model.value = dataTypeDropdown;
});
</script>
