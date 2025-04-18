

type Props = {
    buttonText?: string;
    svg?: React.ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "tertiary";
    size?: "small" | "medium" | "large";
    onClick?: () => void;
}
const Button = (props: Props) => {
    return (
        <button
            onClick={props.onClick}
            type={props.type || "button"}
            className={`btn ${props.className} ${props.variant} ${props.size} cursor-pointer inline-flex items-center justify-center gap-2`}
        >
            {props.svg && <span>{props.svg}</span>}
            {props.buttonText && <span>{props.buttonText}</span>}


        </button>
    )
}
export default Button