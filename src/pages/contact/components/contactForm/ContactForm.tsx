import { useState } from 'react';
import './ContactForm.css';
import { FaInbox } from 'react-icons/fa';
import toast from 'react-hot-toast';

interface Props {
  email: string;
}

const Form = ({ email }: Props) => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  function handleReset() {
    setFormData({ name: '', email: '', message: '' });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      await fetch('https://sendmail-api-docs.vercel.app/api/send', {
        method: 'POST',
        body: JSON.stringify({
          to: email,
          subject: 'Message From Contact Form',
          message: `
            name:${formData.name} ,
            email:${formData.email},
            message:${formData.message}
            `,
        }),
      });
      toast.success('Email Sent Successfully', { duration: 5000 });
      handleReset();
    } catch (err) {
      toast.error('Error, Please try again!', { duration: 5000 });
    } finally {
      setIsLoading(false);
    }
  }

  function handleChange(e) {
    setFormData((info) => ({ ...info, [e.target.name]: e.target.value }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='inputs'>
        <input placeholder='Your Name' value={formData.name} onChange={(e) => handleChange(e)} name='name' required />
        <input
          placeholder='Your Email'
          type='email'
          value={formData.email}
          onChange={(e) => handleChange(e)}
          name='email'
          required
        />
        <textarea
          placeholder='Your Message'
          value={formData.message}
          onChange={(e) => handleChange(e)}
          name='message'
          required
        ></textarea>

        <div className='buttonBox'>
          <button disabled={isLoading} className='button'>
            <span className='buttonTxt'>{isLoading ? `Sending....` : 'Send Email'}</span>
            <span className='buttonIcon'>
              <FaInbox />
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
