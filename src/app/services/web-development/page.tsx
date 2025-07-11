import WebDevHeader from '@/components/WebDevHeader';
import WebDev from '@/components/WebDev';
// import CarouselSlider from '@/components/CarouselSlider';
import Contact from '@/components/Contact';
import { Video } from '@/components/Video'; 
import  WebAv  from '@/components/WebAv'


function WebDevelopment() {
  return (
    <div className="w-full">
      <WebDevHeader />
    
      <WebDev />
      <WebAv />
          
      {/* <CarouselSlider /> */}
      <Video />
      <Contact />
   
    </div>
  );
}

export default WebDevelopment;
