import { defineComponent, ref, computed } from "vue";
import { Icon, Button } from '@/shared'
import { propsSidebar, MenuType } from "./props";
import { RouterLink } from "vue-router";

import { useRoute } from "vue-router";

import './index.sass'


export const Sidebar = defineComponent({
    props: propsSidebar(),
    emits: ['click', 'update:modelValue'],
    setup(props, { emit }) {
        let selected = ref(0)
        let open = ref(props.open)

        const hideSidebar = (value: unknown) => {
            const sidebars = document.querySelectorAll('.sidebar-container')
            const textList = document.querySelectorAll('.sidebar-text_hide')
            if (value) {
                sidebars?.forEach(sidebar => {
                    sidebar?.classList.add('close')
                })
                setTimeout(() => {
                    textList.forEach(elem => {
                        elem.setAttribute("style", "display: none;")
                    });
                }, 300)
            } else {
                sidebars?.forEach(sidebar => {
                    sidebar?.classList.remove('close')
                })
                textList.forEach(elem => {
                    elem.removeAttribute("style")
                });
            }
        }

        const model = computed({
            get() {
              return props.modelValue
            },
            set(value) {
              emit('update:modelValue', value)
            }
        })

        const showSidebar = () => {
            hideSidebar(open.value)
            open.value = !open.value
        }

        const route = useRoute()
        const path = computed(() => route.path)

        return { selected, open, path, model, showSidebar }
    },
    render(props){
        const { menu, back, logo, switchSidebar, switchTitle, rolled, main } = props

        return(
            <div class={`sidebar-container  ${rolled ? 'rolled' : ''} ${back ? 'back' : ''}`}>
                {back ? (
                        <Button
                            href={back.link}
                            side="left"
                            size="small"
                            customClass={`${
                                this.open ? 'p-0 grid' : 'bg-orange block w-max'
                              } whitespace-nowrap text-gray-2 font-bold hidden lg:block sidebar-link uppercase`}
                        >
                            <Icon class={this.open ? 'text-light-orange' : 'text-white'} name="arrow-3"/>
                            { this.open ? (<span class="sidebar-text_hide sidebar-link-text">{back.title}</span>)  : '' }
                        </Button>
                    ) : ''
                }
                <div class="sidebar-info">
                    {logo ? 
                        <div class="sidebar-logo">
                            <Icon class="logo" name="quizes"/>
                            <span class="logo-text sidebar-text_hide hide">
                                    <span class="logo-text-2">квиз</span>
                                маркет
                            </span>
                        </div>
                     : ''}
                    <ul class={`sidebar-menu ${main ? 'main' : ''}`}>
                        {menu.map((button:MenuType) => (
                            <li class={(this.path.includes(button.url) ? 'selected' : '')}>
                                <a 
                                    href={`/#${button.url}`}
                                    class={
                                        'sidebar-button ' +
                                        (this.path.includes(button.url) ? 'selected' : '')
                                    }
                                >
                                    <Icon name={button.icon}/>
                                    <span class="sidebar-text_hide hide">{button.title}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    {switchSidebar ? (
                        <button
                            class="sidebar-switcher"
                            onClick={() => { 
                                this.showSidebar(),
                                this.$emit('click')
                            }} 
                        >
                            <i class="switch"></i>
                            {switchTitle ? 
                                (
                                    <span class="sidebar-text_hide" v-text={switchTitle}></span>
                                ) : 
                                ''
                            }
                        </button>
                        ) : ''
                    }
                </div>
            </div>
        )
    }
})

// { icon ? (<Icon name={button.icon}/>) : '' }
// { customIcon ? this.$slots.icon : '' }
