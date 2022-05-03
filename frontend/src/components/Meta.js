import React from "react"
import { Helmet } from "react-helmet"
const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}
Meta.defaultProps = {
  title: "Welcome to E-comm website",
  description: "We sell best products in cheap price",
  keywords: "electronics, fashion, accessories, food",
}

export default Meta
