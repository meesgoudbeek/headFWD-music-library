import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

interface modalProps {
  children: React.ReactNode;
  show: boolean;
  close: React.MouseEventHandler<HTMLButtonElement>;
}

const Modal: React.FC<modalProps> = ({ children, show, close }) => {
  if (!show) return null;

  return (
    <div data-testid="modal" className="Modal">
      <div className="ModalContent">
        <span onClick={close}>
          <CloseIcon />
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
