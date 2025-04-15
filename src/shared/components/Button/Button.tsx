

type Props = {
    buttonText?: string;
    svg?: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "tertiary";
    size?: "small" | "medium" | "large";
}
const Button = (props: Props) => {
    return (
        <button
            className={`btn ${props.className} ${props.variant} ${props.size} cursor-pointer`}
        >{props.buttonText}
            {props.svg}
        </button>
    )
}
export default Button