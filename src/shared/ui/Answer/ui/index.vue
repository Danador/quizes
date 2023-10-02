<template>
    <div>
        <div class="flex justify-between text-xs text-gray-6">
            <p class="uppercase">ОТВЕТ №{{ id }}</p>
            <Button
                type="stroke"
                side="right"
                @click="showAnswer = !showAnswer"
                customClass="text-xs !p-0 text-gray-3"
            >
                <span>свернуть</span>
                <Icon :class="showAnswer ? 'rotate-90' : '-rotate-90'" name="arrow-3" />
            </Button>
        </div>
        данные прокидки
        <pre>
            {{ model }}
        </pre>
        данные вопроса
        <pre>
            {{ answer }}
        </pre>
        <div
            class="grid overflow-hidden transition-all duration-300"
            :class="showAnswer ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
        >
            <div class="min-h-0">
                <div class="grid grid-cols-a1 items-center gap-3 transition-all duration-300">
                    <Icon
                        class="rounded bg-gray-light text-gray-2"
                        size="big"
                        name="drag-and-drop"
                    />
                    <Input name="answer" id="answerOne" v-model="answer.title" />
                    <div class="col-span-2 flex items-center justify-end gap-4 text-gray-2">
                        <Button
                            type="stroke"
                            @click="answer.showHint = !answer.showHint"
                            :customClass="[
                                answer.showHint ? 'text-green' : '',
                                `!p-1 !rounded bg-gray-light hover:text-green`,
                            ]"
                        >
                            <Icon name="hint" />
                        </Button>
                        <Button
                            @click="emit('copy')"
                            type="stroke"
                            customClass="!p-1 !rounded bg-gray-light hover:text-green"
                        >
                            <Icon name="copy" />
                        </Button>
                        <Button
                            type="stroke"
                            @click="emit('delete')"
                            customClass="!p-1 !rounded bg-gray-light hover:text-red"
                        >
                            <Icon name="trash" />
                        </Button>
                        <Button
                            type="stroke"
                            @click="emit('checked')"
                            :customClass="[
                                answer.correct ? 'text-green' : '',
                                '!p-1 !rounded bg-gray-light hover:text-green',
                            ]"
                        >
                            <Icon name="checked" />
                        </Button>
                    </div>
                </div>
                <Input
                    v-if="answer.showHint"
                    :label="`Подсказка для ответа №${id}`"
                    v-model="answer.hint"
                    :name="`answer-hint_${id}`"
                    :id="`answerHint_${id}`"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref, watch } from 'vue';
import { useModelProxy, Input, Button, Icon } from '@/shared';

const props = defineProps({
    id: { type: Number, default: () => null },
    modelValue: { type: Object, default: () => {} },
});

const answer = reactive({
    title: '',
    showHint: false,
});
const showAnswer = ref(true);

const emit = defineEmits(['update:modelValue', 'cheked', 'delete', 'copy']);
const model = useModelProxy();
</script>
