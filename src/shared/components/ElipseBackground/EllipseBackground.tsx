type Props = {
    width?: number | string
    height?: number | string
    fill?: string
    className?: string
}

const EllipseBackground = ({
    width = 149,
    height = 72,
    fill = '#D88164',
    className = '',
}: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 149 72"
        fill="none"
        className={className}
    >
        <ellipse cx="74.5" cy="36" rx="74.5" ry="36" fill={fill} />
    </svg>
)
export default EllipseBackground
