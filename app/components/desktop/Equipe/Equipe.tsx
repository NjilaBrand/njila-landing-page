"use client";
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import GarciaPedro from '../../../assets/Rectangle 30.png'
import MauricioMbala from '../../../assets/Rectangle 31.png'
import './Equipe.scss'
import 'swiper/css';

export default function Equipe() {

    const data:any = EquipeNjila()

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
      <div className='Equipe' id='equipe'>
        <div className="Equipe-content-text">
            <h2><span>Conheça</span> nossa equipe!</h2>
            <p>
                Somos uma empresa atuante nas áreas de Marketing 
                e Publicidade desenvolvendo produtos e serviços 
                que sirvam de auxílio para o seu público alvo.
            </p>
        </div>

        <div className="Equipe-content-slider">
            <Swiper className="Equipe-slider">
                {data.map((equipe:any) => 
                    <SwiperSlide key={equipe.id} className="box-content">
                        <div className="Equipe-slider-content-text">
                            <div className="content-text-one">
                                <h2>{equipe.twoTeam[0].name} - <span>{equipe.twoTeam[0].post}</span></h2>
                                <p>{equipe.twoTeam[0].desc}</p>
                            </div>
                            <div className="content-text-two">
                                <h2>{equipe.twoTeam[1].name} - <span>{equipe.twoTeam[1].post}</span></h2>
                                <p>{equipe.twoTeam[1].desc}</p>
                            </div>
                        </div>

                        <div className="Equipe-slider-content-image">
                        <div className="content-image-one">
                            <div className="text"><span>{equipe.twoTeam[0].name}</span></div>
                            <div className="image">
                                <Image
                                    src={equipe.twoTeam[0].photo}
                                    alt='photo-team'
                                />
                            </div>
                        </div>
                        <div className="content-image-two">
                            <div className="text"><span>{equipe.twoTeam[1].name}</span></div>
                            <div className="image">
                                <Image
                                    src={equipe.twoTeam[1].photo}
                                    alt='photo-team'
                                />
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
      </div>
    )
  } 
  
  const EquipeNjila = () => {
    const equipe: any[] = [
        {
            "id": 1,
            "twoTeam": [
                {
                    "teamID": 1,
                    "name": "Garcia Pedro",
                    "post": "CTO",
                    "photo": GarciaPedro,
                    "desc": "Somos uma empresa atuante nas áreas de Marketing e Publicidade desenvolvendo produtos e serviços que sirvam de auxílio para o seu público alvo."
                },
                {
                    "teamID": 2,
                    "name": "Maurício Mbala",
                    "post": "FrontEnd Developer",
                    "photo": MauricioMbala,
                    "desc": "Somos uma empresa atuante nas áreas de Marketing e Publicidade desenvolvendo produtos e serviços que sirvam de auxílio para o seu público alvo."
                }
            ]
        }
    ]

    return equipe
  }