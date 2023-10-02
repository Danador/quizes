<template>
    <Modal
        :open="showEdit"
        title="название квиза"
        info
        containerClass="xl:max-w-[500px] w-full max-w-[87%]"
    >
        <form 
            v-on-click-outside="() => back()"
            @submit.prevent="submit" 
            class="grid gap-4"
        >
            <label for="quiz_name" class="text-gray-2">Отображается только в вашем личном списке квизов</label>
            <Input placeholder="Введите название квиза" id="quiz_name" v-model="form.quiz_name"/>
            <!-- блок для фиксации ошибок -->
            <!-- <div v-if="errors.quiz_name">{{ errors.first_name }}</div> -->
            <fieldset class="flex gap-4">
                <Button
                    customClass="bg-green text-white hover:bg-light-green"
                >Изменить</Button>
                <Button
                    type="secondary"
                    htmlType="button"
                    @click="back()"
                >
                    Отмена
                </Button>
            </fieldset>
        </form>
    </Modal>
</template>
<script setup>
    import { onMounted, reactive, ref } from 'vue';
    import { Modal, Input, Button, bodyLock, back } from '@/shared'
    import { vOnClickOutside } from '@vueuse/components';

    const showEdit = ref(false)
    const form = reactive({
        quiz_name: null
    })

    onMounted(() => {
        showEdit.value = true
        bodyLock(showEdit.value)
    })
</script>
