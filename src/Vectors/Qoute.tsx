import { SVGProps } from "react"
const Qoutation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={48}
    fill="none"
    {...props}
    className="h h-8"
  >
    <path stroke="url(#a)" strokeWidth={5} d="M3 0v48" />
    <defs>
      <linearGradient
        id="a"
        x1={3.05}
        x2={3.05}
        y1={0}
        y2={48}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#112232" />
        <stop offset={1} stopColor="#4D6B88" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)
export default Qoutation