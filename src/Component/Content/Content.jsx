import React from 'react'
import Intro from './Intro'
import ReactContent from './ReactContent'
import JSRevision from './JSRevision'
import CreatApp from './CreatApp'

function Content({active}) {
  return (
    <div>
      {
           active === "introduction" &&(
            <>
              <Intro/>
            </>
           )          
      }
      {
        active === " React content" &&(
            <>
             <ReactContent/>
            </>
        )
      }
      {
        active ==="JavaScript Rivision" &&(
            <>
            <JSRevision/>
            </>
        )
      }
      {
        active ==="createApp" &&(
            <>
            <CreatApp/>
            </>
        )
      }
        
    </div>
  )
}

export default Content
