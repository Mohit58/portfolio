import React from 'react'
import "../styles/timeline.css"


function TimelineItems(props) {
    console.log(props);
    const {title,date,link,origin,originColor,conversionText} = props;
  return (
    <>
    <div className="timeline-items">
      <div className="timeline-items-content">
        <p>{title}</p>
        <span><a href={link} className='link'>{conversionText}</a></span>
        <span className='origin' style={{backgroundColor:originColor, borderColor:originColor}}>
        <span className='spike1'></span>
        <span className='spike2'></span>
        {origin}
        <span className='spike3'></span>
        <span className='spike4'></span>
      </span>
        <time className='Date'>{date}</time>
    </div>
    <span className="circle"></span>
    </div>
  </>
  )
}

export default TimelineItems;
