<template>
    <SlideModal
        :title="`Результат № ${contact.id}`"
        :open="detail"
        name="detailQuestion"
        @close="detail = false"
    >
        <template #default>
            <form v-on-click-outside="() => detail = false" class="grid gap-8" @submit.prevent>
                <Toggle :list="lastPageVariants" v-model="contactsData.lastPage" />
                <div class="relative">
                    <Input id="heading" name="heading" label="заголовок" v-model="contactsData.title" />
                    <button class="absolute right-0 top-0 text-xs text-gray-3 underline">
                        добавить подзаголовок
                    </button>
                </div>
                <div class="relative">
                    <Input
                        id="heading"
                        name="heading"
                        label="подзаголовок"
                        v-model="contactsData.subtitle"
                    />
                    <button class="absolute right-0 top-0 text-xs text-gray-3 underline">
                        удалить
                    </button>
                </div>
                <template v-if="contactsData.lastPage === 'form'">
                    <div>
                        <div class="flex justify-between text-xs text-gray-6">
                            <p class="uppercase">Поле 1</p>
                            <Button type="stroke" side="right" customClass="text-xs !p-0 text-gray-3">
                                <span>свернуть</span>
                                <Icon class="-rotate-90" name="arrow-3" />
                            </Button>
                        </div>
                        <div class="grid grid-cols-a1 items-center gap-3">
                            <Icon
                                class="rounded bg-gray-light text-gray-2"
                                size="big"
                                name="drag-and-drop"
                            />
                            <Input name="answer" id="answerOne" v-model="contactsData.form.fieldName" />
                            <div class="col-span-2 flex items-center justify-end gap-4 text-gray-2">
                                <Button type="stroke" customClass="!p-1 !rounded bg-gray-light">
                                    <Icon name="hint" />
                                </Button>
                                <Button type="stroke" customClass="!p-1 !rounded bg-gray-light">
                                    <Icon name="fluent" />
                                </Button>
                                <Button type="stroke" customClass="!p-1 !rounded bg-gray-light">
                                    <Icon name="eye" />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <Input
                        label="Подсказка для поля 1"
                        v-model="contactsData.form.placeholder"
                        name="question"
                        id="question"
                    />
                    <div>
                        <div class="flex justify-between text-xs text-gray-6">
                            <p class="uppercase">Поле 2</p>
                            <Button type="stroke" side="right" customClass="text-xs !p-0 text-gray-3">
                                <span>свернуть</span>
                                <Icon class="-rotate-90" name="arrow-3" />
                            </Button>
                        </div>
                        <div class="grid grid-cols-a1 items-center gap-3">
                            <Icon
                                class="rounded bg-gray-light text-gray-2"
                                size="big"
                                name="drag-and-drop"
                            />
                            <Input
                                name="answer"
                                id="answerOne"
                                v-model="contactsData.form.fieldName2"
                            />
                            <div
                                class="col-span-2 flex items-center justify-between gap-4 text-gray-2 xl:pl-9"
                            >
                                <Checkbox color="yellow" label="Сделать маской" />
                                <div class="flex gap-4">
                                    <Button type="stroke" customClass="!p-1 !rounded bg-gray-light">
                                        <Icon name="hint" />
                                    </Button>
                                    <Button type="stroke" customClass="!p-1 !rounded bg-gray-light">
                                        <Icon name="fluent" />
                                    </Button>
                                    <Button type="stroke" customClass="!p-1 !rounded bg-gray-light">
                                        <Icon name="eye" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between text-xs text-gray-6">
                            <p class="uppercase">Поле 2</p>
                            <Button type="stroke" side="right" customClass="text-xs !p-0 text-gray-3">
                                <span>свернуть</span>
                                <Icon class="-rotate-90" name="arrow-3" />
                            </Button>
                        </div>
                        <div class="grid grid-cols-a1 items-center gap-3">
                            <Icon
                                class="rounded bg-gray-light text-gray-2"
                                size="big"
                                name="drag-and-drop"
                            />
                            <Input
                                name="answer"
                                id="answerOne"
                                v-model="contactsData.form.fieldName2"
                            />
                            <div
                                class="col-span-2 flex items-center justify-end gap-4 pl-9 text-gray-2"
                            >
                                <div class="flex gap-4">
                                    <Button type="stroke" customClass="!p-1 !rounded bg-gray-light">
                                        <Icon name="hint" />
                                    </Button>
                                    <Button type="stroke" customClass="!p-1 !rounded bg-gray-light">
                                        <Icon name="fluent" />
                                    </Button>
                                    <Button type="stroke" customClass="!p-1 !rounded bg-gray-light">
                                        <Icon name="eye" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button type="stroke" side="left" customClass="!p-0 max-w-max mt-3">
                        <div class="rounded bg-green p-[7px] text-white">
                            <Icon name="plus" size="small" />
                        </div>
                        <span class="text-gray-2">Добавить поле</span>
                    </Button>
                    <Input label="Текст на кнопке" v-model="contactsData.form.buttonText" />
                    <div class="flex items-center gap-3">
                        <Switcher v-model="addMesenger" />
                        <span class="text-gray-2">Мессенджеры</span>
                    </div>
                    <div
                        :class="addMesenger ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
                        class="grid transition-all delay-100 duration-300"
                    >
                        <div
                            :class="addMesenger ? '' : 'opacity-0 invisible'"
                            class="grid min-h-0 grid-cols-2 items-center gap-x-4 gap-y-6 overflow-hidden transition-all delay-100 duration-300 lg:grid-cols-3 3xl:grid-cols-4"
                        >
                            <template v-for="mesenger in mesengers" :key="mesenger">
                                <Checkbox
                                    :label="mesenger"
                                    :value="mesenger"
                                    v-model="contactsData.form.mesengers"
                                />
                            </template>
                        </div>
                    </div>
                    <span
                        v-show="addMesenger"
                        class="text-xs text-gray-light-3 transition-all duration-300"
                        >* Продукт компании Meta, признана экстремистcкой организацией в России</span
                    >
                    <Input
                        label="Заголовок на странице мессенджера"
                        v-model="contactsData.form.mesengersTitle"
                    />
                    <Input label="Текст на кнопке" v-model="contactsData.form.mesengersBtnTitle" />
                    <div class="flex flex-wrap gap-8">
                        <Checkbox
                            label="Спрашивать имя"
                            color="yellow"
                            v-model="contactsData.form.askName"
                        />
                        <Checkbox
                            label="Кнопка возврата к форме связи"
                            color="yellow"
                            v-model="contactsData.form.btnBackToForm"
                        />
                    </div>
                </template>
                <template v-if="contactsData.lastPage === 'page'">
                    <Input label="Текст на кнопке" v-model="contactsData.page.buttonText" />
                    <div>
                        <p class="text-xs uppercase text-gray-6">Добавить мультимедиа</p>
                        <div class="mt-1.5 flex gap-x-3">
                            <Uploader type="image" />
                            <Uploader type="video" />
                        </div>
                    </div>
                    <div class="grid grid-cols-1a items-end gap-8">
                        <Input
                            label="Cсылка на переадресацию"
                            v-model="contactsData.page.redirectionLink"
                        />
                        <Input
                            class="max-w-[142px]"
                            label="Отправить через сек"
                            type="number"
                            v-model="contactsData.page.sendingTime"
                        />
                    </div>
                    <div class="flex items-center gap-3">
                        <Switcher v-model="addSocials" />
                        <span class="text-gray-2">Мессенджеры</span>
                    </div>
                    <div
                        :class="addSocials ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
                        class="grid transition-all delay-100 duration-300"
                    >
                        <div
                            :class="addSocials ? '' : 'opacity-0 invisible'"
                            class="grid min-h-0 grid-cols-2 items-center gap-x-4 gap-y-6 overflow-hidden transition-all delay-100 duration-300 lg:grid-cols-3 3xl:grid-cols-4"
                        >
                            <template v-for="social in socials" :key="social">
                                <Checkbox :label="social.title" :value="social" v-model="buffer" />
                            </template>
                        </div>
                    </div>
                    <Transition
                        enter-active-class="animate-opacity-enter-active"
                        leave-active-class="animate-opacity-leave-active"
                        mode="out-in"
                    >
                        <div class="grid gap-6">
                            <template v-for="(socialField, i) in buffer" :key="i">
                                <Input
                                    v-if="addSocials"
                                    :label="`Ссылка на ${socialField.title}`"
                                    :placeholder="`Введите id ${socialField.title}`"
                                    :name="`field_${socialField.title}`"
                                    :id="socialField.title"
                                    v-model="socialField.value"
                                />
                            </template>
                        </div>
                    </Transition>
                </template>
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
import { reactive, ref, watch, onMounted, computed } from 'vue';
import { Button, Icon, Checkbox, Toggle, Input, Uploader, Switcher, testContacts, back, bodyLock, keyPress, filesTypes} from '@/shared';
import { vOnClickOutside } from '@vueuse/components';
import { SlideModal } from '@/widgets'

const answer = ref(1);
const addMesenger = ref(false);
const addSocials = ref(false);
const buffer = ref([]);
const contact = ref(testContacts.value[0]);
const detail = ref(false);
const data = ref({});
const typeFile = ref(null)

const lastPageVariants = ref([
    {
        title: 'форма связи',
        value: 'form',
    },
    {
        title: 'Страница спасибо',
        value: 'page',
    },
]);

const mesengers = [
    'Telegram',
    'WhatsApp',
    'Vk',
    'Viber',
    'Wechat',
    'Instagram*',
    'Messenger*',
    'Discord',
];

const socials = [
    {
        title: 'Telegram',
        link: 't.me/',
    },
    {
        title: 'WhatsApp',
        link: 'wa.me/',
    },
    {
        title: 'Vk',
        link: 'vk.com/',
    },
    {
        title: 'Youtube',
        link: 'www.youtube.com/channel/',
    },
];

const contactsData = reactive({
    takeMain: null,
    lastPage: 'form',
    form: {
        title: '',
        subtitle: '',
        fieldName: 'Ваше имя',
        placeholder: '',
        buttonText: 'Получить результаты',
        mesengers: [],
        mesengersTitle: 'Заполните данные',
        mesengersBtnTitle: 'Готово',
        askName: false,
        btnBackToForm: false,
    },
    page: {
        redirectionLink: '',
        sendingTime: 30,
        socials: [],
    },
});

const concat = computed(() => {
    const obj = {};
    const reg = /[^A-Za-z0-9]/;
    buffer.value.forEach(({ title, link, value }) => {
        if (!value) return;
        obj[title.toLowerCase()] = link + (value ? value.split(reg).join('') : '');
    });
    return obj;
});

watch(concat, () => {
    contactsData.page.socials = concat.value;
});

watch(addSocials, () => {
    if (!addSocials.value) {
        contactsData.page.socials = {};
        buffer.value = [];
    }
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
