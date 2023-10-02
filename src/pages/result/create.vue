<template>
    <SlideModal
        :title="`Результат № ${resultDefault.id}`"
        :open="detail"
        name="detailQuestion"
        @close="detail = false"
    >
        <template #default>
            <form v-on-click-outside="() => detail = false" class="grid gap-8" @submit.prevent>
                <Toggle title="показывать" :list="showVariants" v-model="resultData.variant" />
                <div>
                    <div class="flex items-center justify-between text-xs text-gray-6">
                        <p
                            class="uppercase"
                            v-text="
                                resultData.variant === 'oneResult'
                                    ? 'заголовок результата'
                                    : 'заголовок страницы результатов'
                            "
                        ></p>
                        <Button
                            type="stroke"
                            side="right"
                            @click="rollUp('heading')"
                            customClass="text-xs !p-0 underline text-gray-3"
                        >
                            <span
                                v-text="
                                    resultData.variant === 'oneResult'
                                        ? 'добавить подзаголовок'
                                        : 'свернуть'
                                "
                            ></span>
                            <Icon
                                v-if="resultData.variant !== 'oneResult'"
                                class="-rotate-90"
                                name="arrow-3"
                            />
                        </Button>
                    </div>
                    <div class="heading grid items-center gap-3 transition-all duration-300">
                        <Input name="result" id="resultOne" v-model="resultData.title" />
                        <Button
                            type="stroke"
                            @click="hint = !hint"
                            v-if="resultData.variant !== 'oneResult'"
                            :customClass="[
                                hint ? 'text-green' : '',
                                `!p-1 !rounded bg-gray-light w-max ml-auto mr-0`,
                            ]"
                        >
                            <Icon name="hint" />
                        </Button>
                    </div>
                    <Input
                        v-if="hint"
                        label="Подсказка для результата"
                        v-model="resultData.hint"
                        name="result-hint"
                        id="resultHint"
                    />
                </div>
                <Button
                    type="secondary"
                    side="left"
                    v-if="resultData.variant === 'severalResults'"
                    @click="addKey(resultData.resultsList)"
                    customClass="text-gray-2 whitespace-nowrap max-w-max border-light-orange"
                >
                    <Icon name="plus" />
                    <p>Добавить результат</p>
                </Button>
                <draggable
                    v-if="resultData.variant === 'severalResults' && resultData.resultsList.length"
                    v-model="resultData.resultsList"
                    class="grid w-full gap-8"
                    tag="div"
                    :animation="300"
                    itemKey="resultsList"
                >
                    <template
                        v-for="(result, i) in resultData.resultsList"
                        :key="result"
                        #item="{ element: result }"
                    >
                        <div>
                            <div class="flex justify-between text-xs text-gray-6">
                                <p class="uppercase">заголовок результата №{{ result.id }}</p>
                                <Button
                                    type="stroke"
                                    side="right"
                                    @click="rollUp(`result_${result.id}`)"
                                    customClass="text-xs !p-0 text-gray-3"
                                >
                                    <span>свернуть</span>
                                    <Icon class="-rotate-90" name="arrow-3" />
                                </Button>
                            </div>
                            <div
                                :class="`result_${result.id} grid grid-cols-a1 transition-all duration-300 items-center gap-3`"
                            >
                                <Icon
                                    class="rounded bg-gray-light text-gray-2"
                                    size="big"
                                    name="drag-and-drop"
                                />
                                <Input name="result" id="resultOne" v-model="result.title" />
                                <div class="col-span-2 flex items-center justify-end gap-4 text-gray-2">
                                    <Button
                                        type="stroke"
                                        @click="result.showHint = !result.showHint"
                                        :customClass="[
                                            result.showHint ? 'text-green' : '',
                                            `!p-1 !rounded bg-gray-light`,
                                        ]"
                                    >
                                        <Icon name="hint" />
                                    </Button>
                                    <Button type="stroke" customClass="!p-1 !rounded bg-gray-light">
                                        <Icon name="copy" />
                                    </Button>
                                    <Button
                                        type="stroke"
                                        @click="
                                            resultData.resultsList = removeItem(
                                                resultData.resultsList,
                                                result.id,
                                            )
                                        "
                                        customClass="!p-1 !rounded bg-gray-light hover:text-red"
                                    >
                                        <Icon name="trash" />
                                    </Button>
                                </div>
                            </div>
                            <Input
                                v-if="result.showHint"
                                :label="`Подсказка для результата №${result.id}`"
                                v-model="result.hint"
                                :name="`result-hint_${result.id}`"
                                :id="`resultHint_${result.id}`"
                            />
                        </div>
                    </template>
                </draggable>
                <div class="relative">
                    <Toggle title="Стоимость" :list="priceVariants" v-model="resultData.priceVariant" />
                    <button class="absolute right-0 top-0 text-xs text-gray-3 underline">
                        удалить
                    </button>
                </div>
                <TransitionGroup
                    enter-active-class="animate-opacity-enter-active"
                    leave-active-class="animate-opacity-leave-active"
                >
                    <div
                        key="toggle"
                        v-if="resultData.priceVariant === 'range'"
                        class="grid w-full items-end gap-4"
                        :class="resultData.variant !== 'oneResult' ? 'grid-cols-11a' : 'grid-cols-1a'"
                    >
                        <Input
                            id="minPrice"
                            name="minPrice"
                            :label="resultData.variant !== 'oneResult' ? 'от' : 'введите стоимость'"
                            v-model="resultData.minPrice"
                        />
                        <Input
                            v-if="resultData.variant !== 'oneResult'"
                            id="maxPrice"
                            name="maxPrice"
                            label="до"
                            v-model="resultData.maxPrice"
                        />
                        <Select
                            :list="currency"
                            v-model="resultData.currency"
                            class="!h-[52px] !w-[76px]"
                        >
                            <template #content>
                                <li v-for="(curren, i) in currency" :key="i">
                                    <button @click="resultData.currency = curren" class="option">
                                        <span>{{ curren }}</span>
                                    </button>
                                </li>
                            </template>
                        </Select>
                    </div>
                    <button
                        key="rangeBtn"
                        v-if="resultData.priceVariant === 'range' && !addDiscount"
                        @click="addDiscount = !addDiscount"
                        class="flex items-center gap-3"
                    >
                        <div
                            class="rounded bg-green p-1.5 text-white transition-all hover:bg-light-green-2"
                        >
                            <Icon size="small" name="plus" />
                        </div>
                        <span class="text-gray-2 transition-all hover:text-gray">Добавить скидку</span>
                    </button>
                    <button
                        key="formulaBtn"
                        v-if="resultData.priceVariant === 'formula'"
                        @click="addFormula = !addFormula"
                        class="flex items-center gap-3"
                    >
                        <div
                            class="rounded bg-green p-1.5 text-white transition-all hover:bg-light-green-2"
                        >
                            <Icon size="small" name="plus" />
                        </div>
                        <span class="text-gray-2 transition-all hover:text-gray">Добавить формулу</span>
                    </button>
                    <div
                        class="relative grid grid-cols-2 items-end gap-2"
                        key="addFunctional"
                        v-if="addDiscount && resultData.priceVariant === 'range'"
                    >
                        <Toggle title="скидка" :list="discountList" v-model="resultData.typeDiscount" />
                        <Input
                            id="discountNumber"
                            name="discount-number"
                            type="number"
                            :maxlength="resultData.typeDiscount === 'percent' ? 3 : 5"
                            v-model="resultData.numberDiscount"
                        />
                        <button class="absolute right-0 top-0 text-xs text-gray-3 underline">
                            удалить
                        </button>
                    </div>
                </TransitionGroup>
                <Input
                    id="buttonText"
                    name="buttonText"
                    label="Текст на кнопке"
                    v-model="resultData.buttonText"
                />
                <div>
                    <p class="text-xs uppercase text-gray-6">добавить мультимедиа</p>
                    <div class="mt-1 flex gap-3">
                        <Uploader type="image" />
                        <Uploader type="video" />
                    </div>
                </div>
                <div class="flex flex-col gap-6 3xl:flex-row">
                    <div class="flex items-center gap-x-3">
                        <Switcher />
                        <span class="text-gray-2">Логика ветвления</span>
                    </div>
                    <span class="text-green underline">*Что такое логика ветвления?</span>
                </div>
                <div class="flex flex-col gap-6 3xl:flex-row">
                    <div class="flex items-center gap-x-3">
                        <Switcher />
                        <span class="text-gray-2">Показывать за баллы</span>
                    </div>
                    <span class="text-green underline">Настроить баллы</span>
                </div>
                <div>
                    <p class="font-semibold uppercase text-gray-2">настройки страницы</p>
                    <div class="mt-6 flex gap-3">
                        <Toggle
                            variant="yellow"
                            :title="cardSettingsList[0].title"
                            :list="cardSettingsList[0].list"
                            v-model="resultData.ratio"
                        />
                        <Toggle
                            variant="yellow"
                            :title="cardSettingsList[1].title"
                            :list="cardSettingsList[1].list"
                            v-model="resultData.format"
                        />
                    </div>
                </div>
                <div class="flex flex-col gap-8 xl:flex-row xl:items-center">
                    <Checkbox
                        label="Кнопка пропуска выбора"
                        color="yellow"
                        v-model="resultData.skipButton"
                    />
                    <Checkbox
                        label="Поделиться результатами"
                        color="yellow"
                        v-model="resultData.shareResult"
                    />
                </div>
                <Toggle
                    title="показывать результат"
                    :list="showResults"
                    v-model="resultData.showResults"
                />
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
    <Modal
        name="formula"
        info
        :open="addFormula"
        @close="addFormula = false"
        containerClass="bg-white text-red rounded-2lg"
    >
        <span v-on-click-outside="() => (addFormula = false)">a;oshndkj;anjkdnaskndknakn</span>
    </Modal>
</template>

<script setup>
import { ref, computed, onMounted, reactive, watch } from 'vue';
import { Button, Icon, Checkbox, Select, Toggle, Input, Modal, Uploader, Switcher, testResults, Card, rollUp, removeItem, addKey, quizTabs, filesTypes, keyPress, bodyLock, back} from '@/shared';
import { vOnClickOutside } from '@vueuse/components';
import draggable from 'vuedraggable';
import { SlideModal } from '@/widgets'

const answer = ref(1);
const addDiscount = ref(false);
const hint = ref(false);
const addFormula = ref(false);
const detail = ref(false);
const resultDefault = ref(testResults.value[0]);
const quizStep = ref(quizTabs[2]);
const typeFile = ref(null)

const showVariants = ref([
    {
        title: 'один результат',
        value: 'oneResult',
    },
    {
        title: 'несколько результатов',
        value: 'severalResults',
    },
]);

const priceVariants = ref([
    {
        title: 'Равно',
        value: 'equally',
    },
    {
        title: 'Диапазон',
        value: 'range',
    },
    {
        title: 'по формуле',
        value: 'formula',
    },
]);

const cardSettingsList = ref([
    {
        id: 'ratio',
        title: 'пропорции',
        list: [
            {
                value: 'vertical',
                icon: 'vertical-ratio',
            },
            {
                value: 'full',
                icon: 'full-ratio',
            },
            {
                value: 'horizontal',
                icon: 'horizontal-ratio',
            },
        ],
    },
    {
        id: 'format',
        title: 'Формат',
        list: [
            {
                value: 'grid',
                icon: 'grid-vertical',
            },
            {
                value: 'flex',
                icon: 'flex-horizontal',
            },
        ],
    },
]);

const showResults = ref([
    {
        value: 'beforeForm',
        title: 'до формы контактов',
    },
    {
        value: 'afterForm',
        title: 'после формы контактов',
    },
]);

const discountList = ref([
    {
        value: 'number',
        title: '₽',
    },
    {
        value: 'percent',
        title: '%',
    },
]);

const currency = ['₽', '$', '€'];

const checkPriceVariant = computed(() => {
    if (resultData.priceVariant === 'equally') {
        return 'Добавить формулу';
    }
    if (resultData.priceVariant === 'range') {
        return 'Добавить скидку';
    }
    if (resultData.priceVariant === 'formula') {
        return 'Добавить формулу';
    }
});

const resultData = reactive({
    takeMain: null,
    variant: 'severalResults',
    resultsList: [
        {
            id: 1,
            showHint: true,
        },
        {
            id: 2,
        },
    ],
    priceVariant: 'range',
    minPrice: '1000',
    maxPrice: '2000',
    currency: '₽',
    buttonText: 'Выбрать',
    ratio: 'full',
    format: 'grid',
    skipButton: true,
    shareResult: true,
    showResults: 'afterForm',
    typeDiscount: 'number',
    numberDiscount: 100,
});

watch(resultData, () => {
    if (resultData.typeDiscount === 'percent' && resultData.numberDiscount >= 100) {
        document?.getElementById('discountNumber').addEventListener('keydown', (e) => {
            if (
                e.key === 'ArrowUp' &&
                resultData.typeDiscount === 'percent' &&
                resultData.numberDiscount >= 100
            ) {
                e.preventDefault();
            }
        });
        resultData.numberDiscount = 100;
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
