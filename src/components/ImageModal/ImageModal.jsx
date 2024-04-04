import css from "./ImageModal.module.css";
import ReactModal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

ReactModal.setAppElement("#root");

export default function ImageModal({
  modal: { imgUrl, alt_description },
  openModal,
  closeModal,
}) {
  return (
    <ReactModal
      className={css.modalDefault}
      isOpen={openModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className={css.modal}>
        <img src={imgUrl} alt={alt_description} className={css.imgModal} />
      </div>
    </ReactModal>
  );
}
