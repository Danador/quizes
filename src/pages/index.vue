<template>
    <div
        class="grid h-full grid-rows-a1 gap-x-6 lg:px-6 xl:grid-cols-a1 xl:grid-rows-1 xl:pl-0 xl:pr-16"
    >
        <div class="flex h-0 items-center gap-x-6 xl:sticky xl:top-0 xl:h-screen">
            <Sidebar
                :class="quizInside ? 'hidden xl:block' : ''"
                logo
                main
                :open="openSettings && !quizInside"
                :switchSidebar="!quizInside"
                :rolled="quizInside"
                :menu="mainMenu"
            />
            <Sidebar
                v-if="quizInside"
                class="xl:max-w-xs"
                :back="additionalSidebar.back"
                :menu="additionalSidebar.menu"
                :open="openSettings"
                switchSidebar
            />
        </div>
        <div class="grid grid-rows-a1 gap-6 xl:w-auto">
            <TopBar :list="list"/>
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { onMounted, ref, computed, watch } from 'vue';
import { mainMenu, additionalSidebar, quizTabs } from '@/shared';
import { Sidebar, TopBar } from '@/widgets';
import { useRoute } from 'vue-router'

const openSettings = ref(true);
const quizInside = ref(false);
const ABTest = {
    A: {
        percent: '90',
    },
    B: {
        percent: '24',
    },
};

const list = [
    {
        title: 'Юридическая информация',
        link: '#'
    },
    {
        title: 'Кондитерская информация',
        link: '#'
    },
    {
        title: 'Металургическая информация',
        link: '#'
    }
]

const route = useRoute();

const path = computed(() => route.path)

let tabsPaths = ['start-page', 'questions', 'result', 'contacts']

watch(path, () => {
    path.value.includes('quiz') ? quizInside.value = true : quizInside.value = false;
    tabsPaths.some(tabPath => {
        if (path.value.includes(tabPath)) {
            path.value.includes(tabPath) ?  additionalSidebar.value.menu[0].url = `quiz/${tabPath}` : additionalSidebar.value.menu[0].url = 'quiz/start-page'
        }
    })
})
</script>
