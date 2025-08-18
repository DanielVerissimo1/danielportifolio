import { useState, FormEvent, ChangeEvent } from 'react';
import { User, Mail, MessageSquare, Send } from 'lucide-react';
import axios from 'axios';
import Swal from 'sweetalert2';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: 'Enviando mensagem...',
      html: 'Aguarde enquanto enviamos sua mensagem',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const formSubmitUrl = 'https://formsubmit.co/danielsantoss1300@gmail.com';
      const submitData = new FormData();
      
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('message', formData.message);
      submitData.append('_subject', 'Nova mensagem do seu portfólio');
      submitData.append('_captcha', 'false');
      submitData.append('_template', 'table');

      await axios.post(formSubmitUrl, submitData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      Swal.fire({
        title: 'Sucesso!',
        text: 'Mensagem enviada com sucesso!',
        icon: 'success',
        confirmButtonColor: '#6366f1',
        timer: 2000,
        timerProgressBar: true,
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      Swal.fire({
        title: 'Erro!',
        text: 'Ocorreu um problema ao enviar sua mensagem',
        icon: 'error',
        confirmButtonColor: '#6366f1',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="relative group"
      >
        <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
        <input
          type="text"
          name="name"
          placeholder="Seu nome"
          value={formData.name}
          onChange={handleChange}
          disabled={isSubmitting}
          className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
          required
        />
      </div>
      
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="relative group"
      >
        <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
        <input
          type="email"
          name="email"
          placeholder="Seu email"
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
          className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
          required
        />
      </div>
      
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative group"
      >
        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
        <textarea
          name="message"
          placeholder="Sua mensagem"
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
          className="w-full resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 h-[9.9rem] disabled:opacity-50"
          required
        />
      </div>
      
      <button
        data-aos="fade-up"
        data-aos-delay="400"
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        <Send className="w-5 h-5" />
        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
      </button>
    </form>
  );
};

export default ContactForm;