<template>
    <Card>
        <div class="grid gap-6">
            <pre>{{ testSetupList }}</pre>
            <div class="rounded-2lg lg:bg-light grid gap-8 px-6 py-8">
                <div class="text-gray-5 font-light">
                    <p>1. Установите код в любую часть сайта. При внесении изменений переустановки не требуется!</p>
                    <div class="mt-4 px-3 py-4 bg-white rounded shadow-common max-w-max">
                        <p>{{ `<script async src='//widjet.quizmarket.ru/quiz/999aecf94739719dd61f960c394d6507'></script>` }}</p>
                    </div>
                </div>
                <div class="text-gray-5 font-light">
                    <p>2. Установите код в любую часть сайта. При внесении изменений переустановки не требуется!</p>
                    <div class="flex flex-wrap mt-4 gap-6">
                        <template
                            v-for="setup in testSetupList"
                            :key="setup.id"
                        >
                            <SetupCard
                                :data="setup"
                            />
                        </template>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-6 rounded-2lg bg-light p-6 lg:p-8">
                <p class="text-xs font-medium uppercase text-gray-light-3">
                    ссылка на ваш квиз
                </p>
                <div class="flex w-full items-center gap-3 max-w-[480px]">
                    <div class="flex w-full items-center justify-between text-sm">
                        <span class="hidden rounded-l bg-gray-light-3 px-3 py-[18px] text-white lg:block"
                            >https://</span
                        >
                        <div
                            class="w-full gap-2.5 bg-white p-2 md:flex relative md:items-center md:justify-between"
                        >
                            <Input
                                placeholder="Введите домен"
                                inputClass="!px-2 !py-2 border-none"
                                v-model="copy"
                            />
                            <!-- <span class="text-dark">126478nsdos</span> -->
                        </div>
                        <span class="block rounded-r bg-gray-light-3 pl-3 pr-5 py-[18px] text-white"
                            >.quizmarket.ru</span
                        >
                    </div>
                    <div class="relative">
                        <Button
                            :disabled="copy.length === 0"
                            @click="copyText(copy, true), copied = true"
                            type="stroke"
                            customClass="!p-2.5 disabled:pointer-events-none disabled:opacity-50 hover:bg-light-orange !rounded hidden md:block text-white bg-orange"
                        >
                            <Icon name="copy" />
                        </Button>
                        <Tooltip 
                            :class="copied ? 'opacity-100 visible' : 'opacity-0 invisible'"
                            class="-bottom-full right-1/2 translate-x-1/2"
                            message="Скопировано!"
                        />
                    </div>
                </div>
                <div>
                    <p class="text-sm font-light text-gray-5">Подключите свой домен к квизу</p>
                    <Button
                        type="stroke"
                        side="left"
                        @click="showConnectDomain = !showConnectDomain"
                        customClass="mt-3 !rounded text-white bg-green"
                    >
                        <Icon name="world" />
                        <p>Подключить домен</p>
                    </Button>
                </div>
            </div>
        </div>
        <div
            :class="mobilePreview ? 'translate-x-full' : ''"
            class="fixed -right-[72px] top-1/2 flex w-max -rotate-90 items-center gap-x-2.5 rounded-t bg-light-green-3 px-5 py-3 transition-all duration-300 sm:hidden"
        >
            <span class="text-sm font-semibold leading-[18px] text-gray-2">предпросмотр</span>
            <button
                @click="(mobilePreview = !mobilePreview), bodyLock(mobilePreview)"
                class="rounded-full bg-green p-2 text-white shadow-[rgba(255_195_80_0.35)] before:absolute before:inset-0"
            >
                <Icon class="!h-4 !w-4" name="eye" />
            </button>
        </div>
        <Modal
            title="Подключить домен"
            info
            name="domain-info"
            :open="showConnectDomain"
            @close="showConnectDomain = false"
            class="p-5"
            containerClass="transition-all max-w-[450px] duration-500"
        >
            <form 
                @submit.prevent
                v-on-click-outside="() => showConnectDomain = false"
                class="grid gap-6"
            >
                <fieldset>
                    <p class="uppercase font-light text-gray-light-3 mb-1 text-xs">создайте две А-записи</p>
                    <fieldset class="w-full gap-2.5 bg-white p-2 md:flex relative md:items-center md:justify-between">
                        <span class="text-gray-2">{{ testDomainData.ip }}</span>
                        <!-- <span class="text-dark">126478nsdos</span> -->
                        <Button
                            @click="copyText(testDomainData.ip), copied = 2"
                            type="stroke"
                            customClass="!p-[3px] hover:text-green !rounded hidden md:block text-gray-2 bg-gray-light"
                        >
                            <Icon name="copy" />
                        </Button>
                        <Tooltip 
                            :class="copied === 2 ? 'opacity-100 visible' : 'opacity-0 invisible'"
                            class="top-[52px] -right-7"
                            message="Скопировано!"
                        />
                    </fieldset>
                    <fieldset class="w-full mt-3 gap-2.5 bg-white p-2 md:flex relative md:items-center md:justify-between">
                        <span class="text-gray-2">{{ testDomainData.webAdressOne }} <br> {{ testDomainData.webAdressTwo }}</span>
                        <Button
                            @click="copyText(testDomainData.webAdressOne + '\n' + testDomainData.webAdressTwo), copied = 3"
                            type="stroke"
                            customClass="!p-[3px] hover:text-green !rounded hidden md:block text-gray-2 bg-gray-light"
                        >
                            <Icon name="copy" />
                        </Button>
                        <Tooltip 
                            :class="copied === 3 ? 'opacity-100 visible' : 'opacity-0 invisible'"
                            class="top-[52px] -right-7"
                            message="Скопировано!"
                        />
                    </fieldset>
                </fieldset>
                <fieldset class="grid">
                    <label class="uppercase font-light text-gray-light-3 mb-1 text-xs">Укажите домен</label>
                    <Input
                        placeholder="Введите домен"
                        v-model="domain"
                    />
                    <span class="mt-2.5 text-gray-2">Привязка домена и обновление DNS записей может занять до 48 часов</span>
                    <Button
                        type="stroke"
                        customClass="rounded-2lg max-w-max mt-6 text-white bg-green hover:bg-light-green"
                    >
                        <span>Сохранить</span>
                    </Button>
                </fieldset>
            </form>
        </Modal>
    </Card>
</template>

<script setup>
import { ref, computed, watch, reactive } from 'vue';
import { Button, Icon, Card, bodyLock, Input, Modal, Tooltip, copyText, testSetupList } from '@/shared';
import { SetupCard } from '@/widgets'
import { vOnClickOutside } from '@vueuse/components';

const mobilePreview = ref(false);
const showConnectDomain = ref(false)
const copy = ref('')
const copied = ref(false)
const domain = ref('')

// const quizSetupData = computed(() => {
//     const obj = { variant: showVariant.value, ...variantData.value };
//     return obj;
// });

const testDomainData = {
    ip: '51.250.35.58',
    webAdressOne: 'website.ru A 51.240.39.58',
    webAdressTwo: 'www.website.ru A 51.240.39.58'
}

watch(copied, () => {
    if (copied.value) {
        setTimeout(() => {
            copied.value = false
        }, 600);
    }
})

watch(showConnectDomain, () => {
    bodyLock(showConnectDomain.value)
})

// watch(showVariant, () => {
//     bodyLock(mobilePreview.value)
// });

</script>

<style>
/* .fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
} */
</style>
