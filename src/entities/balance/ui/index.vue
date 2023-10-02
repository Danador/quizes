<template>
    <div
        :class="balanceClass"
        v-on-click-outside="() => (balanceDropdown = false)"
        class="relative hidden group lg:flex"
    >
        <Button
            @click="balanceDropdown = !balanceDropdown"
            customClass="!px-4 !py-2.5 bg-green text-white group-hover:bg-light-green-2 !rounded-l !rounded-r-none"
            side="left"
        >
            <Icon name="wallet" />
            <span>5000 ₽</span>
        </Button>
        <Button
            @click="balanceDropdown = !balanceDropdown"
            customClass="!px-4 !py-2.5 bg-light-orange text-white group-hover:bg-[#ffd789] !rounded-r !rounded-l-none"
            side="left"
        >
            <Icon name="quizes" />
            <div class="flex items-center space-x-1">
                <span>2000</span>
                <span class="icon-bonus"></span>
            </div>
        </Button>
        <Dropdown
            :open="balanceDropdown"
            customClass="top-[calc(100%+20px)]"
        >
            <div class="grid w-[290px]">
                <div class="flex justify-between px-3 py-[18px]">
                    <span class="text-sm text-gray">Баланс</span>
                    <span class="text-sm font-semibold">500,00 ₽</span>
                </div>
                <div class="flex justify-between px-3 py-[18px]">
                    <span class="text-sm text-gray">Бонусы</span>
                    <span class="text-sm font-semibold">0,00</span>
                </div>
                <div class="px-3 w-full border-b border-gray-light">
                    <Button customClass="lg:hover:bg-light-2 border-t border-gray-light w-full" side="left">
                        <Icon name="history" />
                        <span class="text-sm">История платежей</span>
                    </Button>
                    <Button customClass="lg:hover:bg-light-2 border-t border-gray-light w-full" side="left">
                        <Icon name="magazine" />
                        <span class="text-sm">Магазин улучшений</span>
                    </Button>
                </div>
                <div class="grid gap-2.5 px-3 py-2.5">
                    <Button
                        customClass="text-center hover:bg-light-green bg-green text-white w-full"
                    >
                        Пополнить
                    </Button>
                    <Button customClass="w-full" type="secondary"> Сменить тариф </Button>
                </div>
            </div>
        </Dropdown>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Button, Icon, Dropdown } from '@/shared';
import { vOnClickOutside } from '@vueuse/components';

const props = defineProps({
    balanceClass: { type: String, default: null },
});

const balanceDropdown = ref(false);
</script>
