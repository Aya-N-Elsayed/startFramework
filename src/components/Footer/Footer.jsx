import React from 'react'
import style from './Footer.module.css'
import { Social } from '../SocialMedia/Social'

export const Footer = () => {
    return (
      <>
      <div className=' bg-color container-fluid text-white py-5'>
          <footer className='d-flex justify-content-evenly  text-center  '>
              <div className="location py-3">
                  <h5 className='fw-bold fs-4'>LOCATION</h5>
                  <h6>2215 John Danial Drive </h6>
                  <h6>Clark, MO 65243</h6>
              </div>

              <div className="social py-3">
                  <h5 className='fw-bold fs-4'>AROUND THE WEB</h5>
                    <Social/>
              </div>

              <div className="freelance py-3">
                  <h5 className='fw-bold fs-4'>ABOUT FREELANCER</h5>
                  <h6 >Freelance is a free to use, licensed Bootstrap theme</h6>
                  <h6> created by Route</h6>

              </div>

          </footer>
          

      </div>
               <div class="w-100 text-white">
               <div className={`${style.footer} py-3`}>
                   <p class="text-center mb-0">Copy Right 2023 © By Aya Elsayed All Rights Reserved</p>
   
               </div>
   
            </div>
            
    </>
             
  )
}
