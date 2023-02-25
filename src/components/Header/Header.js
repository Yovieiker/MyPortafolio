import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, ShowCase, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }} href="https://drive.google.com/file/d/1bhqwu9VrcvxzWzGqYEGhojoV-Ryu6Ctt/view" target="_blank">
          <DiCssdeck size="3rem" /> <ShowCase>Portafolio</ShowCase>
        </a>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Proyectos</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Tecnologias</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>Sobre mí</NavLink>
        </Link>
      </li>   
      <li>
        <Link href="#experience">
          <NavLink>Experiencia</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Yovieiker" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/yovieiker-canelon-443691244/" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
