<template>
    <button 
        @click="showModal = !showModal"
        class="relative box-border grid cursor-pointer grid-cols-a1 items-start gap-[18px] rounded-2lg border bg-white p-4 transition-all duration-300 hover:border-orange lg:justify-items-start lg:p-6"
    >
        <Icon
            class="!h-20 !w-full max-w-[80px] lg:!h-[105px] lg:max-w-[130px]"
            :name="data.icon"
        />
        <div class="text-gray-5 text-left lg:max-w-[180px]">
            <p class="text-lg font-semibold uppercase lg:text-2xl">{{ data.title }}</p>
            <p class="text-xm font-light lg:text-base">{{ data.description }}</p>
        </div>
    </button>
    <SlideModal
        :title="data.title"
        :open="showModal"
        name="detailQuestion"
        @close="showModal = false"
    >
        {{ data }}
        <div 
            v-on-click-outside="() => showModal = false"
            class="grid gap-8"
        >
            <div>
                <VariantButton
                    v-model="data.settings"
                    :buttonVariantPreview="buttonVariantPreview"
                    v-if="data.variant === 'button'"
                />
                <VariantBaner
                    v-model="data.settings"
                    v-else-if="data.variant === 'baner'"
                />
                <VariantBody
                    v-model="data.settings"
                    v-else-if="data.variant === 'body'"
                />
                <VariantOpen
                    v-model="data.settings"
                    v-else-if="data.variant === 'open'"
                />
            </div>
            <div class="grid gap-6">
                <p class="uppercase text-gray-5 font-semibold">настройки автооткрытия</p>
                <div>
                    <Checkbox
                        id="autoOpen"
                        v-model="data.settings.autoOpen"
                        label="Автооткрытие квиза"
                    />
                    <Checkbox
                        class="mt-4"
                        id="openInLeave"
                        v-model="data.settings.openInLeave"
                        label="Открывать квиз при попытке уйти с сайта"
                    />
                </div>
                <Input
                    id="showIn"
                    label="показывать через сек"
                    placeholder="введите число"
                    v-model="data.settings.showIn"
                />
                <div class="max-w-[250px]">
                    <Checkbox
                        id="reopen"
                        v-model="data.settings.reopen"
                        label="Открывать каждый раз"
                    />
                    <Checkbox
                        class="mt-4"
                        id="disableMobileAutoOpen"
                        v-model="data.settings.disableMobileAutoOpen"
                        label="Отключать автооткрытие на мобильных устройствах"
                    />
                </div>
            </div>
        </div>
        <template #content>
            <div class="relative w-full max-w-[450px] mx-auto bg-light overflow-hidden rounded-xl">
                <div class="flex w-full items-center gap-3 bg-gray-3 px-6 py-2.5">
                    <i class="h-7 w-7 rounded-full bg-gray-light-3"></i>
                    <i class="h-7 w-7 rounded-full bg-gray-light-3"></i>
                    <i class="h-7 w-7 rounded-full bg-gray-light-3"></i>
                </div>
                <div
                    key="0"
                    class="flex flex-col gap-8 bg-gray-light-4 px-8 pb-40 pt-10"
                >
                    <div class="h-10 w-full rounded-md bg-gray-light"></div>
                    <div class="h-10 w-full rounded-md bg-gray-light"></div>
                    <div
                        ref="bodyVariantPreview"
                        class="bodyVariant h-auto"
                        :class="
                            data.variant !== 'body' &&
                            data.variant !== 'open'
                                ? 'h-11'
                                : ''
                        "
                    >
                        <p
                            v-if="data.variant === 'body'"
                            class="max-w-[300px] text-center text-base font-medium leading-[140%] text-gray-5"
                        >Квиз будет открыт прямо в том месте, где вы установите код на сайте</p>
                        <p
                            v-if="data.variant === 'open'"
                            class="max-w-[300px] text-center text-base font-medium leading-[140%] text-gray-5"
                        >Квиз будет открываться через указанное время</p>
                    </div>
                </div>
                <button
                    v-if="data.variant === 'button'"
                    ref="buttonVariantPreview"
                >
                </button>
                <div
                    v-if="data.variant === 'baner'"
                    ref="banerVariantPreview"
                >
                    <div class="flex items-center gap-3 text-black">
                        <Icon name="checkList" />
                        <div class="text-gray-5">
                            <p class="font-semibold uppercase">{{ data.settings.title }}</p>
                            <p>{{ data.settings.subtitle }}</p>
                        </div>
                    </div>
                    <div>
                        <Icon name="close" />
                    </div>
                </div>
                <Button
                    v-if="data.variant === 'baner'"
                    key="3"
                    size="small"
                    type="stroke"
                    customClass="!px-8 !py-5 text-white bg-green text-white absolute bottom-5 left-1/2 -translate-x-1/2 shadow-green rounded-full"
                >
                    <p>Начать квиз</p>
                </Button>
            </div>
        </template>
    </SlideModal>
</template>
<script setup lang="ts">
    import { Ref, ref, PropType, watch, onMounted, computed } from 'vue';
    import { Button, Icon, Checkbox, Input, bodyLock } from '@/shared';
    import { SlideModal } from '@/widgets';
    import { VariantButton, VariantBaner, VariantBody, VariantOpen, addButtonStyle, addBanerStyle, addBodyStyle} from '@/entities';
    import { vOnClickOutside } from '@vueuse/components';

    const buttonVariantPreview:Ref = ref(null);
    const banerVariantPreview:Ref = ref(null);
    const bodyVariantPreview:Ref = ref(null);

    type SetupData = {
        id: number | string
        icon: string,
        title: string,
        description: string,
        settings: object,
        variant: string
    }

    const props = defineProps({
        data: { type: Object as PropType<SetupData>, default: () => {} }
    })

    const showModal:Ref = ref(false)

    const updateData = computed(() => props.data.settings)

    watch(showModal, () => {
        bodyLock(showModal.value    )
    })

    // watch(props, () => {
    //     console.log(props.data.settings);
    //     const { variant } = props.data;
    //     variant === 'button' ? addButtonStyle(buttonVariantPreview.value, props.data.settings) : 
    //     variant === 'baner' ? addBanerStyle(banerVariantPreview.value, props.data.settings) : 
    //     variant === 'body' ? addBodyStyle(bodyVariantPreview.value, props.data.settings) : ''
    // });
    
    onMounted(() => {
        console.log(updateData.value);
        // console.log(buttonVariantPreview.value);
    })
</script>

<style>
.bodyVariant {
    display: flex;
    background-color: #efefef;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    height: 130px;
}
</style>