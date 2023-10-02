<template>
    <Button :customClass="customClass" type="stroke">
        <Icon name="copy" />
    </Button>
</template>
<script setup lang="ts">
import { Button, Icon } from '@/shared';

const props = defineProps({
    customClass: { type: String, default: '' },
});
</script>
