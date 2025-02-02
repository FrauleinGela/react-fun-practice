import { Examples } from './components/Examples/Examples';
import { CoreConcepts } from './components/CoreConcept/CoreConcepts';

export const Essentials = () => {
  return (
    <>
    <section id='essentials'>
      <h3>
        Essential React concepts you will need for almost any app you are going
        to build!
      </h3>
      <CoreConcepts />
      <Examples />
    </section>
    </>
  );
};
