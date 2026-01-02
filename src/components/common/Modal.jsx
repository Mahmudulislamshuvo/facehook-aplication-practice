import Modal from "react-modal";

const defaultStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    padding: "0",
    borderRadius: "12px",
    border: "none",
    background: "#1E1F24",
    color: "#fff",
    width: "60%",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    zIndex: 50,
  },
};

const AppModal = ({
  isOpen,
  onClose,
  children,
  style = {},
  shouldCloseOnOverlayClick = true,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      style={{
        content: { ...defaultStyles.content, ...style },
        overlay: defaultStyles.overlay,
      }}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
    >
      {/* Header */}
      {onClose && (
        <div className="flex items-end justify-end border-b border-gray-700 px-4 py-3">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-500"
          >
            ✕
          </button>
        </div>
      )}

      {/* Body */}
      <div className="p-4">{children}</div>
    </Modal>
  );
};

export default AppModal;
