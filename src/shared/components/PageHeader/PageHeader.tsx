import Image from "next/image"


type Props = {
    image?: string;
    alt?: string;
    className?: string;
    children?: React.ReactNode;
}
const PageHeader = (props:Props) => {
  return (
      <div className={`${props.className} bg-zinc-400 rounded-lg overflow-hidden`}>
          <Image
              src={props.image || "/fallback.png"}
              alt="Blog post image"
              width={296}
              height={160}
              className="w-full h-auto object-cover"
          />
      </div>
  )
}
export default PageHeader