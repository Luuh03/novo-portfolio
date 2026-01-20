function Footer() {
  let year = new Date().getFullYear()

  return (
    <div className="flex justify-center bg-(--card-background) text-white">
      <div className="container flex justify-center py-10">
        <p>© {year} <span className="text-(--light-blue)">Luan E. de Queiroz</span> | Todos os direitos reservados.</p>
      </div>
    </div>
  )
}

export default Footer