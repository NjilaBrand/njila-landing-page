"use client";
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Rectaguler01 from "../../../assets/Rectangle 22.png"
import Rectaguler02 from "../../../assets/Rectangle 26.png"
import Rectaguler03 from "../../../assets/Rectangle 27.png"
import image1 from '../../../assets/image1.jpg'
import image2 from '../../../assets/image2.jpg'
import image3 from '../../../assets/image3.jpg'
import image4 from '../../../assets/image4.jpg'
import image5 from '../../../assets/image5.jpg'
import image6 from '../../../assets/image6.jpg'
import image7 from '../../../assets/image7.jpg'
import image8 from '../../../assets/image8.jpg'
import image9 from '../../../assets/image9.jpg'
import image10 from '../../../assets/image10.jpg'
import image11 from '../../../assets/image11.jpg'
import image12 from '../../../assets/image12.jpg'
import 'swiper/css';
import Link from 'next/link';

export const SliderPortfolio = () => {
    const data:any = ProtfolioProjects()

    const params:any = {
        modules: [
            Pagination, 
            Scrollbar, 
            A11y,
            Autoplay
        ],
        autoplay: {
            delay: 3000,
        },
        slidesPerView: 1,
        spaceBetween: 25,
        loop: true,
        centeredSlides: true,
        effect: 'fade',
        grabCursor: true,
    }

  return (
    <Swiper
        {...params}
        className="Portfolio-slider"
    >
        {data.map((protfolio:any) => 
            <SwiperSlide key={protfolio.id} className="card-content">
                <Link 
                    href={protfolio.project[0].link} 
                    key={protfolio.project[0].projectID} 
                    className="content-image-01"
                >
                    <Image
                        src={protfolio.project[0].image}
                        alt='Image'
                    />
                </Link>
                <div className="content-image-dou">
                <Link 
                    href={protfolio.project[1].link} 
                    key={protfolio.project[1].projectID} 
                    className="content-image-02"
                >
                    <Image
                        src={protfolio.project[1].image}
                        alt='Image'
                    />
                </Link>
                    <div className="content-image-text">
                        <Link 
                            href={protfolio.project[2].link} 
                            key={protfolio.project[2].projectID} 
                            className="content-image-03"
                        >
                            <Image
                                src={protfolio.project[2].image}
                                alt='Image'
                            />
                        </Link>
                        <div className="content-text-slide">
                            <h2>{protfolio.empresa}</h2>
                            <p>{protfolio.description}</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        )}
    </Swiper>
  )
}


const ProtfolioProjects = () => {
    const protfolio: any[] = [
        {
            "id": 1,
            "empresa": "Branding",
            "description": 
                `Somos uma empresa atuante nas áreas 
                de Marketing e Publicidade desenvolvendo.`,
            "project": [
                {
                    "projectID": 1,
                    "image": Rectaguler01,
                    "link": "image1"
                },
                {
                    "projectID": 2,
                    "image": Rectaguler02,
                    "link": "image2"
                },
                {
                    "projectID": 3,
                    "image": Rectaguler03,
                    "link": "image3"
                }
            ]
        },
        /**
        {
            "id": 2,
            "empresa": "Branding",
            "description": 
                `Somos uma empresa atuante nas áreas 
                de Marketing e Publicidade desenvolvendo.`,
            "project": [
                {
                    "projectID": 1,
                    "image": image4,
                    "link": "image4"
                },
                {
                    "projectID": 2,
                    "image": image5,
                    "link": "image5"
                },
                {
                    "projectID": 3,
                    "image": image6,
                    "link": "image6"
                }
            ]
        },
        {
            "id": 3,
            "empresa": "Branding",
            "description": 
                `Somos uma empresa atuante nas áreas 
                de Marketing e Publicidade desenvolvendo.`,
            "project": [
                {
                    "projectID": 1,
                    "image": image7,
                    "link": "image7"
                },
                {
                    "projectID": 2,
                    "image": image8,
                    "link": "image8"
                },
                {
                    "projectID": 3,
                    "image": image9,
                    "link": "image9"
                }
            ]
        },
        {
            "id": 4,
            "empresa": "Branding",
            "description": 
                `Somos uma empresa atuante nas áreas 
                de Marketing e Publicidade desenvolvendo.`,
            "project": [
                {
                    "projectID": 1,
                    "image": image10,
                    "link": "image10"
                },
                {
                    "projectID": 2,
                    "image": image11,
                    "link": "image11"
                },
                {
                    "projectID": 3,
                    "image": image12,
                    "link": "image12"
                }
            ]
        },
        */
    ]

    return protfolio
  }