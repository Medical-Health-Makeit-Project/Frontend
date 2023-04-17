import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';

export const AppointmetsList = () => {
  return (
    <div className="appointments-exist">
      <Accordion allowToggle className="accordion__container">
        <AccordionItem>
          <h3>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                appointment 1
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel className="accordion__description">
            You have a Endocrinologist appointment with Dr. Crystal Fitzhug in the headquarters of
            Miami,USA in 19/4/2023 at 12:17
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
