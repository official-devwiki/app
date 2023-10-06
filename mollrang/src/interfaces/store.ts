export namespace Store {
  export namespace Modal {
    type Type = 'fade' | 'bottom-slide'

    export interface State {
      type: string;
      modalType: Type;
      isOpen: boolean;
    }

    export interface SliceState {
      modal: State;
    }
  }
}