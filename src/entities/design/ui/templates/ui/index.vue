<template>
    <div>
        <p class="text-gray-light-3 font-light">Вы можете выбрать вариант дизайна квиза из готовых решений</p>
        <div class="mt-4 flex flex-wrap gap-4 lg:gap-6">
            <div
                v-for="solution in listSolutions"
                :key="solution.id"
                @click="selectSolution = solution"
                :class="selectSolution.id === solution.id ? 'border-green' : 'border-transparent'"
                class="flex cursor-pointer gap-2.5 rounded border bg-white p-2.5 transition-all duration-300 hover:border-green"
            >
                <div
                    :style="`background-color: ${solution.backgroundColor}`"
                    class="box-border h-9 w-9 rounded border-2 border-gray-light-3"
                ></div>
                <div
                    :style="`background-color: ${solution.buttonColor}`"
                    class="box-border h-9 w-9 rounded border-2 border-gray-light-3"
                ></div>
                <div
                    :style="`background-color: ${solution.textColor}`"
                    class="box-border h-9 w-9 rounded border-2 border-gray-light-3"
                ></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, watch, ref } from 'vue';
import { useModelProxy, listSolutions } from '@/shared';
import { templatesData } from '@/entities';

const props = defineProps({
    modelValue: { type: Object, default: () => null },
});

const selectSolution = ref(listSolutions.value[0]);

watch(selectSolution, () => {
    model.value = selectSolution.value;
});

const emit = defineEmits(['update:modelValue']);
const model = useModelProxy();

onMounted(() => {
    model.value = selectSolution.value;
});
</script>
