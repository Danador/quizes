import './index.sass'

import { defineComponent, computed, ref, onMounted } from "vue";
import { Button, Icon } from "@/shared";
import { NavBarProps } from "./props";

export const NavBar = defineComponent({
    emit: 'update:modelValue',
    props: NavBarProps(),
    setup(props, { emit }){
        const step = ref(0)
        const navigation = ref({})
        const page = ref('')
        const model = computed({
            get() {
              return props.modelValue
            },
            set(value) {
              emit('update:modelValue', value)
            }
        })
        const setNavigation = (number:number) => {
            if (number <= props.navigationList?.length) {
                props.navigationList?.forEach((item:object, i:number) => {
                    if (step.value === i) {
                        return navigation.value = item
                    }
                })
            }
        }

        const getPageUrl = () => {
            props.navigationList?.forEach((item, i) => {
                if (page.value === item.url) {
                    step.value = i
                }
            })
        }

        onMounted(() => {
            page.value = window.location.hash.replace('#/', '/')
            getPageUrl()
        })
        
        return {
            model,
            setNavigation,
            getPageUrl,
            step,
            navigation
        }
    },
    render(){
        this.setNavigation(this.step)
        return (
            <div class="navigation-container">
                <div class="navigation-menu">
                    {this.navigationList?.map((nav, i) => (
                        <Button
                            key={i}
                            type="stroke"
                            href={nav.url}
                            customClass={`${this.model?.title === nav?.title ? 'active' : ''} nav-button`}
                        >
                            <span>{ nav.title }</span>
                        </Button>
                    ))}
                </div>
                <div class="navigation-mobile-menu">
                    <Button
                        type="stroke"
                        size="small"
                        disabled={this.step <= 0}
                        href={this.navigationList[this.step - 1]?.url}
                        onClick={() => this.step--}
                        customClass="nav-btn-prev"
                    >
                        <Icon name="arrow-3"/>
                    </Button>
                    <span>{this.navigation.title}</span>
                    <Button
                        type="stroke"
                        size="small"
                        href={this.navigationList[this.step + 1]?.url}
                        onClick={() => this.step++}
                        disabled={this.step >= this.navigationList?.length - 1}
                        customClass="nav-btn-next"
                    >
                        <Icon name="arrow-3"/>
                    </Button>
                </div>
            </div>
        )
    }
})
