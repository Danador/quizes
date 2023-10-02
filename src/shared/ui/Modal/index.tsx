import { SlotsType, defineComponent, ref, Ref } from 'vue';
import './index.sass';
import { ModalProps } from './props';
import { Button } from '../Button';
import { Icon } from '../Icon';

type Loading = boolean | number;

type ModalSlots = {
    default: () => JSX.Element
}

export const Modal = defineComponent({
  props: ModalProps(),
  slots: Object as SlotsType<ModalSlots>,
  emit:['close'],
  setup(props, { emit }) {
    const innerLoading: Ref<Loading> = ref(false);
    const handleClick = (event: Event) => {
      if (innerLoading.value) {
        event.preventDefault();
        return;
      }
      emit('close', event);
    };
    const openModal = () => {
      if (props.open) {
        return 'open';
      } else {
        return '';
      }
    };
    return {
        handleClick,
        openModal
    };
  },
  render(props){
    const { handleClick, openModal } = this
    return (
        <div
          id={props.name}
          class={`modal ${openModal()}`}
        >
          <div class={`modal-container ${props.containerClass ? props.containerClass : ''}`}>
            {props.info ? (
              <div class="modal-info">
                {props.title ? (<span class={`${ props.titleClass ? props.titleClass : '' } modal-info_title`}>{props.title}</span>) : null}
                <Button
                  onClick={handleClick}
                  customClass="modal-info_close"
                >
                  <Icon name="close"/>
                </Button>
              </div>
            ) : ''}
            {this.$slots.default()}
          </div>
        </div>
      );
  }
});
