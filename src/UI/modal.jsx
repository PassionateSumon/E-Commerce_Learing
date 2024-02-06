import "./modal.css";

function Modal({ show, close, children }) {
  if (!show) return null;

  return (
    <div className="backdrop" onClick={close}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        {" "}
        {children}{" "}
      </div>
    </div>
  );
}

export default Modal;
