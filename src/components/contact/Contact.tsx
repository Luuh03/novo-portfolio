import "./Contact.css"

function Contact() {
  return (
    <div className="flex container mx-auto justify-center my-12 px-15">
      <div className="w-full bg-(--card-background) shadow-lg/40 rounded-2xl p-8 text-white">
        <h2 className="pb-6 text-[2.438rem] font-medium">Contato</h2>

        <form className="flex flex-col gap-4" action="">

          <div className="flex gap-8 w-full">
            <div className="flex flex-col w-full gap-1.5">
              <label htmlFor="name" className="">Nome</label>
              <input id="name" type="text" name="name" placeholder="Digite aqui seu nome" />
            </div>

            <div className="flex flex-col w-full gap-1.5">
              <label htmlFor="email">E-mail</label>
              <input id="email" type="text" name="email"  placeholder="Digite aqui seu e-mail" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="subject">Assunto</label>
            <input id="subject" type="text" name="subject" placeholder="Digite aqui o assunto" />
          </div>
 
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" placeholder="Digite aqui sua mensagem"></textarea>
          </div>

          <div className="mx-auto my-3 g-recaptcha" data-sitekey="6LcBNjUsAAAAALwgG_6-cKKmd8dWKDJyB5NZvKTQ"></div>

          <button className="py-3 px-16 mx-auto bg-(--blue) rounded-lg
            transition duration-200 hover:bg-(--dark-blue) cursor-pointer" 
            type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default Contact