type Props = {
    children?: React.ReactNode;
    onClose: () => void;
}
const ModalBackDrop = (props: Props) => {
  return (
      <div className="fixed inset-0 z-50">
          
          <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={props.onClose}
          />
          ModalBackDrop
          {props.children}
      </div>
  )
}
export default ModalBackDrop