import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import ClientsList from '../Clients List/ClientsList';
import BusyLifestyle from '../BusyLifeStyle/BusyLifestyle';
import Help from '../Help/Help';
import TestimonialSection from '../Testimonials/Testimonials';

const Home = () => {
  return (
    <main>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="home"
            src="https://www.iamexpat.nl/sites/default/files/styles/ogimage_thumb/public/running-group-outdoors-in-sports-gear.jpg"
            alt="First slide"
          />
          <Carousel.Caption className='tag'>
            <div className='tag-lines'>
              <h3>Empower Your Health Journey</h3>
              <p>Access essential tools to support your weight loss goals.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="home"
            src="https://images.unsplash.com/photo-1556911073-a517e752729c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Second slide"
          />
          <Carousel.Caption className='tag'>
            <div className='tag-lines'>
              <h3>Stay Active, Stay Healthy</h3>
              <p>Discover effective weight loss exercises tailored for you.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="home"
            src="https://d29za44huniau5.cloudfront.net/uploads/2022/8/become-a-zumba-instructor-og-image.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption className='tag'>
            <div className='tag-lines'>
              <h3>Healthy Eating Made Easy</h3>
              <p>Get nutritious food recommendations for better health.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="home"
            src="https://i.insider.com/5d52d8dd855562202a2ac508?width=1136&format=jpeg"
            alt="Fourth slide"
          />
          <Carousel.Caption className='tag'>
            <div className='tag-lines'>
              <h3>Track Your Health Metrics</h3>
              <p>Use our BMI calculator to monitor and track your progress.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

<ClientsList/>
   <BusyLifestyle/>
   <Help/>
   <TestimonialSection/>

    </main>
  )
}

export default Home