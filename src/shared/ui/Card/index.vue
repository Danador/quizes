<template>
    <div class="grid grid-rows-a1a gap-6 relative px-6 pb-24 lg:px-0 xl:pb-6">
        <p v-if="title" class="text-xl font-semibold uppercase text-dark">{{ title }}</p>
        <CardHead>
            <slot name="head"></slot>
        </CardHead>
        <CardBody>
            <div 
                :class="`${bodyClass ? `${bodyClass} lg:overflow-y-auto h-full` : ''}`"
            >
                <slot></slot>
            </div>
        </CardBody>
        <CardFooter>
            <slot name="footer"></slot>
        </CardFooter>
    </div>
</template>
<script setup>
import { useSlots } from 'vue';
import { CardBody, CardHead, CardFooter } from '@/shared';
const slots = useSlots();
const props = defineProps({
    title: { type: String, default: () => null },
    bodyClass: { type: String, default: () => '' }
});
</script>
