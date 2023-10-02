<template>
    <Button :size="size" :customClass="customClass">
        <Icon name="trash" />
    </Button>
</template>
<script setup lang="ts">
import { Button, Icon } from '@/shared';

const props = defineProps({
    customClass: { type: String, default: '' },
    size: { type: String, default: '' },
});
</script>
