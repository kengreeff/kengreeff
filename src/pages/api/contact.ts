import type { NextApiRequest, NextApiResponse } from 'next'
import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '')

type Data = {
  success: boolean
  errors?: string[]
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const body = req.body
  const { email, message, mobile, name } = body

  if (!email || !message || !name){
    res.status(400).json({ success: false, errors: ['Missing required field'] })
    return
  }

  // Send Email
  try {
    await sendgrid.send({
      to: process.env.SENDGRID_TO_EMAIL,
      from: {
        name: 'Website Enquiries',
        email: process.env.SENDGRID_FROM_EMAIL || '',
      },
      replyTo: {
        name,
        email,
      },
      subject: `New Message from ${name} - ${mobile}`,
      text: message,
    })
  } catch (error: any) {
    return res.status(error.statusCode || 400).json({ success: false, errors: [error.message] });
  }

  res.status(200).json({ success: true })
}

export default handler
