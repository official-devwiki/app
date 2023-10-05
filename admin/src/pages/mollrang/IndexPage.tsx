import {ReactElement, useState} from 'react';
import {QuizLists} from '@components/mollrang/quiz-lists';
import {QuizWriteForm} from '@components/mollrang/quiz-write';
import {WriteIcon} from "@components/common/icons/WriteIcon";
import {Modal} from "@components/common/modal/Modal";

export const MollrangPage = (): ReactElement => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true)
  }
  const close = (payload: boolean) => {
    setOpen(payload);
  }
  return (
    <div className={'p-5'}>
      <QuizLists />
      <button onClick={showModal} className={'flex items-center'}>
        <WriteIcon />
        퀴즈 작성
      </button>
      <Modal isOpen={open} onRequestClose={close}>
        <QuizWriteForm />
      </Modal>

    </div>
  );
};
