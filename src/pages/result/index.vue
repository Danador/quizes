<template>
    <Card>
        <template #head>
            <div class="grid gap-6">
                <NavBar v-model="quizStep" :navigationList="quizTabs" />
                <div class="flex justify-between">
                    <span class="font-semibold uppercase text-dark lg:text-lg xl:text-xl">{{
                        quizStep.title
                    }}</span>
                    <Managment
                        create="/quiz/result/create"
                        :btnDeleteDisabled="resultData.selected.length === 0"
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
                    <th scope="col" class="hidden lg:table-cell">главный</th>
                    <th class="hidden"></th>
                    <th scope="col" class="p-5">№</th>
                    <th
                        scope="col"
                        :colspan="changeTableColumn(960, 3, 1)"
                        class="px-1 py-5 xl:pl-12"
                    >
                        наименование
                    </th>
                    <th scope="col" class="hidden p-5 pl-8 lg:table-cell whitespace-nowrap">
                        <button class="flex items-center gap-2 uppercase">
                            <span>Результаты по баллам</span>
                            <Icon name="sort" />
                        </button>
                    </th>
                    <th class="hidden lg:block"></th>
                </tr>
            </template>
            <template v-for="result in testResults" :key="result.id">
                <TableRow
                    :data="result"
                    checked
                    edit="/quiz/result/edit"
                    @moreInfo="detail = result.id"
                    mainSelection
                    class="dragg"
                    v-model="resultData"
                >
                    <td class="px-1 py-7 xl:px-4">
                        <Switcher
                            type="radio"
                            :id="`switcher_${result.id}`"
                            :value="result.id"
                            v-model="resultData.mainSelection"
                        />
                    </td>
                    <td class="p-5">
                        <p class="text-sm text-gray-2">№{{ result.id }}</p>
                    </td>
                    <td class="group relative px-1 py-6 xl:pl-12 xl:pr-2">
                        <Button 
                            href="/quiz/result/edit" 
                            type="stroke" 
                            :customClass="[
                                resultData.mainSelection === result.id ? 'font-medium' : '',
                                '!p-0 text-left block'
                            ]"
                        >
                            <span class="line-clamp-1 max-w-[400px]">{{ result.title }}</span>
                        </Button>
                    </td>
                    <td class="hidden p-5 pl-8 lg:table-cell">
                        <p
                            class=" text-sm text-gray-2 "
                            v-text="result.scoreResults ? 'Да' : 'Нет'"
                        ></p>
                    </td>
                </TableRow>
            </template>
        </Table>
        <template #footer>
            <div class="hidden items-end justify-between xl:flex">
                <div class="flex w-full flex-col items-center gap-3 lg:flex-row">
                    <Button
                        customClass="!py-[18px] rounded-2lg border border-green text-gray-2 hover:text-white hover:bg-green !px-[28px]"
                        type="stroke"
                        side="left"
                        href="/quiz/questions"
                    >
                        <Icon name="arrow-3" />
                        <span>Назад</span>
                    </Button>
                    <Button
                        customClass="!py-[18px] rounded-2lg border border-green text-gray-2 hover:text-white hover:bg-green !px-[28px]"
                        type="stroke"
                        side="right"
                        href="/quiz/contacts"
                    >
                        <span>Далее</span>
                        <Icon class="rotate-180" name="arrow-3" />
                    </Button>
                </div>
            </div>
        </template>
    </Card>
</template>

<script setup>
import { ref, watch, onMounted, reactive } from 'vue';
import { Button, Icon, Checkbox, changeTableColumn, Card, quizTabs, testResults, Switcher } from '@/shared';
import { Managment } from '@/features';
import { Table, TableRow, NavBar } from '@/widgets';

const quizStep = ref(quizTabs[2]);
const allCheked = ref(false);
const selectedResult = ref([]);
const detail = ref(false);
const resultData = reactive({
    selected: [],
    mainSelection: 1
});

watch(selectedResult, () => {
    resultData.selected = selectedResult.value
})

watch(allCheked, () => {
    const arr = testResults.value.map((i) => i.id);
    if (allCheked.value) {
        selectedResult.value = arr;
    } else {
        selectedResult.value = [];
    }
});
</script>
