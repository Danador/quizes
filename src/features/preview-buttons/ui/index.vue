<template>
    <div class="hidden items-center gap-x-24 xl:flex">
        <div class="flex gap-x-2">
            <Button
                @click="model = 'desktop'"
                :customClass="[
                    model === 'desktop' ? '!bg-green !text-white' : '',
                    '!p-[18px] !rounded-2lg !duration-200',
                ]"
                type="secondary"
            >
                <Icon class="!transition-none" name="laptop" />
            </Button>
            <button @click="model = 'phone'"></button>
            <Button
                @click="model = 'phone'"
                :customClass="[
                    model === 'phone' ? '!bg-green !text-white' : '',
                    '!p-[18px] !rounded-2lg !duration-200',
                ]"
                type="secondary"
            >
                <Icon class="!transition-none" name="phone" />
            </Button>
            <Button
                @click="model = 'wide'"
                :customClass="[
                    model === 'wide' ? '!bg-green !text-white' : '',
                    '!p-[18px] !rounded-2lg !duration-200',
                ]"
                type="secondary"
            >
                <Icon class="!transition-none" name="wide" />
            </Button>
        </div>
        <Button
            @click="emit('eye'), (show = !show)"
            type="stroke"
            :customClass="[
                show
                    ? 'shadow-yellow bg-green text-white border-transparent'
                    : ' text-light-orange border-light-orange',
                'rounded-full !p-4 border-box border transition-all',
            ]"
        >
            <Icon class="!transition-none" name="eye" />
        </Button>
    </div>
</template>
<script setup>
import { Button, Icon, useModelProxy } from '@/shared';

const props = defineProps({
    modelValue: { type: String, default: () => null },
    show: { type: Boolean, default: null },
});

const emit = defineEmits(['update:modelValue']);
const model = useModelProxy();
</script>
