import React from 'react'
import './BusyLifestyle.css'
import { GiMeal } from "react-icons/gi";
import img from '../../assets/icon.png';
import img1 from '../../assets/icon1.png';



const BusyLifestyle = () => {
    return (
        <section className='busylifestyle'>
        <div className='busylifestyle__wrapper'>
            <div className='busylifestyle__container'>
                <div className='busylifestyle__card'>
                    <div className='busylifestyle__image-wrapper'>
                        <img src={img} alt="" className='busylifestyle__image' />
                    </div>
                    <div className='busylifestyle__content'>
                        <h6 className='busylifestyle__title'>Simple Meal Plans</h6>
                        <p className='busylifestyle__description'>Simple, healthy and innovative recipes according to your food preferences.</p>
                    </div>
                </div>
                <div className='busylifestyle__card'>
                    <div className='busylifestyle__image-wrapper'>
                        <img src={img1} alt="" className='busylifestyle__image' />
                    </div>
                    <div className='busylifestyle__content'>
                        <h6 className='busylifestyle__title'>Diet Complemented with Exercise Plans</h6>
                        <p className='busylifestyle__description'>Exercise tips and videos are shared to help you burn those extra fats.</p>
                    </div>
                </div>
            </div>
            <div className='busylifestyle__main'>
                <div className='busylifestyle__heading'>
                    <h2 className='busylifestyle__heading-title'>Creating Healthier Lives Without Changing Your Busy Lifestyle</h2>
                </div>
                <div className='busylifestyle__text'>
                    <p className='busylifestyle__paragraph'>The word “diet” is derived from the Greek word “diaita,” which means “a lifestyle.” What you eat makes up only part of it. The way you eat also affects it. Healthier lives can only be created by a combination of nutritious diet, healthy eating habits, a proper exercise regime and an active lifestyle. We believe in understanding what you are looking for and gradually modify your diet plans to bring permanent changes to your life for better health. Don’t look for quick fixes rather find natural methods to stay healthy and look at “health” in a more holistic way.</p>
                </div>
            </div>
        </div>
    </section>
    
    )
}

export default BusyLifestyle
