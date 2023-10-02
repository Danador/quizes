<template>
    <Card
        class="pb-24 relative xl:pb-6 px-6 lg:px-0"
    >
        <p class="text-dark uppercase font-semibold text-xl">дизайн квиза</p>
        <div class="grid 2xl:grid-cols-2 gap-6 items-center">
            <div class="p-4 lg:p-8 grid gap-6 bg-gray-light-4 rounded-[10px]">
                <Templates v-model="selectedTemplate" />
                <PageDesign v-model="pageDefault" />
                <ButtonDesign v-model="buttonDefault" />
                <Progress v-model="progres" />
                <p class="text-gray-light-3">Вы можете сохранить свой индивидуальный дизайн, если вам не подходят стандартные стили шаблона</p>
                <Button
                    type="stroke"
                    customClass="bg-green hover:bg-light-green text-white w-max !rounded-[10px]"
                >
                    <span>Сохранить</span>
                </Button>
            </div>
            <div>
                <Modal
                    name="more"
                    :open="showMobilePreview"
                    @close="showMobilePreview = false"
                    class="p-5 lg:p-0 lg:!static lg:!opacity-100 lg:!visible lg:!bg-transparent"
                    containerClass="transition-all duration-500 absolute lg:!w-full lg:relative lg:!p-0 lg:!bg-transparent"
                >
                    <Preview 
                        v-on-click-outside="() => showMobilePreview = false"
                        v-model="compiled"
                    />
                </Modal>
                <PreviewButtons
                    @show="showPreview = !showPreview"
                    :show="showPreview"
                    :display="display"
                    class="justify-end mt-6"
                />
            </div>
        </div>
        <MobilePreviewButton
            :class="showMobilePreview ? 'translate-x-full' : ''"
            @click="showMobilePreview = !showMobilePreview, bodyLock(show)"
        />
    </Card>
</template>

<script setup>
    import { computed, ref, reactive, watch, onMounted } from 'vue';
    import { Card, Button, Modal, bodyLock } from '@/shared';
    import { Templates, PageDesign, ButtonDesign, Progress, Preview } from '@/entities'
    import { PreviewButtons, MobilePreviewButton } from '@/features';
    import { vOnClickOutside } from '@vueuse/components';

    const display = 'desktop'
    const showPreview = ref(true)
    const showMobilePreview = ref(false)
    const selectedTemplate = ref({})

    const buttonDefault = reactive({
        buttonTextColor: '#ffffff',
        buttonRounded: false,
        colorFill: true,
    });

    const pageDefault = ref({});
    const progres = ref({
        progressVariant: 'answers'
    });

    watch(selectedTemplate, () => {
        buttonDefault.buttonColor = selectedTemplate.value.buttonColor;
        pageDefault.value.backgroundColor = selectedTemplate.value.backgroundColor;
        pageDefault.value.textColor = selectedTemplate.value.textColor;
    });

    const compiled = computed(() => {
        const obj = {
            ...pageDefault.value,
            font: pageDefault.value.font ? pageDefault.value.font : 'Poppins',
            ...buttonDefault,
            ...progres.value,
        };
        if (!obj.showProgress) {
            delete obj.progressVariant;
        }
        return obj;
    });

    onMounted(() => {
        buttonDefault.buttonColor = selectedTemplate.value.buttonColor;
    });
</script>
