

type Props = {
    buttonText?: string;
    svg?: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "tertiary";
    type?: "button" | "submit" | "reset";
    size?: "small" | "medium" | "large";
    style?: React.CSSProperties;
}
const ButtonOval = (props: Props) => {
    return (
        <button
            className={`btn ${props.className} ${props.variant} ${props.size} cursor-pointer rounded-2xl text-[var(--main-dark-color)] px-4 py-2 `}
            style={
                props.style || {
                    background: 'linear-gradient(121deg, #FFF 22.48%, #FF692D 337.32%)',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '50px',
                    border: '1px solid transparent'
                }

            }
        > {props.buttonText}
            {props.svg}
        </button >
    )
}
export default ButtonOval