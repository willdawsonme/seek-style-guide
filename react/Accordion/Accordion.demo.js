import { ButtonGroup, Button, PageBlock, Section, Accordion, AccordionSection, Text } from 'seek-style-guide/react';
import React from 'react';

const AccordionContainer = ({ component: DemoComponent, componentProps }) => (
  <PageBlock>
    <Section>
      <DemoComponent {...componentProps} />
    </Section>
  </PageBlock>
);

export default {
  route: '/accordion',
  title: 'Accordion',
  component: Accordion,
  container: AccordionContainer,
  block: true,
  initialProps: {
    children:
  <AccordionSection id="1" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
    <Text>Praesent eget ex aliquet, fringilla mi ac, egestas tortor. Nulla facilisi. Phasellus suscipit magna nec augue congue, sit amet fermentum felis finibus. Morbi molestie lacus lectus, vitae semper augue consequat ac. Mauris eget lorem semper, varius nibh mollis, blandit dolor. Curabitur convallis iaculis odio. Vivamus non lectus sed augue convallis eleifend. Nam tempus eros porttitor luctus commodo.</Text>
  </AccordionSection>
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Allow Multiple',
          transformProps: ({ className, ...props }) => ({
            ...props,
            allowMultiple: true
          })
        },
        {
          label: 'On click',
          transformProps: ({ className, ...props }) => ({
            ...props,
            onClick: () => {}
          })
        },
        {
          label: 'Expanded',
          transformProps: ({ className, ...props }) => ({
            ...props,
            children:
              <AccordionSection expanded id="1" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
                <Text>Praesent eget ex aliquet, fringilla mi ac, egestas tortor. Nulla facilisi. Phasellus suscipit magna nec augue congue, sit amet fermentum felis finibus. Morbi molestie lacus lectus, vitae semper augue consequat ac. Mauris eget lorem semper, varius nibh mollis, blandit dolor. Curabitur convallis iaculis odio. Vivamus non lectus sed augue convallis eleifend. Nam tempus eros porttitor luctus commodo.</Text>
              </AccordionSection>
          })
        }
      ]
    },
    {
      label: 'Number of Buttons',
      type: 'radio',
      states: [
        {
          label: 'One Section',
          transformProps: props => ({
            ...props,
            children:
            <AccordionSection id="1" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
              <Text>Praesent eget ex aliquet, fringilla mi ac, egestas tortor. Nulla facilisi. Phasellus suscipit magna nec augue congue, sit amet fermentum felis finibus. Morbi molestie lacus lectus, vitae semper augue consequat ac. Mauris eget lorem semper, varius nibh mollis, blandit dolor. Curabitur convallis iaculis odio. Vivamus non lectus sed augue convallis eleifend. Nam tempus eros porttitor luctus commodo.</Text>
            </AccordionSection>
          })
        },
        {
          label: 'Two Sections',
          transformProps: props => ({
            ...props,
            children: [
              <AccordionSection id="1" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
                <Text>Praesent eget ex aliquet, fringilla mi ac, egestas tortor. Nulla facilisi. Phasellus suscipit magna nec augue congue, sit amet fermentum felis finibus. Morbi molestie lacus lectus, vitae semper augue consequat ac. Mauris eget lorem semper, varius nibh mollis, blandit dolor. Curabitur convallis iaculis odio. Vivamus non lectus sed augue convallis eleifend. Nam tempus eros porttitor luctus commodo.</Text>
              </AccordionSection>,
              <AccordionSection id="2" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
                <Text>Praesent eget ex aliquet, fringilla mi ac, egestas tortor. Nulla facilisi. Phasellus suscipit magna nec augue congue, sit amet fermentum felis finibus. Morbi molestie lacus lectus, vitae semper augue consequat ac. Mauris eget lorem semper, varius nibh mollis, blandit dolor. Curabitur convallis iaculis odio. Vivamus non lectus sed augue convallis eleifend. Nam tempus eros porttitor luctus commodo.</Text>
              </AccordionSection>
            ]
          })
        },
        {
          label: 'Three Sections',
          transformProps: props => ({
            ...props,
            children: [
              <AccordionSection id="1" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
                <Text>Praesent eget ex aliquet, fringilla mi ac, egestas tortor. Nulla facilisi. Phasellus suscipit magna nec augue congue, sit amet fermentum felis finibus. Morbi molestie lacus lectus, vitae semper augue consequat ac. Mauris eget lorem semper, varius nibh mollis, blandit dolor. Curabitur convallis iaculis odio. Vivamus non lectus sed augue convallis eleifend. Nam tempus eros porttitor luctus commodo.</Text>
              </AccordionSection>,
              <AccordionSection id="2" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
                <Text>Praesent eget ex aliquet, fringilla mi ac, egestas tortor. Nulla facilisi. Phasellus suscipit magna nec augue congue, sit amet fermentum felis finibus. Morbi molestie lacus lectus, vitae semper augue consequat ac. Mauris eget lorem semper, varius nibh mollis, blandit dolor. Curabitur convallis iaculis odio. Vivamus non lectus sed augue convallis eleifend. Nam tempus eros porttitor luctus commodo.</Text>
              </AccordionSection>,
              <AccordionSection id="3" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
                <Text>Praesent eget ex aliquet, fringilla mi ac, egestas tortor. Nulla facilisi. Phasellus suscipit magna nec augue congue, sit amet fermentum felis finibus. Morbi molestie lacus lectus, vitae semper augue consequat ac. Mauris eget lorem semper, varius nibh mollis, blandit dolor. Curabitur convallis iaculis odio. Vivamus non lectus sed augue convallis eleifend. Nam tempus eros porttitor luctus commodo.</Text>
              </AccordionSection>
            ]
          })
        }
      ]
    }
  ]
};
