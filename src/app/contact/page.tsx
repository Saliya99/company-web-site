'use client'
import Contact from '@/components/navigation/Contact'
import ContactBody from '@/components/forms/ContactBody'
import { ContactDev } from '@/components/forms/ContactDev'

function contact() {
  return (
    <div className="w-full">
      <ContactBody />
      <ContactDev />
      <Contact />
    </div>
  )
}

export default contact
