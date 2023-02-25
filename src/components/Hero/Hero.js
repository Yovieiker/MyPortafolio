import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bienvenido 
          <br />
          a mi Portafolio !
        </SectionTitle>
        <SectionText>
          Yovieiker Canelon | Front-End Developer 
        </SectionText>
        <a href="https://drive.google.com/file/d/1bhqwu9VrcvxzWzGqYEGhojoV-Ryu6Ctt/view?usp=sharing" target="_blank">
          <Button onClick={props.handleClick}>Resumen</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
