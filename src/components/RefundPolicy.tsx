import React from 'react'

export const RefundPolicy: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '5px auto 0 auto', // Added top margin of 5px
    padding: '30px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.8',
    backgroundColor: '#fdf6e3',
    borderRadius: '10px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    color: '#333',
  }

  const headerStyle: React.CSSProperties = {
    fontSize: '2.5em',
    fontWeight: 700,
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  }

  const sectionStyle: React.CSSProperties = {
    marginBottom: '30px',
  }

  const subheaderStyle: React.CSSProperties = {
    fontSize: '1.75em',
    fontWeight: 600,
    color: '#444',
    marginBottom: '15px',
    borderBottom: '2px solid #ccc',
    paddingBottom: '10px',
  }

  const paragraphStyle: React.CSSProperties = {
    fontSize: '1.1em',
    color: '#555',
    marginBottom: '15px',
    textAlign: 'justify',
  }

  const listStyle: React.CSSProperties = {
    paddingLeft: '30px',
    color: '#555',
    listStyleType: 'disc',
  }

  return (
    <>
      <style>
        {`
          body {
            background-color: #111827;
            color: #e5e7eb;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
      <div style={containerStyle}>
        <div style={headerStyle}>Refund Policy</div>
        <div style={sectionStyle}>
          <div style={subheaderStyle}>Thank you for shopping at www.amazoft.com</div>
          <p style={paragraphStyle}>
            We value your satisfaction and strive to provide the best shopping experience. If you&apos;re not completely satisfied, we are here to help.
          </p>
        </div>
        <div style={sectionStyle}>
          <div style={subheaderStyle}>Returns</div>
          <p style={paragraphStyle}>
            We accept returns within 14 days from the date of purchase. Items must be unused and in the original packaging.
          </p>
        </div>
        <div style={sectionStyle}>
          <div style={subheaderStyle}>Refunds</div>
          <p style={paragraphStyle}>
            After inspecting your return, we will notify you of the refund status. Approved refunds will be issued to your original payment method.
          </p>
        </div>
        <div style={sectionStyle}>
          <div style={subheaderStyle}>Non-Returnable Items</div>
          <ul style={listStyle}>
            <li>Gift cards</li>
            <li>Downloadable software</li>
            <li>Personalized items</li>
            <li>Perishable goods</li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <div style={subheaderStyle}>Contact Us</div>
          <p style={paragraphStyle}>
            If you have any questions regarding our refund policy, please contact our support team.
          </p>
        </div>
      </div>
    </>
  )
}