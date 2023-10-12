import * as ReactDOM from 'react-dom/client';
import {ToastUi} from './ToastUi';

export type ToastVariant = 'success' | 'warning' | 'secondary' | 'error';

interface Messages {
  id: number;
  message: string;
  variant: ToastVariant;
}

class Toast {
  element: HTMLElement; /* 토스트 요소 */
  toast: ReactDOM.Root; /* 렌더링 위치 */
  messages: Messages[]; /* 메세지 목록 */
  duration: number; /* 유지 시간  */

  constructor() {
    this.duration = 100000; // 기본 1 초

    this.element =
      typeof window !== 'undefined' &&
      (document.querySelector('#toast') as HTMLDivElement);

    if (!this.element) return;

    this.messages = [];
    this.toast = ReactDOM.createRoot(this.element);
  }

  message(message: string, variant: ToastVariant = 'success', duration?: number) {
    if (duration) this.duration = duration;

    this.messages.push({
      id: this.messages.length,
      message,
      variant,
    });

    this.toast.render(
      <ToastUi
        messages={this.messages}
        closeMessage={this.closeMessage.bind(this)}
      />,
    );
    this.autoCloseMessage(this.duration, 1);
  }

  closeMessage(id: number) {
    const index = this.messages.findIndex((value) => value.id === id);
    this.messages.splice(index, 1);
    this.toast.render(
      <ToastUi
        messages={this.messages}
        closeMessage={this.closeMessage.bind(this)}
      />,
    );
  }

  autoCloseMessage(duration: number, id: number) {
    setTimeout(
      () => {
        this.closeMessage(id);
      },
      duration,
      this,
    );
  }
}

/* eslint import/no-anonymous-default-export: [2, {"allowNew": true}] */
export default new Toast();
