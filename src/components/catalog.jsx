export default function Catalog() {
    let data = [
        {
            'name':'Marketing avanzado',
            'price':'$$$',
            'img':'./shop-1.jpg'
        },
        {
            'name':'Marketing principiante',
            'price':'$$$',
            'img':'./shop-2.jpg'
        },
        {
            'name':'Tu primera tienda',
            'price':'$$$',
            'img':'./shop-3.jpg'
        },
        {
            'name':'Consiguiendo proveedores',
            'price':'$$$',
            'img':'./shop-4.jpg'
        },
        {
            'name':'Eligiendo los productos',
            'price':'$$$',
            'img':'./hero-2.jpg'
        },
        {
            'name':'Herramientas de SEO',
            'price':'$$$',
            'img':'./services-2.jpg'
        }
    ]
    return (
       <section className="mb-40">
        <div className="flex flex-col items-center">
            <div className="mb-40">
                <p className="text-4xl font-bold copy-shop">Invierte en tu negocio</p>
            </div>
            <section className="w-full section-shop py-20">
            <div className="flex justify-center m-auto flex-wrap items-center max-w-7xl flex-auto">
                {data.map(data => {
                    return(
                        <div className="m-4">
                            <img className="catalog-pic" src={data.img} alt="" />
                            <p className="my-4 text-xl">{data.name}</p>
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
  