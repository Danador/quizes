<template>
    <div class="relative flex gap-3 items-center">
        <div
            class="flex h-8 w-8 items-center justify-center rounded-full bg-green font-second text-lg font-medium text-white lg:h-12 lg:w-12 lg:text-2xl lg:leading-7"
        >
            <span>S</span>
        </div>
        <div class="hidden gap-1 xl:grid">
            <span class="font-second text-lg font-medium leading-5 text-dark"
                >София Трошина</span
            >
            <span class="font-second text-sm text-gray">пользователь</span>
        </div>
        <Button
            @click="profileDropdown = !profileDropdown"
            v-on-click-outside="() => (profileDropdown = false)"
            customClass="before:absolute before:inset-0 !p-0"
            type="stroke"
        >
            <Icon
                :class="profileDropdown ? 'rotate-180' : ''"
                class="text-dark"
                name="arrow-bottom"
            />
        </Button>
        <Dropdown
            :open="profileDropdown"
            customClass="top-[calc(100%+20px)] -left-[calc(100%+6px)] lg:left-[-83%] xl:left-1/2 -translate-x-1/2"
        >
            <div class="grid w-[290px]">
                <div class="px-3 w-full border-b border-gray-light">
                    <Button customClass="!px-3 text-dark text-left lg:hover:bg-light-2 !py-[18px] w-full" type="stroke">
                        Настройки аккаунта
                    </Button>
                    <Button side="left" type="stroke" customClass="text-dark lg:!hidden w-full">
                        <div
                            class="flex h-6 w-6 items-center justify-center rounded-full border border-gray-2"
                        >
                            <Icon size="normal" name="moon" />
                        </div>
                        <span class="text-left">Темная тема</span>
                    </Button>
                    <div class="flex justify-between px-3 py-[18px] text-sm xl:hidden">
                        <span class="text-gray-light-3 font-light">Баланс</span>
                        <span class="text-dark">500,00 ₽</span>
                    </div>
                    <div class="flex justify-between px-3 py-[18px] text-sm xl:hidden">
                        <span class="text-gray-light-3 font-light">Бонусы</span>
                        <span class="text-dark">0,00</span>
                    </div>
                    <Button customClass="!px-3 text-dark text-left !py-[18px] lg:hover:bg-light-2 border-t border-gray-light w-full" type="stroke">
                        Новости
                    </Button>
                    <Button customClass="!px-3 text-dark text-left !py-[18px] lg:hover:bg-light-2 border-t border-gray-light w-full" type="stroke">
                        Часто задаваемые вопросы
                    </Button>
                </div>
                <div class="flex gap-x-4 px-3 py-4">
                    <a href="#">
                        <Icon class="!h-[22px] !w-[22px]" name="vk" />
                    </a>
                    <a href="#" class="tg"></a>
                </div>
                <Button
                    type="stroke"
                    side="left"
                    customClass="border-t text-left text-gray-2 !px-3 !py-4 border-gray-3 lg:hover:bg-light-2"
                >
                    <Icon name="exit" />
                    <span>Выйти</span>
                </Button>
            </div>
        </Dropdown>
    </div>
</template>
<script setup>
    import { ref } from 'vue';
    import { Button, Icon, Dropdown } from '@/shared';
    import { vOnClickOutside } from '@vueuse/components';

    const profileDropdown = ref(false);
</script>
