export default function Shop() {
    let data = [
        {
            'name_en':'Acrylic Cutting Boards',
            'name_es':'Tablas para picar de Acrilico',
            'price':'$35.99',
            'img':'./acrilic.jpg'
        },
        {
            'name_en':'Beer Bottle Caps, 200 PCS',
            'name_es':'Tapas de cerveza 200 unidades',
            'price':'$19.99',
            'img':'./beer.jpg'
        },
        {
            'name_en':'Tape Measure for Body Measuring, 79Inch/2Meters',
            'name_es':'Cinta metrica corporal, 79Pul./2Mts.',
            'price':'$9.99',
            'img':'./tape.jpg'
        },
    ]
    return (
       <section className="mb-40">
        <div className="flex flex-col items-center">
            <div className="mb-16">
                <p className="text-4xl font-bold copy-shop">Nuestro catalogo</p>
            </div>
            <section className="w-full py-20">
            <div className="flex justify-center m-auto flex-wrap items-center max-w-7xl flex-auto">
                {data.map((data,i) => {
                    return(
                        <div className="m-4" key={i}>
                            <img className="catalog-pic" src={data.img} alt="" />
                            <p className="my-4 text-xl">{data.name_es}</p>
                            <p className="text-xl">{data.price}</p>
                        </div>
                    )
                })}
            </div>
            </section>
        </div>
       </section>
    )
  }
  