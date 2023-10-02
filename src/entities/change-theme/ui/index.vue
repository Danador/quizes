<template>
    <Button 
        size="small" 
        :customClass="[
            dark ? 'bg-dark text-white border-transparent' : 'text-dark border-dark bg-transparent',
            'hover:bg-green rounded-full border z-10 hidden xl:block'
        ]"
        type="stroke"
        @click="dark = !dark"
    >
        <Icon name="moon" />
    </Button>
</template>
<script setup>
    import { ref } from 'vue';
    import { Button, Icon } from '@/shared'

    const dark = ref(false)
</script>
