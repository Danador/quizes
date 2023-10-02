<template>
    <SlideModal
        :title="`Вопрос № ${question.id}`"
        :open="detail"
        name="detailQuestion"
        @close="detail = false"
    >
        <template #default>
            <form v-on-click-outside="() => detail = false" class="grid gap-8" @submit.prevent>
                <div class="grid">
                    <div class="flex justify-between text-xs text-gray-6">
                        <p class="uppercase">вопрос</p>
                        <button v-if="!showHint" @click="showHint = true">
                            <span class="underline">добавить общую подсказку</span>
                        </button>
                    </div>
                    <Input v-model="question.title" name="question" id="question" />
                </div>
                <div v-if="showHint">
                    <div class="flex justify-between text-xs text-gray-6">
                        <p class="uppercase">Общая подсказка</p>
                        <button @click="showHint = !showHint">
                            <span class="underline">удалить</span>
                        </button>
                    </div>
                    <Input v-model="question.titleHint" name="question" id="question" />
                </div>
                <div :class="questionType.type === 'download' ? 'grid grid-cols-1a gap-3' : ''">
                    <span
                        :class="questionType.type === 'download' ? 'col-span-2' : ''"
                        class="text-xs uppercase text-gray-light-3"
                        >Вид вопроса</span
                    >
                    <div class="grid gap-4 3xl:grid-cols-1a">
                        <Select
                            icon
                            :list="typesQuestions"
                            v-model="question.view"
                            placeholder="вид вопроса"
                        >
                            <Icon :name="question.view.icon" />
                            <template #content>
                                <li v-for="(type, i) in typesQuestions" :key="i" class="">
                                    <button
                                        @click="(question.view = type), (questionType = type)"
                                        class="option"
                                    >
                                        <Icon :name="type.icon" />
                                        <span>{{ type.title }}</span>
                                    </button>
                                </li>
                            </template>
                        </Select>
                        <Button
                            v-if="showBtn"
                            @click="addKey(recordValue.answers)"
                            type="secondary"
                            side="left"
                            customClass="text-gray-2 whitespace-nowrap max-w-max border-light-orange"
                        >
                            <Icon name="plus" />
                            <p>Добавить ответ</p>
                        </Button>
                    </div>
                    <Select
                        :list="filesTypes"
                        v-model="typeFile"
                        v-if="questionType.type === 'download'"
                        placeholder="Все типы файлов"
                        class="!min-w-[178px]"
                    >
                        <template #content>
                            <li v-for="(type, i) in filesTypes" :key="i">
                                <button @click="typeFile = type" class="option">
                                    <Icon
                                        :class="
                                            typeFile === type
                                                ? 'opacity-100 visible'
                                                : 'opacity-0 invisible'
                                        "
                                        name="checked"
                                        size="small"
                                    />
                                    <span>{{ type.title }}</span>
                                </button>
                            </li>
                        </template>
                    </Select>
                </div>
                <QuestionTypes :questionType="questionType.type" v-model="data" />
            </form>
        </template>
        <template #content>
            <div class="grid w-full gap-[60px] p-5 xl:px-16">
                <div class="bg-white p-8">
                    <div class="flex space-x-1 border-b border-gray-light pb-5">
                        <Icon class="!h-5 !w-5" name="checkList" />
                        <span class="tracking-tighter text-gray-2"
                            >Пройдите тест и узнайте нужна ли вам консультация юриста</span
                        >
                    </div>
                    <div class="grid gap-4 pt-5">
                        <p class="text-2xl font-semibold text-gray-2">
                            По каким вопросам вы чаще всего обращались?
                        </p>
                        <div class="flex gap-4 text-gray-2">
                            <div class="rounded-[2px] bg-gray-light-2 p-2.5">
                                Можно выбрать несколько вариантов
                            </div>
                            <div class="rounded-[2px] bg-gray-light-2 p-2.5">
                                Этот вопрос можно пропустить
                            </div>
                        </div>
                    </div>
                    <div class="mt-8 grid grid-cols-2 gap-5">
                        <div
                            :class="[
                                answer === 1 ? 'border-green' : 'border-transparent',
                                'relative flex items-center justify-between rounded border px-3 py-2 transition-all duration-300',
                            ]"
                        >
                            <Button
                                side="left"
                                class="before:absolute before:inset-0"
                                @click="answer = 1"
                            >
                                <i
                                    :class="
                                        answer === 1 ? 'bg-green ring-green' : 'ring-gray-light'
                                    "
                                    class="h-2.5 w-2.5 rounded-full ring-1 transition-all duration-300"
                                ></i>
                                <p class="text- text-gray-2 3xl:text-base">Бизнес</p>
                            </Button>
                            <div
                                :class="
                                    answer === 1 ? 'opacity-100 visible' : 'opacity-0 invisible'
                                "
                                class="rounded bg-green/25 p-2.5 text-green transition-all duration-300"
                            >
                                <span class="text-green">Верный ответ</span>
                            </div>
                        </div>
                        <div
                            :class="[
                                answer === 2 ? 'border-green' : 'border-transparent',
                                'relative flex items-center justify-between rounded border px-3 py-2 transition-all duration-300',
                            ]"
                        >
                            <Button
                                side="left"
                                customClass="before:absolute before:inset-0"
                                @click="answer = 2"
                            >
                                <i
                                    :class="
                                        answer === 2 ? 'bg-green ring-green' : 'ring-gray-light'
                                    "
                                    class="h-2.5 w-2.5 rounded-full ring-1 transition-all duration-300"
                                ></i>
                                <p class="text- text-gray-2 3xl:text-base">Продажа недвижимости</p>
                            </Button>
                            <div
                                :class="
                                    answer === 2 ? 'opacity-100 visible' : 'opacity-0 invisible'
                                "
                                class="rounded bg-green/25 p-2.5 text-green transition-all duration-300"
                            >
                                <span class="text-green">Верный ответ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </SlideModal>
</template>

<script setup>
import { ref, watch, onMounted, computed, reactive } from 'vue';
import { Input, typesQuestions, Select, Button, Icon, testQuestionsList, bodyLock, back, keyPress, filesTypes } from '@/shared';
import { addKey } from '@/shared/ui/_util/helpers';
import { questionType } from '@/features';
import { QuestionTypes } from '@/widgets';
import { vOnClickOutside } from '@vueuse/components';
import { SlideModal } from '@/widgets';

const answer = ref(1);
const data = ref({});
const question = ref(testQuestionsList.value[0]);
const detail = ref(false);
const typeFile = ref(null);
const showBtn = ref(true);
const showHint = ref(false);
let questionsData = reactive({});
const exceptionTypes = ['range', 'download', 'video', 'date'];

const recordValue = computed(() => data.value);

watch(questionType, () =>
    exceptionTypes.includes(questionType.value.type)
        ? (showBtn.value = false)
        : (showBtn.value = true),
);

watch(recordValue, () => {
    questionsData = recordValue.value;
});

watch(detail, () => {
    detail.value ? bodyLock(detail.value) :
    setTimeout(() => {
        back()
    }, 100);
})

onMounted(() => {
    detail.value = true;
    typeFile.value = filesTypes.value[0];
    keyPress(detail.value)
});
</script>
