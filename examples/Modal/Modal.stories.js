import Modal from './Modal';
import ModalDocs from './Modal.md';

export default {
    title: 'Example Patterns/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: ModalDocs,
            },
        },
    },

};

export const Default = {
    args: {},
};