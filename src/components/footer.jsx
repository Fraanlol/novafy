export default function Footer() {
    return (
       <section className="mb-20 footer">
            <div className="flex justify-start items-start footer">
                <div className="mr-36px">
                    <p className="text-2xl mb-4 font-bold">Recibe las ultimas novedades</p>
                    <div className="flex justify-center items-start flex-col">
                        <p>Email</p>
                        <input className="footer-contact" type="mail" name="" id="" placeholder="Dirección de correo" />
                        <button className="footer-cta" disabled>Enviar</button>
                    </div>
                </div>
                <div className=" mx-24">
                    <p className="text-2xl font-bold">Contactanos</p>
                    <p>rodmaucompany@gmail.com</p>
                </div>
                <div>
                    <p className="text-2xl font-bold">Redes</p>
                    <p>Proximamente</p>
                </div>
            </div>
       </section>
    )
  }