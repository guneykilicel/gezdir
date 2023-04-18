import React from 'react'
import ContentImageList from '../contentImageList/ContentImageList'
import ContentCard from '../contentCard/ContentCard'

import './content.css';

const Content = ({content, steps, stepsContent}) => {
  return (
    <div className='jcenter'>
      <div className='content'>
        <ContentCard content={content} steps={steps} stepsContent={stepsContent} />
        <ContentImageList />

      </div>
    </div>
  )
}

export default Content