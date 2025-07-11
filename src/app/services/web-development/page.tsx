import WebDevHeader from '@/components/ui/WebDevHeader'
import WebDev from '@/components/ui/WebDev'
// import CarouselSlider from '@/components/CarouselSlider';
import Contact from '@/components/navigation/Contact'
import { Video } from '@/components/ui/Video'
import WebAv from '@/components/ui/WebAv'

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
  )
}

export default WebDevelopment
