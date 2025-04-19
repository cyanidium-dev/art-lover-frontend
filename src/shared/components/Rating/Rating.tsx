import { Star } from "lucide-react";

type Props = {
    rating: number;
    className?: string;
    fill?: string;
    stroke?: string;
    height?: number;
    width?: number;
}
const Rating = (props: Props) => {
  return (
      <div>
          <div className={ `flex gap-1 items-center {props.className}`}>
              {Array.from({ length: props.rating }, (_, index) => (
                  <span key={index} ><Star height={props.height} width={props.width} fill={props.fill} stroke={props.stroke} /></span>
              ))}
          </div>
    </div>
  )
}
export default Rating