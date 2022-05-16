import React from "react";
import axios from "axios";

const Form = () => {
  const [state, setState] = React.useState({
    email: "",
    nome: "",
  });

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData();

    for (let [key, value] of Object.entries(state)) {
      formData.append(key, value);
    }

    // Use fetch or axios to submit the form
    await axios
      .post("https://formeezy.com/api/v1/forms/628150ad3be16c0009c71fbb/submissions", formData)
      .then(({ data }) => {
        const { redirect } = data;
        // Redirect used for reCAPTCHA and/or thank you page
        window.location.href = redirect;
      })
      .catch((e) => {
        window.location.href = e.response.data.redirect;
      });
  }

  return (
    <form className="space-y-3 md:space-y-4 mt-3 md:mt-6 flex flex-col" onSubmit={handleSubmit}>
      <input className="block w-full px-4 py-3 text-white bg-gray-600 rounded-lg focus:ring-white focus:border-white" id="nome" name="nome" type="text" placeholder="Introduza o seu nome" required onChange={handleChange}/>
      <input className="block w-full px-4 py-3 text-white bg-gray-600 rounded-lg focus:ring-white focus:border-white" id="email" name="email" type="email" placeholder="Introduza o seu email" required onChange={handleChange}/>
      <button type="submit" className="px-4 py-3 bg-gradient-to-br from-gradientSky-0 to-gradientSky-1 rounded-lg text-white font-semibold">Confirmar inscrição</button>
    </form>
  );
}

const Contact = () => {
  return (
    <div className="md:max-w-md md:flex-1 mt-7 rounded-xl p-6 md:p-8 lg:p-10 xl:p-12 bg-gray-800 relative">
      <div className="absolute -top-6"><svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12"><rect width="40" height="40" rx="12" fill="url(#icone_svg__paint0_linear_87_153)" fill-opacity="0.3"></rect><path d="M21.82 11a.5.5 0 00-.847-.36l-1.777 1.71a35.551 35.551 0 00-6.631 8.715.498.498 0 00.435.746h4.31V29a.5.5 0 00.837.37l.795-.725a35.498 35.498 0 007.001-8.78l.492-.87a.5.5 0 00-.435-.747h-4.18V11z" fill="url(#icone_svg__paint1_linear_87_153)"></path><defs><linearGradient id="icone_svg__paint0_linear_87_153" x1="40" y1="40" x2="0" y2="0" gradientUnits="userSpaceOnUse"><stop stop-color="#73D0EE"></stop><stop offset="1" stop-color="#8876FE"></stop></linearGradient><linearGradient id="icone_svg__paint1_linear_87_153" x1="26.5" y1="29.5" x2="8.353" y2="16.128" gradientUnits="userSpaceOnUse"><stop stop-color="#73D0EE"></stop><stop offset="1" stop-color="#8876FE"></stop></linearGradient></defs></svg></div>
      <h2 className="text-white text-xl font-semibold md:text-2xl">Inscreva-se agora</h2>
      <p className="text-gray-300 text-sm mt-1">Evento online e gratuito de 30/05 a 03/06.</p>
      <Form/>
    </div>
  );
};

export default Contact;
