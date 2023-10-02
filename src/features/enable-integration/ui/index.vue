<template>
    <Switcher v-model="model"/>
</template>

<script setup lang="ts">
    import { Switcher, useModelProxy } from '@/shared'
    import { PropType } from 'vue';

    type EnableType = {
        modelValue: boolean
    }

    const props = defineProps({
        modelValue: { type: Boolean as PropType<EnableType['modelValue']>  }
    })

    const emit = defineEmits(['update:modelValue']);
    const model = useModelProxy();
</script>
