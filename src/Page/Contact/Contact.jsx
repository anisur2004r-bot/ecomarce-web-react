import React from 'react';

const Contact = () => {
  return (
    <section className="container mx-auto py-16 px-4 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* ===== Left Side: Contact Info ===== */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            We'd love to hear from you! Reach out for any queries or feedback.
          </p>

          <ul className="text-gray-700 space-y-3">
            <li><strong>📍 Address:</strong> 123 Street, Dhaka, Bangladesh</li>
            <li><strong>📞 Phone:</strong> +880 1234 567890</li>
            <li><strong>✉️ Email:</strong> contact@yourdomain.com</li>
          </ul>
        </div>

        {/* ===== Right Side: Map Embed ===== */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            className="w-full h-96 border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.9991116608447!2d90.412518675077!3d23.875907484526446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5a41df4c8cd%3A0xe53d81627e1e92f1!2sDhaka!5e0!3m2!1sen!2sbd!4v1699724000000!5m2!1sen!2sbd"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Contact;
