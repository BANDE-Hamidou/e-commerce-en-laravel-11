import { FaStar } from 'react-icons/fa6';
import image6 from '../../assets/chemise.jpg';
import image7 from '../../assets/chemise6.jpg';
import image8 from '../../assets/chemise7.jpg';
import image9 from '../../assets/chemise8.jpg';
import image10 from '../../assets/logo.jpg';

const Listeproduits = [
    {
        id: 1,
        img: image6,
        title: "L'éthique féminin",
        rating: 5.0,
        color: 'white',
        aosDelay: '0',
    },
    {
        id: 2,
        img: image7,
        title: "Découvrir le Clavier",
        rating: 4.5,
        color: 'red',
        aosDelay: '200',
    },
    {
        id: 3,
        img: image8,
        title: "Sélectionne un mot",
        rating: 4.7,
        color: 'brown',
        aosDelay: '400',
    },
    {
        id: 4,
        img: image9,
        title: "Sélectionne un mot",
        rating: 4.4,
        color: 'yellow',
        aosDelay: '600',
    },
    {
        id: 5,
        img: image10,
        title: "Sélectionne un mot",
        rating: 4.5,
        color: 'pink',
        aosDelay: '800',
    },
]

const Produits = () => {
  return (
    <div className="mt-14 mb-12">
      <div className='container'>
        {/* L'entête */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm text-primary">Meilleure boutique de vente en ligne</p>
            <h1 className="text-3xl font-bold">Produits</h1>
            <p className="text-xs text-gray-400">
              Il est donc rare de trouver des documentations à la fois cohérentes, complètes, didactiques, à jour et de qualité.
              Il en résulte que les documentations des logiciels libres sont souvent incomplètes, obsolètes ou franchement inexistantes.
              Elles ne sont par ailleurs pas toujours d une qualité exceptionnelle ou lisibles par un utilisateur non programmeur,
              sauf dans le cas de petits documents épars et souvent redondants.
            </p>
        </div>
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                {/* Card Section */}
                {
                    Listeproduits.map((data) => (
                        <div key={data.id} 
                        data-aos = "fade-app"
                        data-aos-delay = {data.aosDelay}
                        className='space-y-3'>
                            <img src={data.img} alt={data.title} className="h-[220px] w-[150px] object-cover rounded-sm" />
                            <div>
                                <h3 className='font-semibold'>{data.title}</h3>
                                {/* Vous pouvez ajouter plus de détails ici, comme la couleur, la note, etc. */}
                                <p className='text-sm text-gray-600'>{data.color}</p>
                                <div className='flex items-center gap-1 '>
                                    <FaStar className='text-yellow-500'/>
                                    <span>{data.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        {/* Fin de l'entête */}
      </div>
    </div>
  )
}

export default Produits;
