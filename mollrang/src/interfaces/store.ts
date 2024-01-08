export const MODAL_TYPE = {
  FADE: 'fade',
  BOTTOM_SLIDE: 'bottom-slide'
}
export type ModalType = typeof MODAL_TYPE[keyof typeof MODAL_TYPE];

/**
 * @description: Store 관련 interface * Type Group
 */
export namespace Store {
  /**
   * @description Modal Interface Group
   */
  export namespace Modal {
    export interface State {
      type: string;
      modalType: ModalType;
      isOpen: boolean;
    }

    export interface SliceState {
      modal: State;
    }
  }

  /**
   * @description Quiz Interface Group
   */
  export namespace Quiz {
    export interface State {
      currentStep: number;
      hasResult: boolean;
      timer: number;
      endOfQuiz: boolean;
    }
  }

  export namespace Utility {
    export interface State {
      sideBarIsOpen: boolean;
      isLoading: boolean;
    }
  }
}
