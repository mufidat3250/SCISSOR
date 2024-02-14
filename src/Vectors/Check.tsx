import { SVGProps } from "react"
type checkProp = {
    color: string
}& SVGProps<SVGSVGElement>

const Check = (props:checkProp) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g
      stroke={ props.color || "#005AE2"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <path d="M14.667 7.387V8a6.667 6.667 0 1 1-3.954-6.093" />
      <path d="M14.667 2.667 8 9.34l-2-2" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default Check
