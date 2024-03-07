import { Wrapper, Status } from "@googlemaps/react-wrapper";
export default function ContactSheet() {
    return (
        <section>
            <p className="text-4xl font-bold mb-8 text-center">Contáctanos</p>
       <div className="mb-32 w-full section-sheet bg-[color:var(--color-3)] py-16">
        <div className="m-auto flex flex-auto flex-col justify-center items-center mb-16 text-white">
            <p className="mb-4">Escríbenos para más información</p>
            <p>rodmaucompany@gmail.com</p>
        </div>
        <div className="m-auto flex flex-row flex-auto justify-around items-center flex-wrap max-w-7xl py-12 bg-[color:var(--color-3)] text-white">
            <div className="mb-16">
                <p className="text-4xl mb-12">Ubicación</p>
                <p className="text-xl font-bold">Dirección</p>
                <p>1342 NM 333 STE C 5074</p>
                <p>Tijeras, USA</p>
                <p className="text-xl font-bold mt-8">Horario Online</p>
                <p>Lunes - Viernes</p>
                <p>10:00 - 19:00 (GMT-3)</p>
            </div>
            <div className="google-map-code">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.605799273567!2d-106.267927!3d35.09158099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8718bc3db13e2a89%3A0x7907adf26b0dd949!2s1342%20NM-333%20c%205074%2C%20Tijeras%2C%20NM%2087059%2C%20USA!5e0!3m2!1sen!2sar!4v1709851972292!5m2!1sen!2sar" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
       </div>
       </section>
    )
  }
  