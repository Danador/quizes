<template>
    <tr :draggable="dragEndDrop" class="drag-default">
        <td v-if="checked || dragEndDrop" class="py-6 pl-6">
            <div class="flex items-center gap-2">
                <Checkbox
                    v-if="checked"
                    :type="checkType"
                    :id="`checkbox_${data?.id}`"
                    :value="data?.id"
                    v-model="model.selected"
                    color="yellow"
                />
                <Button
                    v-if="dragEndDrop"
                    type="stroke"
                    customClass="active:cursor-move text-gray-2 drag-btn"
                >
                    <Icon name="drag-and-drop" />
                </Button>
            </div>
        </td>
        <slot></slot>
        <td class="relative px-1 py-7 xl:px-4">
            <div class="flex h-full items-center">
                <Button @click="showMoreId = data.id" type="stroke" customClass="!p-0 lg:hidden hover:text-light-orange text-gray-2">
                    <Icon name="more" />
                </Button>
            </div>
            <div class="hidden justify-end gap-6 items-center lg:flex">
                <Button customClass="!p-0 hover:text-light-orange text-gray-2" :href="edit" type="stroke">
                    <Icon name="edit"/>
                </Button>
                <Button v-if="showBtn" customClass="!p-0 hover:text-light-orange text-gray-2" @click="emit('show')" type="stroke">
                    <Icon name="eye"/>
                </Button>
                <Button v-if="!main" customClass="!p-0 hover:text-light-orange text-gray-2">
                    <Icon name="connect" class="h-6 w-6" />
                </Button>
                <Button customClass="hover:text-light-orange text-gray-2" v-if="main" @click="emit('analyzer')" type="stroke">
                    <Icon name="chart-bar" />
                </Button>
                <CopyBtn customClass="hover:text-light-orange text-gray-2 !p-0" @click="emit('copy')" />
                <DeleteBtn customClass="text-gray-2 hover:text-red-2" @click="emit('delete')" />
            </div>
        </td>
        <Modal
            name="more"
            :open="showMoreId === data.id"
            @close="showMoreId = null"
            class="lg:!hidden"
            :containerClass="`right-0 transition-all duration-500 !rounded-r-none absolute ${
                showMoreId === data.id ? 'translate-x-0' : 'translate-x-full'
            }`"
        >
            <div
                v-on-click-outside="() => (showMoreId = null)"
                class="right-0 flex flex-col gap-y-6 p-6"
            >
                <div v-if="main" class="flex justify-between">
                    <p>Редактировать</p>
                    <button @click="showMoreId = null">
                        <Icon class="h-3 w-3 text-gray-3" name="close" />
                    </button>
                </div>
                <div v-if="main" class="flex justify-between text-sm">
                    <p class="text-gray-2">всего заявок {{ data?.applications }}</p>
                    <a href="#" class="text-green underline">Посмотреть</a>
                </div>
                <div v-if="mainSelection" class="flex justify-between text-sm">
                    <p class="text-gray-2">выбрать главным</p>
                    <Switcher 
                        :id="data.id" 
                        :value="data.id" 
                        v-model="model.mainSelection" 
                        type="radio"
                    />
                </div>
                <div class="flex gap-6">
                    <Button v-if="main" @click="emit('edit')" customClass="!p-0" type="stroke">
                        <Icon name="edit" />
                    </Button>
                    <Button v-if="showBtn" @click="emit('show')" type="stroke" customClass="!p-0">
                        <Icon name="eye" />
                    </Button>
                    <Button v-if="!main" customClass="!p-0">
                        <Icon name="connect" class="h-6 w-6" />
                    </Button>
                    <Button v-if="main" @click="emit('analyzer')" type="stroke" customClass="!p-0">
                        <Icon name="chart-bar" />
                    </Button>
                    <CopyBtn
                        customClass="text-light-orange !p-0 xl:text-gray-2"
                        @click="emit('copy')"
                    />
                    <DeleteBtn
                        customClass="text-red-2 !p-0 xl:text-gray-2"
                        @click="emit('delete')"
                    />
                </div>
                <div v-if="main" class="flex items-center text-gray-2">
                    <Button
                        size="small"
                        @click="copyQuizUrl(data?.link)"
                        customClass="bg-gray-light"
                    >
                        <Icon size="normal" name="copy" />
                    </Button>
                    <span class="ml-1.5 block">{{ data?.link }}</span>
                </div>
            </div>
        </Modal>
    </tr>
</template>
<script setup lang="ts">
import { PropType, ref } from 'vue';
import { Checkbox, useModelProxy, Button, Icon, Modal, Switcher } from '@/shared';
import { vOnClickOutside } from '@vueuse/components';
import { RowProps } from '../model/table-row';
import { CopyBtn, DeleteBtn, copyQuizUrl } from '@/features';

const showMoreId = ref(null);

const props = defineProps({
    edit: { type: String, default: () => '#' },
    checked: { type: Boolean as PropType<RowProps['checked']> },
    dragEndDrop: { type: Boolean as PropType<RowProps['dragEndDrop']> },
    main: { type: Boolean as PropType<RowProps['main']> },
    mainSelection: { type: Boolean, default: false },
    data: { type: Object as PropType<RowProps['data']> },
    checkType: { type: String, default: 'checkbox' },
    showBtn: { type: Boolean, default: false },
    modelValue: {
        type: [Object, Array] as PropType<RowProps['modelValue']>,
        default: () => null,
    },
});
const emit = defineEmits(['update:modelValue', 'analyzer', 'copy', 'edit', 'delete', 'show']);
const model = useModelProxy();
</script>
