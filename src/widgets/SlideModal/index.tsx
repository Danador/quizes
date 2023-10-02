import { defineComponent, SlotsType, Ref, ref } from "vue";
import { SlideModalProps } from "./props";
import { Button, Icon } from "@/shared";
import './index.sass'

type Loading = boolean | number;

export const SlideModal = defineComponent({
  props: SlideModalProps(),
  slots: {
    default: () => null,
    content: () => null
  } as SlotsType<{ default: () => any, content: () => any }>,
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
      }
      return '';
    };

    return {
      handleClick,
      openModal
    };
  },
  render(){
    const { handleClick, openModal } = this

    return(
      <div class={`modal-slide modal-slide--${openModal()}`}>
        <div class={`modal-slide__sidebar modal-slide__sidebar--${openModal()}`}>
          <div class="modal-slide__head">
            <p>{this.title}</p>
            <Button
              type="stroke"
              onClick={handleClick}
              customClass="modal-slide__close"
            >
              <Icon size="big" name="close"/>
            </Button>
          </div>
          { this.$slots.default() }
        </div>
        { this.$slots.content ? (
            <div class={`modal-slide__content modal-slide__content--${openModal()}`}>
                { this.$slots.content() }
            </div>
        ) : '' }
      </div>
    )
  }
})
