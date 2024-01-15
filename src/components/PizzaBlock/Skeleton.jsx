import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={260}
    height={440}
    viewBox="0 0 260 440"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="130" cy="132" r="130" /> 
    <rect x="8" y="295" rx="14" ry="14" width="244" height="90" /> 
    <rect x="168" y="316" rx="0" ry="0" width="0" height="1" /> 
    <rect x="11" y="393" rx="0" ry="0" width="112" height="42" /> 
    <rect x="146" y="393" rx="0" ry="0" width="105" height="42" /> 
    <rect x="8" y="268" rx="6" ry="6" width="245" height="18" />
  </ContentLoader>
)

export default Skeleton

