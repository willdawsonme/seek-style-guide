import styles from './AccordionSection.less';
import Text from '../Text/Text';
import Card from '../Card/Card';
import ChevronIcon from '../ChevronIcon/ChevronIcon';
import Section from '../Section/Section';

import React from 'react';
import PropTypes from 'prop-types';

const AccordionSection = ({ title, children, onChange, active, expanded, id, allowMultiple, onClick }) => {
  const isActive = !expanded ? !allowMultiple ? active === id : null : true;

  return (
    <Card className={styles.block}>
      <Section>
        <div>
          <input
            id={id}
            type="checkbox"
            defaultChecked={expanded}
            checked={isActive}
            onChange={() => onChange(id)}
            className={styles.toggle}
          />
          <label
            className={`${styles.toggleLink} ${styles.toggleLabel}`}
            htmlFor={id}
            onClick={onClick}>
            <Text superstandard>{title}</Text>
            <ChevronIcon direction="down" className={styles.chevron} svgClassName={styles.chevronSvg} />
          </label>
          <div className={styles.toggleContainer}>
            {children}
          </div>
        </div>
      </Section>
    </Card>
  );
};

AccordionSection.propTypes = {
  title: PropTypes.string.required,
  children: PropTypes.node.required,
  id: PropTypes.string.required,
  onChange: PropTypes.func,
  active: PropTypes.string,
  expanded: PropTypes.bool,
  allowMultiple: PropTypes.bool,
  onClick: PropTypes.func
};

export default AccordionSection;
