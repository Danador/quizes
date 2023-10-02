<template>
    <Card title="интеграции">
        <div class="bg-light rounded-2lg grid gap-6 p-6 xl:p-8">
            <p class="uppercase text-dark font-semibold text-xl">CRM-системы</p>
            <div class="grid gap-6 sm:grid-cols-2">
                <template
                    v-for="crm in testCrmList"
                    :key="crm.id"
                >
                    <CrmCard :data="crm"/>
                </template>
            </div>
        </div>
    </Card>
</template>

<script setup>
    import { Card, testCrmList } from '@/shared'
    import { CrmCard } from '@/widgets'
</script>
