<template>
    <Card>
        <template #head>
            <div class="grid gap-6">
                <NavBar v-model="quizStep" :navigationList="quizTabs" />
                <span class="font-semibold uppercase text-dark lg:text-lg xl:text-xl">{{
                    quizStep.title
                }}</span>
            </div>
        </template>
        <fieldset class="grid gap-6 bg-light p-4 lg:grid-cols-1a lg:gap-8 lg:rounded-2lg lg:p-8">
            <StartInfo v-model="formData" />
            <StartSetting v-model="formData" />
        </fieldset>
        <div
            :class="preview ? 'translate-x-full' : ''"
            class="fixed -right-[72px] top-1/2 flex w-max -rotate-90 items-center gap-x-2.5 rounded-t bg-light-green-3 px-5 py-3 transition-all duration-300 lg:hidden"
        >
            <span class="text-sm font-semibold leading-[18px] text-gray-2">предпросмотр</span>
            <button
                @click="(preview = !preview), bodyLock(preview)"
                class="rounded-full bg-green p-2 text-white shadow-[rgba(255_195_80_0.35)] before:absolute before:inset-0"
            >
                <Icon class="!h-4 !w-4" name="eye" />
            </button>
        </div>
        <Modal
            name="preview"
            :open="preview"
            class="lg:!hidden"
            :containerClass="`transition-all duration-500 h-screen w-full flex items-center justify-center !p-0 !bg-transparent absolute ${
                preview ? 'translate-x-0' : 'translate-x-full'
            }`"
        >
            <div class="relative h-[80vh] w-[312px] overflow-hidden rounded-2lg">
                <img
                    class="h-full w-full object-cover"
                    src="https://img.freepik.com/premium-vector/a-landscape-with-a-lake-and-a-sunset-in-the-background_931646-9.jpg"
                    alt="preview"
                />
                <div
                    class="absolute inset-0 grid grid-rows-1a justify-items-center gap-6 bg-black/60 p-3.5"
                >
                    <div class="my-auto flex flex-col items-center">
                        <div class="grid max-w-[80%] gap-2 text-center text-sm text-white">
                            <p>Пройдите тест и узнайте какой у вас темперамент</p>
                            <p>Пройдите тест и получите 10% скидку</p>
                        </div>
                        <Button
                            size="small"
                            customClass="text-white mx-auto bg-green mt-3 uppercase"
                        >
                            <span>пройти тест</span>
                        </Button>
                    </div>
                    <a href="#" class="max-w-max rounded-[9px] bg-gray-7/60 p-1 text-white"
                        >сделано в <span>Your logo</span></a
                    >
                </div>
            </div>
            <Button
                @click="(preview = false), bodyLock(preview)"
                size="small"
                customClass="bg-green text-white !fixed top-8 right-8"
            >
                <Icon name="close" />
            </Button>
        </Modal>
        <template #footer>
            <div class="flex items-start justify-between">
                <div class="flex flex-col sm:flex-row w-full items-center gap-3">
                    <Button
                        customClass="text-white w-full lg:w-max !rounded-2lg !py-5 !px-[28px] bg-green xl:hover:bg-light-green"
                        type="stroke"
                    >
                        Отключить стартовую страницу
                    </Button>
                    <Button
                        href="/quiz/questions"
                        customClass="!py-[18px] rounded-2lg border border-green !w-full !justify-center sm:!max-w-max text-gray-2 hover:text-white hover:bg-green !px-[28px]"
                        type="stroke"
                        side="right"
                    >
                        <span>Далее</span>
                        <Icon class="rotate-180" name="arrow-3" />
                    </Button>
                </div>
                <div class="hidden items-center gap-x-24 xl:flex">
                    <div class="flex gap-x-2">
                        <Button customClass="!p-[18px] !rounded-2lg" type="secondary">
                            <Icon name="laptop" />
                        </Button>
                        <Button customClass="!p-[18px] !rounded-2lg" type="secondary">
                            <Icon name="phone" />
                        </Button>
                        <Button customClass="!p-[18px] !rounded-2lg" type="secondary">
                            <Icon name="wide" />
                        </Button>
                    </div>
                    <Button
                        type="stroke"
                        customClass="rounded-full !p-4 text-light-orange border border-light-orange"
                    >
                        <Icon name="eye" />
                    </Button>
                </div>
            </div>
        </template>
    </Card>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import { Button, Icon, Modal, bodyLock, toggleSwitches, Card, quizTabs } from '@/shared';
import { StartInfo, StartSetting, NavBar } from '@/widgets';

const formData = reactive({
    titleFont: 'Montserrat',
    subtitleFont: 'Montserrat',
    backgroundFilterOpacityPercent: 50,
    backgroundFilter: '#444758'
});
const preview = ref(false);
const quizStep = ref(quizTabs[0]);

onMounted(() => {
    (formData.locationFirstPage = toggleSwitches.value.locationFirstPage.list[0].value),
    (formData.background = toggleSwitches.value.background.list[0].value),
    (formData.locationElelement = toggleSwitches.value.locationElelement.list[0].value);
});
</script>
