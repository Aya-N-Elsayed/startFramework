import React from 'react'
import { Headers } from '../Headers';
import style from './Portfolio.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const Portfolio = () => {
  return (
    <div className='bg-white container py-5'>
      <Headers title='PORTFOLIO COMPONENT' color="#2c3e50" />
      
      <div className="row px-3">
        <div className="col-md-4">
          <figure className='position-relative overflow-hidden rounded-4 '>
            <img className=' w-100 ' src="./images/poert1.png" alt="" />
            <figcaption className={style.layer}>
            <FontAwesomeIcon icon={faPlus} size="5x" style={{ color: 'white' }} />

            </figcaption>
          </figure>



        </div>
  
        
        <div className="col-md-4">
          <figure className='position-relative overflow-hidden rounded-4 '>
            <img className=' w-100 ' src="./images/port2.png" alt="" />
            <figcaption className={style.layer}>
            <FontAwesomeIcon icon={faPlus} size="5x" style={{ color: 'white' }} />

            </figcaption>
          </figure>



        </div>

        <div className="col-md-4">
          <figure className='position-relative overflow-hidden rounded-4 '>
            <img className=' w-100 ' src="./images/port3.png" alt="" />
            <figcaption className={style.layer}>
            <FontAwesomeIcon icon={faPlus} size="5x" style={{ color: 'white' }} />

            </figcaption>
          </figure>



        </div>

        <div className="col-md-4">
          <figure className='position-relative overflow-hidden rounded-4 '>
            <img className=' w-100 ' src="./images/poert1.png" alt="" />
            <figcaption className={style.layer}>
            <FontAwesomeIcon icon={faPlus} size="5x" style={{ color: 'white' }} />

            </figcaption>
          </figure>



        </div>
  
        
        <div className="col-md-4">
          <figure className='position-relative overflow-hidden rounded-4 '>
            <img className=' w-100 ' src="./images/port2.png" alt="" />
            <figcaption className={style.layer}>
            <FontAwesomeIcon icon={faPlus} size="5x" style={{ color: 'white' }} />

            </figcaption>
          </figure>



        </div>

        <div className="col-md-4">
          <figure className='position-relative overflow-hidden rounded-4 '>
            <img className=' w-100 ' src="./images/port3.png" alt="" />
            <figcaption className={style.layer}>
            <FontAwesomeIcon icon={faPlus} size="5x" style={{ color: 'white' }} />

            </figcaption>
          </figure>



        </div>
        <div className="col-md-4">
          <figure className='position-relative overflow-hidden rounded-4 '>
            <img className=' w-100 ' src="./images/poert1.png" alt="" />
            <figcaption className={style.layer}>
            <FontAwesomeIcon icon={faPlus} size="5x" style={{ color: 'white' }} />

            </figcaption>
          </figure>



        </div>
  
        
        <div className="col-md-4">
          <figure className='position-relative overflow-hidden rounded-4 '>
            <img className=' w-100 ' src="./images/port2.png" alt="" />
            <figcaption className={style.layer}>
            <FontAwesomeIcon icon={faPlus} size="5x" style={{ color: 'white' }} />

            </figcaption>
          </figure>



        </div>

        <div className="col-md-4">
          <figure className='position-relative overflow-hidden rounded-4 '>
            <img className=' w-100 ' src="./images/port3.png" alt="" />
            <figcaption className={style.layer}>
            <FontAwesomeIcon icon={faPlus} size="5x" style={{ color: 'white' }} />

            </figcaption>
          </figure>



        </div>
      </div>
    </div>
  )
}
