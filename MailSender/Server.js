const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 4000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ashanmanukajayarathna@gmail.com',
    pass: 'kbpr unws pvpq jhap',
  },
})

// POST route for handling form submission
app.post('/send-email', (req, res) => {
  const { firstName, lastName, email, phoneNumber, message } = req.body

  // Email options
  const mailOptions = {
    from: email,
    to: 'manukajayarathne.coma@gmail.com',
    subject: `Contact Form Submission from ${firstName} ${lastName}`,
    text: `Message from ${firstName} ${lastName} (${email}, ${phoneNumber}):\n\n${message}`,
  }

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
      return res.status(500).json({ message: 'Error sending email' })
    }
    console.log('Email sent: ' + info.response)
    res.status(200).json({ message: 'Email sent successfully!' })
  })
})

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
