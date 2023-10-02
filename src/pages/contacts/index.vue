<template>
    <Card>
        <template #head>
            <div class="grid gap-6">
                <NavBar v-model="quizStep" :navigationList="quizTabs" />
                <div class="flex justify-between">
                    <span class="font-semibold uppercase text-dark lg:text-lg xl:text-xl">{{ quizStep.title }}</span>
                    <Managment 
                        create="/quiz/contacts/create"
                        :btnDeleteDisabled="contactsData.selected?.length === 0"
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
                    <th scope="col" class="hidden px-1 py-5 xl:table-cell xl:px-5">главный</th>
                    <th class="xl:hidden"></th>
                    <th scope="col" class="px-1 py-5 xl:px-5">№</th>
                    <th
                        scope="col"
                        :colspan="changeTableColumn(960, 2, 1)"
                        class="px-1 py-5 xl:pl-12"
                    >
                        наименование
                    </th>
                    <th class="hidden xl:block"></th>
                </tr>
            </template>
            <template v-for="contact in testContacts" :key="contact.id">
                <TableRow
                    :data="contact"
                    checked
                    mainSelection
                    edit="/quiz/contacts/edit"
                    @moreInfo="detail = contact.id"
                    class="dragg"
                    v-model="contactsData"
                >
                    <td class="px-2 py-7 sm:px-4">
                        <Switcher 
                            :id="`switcher_${contact.id}`"
                            type="radio"
                            :value="contact.id"
                            v-model="contactsData.mainSelection"
                        />
                    </td>
                    <td class="px-1 py-7 xl:px-5">
                        <p class="text-sm text-gray-2">№{{ contact.id }}</p>
                    </td>
                    <td class="group relative px-1 py-6 xl:pl-12 xl:pr-2">
                        <Button
                            href="/quiz/contacts/edit"
                            type="stroke"
                            :customClass="[
                                contactsData.mainSelection === contact.id ? 'font-medium' : '',
                                '!p-0 text-left block'
                            ]"
                        >
                            <span class="line-clamp-1 max-w-[400px]">{{ contact.title }}</span>
                        </Button>
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
                        href="/quiz/result"
                    >
                        <Icon name="arrow-3" />
                        <span>Назад</span>
                    </Button>
                </div>
            </div>
        </template>
    </Card>
</template>

<script setup>
import { reactive, ref, watch, onMounted } from 'vue';
import { Button, Icon, Card, changeTableColumn, Checkbox, quizTabs, testContacts, Switcher } from '@/shared';
import { Managment } from '@/features';
import { NavBar, Table, TableRow } from '@/widgets';

const allCheked = ref(false);
const selectedContact = ref([]);
const detail = ref(false);
const quizStep = ref(quizTabs[3]);
const data = ref({});
const contactsData = reactive({
    selected: [],
    mainSelection: 1
});

watch(selectedContact, () => {
    contactsData.selected = selectedContact.value
})

watch(allCheked, () => {
    const arr = testContacts.value.map((i) => i.id);
    if (allCheked.value) {
        selectedContact.value = arr;
    } else {
        selectedContact.value = [];
    }
});
</script>
