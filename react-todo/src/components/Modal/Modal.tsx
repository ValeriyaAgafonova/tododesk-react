import React, { PropsWithChildren} from 'react';
import { FC } from 'react';

import  './Modal.scss';


const Modal: FC<PropsWithChildren> = (props) =>{
  return (
    <div className='modalWindow'>

    {props.children}

    </div>
  );
}

export default Modal;