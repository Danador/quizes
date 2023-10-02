<template>
    <div class="relative h-56 overflow-hidden rounded-2lg">
        <img class="absolute z-[1] h-full w-full object-cover" :src="data.img" alt="test" />
        <div class="relative z-[2] flex h-full w-full items-end bg-black/50 p-3 lg:p-6">
            <div class="flex flex-col gap-4 text-white">
                <button
                    @click="emit('click')"
                    class="text-sm font-semibold uppercase before:absolute before:inset-0 lg:text-base"
                >
                    {{ data.title }}
                </button>
                <ul class="flex w-full flex-wrap gap-4">
                    <li
                        v-for="(item, i) in data.categories"
                        :key="i"
                        :id="data.id"
                        class="rounded bg-white/25 px-2.5 py-2 text-xs lg:text-sm"
                    >
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>
const emit = defineEmits(['click']);
const props = defineProps({
    data: { type: Object, default: null },
});
</script>
