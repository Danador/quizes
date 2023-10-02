<template>
    <div class="relative flex w-max items-center gap-x-6 lg:gap-x-8">
        <Button
            type="stroke"
            size="small"
            href="/"
            customClass="bg-green !p-1 sm:!p-2.5 text-white rounded lg:hidden"
        >
            <Icon name="arrow-3" />
        </Button>
        <div v-on-click-outside="() => (showQuizList = false)" class="relative">
            <Button
                @click="showQuizList = !showQuizList"
                type="stroke"
                side="left"
                customClass="text-dark font-semibold !p-0"
            >
                <i
                    :class="
                    showQuizList
                        ? 'h-0 before:rotate-45 after:-rotate-45 after:bottom-0 before:-top-0.5'
                        : 'h-0.5 before:-top-1.5'
                    "
                    class="relative hidden w-5 bg-green transition-all duration-300 before:absolute before:left-0 before:h-0.5 before:w-full before:bg-green before:transition-all before:duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:bg-green after:transition-all after:duration-300 lg:block"
                ></i>
                <span
                    class="font-semibold uppercase text-sm sm:text-base text-gray-2"
                    v-text="title ? title : quizList[0]?.title"
                ></span>
                <Icon
                    class="transition-all duration-300 lg:hidden"
                    :class="showQuizList ? 'rotate-90' : '-rotate-90'"
                    name="arrow-3"
                />
            </Button>
            <Dropdown
                :open="showQuizList"
                customClass="grid left-0 w-max lg:left-5 top-full !z-[51]"
            >
                <template v-for="quiz in quizList" :key="quiz">
                    <Button
                        @click="(title = quiz.title), (showQuizList = false)"
                        :href="quiz.link"
                        type="stroke"
                        customClass="!py-3.5 font-bold hover:text-green last:border-none !pb-6 border-b border-gray-light text-gray-2"
                    >
                        <span>{{ quiz.title }}</span>
                    </Button>
                </template>
            </Dropdown>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { Dropdown, Button, additionalSidebar, Icon } from '@/shared';
    import { vOnClickOutside } from '@vueuse/components';
    import { onMounted, ref, toRefs } from 'vue';

    type ListObjectType = {
        title: string;
        link: string;
    };

    interface EditorTop {
        testData?: object;
        quizList: Array<ListObjectType>;
    }

    const props = defineProps<EditorTop>();
    const { quizList } = toRefs(props);
    const title = ref('');
    const showQuizList = ref(false);
    const page = ref({});

    onMounted(() => {
        page.value = additionalSidebar.value.menu[0];
    });
</script>
