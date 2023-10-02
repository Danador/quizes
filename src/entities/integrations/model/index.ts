import { reactive, computed } from "vue";

export type InntegrationType = {
    name: string,
    email: string,
    password: string,
    manual?: string,
    url?: string,
    image: string
}

export const integrationData = reactive<InntegrationType>({
    name: "",
    email: "",
    password: "",
    image: ""
})

