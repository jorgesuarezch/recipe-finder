import React from 'react'
interface SVGRProps {
  title?: string
  titleId?: string
  color?: string
}

function SvgComponent({
  title,
  titleId,
  color,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="heart"
      className="prefix__svg-inline--fa prefix__fa-heart prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill={color}
        d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
      />
    </svg>
  )
}

export default SvgComponent
