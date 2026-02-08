export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Validate inputs
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  try {
    // Log the message (in production, you'd send this to an email service)
    console.log('Contact Form Submission:', {
      name,
      email,
      message,
      timestamp: new Date(),
    });

    // For now, just return success
    // In production, integrate with EmailJS, SendGrid, etc.
    res.status(200).json({
      message: 'Message received! I will get back to you soon.',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
