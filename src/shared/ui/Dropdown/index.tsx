import {  SlotsType, defineComponent } from "vue";
import './index.sass';
import { DropdownProps } from './props';

type DropdownSlots = {
    default: () => JSX.Element
}

export const Dropdown  = defineComponent({
    props: DropdownProps(),
    slots: Object as SlotsType<DropdownSlots>,
      setup(props, { slots }) {
        const openDropdown = () => {
            if (props.open === true) {
                return 'open'
            }
        }

        return () => (
          <div class={`dropdown-container  dropdown-container--${openDropdown()} ${ props.customClass }`}>
            { slots.default() }
          </div>
        );
      }
})
