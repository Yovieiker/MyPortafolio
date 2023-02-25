import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2019, text: 'Desarrollo web'},
  { number: 2021, text: 'Framework Materialize css'},
  { number: 2021, text: 'framework React'},
  { number: 2022, text: 'JavaScript Algorithms and Data Structures'},
  { number: 2022, text: 'Front End Development Libraries'},
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Logros</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
