<template>
    <div class="w-full bg-white rounded-2lg px-6 relative flex items-center justify-between py-8 border border-light-2">
        <button class="absolute top-0 w-full inset-0" @click="showModal = !showModal"></button>
        <img 
            :src="data.image" 
            class="w-[168px] h-8 object-cover object-center sm:w-[214px] sm:h-[42px]" 
            alt="название"
        />
        <EnableIntegration v-model="enable"/>
    </div>
    <SlideModal
        :title="`Подключение ${data.name}`"
        :open="showModal"
        name="detailQuestion"
        @close="showModal = false"
    >
        <div v-on-click-outside="() => showModal = false">
            <Button
                :href="data.manual"
                type="stroke"
                customClass="underline text-left !px-0 text-green"
            >
                *Инструкция по подключению
            </Button>
            <form @submit.prevent class="gap-6 grid">
                <Input
                    v-if="data.url"
                    label="url crm"
                    v-model="data.url"
                />
                <Input
                    label="логин от crm"
                    placeholder="Введите email"
                    v-model="data.email"
                />
                <Input
                    type="password"
                    label="пароль от crm"
                    placeholder="Введите пароль"
                    v-model="data.password"
                />
                <Button
                    type="stroke"
                    customClass="py-4 px-9 bg-green rounded-2lg max-w-max text-white hover:bg-light-green"
                >
                    Сохранить
                </Button>
            </form>
        </div>
    </SlideModal>
</template>

<script setup lang="ts">
    import { PropType, Ref, ref, watch, computed } from 'vue';
    import { IntegrationType } from '@/entities';
    import { EnableIntegration, updateEnableValue } from '@/features';
    import { Input, Button, bodyLock } from '@/shared'
    import { SlideModal } from '@/widgets'
    import { vOnClickOutside } from '@vueuse/components';

    const showModal:Ref = ref(false)
    const enable:Ref = ref(false)

    const props = defineProps({
        data: { type: Object as PropType<IntegrationType> }
    })

    watch(showModal, () => {
        bodyLock(showModal.value)
    })

    // watch(enable, () => {
    //     updateEnableValue('localhost:8080', 1)
    // })
</script>
