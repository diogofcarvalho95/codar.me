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
      <input className="block w-full px-4 py-3 bg-gray-600 rounded-lg focus:ring-white focus:border-white" id="nome" type="text" placeholder="Introduza o seu nome" required onChange={handleChange}/>
      <input className="block w-full px-4 py-3 bg-gray-600 rounded-lg focus:ring-white focus:border-white" id="email" type="email" placeholder="Introduza o seu email" required onChange={handleChange}/>
      <button type="submit" className="px-4 py-3 bg-gradient-to-br from-gradientSky-0 to-gradientSky-1 rounded-lg text-white font-semibold">Confirmar inscrição</button>
    </form>
  );
}

const Contact = () => {
  return (
    <div className="md:max-w-md md:flex-1 mt-7 rounded-xl p-6 md:p-8 lg:p-10 xl:p-12 bg-gray-800">
      <h2 className="text-white text-xl font-semibold md:text-2xl">Inscreva-se agora</h2>
      <p className="text-gray-300 text-sm mt-1">Evento online e gratuito de 30/05 a 03/06.</p>
      <Form/>
    </div>
  );
};

export default Contact;
