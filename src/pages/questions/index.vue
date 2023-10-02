<template>
    <Card class="relative px-6 pb-24 lg:px-0 xl:pb-6">
        <template #head>
            <div class="grid gap-6">
                <NavBar v-model="quizStep" :navigationList="quizTabs" />
                <div class="flex items-start justify-between">
                    <span class="font-semibold uppercase text-dark lg:text-lg xl:text-xl">{{ quizStep.title }}</span>
                    <Managment
                        create="/quiz/questions/create"
                        :btnDeleteDisabled="questionsData.selected.length === 0"
                    />
                </div>
            </div>
        </template>
        <Table>
            <template #thead>
                <tr
                    class="w-full items-center rounded-2lg bg-gray-light-2 text-left font-semibold uppercase text-gray-4"
                >
                    <th scope="col" class="w-6 px-6 py-5">
                        <Checkbox v-model="allCheked" color="yellow" />
                    </th>
                    <th scope="col" class="py-5">№</th>
                    <th
                        scope="col"
                        :colspan="changeTableColumn(960, 3, 1)"
                        class="px-1 py-5 xl:pl-12"
                    >
                        наименование
                    </th>
                    <th scope="col" class="hidden py-5 pl-8 xl:table-cell">
                        <button class="flex items-center gap-2.5 uppercase">
                            <span>Вид</span>
                            <Icon name="sort" />
                        </button>
                    </th>
                    <th scope="col" class="hidden py-5 pl-6 xl:table-cell">
                        <button class="flex items-center gap-2.5 uppercase">
                            <span>подсказка</span>
                            <Icon name="sort" />
                        </button>
                    </th>
                    <th class="hidden lg:block"></th>
                </tr>
            </template>
            <draggable
                v-model="testQuestionsList"
                class="w-full"
                tag="tbody"
                :animation="300"
                handle=".drag-btn"
                itemKey="questions"
            >
                <template
                    v-for="question in testQuestionsList"
                    :key="question.id"
                    #item="{ element: question }"
                >
                    <TableRow
                        :data="question"
                        checked
                        dragEndDrop
                        showBtn
                        class="dragg"
                        edit="/quiz/questions/edit"
                        v-model="questionsData"
                    >
                        <td class="py-6">
                            {{ `№${question.id}` }}
                        </td>
                        <td class="group relative px-1 py-6 xl:pl-12 xl:pr-2">
                            <Button
                                href="/quiz/questions/edit"
                                type="stroke"
                                customClass="p-0 text-left"
                            >
                                <span class="line-clamp-1 max-w-[400px]">{{ question.title }}</span>
                            </Button>
                        </td>
                        <td class="hidden px-1 py-7 xl:table-cell xl:px-4">
                            <div class="flex items-center gap-2">
                                <div class="bg-light-yellow/50 px-2.5 py-3">
                                    <Icon
                                        :name="question.view.icon"
                                        class="!h-[14px] !w-[18px] text-light-orange"
                                    />
                                </div>
                                <p class="hidden text-sm text-gray-2 lg:block">
                                    {{ question.view.title }}
                                </p>
                            </div>
                        </td>
                        <td class="hidden px-1 py-7 xl:table-cell xl:px-4">
                            <p
                                class="text-sm text-gray-2"
                                v-text="question.hint ? 'Да' : 'Нет'"
                            ></p>
                        </td>
                    </TableRow>
                </template>
            </draggable>
        </Table>
        <template #footer>
            <div class="flex w-full items-center gap-3">
                <Button
                    customClass="!py-[18px] rounded-2lg border border-green text-gray-2 hover:text-white hover:bg-green !px-[28px]"
                    type="stroke"
                    side="left"
                    href="/quiz/start-page"
                >
                    <Icon name="arrow-3" />
                    <span>Назад</span>
                </Button>
                <Button
                    href="/quiz/result"
                    customClass="!py-[18px] rounded-2lg border border-green text-gray-2 hover:text-white hover:bg-green !px-[28px]"
                    type="stroke"
                    side="right"
                >
                    <span>Далее</span>
                    <Icon class="rotate-180" name="arrow-3" />
                </Button>
            </div>
        </template>
    </Card>
</template>
<script setup>
import { reactive, ref, watch } from 'vue';
import { quizTabs, Card, Button, Icon, Checkbox, changeTableColumn, testQuestionsList } from '@/shared';
import { NavBar, Table, TableRow } from '@/widgets';
import { Managment } from '@/features';
import draggable from 'vuedraggable';

const allCheked = ref(false);
const selectedQuestions = ref([]);

const questionsData = reactive({
    selected: []
})

watch(selectedQuestions, () => {
    questionsData.selected = selectedQuestions.value
})

watch(allCheked, () => {
    const arr = testQuestionsList.value.map((i) => i.id);
    if (allCheked.value) {
        selectedQuestions.value = arr;
    } else {
        selectedQuestions.value = [];
    }
});

const quizStep = ref(quizTabs[1]);
</script>
