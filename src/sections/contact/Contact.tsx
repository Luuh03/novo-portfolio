import ReCAPTCHA from "react-google-recaptcha"
import React, { useRef, useState } from "react"
import "./Contact.css"
import type { FormErrors, Email } from "../../types/Email"
import { validate } from "../../utils/VerifyEmailVal"
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si"
import { AnimatedFadeIn } from "../../components/fadeIn/AnimatedFadeIn"

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
    <div className="flex container mx-auto justify-center py-24 px-5 flex-col gap-20" id="contact">
      <AnimatedFadeIn>
        <div className="w-full bg-(--card-background) shadow-lg/40 rounded-2xl p-8 text-white">
          <h2 className="pb-6 text-[2.438rem] font-medium">Contato</h2>

          <form className="flex flex-col gap-4" action="https://formsubmit.co/4a4fe657f235893f6cfe8fe58e77bc66" onSubmit={handleSubmit} method="post" ref={formRef}>

            <input type="hidden" name="_next" value="https://luan-queiroz.vercel.app"></input>
            <input type="hidden" name="_captcha" value="false"></input>

            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 w-full">
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
      </AnimatedFadeIn>
      <AnimatedFadeIn>
        <div className="flex flex-col md:flex-row justify-center gap-11">
          <a href="mailto:luanemidio.dev@gmail.com">
            <div className="contact-option">
              <SiGmail size={64} />
              <h3>E-mail</h3>
              <p>luanemidio.dev@gmail.com</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/luan-queiroz/" target="_blank">
            <div className="contact-option">
              <SiLinkedin size={64} />
              <h3>LinkedIn</h3>
              <p>Luan Emidio de Queiroz</p>
            </div>
          </a>
          <a href="https://github.com/Luuh03" target="_blank">
            <div className="contact-option">
              <SiGithub size={64} />
              <h3>GitHub</h3>
              <p>Luuh03</p>
            </div>
          </a>
        </div>
      </AnimatedFadeIn>
    </div>
  )
}

export default Contact