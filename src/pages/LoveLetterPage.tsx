import React, { useState } from 'react';
import { Send, Heart } from 'lucide-react';
import emailjs from '@emailjs/browser';

function LoveLetterPage() {
  const [senderEmail, setSenderEmail] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: null, message: '' });

    try {
      // Initialize EmailJS with your public key
      emailjs.init('pspR7xpThyjWQ_fjY');

      await emailjs.send(
        'Sandi', // Email service ID from EmailJS
        'template_3y7cp5p', // Email template ID from EmailJS
        {
          to_email: recipientEmail,
          from_email: senderEmail,
          message: message,
        }
      );

      setStatus({
        type: 'success',
        message: 'Your love letter has been sent successfully! 💌',
      });
      setRecipientEmail('');
      setSenderEmail('');
      setMessage('');
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send your love letter. Please try again.',
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-white p-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Send a Love Letter</h1>
          <p className="text-gray-600">Express your feelings to your loved one</p>
        </div>

        {status.type && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              status.type === 'success'
                ? 'bg-green-50 text-green-800'
                : 'bg-red-50 text-red-800'
            }`}
          >
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="senderEmail" className="block text-sm font-medium text-gray-700 mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="senderEmail"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
              placeholder="Enter your email address"
              required
              disabled={sending}
            />
          </div>

          <div>
            <label htmlFor="recipientEmail" className="block text-sm font-medium text-gray-700 mb-1">
              Recipient's Email
            </label>
            <input
              type="email"
              id="recipientEmail"
              value={recipientEmail}
              onChange={(e) => setRecipientEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
              placeholder="Enter their email address"
              required
              disabled={sending}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={8}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
              placeholder="Write your heartfelt message here..."
              required
              disabled={sending}
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className={`w-full flex items-center justify-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-lg transition-all focus:ring-2 focus:ring-offset-2 focus:ring-pink-500
              ${sending ? 'opacity-75 cursor-not-allowed' : 'hover:bg-pink-600'}`}
          >
            <Send className={`w-5 h-5 ${sending ? 'animate-pulse' : ''}`} />
            {sending ? 'Sending...' : 'Send Love Letter'}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          Your message will be delivered with love 💝
        </div>
      </div>
    </div>
  );
}

export default LoveLetterPage;