import ReCAPTCHA from "react-google-recaptcha"
import React, { useRef, useState } from "react"
import "./Contact.css"
import type { FormErrors, Email } from "../../models/Email"
import { validate } from "../../utils/VerifyEmailVal"

function Contact() {
  //Captcha validation
  const [capValue, setCapValue] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const [errors, setErrors] = useState<FormErrors>({})
  const [emailValues, setEmailValues] = useState<Email>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;

    console.log(emailValues)

    setEmailValues((prev) => ({
      ...prev,
      [name]: value,
    }))

    setErrors((prev) => ({
      ...prev,
      [name]: undefined
    }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const validationErrors = validate(emailValues)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    alert("Mensagem enviada com sucesso!")

    formRef.current?.submit()
  }

  return (
    <div className="flex container mx-auto justify-center my-12 px-15">
      <div className="w-full bg-(--card-background) shadow-lg/40 rounded-2xl p-8 text-white">
        <h2 className="pb-6 text-[2.438rem] font-medium">Contato</h2>

        <form className="flex flex-col gap-4" action="https://formsubmit.co/4a4fe657f235893f6cfe8fe58e77bc66" onSubmit={handleSubmit} method="post" ref={formRef}>

          <input type="hidden" name="_next" value="http://localhost:5173/#"></input>
          <input type="hidden" name="_captcha" value="false"></input>

          <div className="flex gap-8 w-full">
            <div className="flex flex-col w-full gap-1.5">
              <label htmlFor="name">Nome</label>
              <input id="name" type="text" name="name" placeholder="Digite aqui seu nome"
                onChange={handleChange}
                value={emailValues.name}
                className={errors.name ? "input-error" : ""}
              />
              {errors.name ? errors.name : ""}
              <span id="txtName"></span>
            </div>

            <div className="flex flex-col w-full gap-1.5">
              <label htmlFor="email">E-mail</label>
              <input id="email" type="text" name="email" placeholder="Digite aqui seu e-mail"
                onChange={handleChange}
                value={emailValues.email}
                className={errors.email ? "input-error" : ""}
              />
              {errors.email ? errors.email : ""}

              <span id="txtEmail"></span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="subject">Assunto</label>
            <input id="subject" type="text" name="subject" placeholder="Digite aqui o assunto"
              onChange={handleChange}
                value={emailValues.subject}
              className={errors.subject ? "input-error" : ""}
              />
              {errors.subject ? errors.subject : ""}

            <span id="txtSubject"></span>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" placeholder="Digite aqui sua mensagem"
              onChange={handleChange}
              value={emailValues.message}
              className={errors.message ? "input-error" : ""}
              ></textarea>
              {errors.message ? errors.message : ""}
          </div>

          <ReCAPTCHA
            className="mx-auto my-3 g-recaptcha"
            theme="dark"
            sitekey="6LcBNjUsAAAAALwgG_6-cKKmd8dWKDJyB5NZvKTQ"
            onChange={(value) => setCapValue(value)}
          />

          <button className="py-3 px-16 mx-auto bg-(--blue) rounded-lg hover:scale-105 transition duration-200 
            hover:bg-(--dark-blue) cursor-pointer disabled:cursor-auto disabled:scale-100 disabled:bg-gray-900 disabled:text-(--text-color)"
            type="submit" disabled={!capValue}>Enviar</button>

        </form>
      </div>
    </div>
  )
}

export default Contact