import { SVGProps } from "react"

type lockProp = {
    color?:string
}& SVGProps<SVGSVGElement>
const Lock = (props:lockProp) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={props.color || "currentColor"}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M6 8V7a6 6 0 1 1 12 0v1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2Zm13 2H5v10h14V10Zm-8 5.732A2 2 0 0 1 12 12a2 2 0 0 1 1 3.732V18h-2v-2.268ZM8 8h8V7a4 4 0 0 0-8 0v1Z" />
  </svg>
)
export default Lock
