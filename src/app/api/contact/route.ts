import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Lazy init — avoids crashing at build time when env vars are absent
function getResend() {
  const key = process.env.RESEND_API_KEY
  if (!key) throw new Error('RESEND_API_KEY is not set')
  return new Resend(key)
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  firm?: string
  enquiryType: string
  message: string
}

function validateFormData(data: unknown): data is ContactFormData {
  if (!data || typeof data !== 'object') return false
  const d = data as Record<string, unknown>
  return (
    typeof d.name === 'string' && d.name.trim().length > 0 &&
    typeof d.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) &&
    typeof d.enquiryType === 'string' && d.enquiryType.trim().length > 0 &&
    typeof d.message === 'string' && d.message.trim().length >= 10
  )
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (!validateFormData(body)) {
      return NextResponse.json(
        { error: 'Please fill in all required fields correctly.' },
        { status: 400 },
      )
    }

    const resend = getResend()
    const toEmail = process.env.CONTACT_TO_EMAIL ?? 'clerks@burnellchambers.co.uk'
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev'

    const emailHtml = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1e1e1e;">
        <div style="background: #1a2744; padding: 20px 24px; margin-bottom: 24px;">
          <h1 style="color: #ffffff; font-size: 20px; margin: 0; font-weight: 400;">
            New Enquiry – Daniel Feingold Chambers
          </h1>
          <p style="color: #b8943f; font-size: 12px; margin: 6px 0 0; letter-spacing: 0.1em; text-transform: uppercase;">
            Burnell Chambers Website
          </p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px; width: 130px;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; font-weight: 500;">${body.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px;">
              <a href="mailto:${body.email}" style="color: #1a2744;">${body.email}</a>
            </td>
          </tr>
          ${body.phone ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Phone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px;">${body.phone}</td>
          </tr>` : ''}
          ${body.firm ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Firm / Company</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px;">${body.firm}</td>
          </tr>` : ''}
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Enquiry Type</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px;">${body.enquiryType}</td>
          </tr>
        </table>

        <div style="background: #f8f4ee; padding: 16px 20px; border-left: 3px solid #b8943f;">
          <p style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 8px;">Message</p>
          <p style="font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${body.message}</p>
        </div>

        <p style="font-size: 11px; color: #999; margin-top: 24px; border-top: 1px solid #eee; padding-top: 16px;">
          Submitted via dftaxbarrister.uk · ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}
        </p>
      </div>
    `

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      reply_to: body.email,
      subject: `New Enquiry: ${body.enquiryType} – ${body.name}${body.firm ? ` (${body.firm})` : ''}`,
      html: emailHtml,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send your enquiry. Please email clerks@burnellchambers.co.uk directly.' },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again or email clerks@burnellchambers.co.uk.' },
      { status: 500 },
    )
  }
}
