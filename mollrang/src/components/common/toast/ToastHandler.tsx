import * as ReactDOM from "react-dom/client";
import { ToastUi } from "./ToastUi";
import { v4 as uuid } from "uuid";

export type ToastVariant = "success" | "warning" | "secondary" | "error";

interface Messages {
  id: string;
  message: string;
  variant: ToastVariant;
}

class Toast {
  element: HTMLElement; /* 토스트 요소 */
  toast: ReactDOM.Root; /* 렌더링 위치 */
  messages: Messages[]; /* 메세지 목록 */
  duration: number; /* 유지 시간  */

  constructor() {
    this.duration = 1500; // 기본 1 초

    this.element =
      typeof window !== "undefined" &&
      (document.querySelector("#toast") as HTMLDivElement);

    if (!this.element) return;

    this.messages = [];
    this.toast = ReactDOM.createRoot(this.element);
  }

  message(
    message: string,
    variant: ToastVariant = "success",
    duration?: number,
  ) {
    if (duration) this.duration = duration;
    const uid = uuid();
    this.messages.push({
      id: uid,
      message,
      variant,
    });

    this.toast.render(
      <ToastUi
        variant={variant}
        messages={this.messages}
        closeMessage={this.closeMessage.bind(this)}
      />,
    );
    this.autoCloseMessage(this.duration, uid);
  }

  closeMessage(id: string) {
    const index = this.messages.findIndex((value) => value.id === id);
    this.messages.splice(index, 1);
    this.toast.render(
      <ToastUi
        messages={this.messages}
        closeMessage={this.closeMessage.bind(this)}
      />,
    );
  }

  autoCloseMessage(duration: number, id: string) {
    setTimeout(
      () => {
        this.closeMessage(id);
      },
      duration,
      this,
    );
  }
}
const toast = new Toast();
export default toast;
