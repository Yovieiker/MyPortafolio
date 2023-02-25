import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
  GothicLink,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>Acerca de mí</SectionTitle>
      <SectionText>
        <br />
        Yovieiker
        Canelon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Venezuela&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;23
        años
        <br />
        <br />
        Desarrollador web front end , 1 año y medio de experiencia laboral{" "}
        <br />
        <br />
        Empecé con c++ en la universidad, luego Java, despues empecé a estudiar
        de forma didactca desarrollo web donde aprendí Javascript y de ahi fui
        adentrandome mas en el area de desarrollo front end trabajando de forma
        remota, cursando ultimo año de la universidad.
        <br />
        <br />
        Soy de Venezuela, estado Lara, Barquisimeto
        <br />
        <br />
        Disponible para trabajar a tiempo completo de forma remota si es fuera
        de mi localidad y trabajar de forma presencial si es dentro de mi
        localidad
        <br />
        <br />
      </SectionText>
      <SectionDivider />
      <SectionTitle id="experience">
        <br />
        Experiencia
      </SectionTitle>
      <SectionText>
        <br />
        -DESARROLLADOR WEB Laika Mascota, Colombia, Bogota. Desarrollador web
        front-end formando parte del equipo de desarrollo de la pagina web 3.0
        nueva de la empresa{" "}
        <GothicLink href="https://laikamascotas.cl/" target="_blank">
          Laika
        </GothicLink>
        ) (Julio 2022-2022 Diciembre)
        <br />
        <br />
        -DESARROLLADOR WEB Developapp Sas, Barranquilla, Colombia Participe en
        varios proyectos diferentes que fueron clientes de la empresa, para los
        cuales realizamos desarrollos personalizados como E-Commerce, sas,
        Software de gestion . Ejemplos{" "}
        <GothicLink href="https://pradoscaninos.com/" target="_blank">
          PradoCaino
        </GothicLink>{", "}
        <GothicLink href="https://avsbogota.com/" target="_blank">
          AVS
        </GothicLink>{" "}
        (Julio 2021 -2022 junio)
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {`${item.year}`}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fillOpacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop
                          offset="0.79478"
                          stopColor="white"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type="button"
            >
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          );
        })}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
