<template>
    <div
        class="fixed -right-[72px] top-1/2 flex w-max -rotate-90 items-center gap-x-2.5 rounded-t bg-light-green-3 px-5 py-3 transition-all duration-300 lg:hidden"
    >
        <span class="text-sm font-semibold leading-[18px] text-gray-2">предпросмотр</span>
        <button
            @click="emit('click')"
            class="rounded-full bg-green p-2 text-white shadow-[rgba(255_195_80_0.35)] before:absolute before:inset-0"
        >
            <Icon class="!h-4 !w-4" name="eye" />
        </button>
    </div>
</template>

<script setup>
import { Icon } from '@/shared';

const emit = defineEmits(['click']);
</script>
