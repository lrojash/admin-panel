import React, { useState } from 'react';
import Modal from 'react-modal';
import ModifyForm from './ModifyForm';

const ModifyModal = (props) => {
    // state of modal
    const [open, setOpen] = useState(true);

    const openModal = () => {
        setOpen(true);
    }
    const closeModal = () => {
        setOpen(false);
    }

    return (
        <div>
            <Modal
                isOpen={open}
                onRequestClose={closeModal}
            >
                <ModifyForm {...props} />
            </Modal>
        </div>
    )
}
export default ModifyModal;