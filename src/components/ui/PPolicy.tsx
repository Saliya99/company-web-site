import React from 'react'

export const PPolicy: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '5px auto 0 auto', 
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

  const noteStyle: React.CSSProperties = {
    fontSize: '1.1em',
    color: '#777',
    marginTop: '10px',
    fontStyle: 'italic',
  }

  return (
    <>
      <style>
        {`
          body {
            background-color: #111827; /* Dark background color for the body */
            color: #e5e7eb; /* Light text color for contrast */
            margin: 0;
            padding: 0;
          }
        `}
      </style>
      <div style={containerStyle}>
        <div style={headerStyle}>Privacy Policy</div>
        <div style={sectionStyle}>
          <div style={subheaderStyle}>
            At www.Amazoft.com, we are committed to protecting your privacy
          </div>
          <p style={paragraphStyle}>
            This Privacy Policy outlines how we collect, use, and safeguard your
            information when you visit or make a purchase on our website. By
            using our website, you consent to the practices described in this
            policy.
          </p>
        </div>
        <div style={sectionStyle}>
          <div style={subheaderStyle}>Information We Collect</div>
          <p style={paragraphStyle}>
            When you visit our website, we may collect certain information about
            you, including:
          </p>
          <ul style={listStyle}>
            <li>
              Personal identification information (such as your name, email
              address, and phone number) provided voluntarily by you during the
              registration or checkout process.
            </li>
            <li>
              Payment and billing information necessary to process your orders,
              including credit card details, which are securely handled by
              trusted third-party payment processors.
            </li>
            <li>
              Browsing information, such as your IP address, browser type, and
              device information, collected automatically using cookies and
              similar technologies.
            </li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <div style={subheaderStyle}>Use of Information</div>
          <p style={paragraphStyle}>
            We may use the collected information for the following purposes:
          </p>
          <ul style={listStyle}>
            <li>
              To process and fulfill your orders, including shipping and
              delivery.
            </li>
            <li>
              To communicate with you regarding your purchases, provide customer
              support, and respond to inquiries or requests.
            </li>
            <li>
              To personalize your shopping experience and present relevant
              product recommendations and promotions.
            </li>
            <li>
              To improve our website, products, and services based on your
              feedback and browsing patterns.
            </li>
            <li>
              To detect and prevent fraud, unauthorized activities, and abuse of
              our website.
            </li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <div style={subheaderStyle}>Information Sharing</div>
          <p style={paragraphStyle}>
            We respect your privacy and do not sell, trade, or otherwise
            transfer your personal information to third parties without your
            consent, except in the following circumstances:
          </p>
          <ul style={listStyle}>
            <li>
              Trusted service providers: We may share your information with
              third-party service providers who assist us in operating our
              website, processing payments, and delivering products. These
              providers are contractually obligated to handle your data securely
              and confidentially.
            </li>
            <li>
              Legal requirements: We may disclose your information if required
              to do so by law or in response to valid legal requests or orders.
            </li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <div style={subheaderStyle}>Data Security</div>
          <p style={paragraphStyle}>
            We implement industry-standard security measures to protect your
            personal information from unauthorized access, alteration,
            disclosure, or destruction. However, please be aware that no method
            of transmission over the internet or electronic storage is 100%
            secure, and we cannot guarantee absolute security.
          </p>
        </div>
        <div style={sectionStyle}>
          <div style={subheaderStyle}>Cookies and Tracking Technologies</div>
          <p style={paragraphStyle}>
            We use cookies and similar technologies to enhance your browsing
            experience, analyze website traffic, and gather information about
            your preferences and interactions with our website. You have the
            option to disable cookies through your browser settings, but this
            may limit certain features and functionality of our website.
          </p>
        </div>
        <div style={sectionStyle}>
          <div style={subheaderStyle}>Changes to the Privacy Policy</div>
          <p style={paragraphStyle}>
            We reserve the right to update or modify this Privacy Policy at any
            time. Any changes will be posted on this page with a revised
            &quot;last updated&quot; date. We encourage you to review this
            Privacy Policy periodically to stay informed about how we collect,
            use, and protect your information.
          </p>
        </div>
        <div style={sectionStyle}>
          <div style={subheaderStyle}>Contact Us</div>
          <p style={paragraphStyle}>
            If you have any questions, concerns, or requests regarding our
            Privacy Policy or the handling of your personal information, please
            contact us using the information provided on our website.
          </p>
          <p style={noteStyle}>
            Note: Please keep your receipt or order number handy when contacting
            us for support.
          </p>
        </div>
      </div>
    </>
  )
}
