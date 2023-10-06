/**
 * @description: Store 관련 interface * Type Group
 */
export namespace Store {
  /**
   * @description Modal Interface Group
   */
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