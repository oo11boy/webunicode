import React from 'react'

export default function SmallLogo({skew}) {
  return (
    <img
    className={`skew-x-[${skew}deg] h-[40px] logo`}
    src="https://validthemes.net/themeforest/wp/consua/wp-content/uploads/2023/08/logo.png"
    alt=""
    srcset=""
  />
  )
}
