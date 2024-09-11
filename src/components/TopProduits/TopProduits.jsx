import hard1 from "../../assets/hardsImg/hard1.jpg";
import hard2 from "../../assets/hardsImg/hard2.jpg";
import hard3 from "../../assets/hardsImg/hard3.jpg";
import hard4 from "../../assets/hardsImg/hard4.jpg";
import hard5 from "../../assets/hardsImg/hard5.jpg";
import hard6 from "../../assets/hardsImg/hard6.jpg";
import hard7 from "../../assets/hardsImg/hard7.jpg";
import hard8 from "../../assets/hardsImg/hard11.jpg";
import hard9 from "../../assets/hardsImg/hard9.jpg";
import hard10 from "../../assets/hardsImg/hard10.jpg";
// import { FaStar } from "react-icons/fa6";


const ProductsData = [
    {
        id: 1,
        img: hard1,
        title: "L'éthique féminin",
       description: 'La robe cocktail est une tenue élégante et souvent semi-formelle, parfaite pour des occasions spéciales telles que des mariages, des cocktails ou des événements festifs'
    },
    {
        id: 2,
        img: hard2,
        title: "Découvrir le Clavier",
        description: 'cocktails ou des événements festifs. Elle est généralement de longueur courte à mi-longue, mettant en valeur la silhouette sans être trop formelle',
    },
    {
        id: 3,
        img: hard3,
        title: "Sélectionne un mot",
       description: 'Les jeans boyfriend sont des pantalons décontractés au style inspiré des jeans masculins. Ils sont caractérisés par une coupe ample et une allure décontractée.',
    },
    {
        id: 4,
        img: hard4,
        title: "Dans les années 1940",
        description: 'Habituellement, ils sont légèrement plus larges au niveau des hanches et des cuisses, avec un entrejambe bas, donnant l\'impression de piquer le jean de son petit ami.'
    },
    {
        id: 5,
        img: hard5,
        title: "Si vraiment aucune pierre",
        description: 'Une blouse à col lavallière est une chemise élégante dotée d\'un col à lavallière noué, ajoutant une touche féminine et sophistiquée',
    },
    {
        id: 6,
        img: hard6,
        title: "L'éthique féminin",
       description: 'Elle peut être portée au travail avec un pantalon ou une jupe, ou de manière décontractée avec un jean, offrant ainsi une polyvalence dans le style.'
    },
    {
        id: 7,
        img: hard7,
        title: "Découvrir le Clavier",
       description: 'Les blouses à col lavallière sont souvent légères et fluides, parfaites pour les saisons plus chaudes.'
    },
    {
        id: 8,
        img: hard8,
        title: " participe à la guerrenne un mot",
        description: 'Le blouson aviateur en cuir est un vêtement classique inspiré des uniformes de vol de l\'aviation.- Il est généralement en cuir, avec des poignets et une ceinture côtelés, ainsi qu\'une fermeture éclair sur le devant. Ce style de veste donne une allure décontractée et audacieuse, ajoutant une touche rebelle à n\'importe quel look.',
    },
    {
        id: 9,
        img: hard9,
        title: "La conversation",
       description: 'La combinaison pantalon est une tenue d\'une seule pièce qui combine un haut et un pantalon, créant un look fluide et moderne. Elle peut être ajustée à la taille pour mettre en valeur la silhouette ou avoir une coupe ample pour un style décontracté.Les combinaisons pantalon sont souvent choisies pour des occasions spéciales ou des événements formels, offrant une alternative élégante à la robe.',
    },
    {
        id: 10,
        img: hard10,
        title: "Il revient en France",
        description: 'Le sweat à capuche oversize est un vêtement décontracté et confortable, caractérisé par une coupe ample et un capuchon.',
    },
]
const TopProduits = () => {
  return (
    <div>
        <div>
            <div className="container">
                        {/* entete */}
                <div className="text-left mt-24 ">
                    <p className="text-sm text-primary">Meilleure produis de beauté pour vous </p>
                    <h1 className="text-3xl font-bold">Produits de qualités superieur </h1>
                    <p className="text-xs text-gray-400">
                     Il est donc rare de trouver des documentations à la fois cohérentes, complètes, didactiques, à jour et de qualité.
                    Il en résulte que les documentations des logiciels libres sont souvent incomplètes, obsolètes ou franchement inexistantes.
                    Elles ne sont par ailleurs pas toujours d une qualité exceptionnelle ou lisibles par un utilisateur non programmeur,
                    sauf dans le cas de petits documents épars et souvent redondants.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5  gap-5  md:gap-4 place-items-center mt-20 ">
                    {ProductsData.map((data) => ( 
                        <div key={data.id} className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary
                        hover:text-white relative shadow-xl duration-300 group max-w-[300px]">
                            <div className="">
                                <img src={data.img} alt={data.title}  className="h-[220px] max-w-[140px] block max-auto transform
                                -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md
                                 object-cover rounded-sm"/>
                            </div>
                        </div>
                       )) 
                    }
                </div>
        </div>
        </div>
    </div>
  )
}

export default TopProduits 