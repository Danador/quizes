<template>
    <div
        v-if="data?.A && data?.B"
        class="flex w-full justify-between gap-x-1 rounded bg-light p-1 shadow-common lg:w-auto lg:justify-start"
    >
        <div
            v-if="data?.A"
            @click="select = 0"
            :class="select === 0 ? 'bg-green text-white' : 'text-dark bg-white'"
            class="flex cursor-pointer items-center gap-x-2.5 rounded px-3 py-2 text-dark transition-all duration-300"
        >
            <span class="flex gap-x-1 text-xs"
                >A<span>{{ data.A.percent }}</span
                >%</span
            >
            <Button
                type="stroke"
                customClass="text-dark !p-1 hover:text-soft-orange !rounded !bg-gray-light"
            >
                <Icon size="normal" name="copy" />
            </Button>
            <Button
                type="stroke"
                customClass="text-dark !p-1 hover:text-soft-orange !rounded !bg-gray-light"
            >
                <Icon size="normal" name="trash" />
            </Button>
        </div>
        <div
            v-if="data?.B"
            @click="select = 1"
            :class="select === 1 ? 'bg-green text-white' : 'text-dark bg-white'"
            class="flex cursor-pointer items-center gap-x-2.5 rounded px-3 py-2 transition-all duration-300"
        >
            <span class="flex gap-x-1 text-xs"
                >B<span>{{ data.B.percent }}</span
                >%</span
            >
            <Button
                type="stroke"
                customClass="text-dark !p-1 hover:text-soft-orange !rounded !bg-gray-light"
            >
                <Icon size="normal" name="copy" />
            </Button>
            <Button
                type="stroke"
                customClass="text-dark !p-1 hover:text-soft-orange !rounded !bg-gray-light"
            >
                <Icon size="normal" name="trash" />
            </Button>
        </div>
    </div>
</template>
<script setup>
import { Button, Icon } from '@/shared';
import { ref } from 'vue';
const select = ref(0);
const props = defineProps({
    data: { type: Object, default: () => null },
});
</script>
