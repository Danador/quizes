<template>
    <div
        class="col-start-2 row-start-1 flex justify-end gap-x-3 lg:col-auto lg:row-auto lg:justify-start"
    >
        <slot></slot>
        <Button
            :href="create"
            size="small"
            customClass="text-white bg-green hover:bg-light-green-2"
        >
            <Icon name="plus" />
        </Button>
        <!-- <Button
            @click="emit('copy')"
            size="small"
            customClass="text-white bg-light-orange hover:bg-orange"
        >
            <Icon name="copy"/>
        </Button> -->
        <Button
            @click="emit('delete')"
            size="small"
            :disabled="btnDeleteDisabled"
            customClass="text-white bg-red-2 hover:bg-red disabled:opacity-50 disabled:pointer-events-none"
        >
            <Icon name="trash" />
        </Button>
    </div>
</template>

<script setup>
import { Button, Icon } from '@/shared';
const props = defineProps({
    create: { type: String, default: () => '#' },
    btnDeleteDisabled: { type: Boolean, default: () => false },
});
const emit = defineEmits(['delete']);
</script>
