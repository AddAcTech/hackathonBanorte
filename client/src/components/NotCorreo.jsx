import { useState } from 'react';
import { send } from '@emailjs/browser';
// import { send } from '@emailjs/browser';

const NotCorreo = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      to_email: email,
      message: message,
    };

    send('service_ihlvm3w', 'template_ht5aruj', templateParams, 'z7v0C-ppBPDl5DS57')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.error('FAILED...', err);
      });
  };

  return (
    <div className="cardBorder max-w-sm mx-auto">
      <h2 className='subtitle'>Enviar Notificación por Correo Electrónico</h2>
      <form onSubmit={sendEmail}>
        <div>
          <label className="block text-banorte-gray text-sm font-bold mb-2">Correo Electrónico:</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-banorte-gray leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mt-4">
          <label className="block text-banorte-gray text-sm font-bold mb-2">Mensaje:</label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-banorte-gray leading-tight focus:outline-none focus:shadow-outline h-32"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-center mt-2">
          <button type="submit" className='main-button'>Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default NotCorreo;