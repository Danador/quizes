<template>
    <div
        :class="quizInside ? 'grid 2xl:grid-cols-a1' : ''"
        class="z-50 w-full gap-6 bg-white px-6 py-4 lg:px-0 xl:pt-6"
    >
        <div class="flex gap-x-2 row-start-1 xl:hidden">
            <Icon class="!h-8 !w-8 text-light-orange" name="quizes" />
            <span class="flex gap-x-1 text-[20px] font-bold uppercase text-dark">
                <span class="text-green">квиз</span>маркет
            </span>
        </div>
        <div 
            v-if="quizInside"
            :class="test ? 'grid grid-cols-1a' : ''"
            class="flex gap-8 items-center w-full 2xl:justify-start col-span-2 lg:col-auto"
        >
            <QuizSelected :quizList="list"/>
            <Testing v-if="test" :data="test"/>
        </div>
        <div class="flex gap-6 row-start-1 2xl:row-auto items-center justify-end shadow-common lg:shadow-none">
            <Balance class="mr-2 hidden lg:block"/>
            <ChangeTheme/>
            <User/>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { Icon } from '@/shared';
    import { Balance, ChangeTheme, QuizSelected, Testing, User } from '@/entities'
    
    const props = defineProps({
        legalAdvice: { type: Boolean, default: null },
        user: { type: Object, default: () => {} },
        test: { type: Object, default: () => {} },
        list: { type: Array, default: () => null }
    });
    const quizInside = ref(false)

    onMounted(() => {
        window.location.hash.includes('quiz') ? quizInside.value = true : quizInside.value = false
        // console.log(quizInside.value);
    })
</script>
