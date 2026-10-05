# Email Setup Guide for Layouts360

## 🔧 Environment Variables Setup

Create a `.env.local` file in your project root with the following variables:

```bash
# Resend API Configuration
RESEND_API_KEY=your_resend_api_key_here
DEMO_REQUESTS_TO=your_email@example.com

# WhatsApp notify (GOWA /send/message) — optional; runs alongside Resend
WHATSAPP_API_URL=https://your-gowa-host/send/message
WHATSAPP_API_USER=USERNAME
WHATSAPP_API_PASSWORD=PASSWORD
WHATSAPP_DEVICE_ID=layouts360
WHATSAPP_NOTIFY_TO=120363412465889059@g.us
WHATSAPP_NOTIFY_CUSTOMER=true
```

`WHATSAPP_NOTIFY_CUSTOMER=true` also sends a confirmation WhatsApp to the mobile entered on the form (Indian 10-digit numbers are prefixed with `91`).

## 📧 Resend Setup Steps

### 1. Create Resend Account
- Go to [https://resend.com](https://resend.com)
- Sign up for a free account
- Verify your email address

### 2. Get API Key
- Go to [https://resend.com/api-keys](https://resend.com/api-keys)
- Click "Create API Key"
- Name it "Layouts360 Demo Form"
- Copy the API key

### 3. Add Domain (Optional)
- Go to [https://resend.com/domains](https://resend.com/domains)
- Add your domain (e.g., `layouts360.com`)
- Follow DNS setup instructions
- Update the `from` field in the API route

### 4. Set Environment Variables
Replace the values in `.env.local`:
```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
DEMO_REQUESTS_TO=yourname@yourdomain.com
```

## 💬 WhatsApp (optional)

Demo submissions also POST form details to your GOWA WhatsApp API (`POST /send/message` with Basic auth + `X-Device-Id`).

1. Set `WHATSAPP_API_URL` to the full send endpoint (e.g. `https://host/send/message`)
2. Set `WHATSAPP_API_USER` / `WHATSAPP_API_PASSWORD` (Basic auth)
3. Keep `WHATSAPP_DEVICE_ID=layouts360` and the group JID in `WHATSAPP_NOTIFY_TO`
4. If WhatsApp fails, the Resend email still succeeds (failure is logged server-side)

## 🚀 Testing

1. Start your development server: `npm run dev`
2. Fill out the demo form
3. Check your email for the demo request
4. Check the WhatsApp group for the same lead details
5. Check the browser console / server logs for any errors

## 🔍 Troubleshooting

### Common Issues:
- **"Email service not configured"** - Check if environment variables are set
- **"Invalid API key"** - Verify your Resend API key
- **"Domain not verified"** - Use `onboarding@resend.dev` for testing
- **CORS errors** - Make sure you're running on localhost:3000

### Debug Steps:
1. Check browser console for errors
2. Check terminal/server logs
3. Verify environment variables are loaded
4. Test API endpoint directly with Postman/curl

## 📞 Support
If you need help, contact us at:
- Phone: +91 72764 95199
- Phone: +91 95953 37334
