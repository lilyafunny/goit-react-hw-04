import Modal from "react-modal";
import s from './ImageModal.module.css'

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onClose, image }) => {

    const handleClose = (e) => {

        if (e.target === e.currentTarget) {
            onClose()
        }
    };

    return (

        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onClose}
                overlayClassName={s.overlay}
                className={s.modal}
                onClick={handleClose}
            >


                <div className={s.contanier}>
                    <img src={image} className={s.img} />

                </div >



            </Modal >
        </>

    )


}

export default ImageModal


