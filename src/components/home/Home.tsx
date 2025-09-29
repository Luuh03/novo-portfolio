import { HiDocumentDownload } from "react-icons/hi"
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si"


function Home() {
  return (
    <>
      <div className="flex justify-center bg-(--card-background) py-12">
        <div className="ml-9 lg:ml-0 container grid sm:grid-cols-2 lg:grid-cols-3 gap-9 lg:gap-0">
          <img src="https://ik.imagekit.io/j8alkuh75t/Portf%C3%B3lio/foto_principal?updatedAt=1758736922057"
            alt="Foto Luan Queiroz com fundo degrade azul"
            className="max-h-52 place-self-center sm:place-self-start lg:place-self-center sm:col-span-2 lg:col-span-1" />

          <div className="flex flex-col justify-center">
            <h1 className="font-semibold text-white text-2xl">Olá! Eu sou o <br />
            <span className="text-blue-400 text-4xl leading-9">Luan Queiroz</span></h1>

            <h2 className="py-4.5 text-[1.375rem] text-(--text-color)">Desenvolvedor Full Stack</h2>

            <button className="flex py-3 px-6 bg-(--blue) gap-1 text-white rounded-lg max-w-[9.75rem]
              transition duration-200 hover:bg-(--dark-blue) cursor-pointer">
              <HiDocumentDownload size={24} />
              <a href="https://drive.google.com/uc?export=download&id=1LhEJ9mPSFHgu20KkiHPdI8YVhWiOaiQp">Baixar CV</a>
            </button>
          </div>

          <div className="flex items-center">
            <ul className="flex flex-col gap-5 text-(--text-color) font-medium">
              <a className="flex gap-2 transition duration-200 hover:text-white cursor-pointer hover:scale-105"
                href="https://github.com/Luuh03" target="_blank">
                <SiGithub size={24} className="text-(--light-blue)" />
                Luuh03
              </a>
              <a className="flex gap-2 transition duration-200 hover:text-white cursor-pointer hover:scale-105"
                href="https://www.linkedin.com/in/luan-queiroz">
                <SiLinkedin size={24} className="text-(--light-blue)" />
                Luan Queiroz
              </a>
              <a className="flex gap-2 transition duration-200 hover:text-white cursor-pointer hover:scale-105"
                href="mailto:luan.queiroz2003@gmail.com">
                <SiGmail size={24} className="text-(--light-blue)" />
                luan.queiroz2003@gmail.com
              </a>
            </ul>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home