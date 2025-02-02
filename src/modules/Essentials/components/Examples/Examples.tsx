import { useState } from 'react';
import { TabButton } from '../TabButton/TabButton';
import { EXAMPLES } from '../../../../data/data';
import { Section } from '../../../../common/components/Section';
import { Tabs } from '../../../../common/components/Tabs';

export const Examples = () => {
  const [selectedTab, setSelectedTab] = useState<keyof typeof EXAMPLES | ''>(
    ''
  );

  const handleSelect = (tabName: keyof typeof EXAMPLES) =>
    setSelectedTab(tabName);

  return (
    <Section id='examples' title='Examples'>
      <Tabs
        buttons={
          <>
            {Object.keys(EXAMPLES).map((key) => (
              <TabButton
                key={key}
                isSelected={selectedTab === key}
                onClick={() => handleSelect(key as keyof typeof EXAMPLES)}
              >
                {EXAMPLES[key as keyof typeof EXAMPLES].title}
              </TabButton>
            ))}
          </>
        }
      >
        <div id='tab-content'>
          {!selectedTab && <p>Please select a topic</p>}
          {selectedTab && (
            <>
              <h3>{EXAMPLES[selectedTab].title}</h3>
              <p>{EXAMPLES[selectedTab].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTab].code}</code>
              </pre>
            </>
          )}
        </div>
      </Tabs>
    </Section>
  );
};
