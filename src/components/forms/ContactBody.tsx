import React from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  message: string
}

const ContactBody: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(
        'https://amazoft.com/clients/Company-MailSender/MailSender.php',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
          mode: 'cors',
        }
      )

      console.log('response is. ', response)

      if (response.ok) {
        alert('Your message has been sent successfully!')
        reset()
      } else {
        alert('There was an error sending your message (feild).')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('There was an error sending your message.')
    }
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      {/* Form Header */}
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm px-4 text-center lg:mb-16 lg:px-6">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="font-light text-gray-600 dark:text-gray-400 sm:text-xl">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>
        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
          <div className="col-span-2 mb-8 lg:mb-0">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mx-auto grid max-w-screen-md grid-cols-1 gap-8 sm:grid-cols-2"
            >
              {/* Form Fields */}
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  First Name
                </label>
                <input
                  {...register('firstName', {
                    required: 'First name is required',
                  })}
                  className="block w-full rounded-lg border bg-gray-50 p-3 text-sm text-gray-900"
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className="text-sm text-red-500">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Last Name
                </label>
                <input
                  {...register('lastName', {
                    required: 'Last name is required',
                  })}
                  className="block w-full rounded-lg border bg-gray-50 p-3 text-sm text-gray-900"
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="text-sm text-red-500">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your Email
                </label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email address',
                    },
                  })}
                  className="block w-full rounded-lg border bg-gray-50 p-3 text-sm text-gray-900"
                  placeholder="Enter your Email"
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Phone Number
                </label>
                <input
                  {...register('phoneNumber', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^\+?[0-9]{7,15}$/,
                      message: 'Invalid phone number',
                    },
                  })}
                  className="block w-full rounded-lg border bg-gray-50 p-3 text-sm text-gray-900"
                  placeholder="Enter your Phone Number"
                />
                {errors.phoneNumber && (
                  <p className="text-sm text-red-500">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your Message
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={6}
                  className="block w-full rounded-lg border bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="Enter your message"
                ></textarea>
                {errors.message && (
                  <p className="text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-lg bg-primary-700 px-5 py-3 text-center text-sm font-medium text-white sm:w-fit"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          <div 
  className="col-span-1 grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-1"
  style={{
    display: 'flex',
    justifyContent: 'center',  
    alignItems: 'center',     
    width: '100%',
  }}
>
  <div
    style={{
      display: 'flex',
      marginTop: '20px',
      justifyContent: 'center',
      width: '100%',  
    }}
  >
    <div
    className='bg-gray-800 text-white'
      style={{
        display: 'flex',
        height: '350px',
        width: '100%',
        maxWidth: '400px',  
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor: '#f7f8fc', 
        padding: '30px',
        borderRadius: '20px',
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
        // transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
        border: '1px solid #e0e0e0', 
        overflow: 'hidden',
        cursor: 'pointer',
      }}
      // onMouseEnter={(e) => {
      //   e.currentTarget.style.transform = 'scale(1.05)';
      //   e.currentTarget.style.backgroundColor = '#f1f3f9';
      //   e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
      // }}
      // onMouseLeave={(e) => {
      //   e.currentTarget.style.transform = 'scale(1)';
      //   e.currentTarget.style.backgroundColor = '#f7f8fc';
      //   e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
      // }}
    >
      <div style={{ marginBottom: '20px', textAlign: 'center' }} >
        <h3
          style={{
            fontSize: '32px',
            fontWeight: '600', 
            // color: '#222',
            textTransform: 'uppercase',
            letterSpacing: '1.5px', 
            marginBottom: '20px',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          AMAZOFT OFFICE
        </h3>
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '18px', marginBottom: '12px', lineHeight: '1.8', fontWeight: '500' }}>
          Address: No. 4, Dharmarama Rd, Colombo, Sri Lanka, 00600
        </p>
        <p style={{ fontSize: '18px', marginBottom: '12px', lineHeight: '1.8', fontWeight: '500' }}>
          Phone Number: +94 76 44 15 555 (Gayan)
        </p>
        <p style={{ fontSize: '18px', marginBottom: '12px', lineHeight: '1.8', fontWeight: '500' }}>
          E-mail: info@amazoft.com
        </p>
      </div>
    </div>
  </div>
</div>


        </div>
      </div>
    </section>
  )
}

export default ContactBody
