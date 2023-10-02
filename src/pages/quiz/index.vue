<template>
    <Card>
        <template #head>
            <div
                class="grid grid-cols-2 items-center justify-between gap-x-3 gap-y-4 px-6 lg:grid-cols-a1a lg:justify-items-end lg:px-0"
            >
                <span class="text-xl font-semibold uppercase leading-[30px] text-dark">квизы</span>
                <Button
                    side="left"
                    customClass="text-gray-2 col-span-2 mx-auto lg:mx-0 lg:col-auto w-max bg-gray-light hover:bg-gray-3"
                >
                    <Icon name="trash" />
                    <span>Удаленные квизы</span>
                </Button>
                <Managment create="quiz/create" />
            </div>
        </template>
        <Table>
            <template #thead>
                <tr
                    class="items-center rounded-2lg bg-gray-light-2 text-left font-semibold uppercase text-gray-4"
                >
                    <th scope="col" class="w-6 px-6 py-5">
                        <Checkbox v-model="allCheked" color="yellow" />
                    </th>
                    <th scope="col" class="py-5">№</th>
                    <th
                        scope="col"
                        :colspan="changeTableColumn(1280, 3, 1)"
                        class="px-1 py-5 xl:pl-12"
                    >
                        наименование
                    </th>
                    <th scope="col" class="hidden py-5 xl:table-cell">ссылка на квиз</th>
                    <th scope="col" class="hidden py-5 pr-6 xl:table-cell">заявок</th>
                    <th class="hidden xl:block"></th>
                </tr>
            </template>
            <template v-for="quiz in testQuizList" :key="quiz.id">
                <TableRow
                    checked
                    :data="quiz"
                    main
                    v-model="selectedQuizzes"
                    @delete="(showBlockId = quiz.id), bodyLock((showBlockId = quiz.id))"
                    @copy="copyId(quiz.link, quiz.id)"
                    edit="/quiz/edit"
                >
                    <td class="py-6">
                        {{ `№${quiz.id}` }}
                    </td>
                    <td class="py-6 pl-12 pr-2">
                        <Button href="/quiz/start-page" type="stroke" customClass="p-0 text-left">
                            <span class="line-clamp-1 max-w-[400px]">{{ quiz.title }}</span>
                        </Button>
                    </td>
                    <td class="hidden py-6 xl:table-cell">
                        <div class="flex items-center text-gray-2">
                            <Button
                                size="small"
                                @click="copyQuizUrl(quiz.link)"
                                customClass="bg-gray-light"
                            >
                                <Icon size="normal" name="copy" />
                            </Button>
                            <span class="ml-1.5 block">{{ quiz.link }}</span>
                        </div>
                    </td>
                    <td class="hidden px-2 py-6 xl:table-cell">
                        <a :href="quiz.applicationUrl" class="text-green underline">
                            {{ quiz.applications }}
                        </a>
                    </td>
                </TableRow>
                <Modal
                    :name="`modal-${quiz.id}`"
                    :open="showBlockId === quiz.id"
                    @close="showBlockId = null"
                    title="Удалить квиз"
                    containerClass="max-w-[87%] sm:max-w-[560px]"
                >
                    <p class="text-gray-5">
                        После подтверждения вы сможете найти удаленный квиз в корзине на странице
                        квизов и восстановить в течение 30 календарных дней
                    </p>
                    <div class="ga mt-2 flex flex-col gap-4 lg:flex-row">
                        <Button
                            @click="deleteItem('test', quiz.id)"
                            size="big"
                            customClass="bg-green w-full lg:w-auto text-white hover:bg-light-green"
                        >
                            Подтвердить
                        </Button>
                        <Button
                            @click="showBlockId = null"
                            size="big"
                            type="secondary"
                            customClass="text-gray-5 w-full lg:w-auto hover:text-orange"
                        >
                            Отмена
                        </Button>
                    </div>
                </Modal>
            </template>
        </Table>
    </Card>
</template>
<script setup lang="ts">
    import { ref, watch } from 'vue';
    import { Button, Icon, Modal, Card, testQuizList, Checkbox, changeTableColumn, bodyLock,} from '@/shared';
    import { Table, TableRow } from '@/widgets';
    import { Managment, copyQuizUrl, deleteItem, copyId } from '@/features';

    const showCreateModal = ref(false);
    const showBlockId = ref(null);
    const selectedQuizzes = ref([]);
    const allCheked = ref(false);

    watch(allCheked, () => {
        const arr = testQuizList.value.map((i) => i.id);
        if (allCheked.value) {
            selectedQuizzes.value = arr;
        } else {
            selectedQuizzes.value = [];
        }
    });
</script>
