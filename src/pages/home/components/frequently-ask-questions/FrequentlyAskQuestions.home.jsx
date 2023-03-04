import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react';
import picture from '@assets/frequently-ask-question.jpeg';
import './frequentlyAskQuestions.home.scss';

export const FrequentlyAskQuestions = () => {
  return (
    <section className="frequently-ask-question">
      <div className="accordion-imagen-container">
        <img className="accordion-image-container__imagen" src={picture} alt="frequently ask question" />
      </div>
      <article className="accordion-container">
        <h2 className="accordion-container__title">Frequently ask questions</h2>
        <Accordion allowToggle className="accordion">
          <AccordionItem>
            <h3>
              <AccordionButton className="accordion__title">
                <Box as="span" flex="1" textAlign="left">
                  01. How do I request an appointment?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h3>
            <AccordionPanel pb={4} className="accordion__paragraph">
              Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat
              acumsan id imperdiet et porttitor at seum. nulla porttitor accumsan tincidunt.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h3>
              <AccordionButton className="accordion__title">
                <Box as="span" flex="1" textAlign="left">
                  02. What happens if a I need to go to the hospital?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h3>
            <AccordionPanel pb={4} className="accordion__paragraph">
              Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat
              acumsan id imperdiet et porttitor at seum. nulla porttitor accumsan tincidunt.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h3>
              <AccordionButton className="accordion__title">
                <Box as="span" flex="1" textAlign="left">
                  03. Can I make payment arragements on my account?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h3>
            <AccordionPanel pb={4} className="accordion__paragraph">
              Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat
              acumsan id imperdiet et porttitor at seum. nulla porttitor accumsan tincidunt.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h3>
              <AccordionButton className="accordion__title">
                <Box as="span" flex="1" textAlign="left">
                  04. How can I choose a health insurance plan?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h3>
            <AccordionPanel pb={4} className="accordion__paragraph">
              Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat
              acumsan id imperdiet et porttitor at seum. nulla porttitor accumsan tincidunt.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h3>
              <AccordionButton className="accordion__title">
                <Box as="span" flex="1" textAlign="left">
                  05. Will I be able to stay with my doctor?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h3>
            <AccordionPanel pb={4} className="accordion__paragraph">
              Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat
              acumsan id imperdiet et porttitor at seum. nulla porttitor accumsan tincidunt.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </article>
    </section>
  );
};
