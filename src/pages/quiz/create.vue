<template>
    <Modal
        :open="showCreate"
        info
        title="создать квиз"
        containerClass="xl:max-w-[1000px] w-full max-w-[87%]"
    >
        <div
            v-on-click-outside="(() => back())"
            class="flex flex-col gap-4 lg:flex-row lg:justify-between"
        >
            <div class="flex flex-col gap-4 lg:flex-row">
                <Search v-model="search" placeholder="Поиск по шаблонам" />
                <Select icon v-model="selectQuiz" placeholder="Все квизы">
                    <Icon :name="selectQuiz?.icon" />
                    <template #content>
                        <li v-for="(category, i) in testQuizCategoryList" :key="i" class="">
                            <button @click="selectQuiz = category" class="option">
                                <Icon :name="category.icon" />
                                <span>{{ category.title }}</span>
                            </button>
                        </li>
                    </template>
                </Select>
            </div>
            <Button href="/quiz/start-page" size="big" customClass="bg-green text-white">
                Пустой шаблон
            </Button>
        </div>
        <div
            class="-mx-5 grid max-h-[50vh] gap-4 overflow-y-auto px-6 md:grid-cols-2 lg:max-h-[69vh]"
        >
            <QuizCard v-for="item in testQuizList" :key="item.id" :data="item" />
        </div>
        <Button href="/tamplates" size="big" customClass="bg-green text-white mx-auto">
            Все шаблоны
        </Button>
    </Modal>
</template>
<script setup>
    import { onMounted, ref } from 'vue';
    import { Button, Icon, Modal, Search, Select, testQuizList, testQuizCategoryList, bodyLock, back } from '@/shared';
    import { QuizCard } from '@/widgets';
    import { vOnClickOutside } from '@vueuse/components';

    const showCreate = ref(false);
    const selectQuiz = ref(testQuizCategoryList[0]);
    const search = ref('');

    onMounted(() => {
        showCreate.value = true
        bodyLock(showCreate.value)
    })
</script>
