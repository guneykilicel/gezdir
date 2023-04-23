import React from 'react'
import ContentImageList from '../contentImageList/ContentImageList'
import ContentCard from '../contentCard/ContentCard'

import './contentTranslate.css';

const contentTranslate = ({images, content, steps, stepsContent}) => {
    return (
        <div className='jcenter'>
            <div className='content'>
                <ContentImageList images={images} />
                <ContentCard content={content} steps={steps} stepsContent={stepsContent} />
            </div>
        </div>
    )
}

export default contentTranslate