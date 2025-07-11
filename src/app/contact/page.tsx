'use client'
// import Contact from '@/components/Contact'
import ContactBody from '@/components/ContactBody'
import { ContactDev } from '@/components/ContactDev'


function contact() {
  return (
    <div className="w-full">
      <ContactBody />
      <ContactDev />
      {/* <Contact /> */}
    </div>
  )
}

export default contact
