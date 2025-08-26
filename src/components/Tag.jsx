import { faCalendarAlt, faEnvelope, faLocationDot, faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Tag = () => {
  return (
    <div id="schedule" className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 xl:w-[80%] md:w-[92%] text-primary md:pb-10">

        <div className=" py-10 bg-gray-200 lg:px-10 grid md:grid-cols-4  lg:gap-8 gap-3 px-4">
          <div className="items-center flex flex-col gap-5 md:pr-8 py-2">
            <div>
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-2xl text-light"
              />
            </div>
            <div className='text-center'>
              <h3 className="text-lg font-semibold pb-2">Location</h3>
              <p>Plot R17, Along Nyanya-Karshi Road</p>
            </div>
          </div>

          <div className="items-center flex flex-col gap-5 md:pr-8 py-2">
            <div>
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="text-2xl text-light"
              />
            </div>
            <div className='text-center'>
              <h3 className="text-lg font-semibold pb-2">Date & Time</h3>
              <p>7th September, 9AM</p>
            </div>
          </div>

          <div className="items-center flex flex-col gap-5 py-2 md:pr-8">
            <div>
              <FontAwesomeIcon
                icon={faMicrophone}
                className="text-2xl text-light"
              />
            </div>
            <div className='text-center'>
              <h3 className="text-lg font-semibold pb-2">Speakers</h3>
              <p>4 Speakers</p>
            </div>
          </div>

          <div className="items-center flex flex-col gap-5 py-2 md:pr-8">
            <div>
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-2xl text-light"
              />
            </div>
            <div className='text-center'>
              <h3 className="text-lg font-semibold pb-2 ">Mail</h3>
              <p>P.O Box 3135 Garki Abuja, Nigeria</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Tag
