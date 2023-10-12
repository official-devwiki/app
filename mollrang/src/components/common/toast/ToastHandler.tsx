import * as ReactDOM from "react-dom/client";
import { ToastUi } from "./ToastUi";
import styled from "styled-components";

export type ToastVariant =
  | "success"
  | "warning"
  | "secondary"
  | "info"
  | "error";

interface Messages {
  id: number;
  message: string;
  variant: ToastVariant;
}

interface ToastPositions {
  topLeft: {
    top: string;
    left: string;
  };
  topRight: {
    top: string;
    right: string;
  };
  bottomLeft: {
    bottom: string;
    left: string;
  };
  bottomRight: {
    bottom: string;
    right: string;
  };
  center: {
    top: string;
    left: string;
  };
}

const positions: any = {
  topLeft: {
    top: "12px",
    left: "12px",
  },
  topRight: {
    top: "12px",
    right: "12px",
  },
  bottomLeft: {
    bottom: "12px",
    left: "12px",
  },
  bottomRight: {
    bottom: "12px",
    right: "12px",
  },
  center: {
    top: "50%",
    left: "50%",
  },
};

interface ToastStyled {
  position: any;
}

export const ToastContainer = styled.div<ToastStyled>`
  position: absolute;
  z-index: 999;
  top: ${({ position }) => positions[position].top};
  bottom: ${({ position }) => positions[position].bottom};
  left: ${({ position }) => positions[position].left};
  right: ${({ position }) => positions[position].right};
`;

class Toast {
  element: HTMLElement; /* 토스트 요소 */
  toast: ReactDOM.Root; /* 렌더링 위치 */
  messages: Messages[]; /* 메세지 목록 */
  duration: number; /* 유지 시간  */

  position: ToastPositions;

  constructor(position: any = "topRight") {
    this.duration = 100000; // 기본 1s
    this.position = position;
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

    this.messages.push({
      id: this.messages.length,
      message,
      variant,
    });

    this.toast.render(
      <ToastUi
        position={this.position}
        messages={this.messages}
        variant={variant}
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
        position={this.position}
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
export default new Toast("topRight");
