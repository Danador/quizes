<template>
    <div class="grid gap-8">
        <draggable
            v-if="dataTypeFields.answers.length"
            v-model="dataTypeFields.answers"
            class="grid w-full gap-8"
            tag="div"
            :animation="300"
            itemKey="answers"
        >
            <template
                v-for="(answer, i) in dataTypeFields.answers"
                :key="answer"
                #item="{ element: answer }"
            >
                <Answer
                    :id="answer.id"
                    v-model="answer[i]"
                    @delete="dataTypeFields.answers = removeItem(dataTypeFields.answers, id)"
                    @cheked="dataTypeFields.answers = addCorrect(dataTypeFields.answers, id)"
                />
            </template>
        </draggable>
        <div class="flex items-center space-x-3">
            <Checkbox color="yellow" value="optional" v-model="dataTypeFields.optionalQuestion" />
            <p class="text-gray-2">Необязательный вопрос</p>
        </div>
        <div class="flex items-center space-x-3">
            <Checkbox color="yellow" value="yourAnswer" v-model="dataTypeFields.yourAnswer" />
            <p class="text-gray-2">Вариант “свой ответ”</p>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { Checkbox, useModelProxy, Answer } from '@/shared';
import { dataTypeFields } from '@/entities';
import { removeItem, addCorrect } from '@/shared/ui/_util/helpers';
import draggable from 'vuedraggable';

const props = defineProps({
    modelValue: { type: Object, default: null },
});

const emit = defineEmits(['update:modelValue']);

const model = useModelProxy();

onMounted(() => {
    model.value = dataTypeFields;
});
</script>
