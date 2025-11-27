

function Projects() {
  return (
    <div className="pt-24">
      <h2 className="pb-6 text-[2.438rem] text-white font-medium">Projetos</h2>

      <div className="grid gap-5.5 md:grid-cols-2 justify-items-center">

        <div className="group cursor-pointer flex flex-col w-60 transition-all duration-250 hover:scale-110 bg-(--card-background) shadow-lg/40 rounded-lg overflow-hidden">

          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://ik.imagekit.io/j8alkuh75t/Portf%C3%B3lio/Projects/golady.png?updatedAt=1763434255988"
              className="w-full object-cover"
            />

            {/* Camada de degradê fixa na parte de baixo */}
            <div
              className="
              absolute inset-0
              bg-gradient-to-t from-black/60 via-black/30 to-transparent
              transition-opacity duration-300
              opacity-100
              group-hover:opacity-0
            "
            ></div>

            {/* Camada escura OVERLAY para o hover */}
            <div
              className="
              absolute inset-0
              bg-black/60
              opacity-0
              transition-opacity duration-300
              group-hover:opacity-100
            "
            ></div>

          </div>

          <p className="font-semibold text-white text-2xl mx-3 mb-4 -mt-10 z-0">GoLady</p>

          <div className="flex justify-center gap-3 pb-2">
            <img className="h-8"
              src="https://ik.imagekit.io/j8alkuh75t/Portf%C3%B3lio/Tecnologies%20Icons/springboot.png?updatedAt=1760806380581" alt="" />
            <img className="h-8"
              src="https://ik.imagekit.io/j8alkuh75t/Portf%C3%B3lio/Tecnologies%20Icons/springboot.png?updatedAt=1760806380581" alt="" />
            <img className="h-8"
              src="https://ik.imagekit.io/j8alkuh75t/Portf%C3%B3lio/Tecnologies%20Icons/springboot.png?updatedAt=1760806380581" alt="" />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Projects