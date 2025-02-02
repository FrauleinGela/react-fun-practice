import { CORE_CONCEPTS } from '../../../../data/data';
import { Section } from '../../../../common/components/Section';
import { CoreConcept } from './CoreConcept';

export const CoreConcepts = () => {
  return (
    <Section id='core-concepts' title='Core Concepts'>
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} concept={concept} />
        ))}
      </ul>
    </Section>
  );
};
