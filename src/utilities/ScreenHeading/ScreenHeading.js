import React from 'react'
import './ScreenHeading.css'

function ScreenHeading(props) {
  return (
    <div className='heading-container'>
        <div className='screen-heading'>
            <span>{props.title}</span>

        </div>
        {
            (props.subHeading)?(
                <div className='screen-sub-heading'>
                    <span>{props.subHeading}</span>
                </div>
            ):<div></div>
        }
        <div className='heading-seprator'>
            <div className='seprator-line'>
            <div className='seprator-blob'>
                <div>

                </div>

            </div>

            </div>
        </div>
    </div>
  )
}

export default ScreenHeading
