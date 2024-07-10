
import './Help.css'

import img from '../../assets/icon2.png'
import img1 from '../../assets/icon3.png'
import img2 from '../../assets/icon4.png'
import img3 from '../../assets/icon5.png'
import img4 from '../../assets/icon6.png'
import img5 from '../../assets/icon7.png'

const Help = () => {
    return (
        <section className='help'>
        <div className='help__header'>
            <h3 className='help__title'>How I can Help</h3>
        </div>
        <div className='help__content'>
            <div className='help__row'>
                <div className='help__card help__card--primary'>
                    <div className='help__image-wrapper'>
                        <img src={img} alt="" className='help__image'/>
                    </div>
                    <div className='help__details'>
                        <div className='help__subtitle-wrapper'>
                            <h4 className='help__subtitle'>Nutrition for Females</h4>
                        </div>
                        <div className='help__text'>
                            <p className='help__description'>Pregnancy and Lactation, Diabetes/High blood pressure during pregnancy, PCOD, Osteoporosis.</p>
                        </div>
                    </div>
                </div>
                <div className='help__card help__card--secondary'>
                    <div className='help__image-wrapper'>
                        <img src={img1} alt="" className='help__image'/>
                    </div>
                    <div className='help__details'>
                        <div className='help__subtitle-wrapper'>
                            <h4 className='help__subtitle'>Nutrition for Children</h4>
                        </div>
                        <div className='help__text'>
                            <p className='help__description'>Energy booster, Growth and Development plans, Stress Management & Weight management.</p>
                        </div>
                    </div>
                </div>
                <div className='help__card help__card--tertiary'>
                    <div className='help__image-wrapper'>
                        <img src={img2} alt="" className='help__image'/>
                    </div>
                    <div className='help__details'>
                        <div className='help__subtitle-wrapper'>
                            <h4 className='help__subtitle'>Obesity & Weight Loss</h4>
                        </div>
                        <div className='help__text'>
                            <p className='help__description'>Weight gain and Weight loss, Muscle gain, Fat loss. Sustainable weight loss. Fitness is forever.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='help__row'>
                <div className='help__card help__card--primary'>
                    <div className='help__image-wrapper'>
                        <img src={img3} alt="" className='help__image'/>
                    </div>
                    <div className='help__details'>
                        <div className='help__subtitle-wrapper'>
                            <h4 className='help__subtitle'>Nutrition for Females</h4>
                        </div>
                        <div className='help__text'>
                            <p className='help__description'>Pregnancy and Lactation, Diabetes/High blood pressure during pregnancy, PCOD, Osteoporosis.</p>
                        </div>
                    </div>
                </div>
                <div className='help__card help__card--secondary'>
                    <div className='help__image-wrapper'>
                        <img src={img4} alt="" className='help__image'/>
                    </div>
                    <div className='help__details'>
                        <div className='help__subtitle-wrapper'>
                            <h4 className='help__subtitle'>Nutrition for Females</h4>
                        </div>
                        <div className='help__text'>
                            <p className='help__description'>Pregnancy and Lactation, Diabetes/High blood pressure during pregnancy, PCOD, Osteoporosis.</p>
                        </div>
                    </div>
                </div>
                <div className='help__card help__card--tertiary'>
                    <div className='help__image-wrapper'>
                        <img src={img5} alt="" className='help__image'/>
                    </div>
                    <div className='help__details'>
                        <div className='help__subtitle-wrapper'>
                            <h4 className='help__subtitle'>Nutrition for Females</h4>
                        </div>
                        <div className='help__text'>
                            <p className='help__description'>Pregnancy and Lactation, Diabetes/High blood pressure during pregnancy, PCOD, Osteoporosis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    )
}

export default Help
