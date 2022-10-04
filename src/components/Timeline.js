import React from 'react'
import Background from './Background'
import TimelineData from './TimelineData'
import TimelineItems from './TimelineItems'
import "../styles/timeline.css";

function Timeline() {
  return (
  <>
    <div  className='background'>
       <Background/>
       <div className='heading timeline__heading'>
        <h3 style={{position:'fixed'}}>
        Timeline
        </h3>
        <a href="/" style={{position:'fixed'}}>
          Go Back
        </a>
        </div>
         <div className="timeline" id="Features">
        {TimelineData.map((item, index) => {
            return (
                <TimelineItems key={index} title={item.heading} date={item.date} link={item.link} origin={item.origin} originColor={item.originColor} conversionText={item.conversionText}/>
                )
            })
        }
    </div>
    </div>
  </>
  )
}

export default Timeline;
