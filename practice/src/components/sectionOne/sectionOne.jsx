import Buttons from '../buttons/buttons.';
import styles from './sectionOne.module.css'

const SectionOne = () => {
  return (
    <div className={styles.section}>
      <h2>
        <span>Hola! mi nombre es ingresar nombre</span> FullStack Web Developer
      </h2>
      <Buttons/>
    </div>
  );
};

export default SectionOne;
