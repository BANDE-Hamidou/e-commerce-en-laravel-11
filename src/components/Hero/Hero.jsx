import image from '../../assets/chemise.jpg';
import image1 from '../../assets/chemise1.jpg';
import image2 from '../../assets/chemise2.jpg';
import image3 from '../../assets/chemise3.jpg';
import image4 from '../../assets/chemise4.jpg';
import image5 from '../../assets/chemise5.jpg';
import Slider from 'react-slick';

const images = [
    {
        id: 1,
        img: image,
        title: 'Chemise de qualité superieur',
        description: "Faible compatibilité avec les logiciels propriétaires Les éditeurs de logiciels propriétaires ayant intérêt à limiter l' interopérabilité avec les logiciels libres qui les concurrencent, ils s'arrangent généralement pour rendre la compatibilité la plus difficile possible."
    },
    {
        id: 2,
        img: image1,
        title: 'Chemise de qualité',
        description: "Le choix d’une licence relève d’une importance capitale. Elle est la clé de la volonté de son auteur."
    },
    {
        id: 3,
        img: image2,
        title: 'La bonne combinaison',
        description: "S’il souhaite partager au monde le fruit de son travail et demander la participation de tous, il optera pour une licence de type GPL"
    },
    {
        id: 4,
        img: image3,
        title: 'Chemise de qualité superieur',
        description: "Faible compatibilité avec les logiciels propriétaires Les éditeurs de logiciels propriétaires ayant intérêt à limiter l' interopérabilité avec les logiciels libres qui les concurrencent, ils s'arrangent généralement pour rendre la compatibilité la plus difficile possible."
    },
    {
        id: 5,
        img: image4,
        title: 'Chemise de qualité superieur',
        description: "Faible compatibilité avec les logiciels propriétaires Les éditeurs de logiciels propriétaires ayant intérêt à limiter l' interopérabilité avec les logiciels libres qui les concurrencent, ils s'arrangent généralement pour rendre la compatibilité la plus difficile possible."
    },
    {
        id: 6,
        img: image5,
        title: 'Chemise de qualité superieur',
        description: "Faible compatibilité avec les logiciels propriétaires Les éditeurs de logiciels propriétaires ayant intérêt à limiter l' interopérabilité avec les logiciels libres qui les concurrencent, ils s'arrangent généralement pour rendre la compatibilité la plus difficile possible."
    },
];

const Hero = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: 'ease-in-out',
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
            <div className='h-[600px] w-[600px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'></div>
            <div className='container pb-8 sm:pb-0'>
                <Slider {...settings}>
                    {images.map((data) => (
                        <div key={data.id}>
                            <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-6'>
                                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                    <h1 
                                     data-aos = "zoom-out"
                                     data-aos-duration = "500"
                                     data-aos-once = "true"
                                    className='text-5xl sm:text-6xl lg-text-7xl font-bold'>{data.title}</h1>
                                    <p 
                                    data-aos = "fade-up"
                                    data-aos-duration = "500"
                                    data-aos-delay = "100"
                                    className='text-sm'>{data.description}</p>
                                    <div
                                    data-aos = "fade-up"
                                    data-aos-duration = "500"
                                    data-aos-delay = "300">
                                        <button className='bg-gradient-to-r from-primary to-secondary hover:scale-100 duration-200 text-white py-2 px-4 rounded-full'>Order Now</button>
                                    </div>
                                </div>
                                <div className='order-1 sm:order-2'>
                                    <div
                                     data-aos = "zoom-in"
                                     data-aos-once = "true"
                                    className='relative z-10'>
                                        <img src={data.img} className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto' alt={data.title} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Hero;
