<template>
    <div
        :style="`
            background-color: ${previewData.backgroundColor};
            font-family: ${previewData.font};
            max-width: ${previewType === 'phone' ? '350px' : 'none'};
            margin: ${previewType === 'phone' ? '0 auto' : '0'}
        `"
        class="flex flex-col justify-between rounded-2lg border border-green p-4 transition-all duration-300 xl:min-h-[350px]"
    >
        <div>
            <div class="flex items-center gap-1">
                <Icon class="h-3 w-3 text-green" name="checkList" />
                <span
                    :style="`color: ${previewData.textColor}`"
                    class="text-[14px] font-light leading-[14px]"
                    >Пройдите тест и узнайте нужна ли вам консультация юриста</span
                >
            </div>
            <i
                :style="`background-color: ${opacityColor(previewData.textColor, '40')};`"
                class="mt-[11px] block h-[1px] w-full"
            ></i>
            <div class="mt-[11px]" :class="previewType === 'phone' ? 'pr-7' : ''">
                <p :style="`color: ${previewData.textColor}`" class="text-sm font-semibold">
                    По каким вопросам вы чаще всего обращались?
                </p>
                <div
                    :class="previewType === 'phone' ? 'flex-col' : 'flex-row'"
                    class="mt-2 flex gap-2"
                >
                    <div
                        :style="`
                            color: ${previewData.textColor};
                            background-color: ${opacityColor(previewData.textColor, '1a')};
                        `"
                        class="p-1.5 text-[14px] leading-[14px]"
                    >
                        Можно выбрать несколько вариантов
                    </div>
                    <div
                        :style="`
                            color: ${previewData.textColor};
                            background-color: ${opacityColor(previewData.textColor, '1a')};
                        `"
                        class="p-1.5 text-[14px] leading-[14px]"
                    >
                        Этот вопрос можно пропустить
                    </div>
                </div>
            </div>
            <div
                class="grid gap-3"
                :class="previewType !== 'phone' ? 'grid-cols-2 mt-6' : ' mt-[18px]'"
            >
                <div
                    :style="`
                        border-color: ${opacityColor(previewData.textColor, '40')};
                        box-shadow: 0px 2px 2px 0px ${opacityColor(previewData.textColor, '40')};
                    `"
                    class="rounded-0.5 flex items-center gap-1.5 border p-1.5"
                >
                    <i
                        :style="`border-color: ${opacityColor(previewData.textColor, 'cc')};`"
                        class="block h-1.5 w-1.5 rounded-full border"
                    ></i>
                    <span
                        :style="`color: ${previewData.textColor};`"
                        class="text-[14px] leading-[14px]"
                        >Бизнес</span
                    >
                </div>
                <div
                    :style="`
                        border-color: ${opacityColor(previewData.textColor, '40')};
                        box-shadow: 0px 2px 2px 0px ${opacityColor(previewData.textColor, '40')};
                    `"
                    class="rounded-0.5 flex items-center gap-1.5 border p-1.5"
                >
                    <i
                        :style="`border-color: ${opacityColor(previewData.textColor, 'cc')};`"
                        class="block h-1.5 w-1.5 rounded-full border"
                    ></i>
                    <span
                        :style="`color: ${previewData.textColor};`"
                        class="text-[14px] leading-[14px]"
                        >Продажа недвижимости</span
                    >
                </div>
                <div>
                    <span
                        :style="`color: ${opacityColor(previewData.textColor, 'cc')};`"
                        class="text-[10px] font-medium leading-[15px]"
                        >Свой ответ</span
                    >
                    <div
                        :style="`
                            border-color: ${opacityColor(previewData.textColor, '40')};
                            box-shadow: 0px 2px 2px 0px ${opacityColor(
                                previewData.textColor,
                                '40',
                            )};
                        `"
                        class="rounded-0.5 flex items-center gap-1.5 border p-1.5"
                    >
                        <i
                            :style="`border-color: ${opacityColor(previewData.textColor, 'cc')};`"
                            class="block h-1.5 w-1.5 rounded-full border"
                        ></i>
                        <span
                            :style="`color: ${opacityColor(previewData.textColor, '40')};`"
                            class="text-[14px] leading-[14px]"
                            >Житейские вопросы</span
                        >
                    </div>
                </div>
            </div>
        </div>
        <div>
            <i
                :style="`background-color: ${opacityColor(previewData.textColor, '40')};`"
                class="mt-[11px] block h-[1px] w-full"
            ></i>
            <span v-if="previewData === 'phone'">aso;doasoda</span>
            <div
                :class="previewType === 'phone' ? 'grid-cols-1a' : 'grid-cols-1aa'"
                class="mt-[11px] grid items-center justify-end gap-3"
            >
                <Transition name="fade" mode="out-in">
                    <div v-if="previewData.showProgress" class="w-full">
                        <div
                            v-if="previewData.progressVariant === 'answers'"
                            class="cursor-pointer rounded transition-all duration-300"
                        >
                            <p
                                :style="`
                                    color: ${previewData.textColor};
                                    font-size: 12px;
                                    line-height: 12px;
                                `"
                            >
                                Отвечено 2 из 10 вопросов
                            </p>
                        </div>
                        <div
                            v-if="previewData.progressVariant === 'progress'"
                            class="grid cursor-pointer grid-cols-1a items-center gap-2.5 rounded transition-all duration-300"
                            :class="previewType === 'phone' ? 'w-full' : 'w-[80%]'"
                        >
                            <div
                                class="relative h-1 w-full rounded-full before:block before:h-1 before:w-1/2 before:rounded-full before:bg-[--progress-background]"
                                :style="`
                                    --progress-background: ${previewData.buttonColor};
                                    background-color: ${opacityColor(previewData.textColor, '26')};
                                `"
                            ></div>
                            <span
                                :style="`
                                color: ${previewData.textColor};
                                font-size: 12px;
                                line-height: 12px;
                            `"
                                >50%</span
                            >
                        </div>
                        <div
                            v-if="previewData.progressVariant === 'step'"
                            :style="`color: ${previewData.textColor};`"
                            class="flex cursor-pointer items-center gap-2.5 rounded text-[14px] leading-[14px] transition-all duration-300"
                        >
                            <p>Шаг</p>
                            <div
                                :style="`background-color: ${previewData.buttonColor};`"
                                class="flex h-7 w-7 items-center justify-center rounded text-white"
                            >
                                1
                            </div>
                            <p>из 10</p>
                        </div>
                    </div>
                </Transition>
                <span
                    :class="
                        previewData.progressVariant && previewType === 'phone'
                            ? 'row-start-2 col-span-2 mx-auto'
                            : 'col-start-2'
                    "
                    class="whitespace-nowrap text-xs leading-[13px]"
                >
                    Сделано на
                    <span class="uppercase text-green">Квиз</span>
                    <span class="uppercase">Маркет</span>
                </span>
                <button
                    :class="
                        previewData.progressVariant && previewType === 'phone' ? '' : 'col-start-3 '
                    "
                    class="flex items-center gap-1.5 px-4 py-3 text-[10px] leading-[12px] transition-all duration-300"
                    :style="`
                        color: ${previewData.buttonTextColor};
                        background-color: ${
                            previewData.colorFill ? previewData.buttonColor : 'transparent'
                        };
                        border: 1px solid ${
                            previewData.colorFill ? 'transparent' : previewData.buttonColor
                        };
                        border-radius: ${previewData.buttonRounded ? '100' : ''}px;
                    `"
                >
                    <span>Далее</span>
                    <Icon class="!h-2.5 !w-2.5 -rotate-180" name="arrow-3" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, watch, ref } from 'vue';
import { useModelProxy, Icon } from '@/shared';

const props = defineProps({
    modelValue: { type: Object, default: () => null },
    previewType: { type: String, default: () => 'descktop' },
});

const previewData = ref({});

const emit = defineEmits(['update:modelValue']);
const model = useModelProxy();

const opacityColor = (color, opacity) => {
    if (color) {
        color = color.slice(0, 7);
    }
    return `${color}${opacity};`;
};

watch(model, () => {
    previewData.value = model.value;
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
