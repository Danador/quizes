<template>
    <div
        class="relative -mx-6 overflow-y-auto px-6 xl:-mx-0 xl:max-h-[none] xl:overflow-visible xl:px-0"
    >
        <table class="w-full relative">
            <thead class="sticky top-0 z-[5]">
                <slot name="thead"></slot>
            </thead>
            <slot></slot>
        </table>
    </div>
</template>
<script setup></script>
