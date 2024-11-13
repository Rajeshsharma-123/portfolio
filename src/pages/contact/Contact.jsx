import React, { useState } from 'react';
import GoogleMap from '../../component/GoogleMap';
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaFacebookF,
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState(''); // To show success or error message
  const [loading, setLoading] = useState(false); // To manage button loading state

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: '019ef383-4ff6-4965-9a98-76737bb932a0', // Replace with your Web3Forms access key
          ...formData
        })
      });

      const result = await response.json();

      if (result.success) {

        setStatus('Thank you! Your message has been sent.');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear the form

        setTimeout(() => {
          setStatus(''); // Clear the message
        }, 3000); // 3000 ms = 3 seconds
      } else {
        setStatus('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Oops! Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className='contact section'>
        <h2 className="section__title">
          Get In <span>Touch</span>
        </h2>

        <div className='map__container'>
          <GoogleMap />
        </div>

        <div className="contact__container container grid">
          {/* Contact Information */}
          <div className="contact__data">
            <h3 className="contact__title">Don't be Shy!</h3>
            <p className="contact__description">
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="contact__info">
              <div className="info__item">
                <FaEnvelopeOpen className="info__icon" />
                <div>
                  <span className="info__title">Mail me</span>
                  <h4 className="info__desc">raj9807464548@gmail.com</h4>
                </div>
              </div>
              <div className="info__item">
                <FaPhoneSquareAlt className="info__icon" />
                <div>
                  <span className="info__title">Call me</span>
                  <h4 className="info__desc">+977-9807464548</h4>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact__socials">
              <a href="https://www.linkedin.com/in/rajesh-vishwakarma-0b7a7630b/" className="contact__social-link">
                <FaLinkedin />
              </a>
              <a href="https://x.com/Rajesh078078728" className="contact__social-link">
                <FaTwitter />
              </a>
              <a href="https://github.com/Rajeshsharma-123" className="contact__social-link">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/rajeshh2602/" className="contact__social-link">
                <FaInstagram />
              </a>
              <a href="https://web.facebook.com/profile.php?id=100062176783002" className="contact__social-link">
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact__form" onSubmit={handleSubmit}>
            {/* Form Fields */}
            <div className="form__input-group">
              <div className="form__input-div">
                <input
                  type="text"
                  name="name"
                  className='form__control'
                  placeholder='Your Name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form__input-div">
                <input
                  type="email"
                  name="email"
                  className='form__control'
                  placeholder='Your Email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form__input-div">
                <input
                  type="text"
                  name="subject"
                  className='form__control'
                  placeholder='Your Subject'
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form__input-div">
              <textarea
                name="message"
                className='form__control textarea'
                placeholder='Your Message'
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Success or Error Message */}
            {status && <p className="form__status">{status}</p>}

            {/* Submit Button */}
            <button type="submit" className="button" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <span className="button__icon contact__button-icon">
                <FiSend />
              </span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
