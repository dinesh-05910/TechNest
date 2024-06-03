import React from 'react'
import { Helmet } from 'react-helmet-async'

const Meta = ({title,description,keywords}) => {
  return (
    <Helmet>
        <title>Welcome to TechNest</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
    title: 'Welcome to TechNest',
    description: 'We sell the best products for you at affordable prices',
    keywords: 'electronics, buy electronics, electronics shop'
}

export default Meta