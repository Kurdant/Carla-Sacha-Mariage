import { motion } from 'framer-motion';
import './DressCode.scss';

const DressCode = () => {
  const colors = [
    { name: 'parchment', hex: '#F1EAD8' },
    { name: 'sand', hex: '#D5C7AD' },
    { name: 'olive', hex: '#BEC5A4' },
    { name: 'sage', hex: '#8A8E75' },
    { name: 'bark', hex: '#68604D' },
    { name: 'gold', hex: '#C9A86A' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const circleVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      className="dress-code-section"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="dress-code-section__container">
        <h2 className="dress-code-section__title">Code Vestimentaire</h2>

        <p className="dress-code-section__text">
          Nous serions ravis de vous voir porter ces couleurs si le cœur vous en dit.
          <br />
          Élégance et confort avant tout !
        </p>

        <motion.div
          className="palette"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {colors.map((color, index) => (
            <motion.div
              key={index}
              className="palette__item"
              variants={circleVariants}
            >
              <div
                className="palette__circle"
                style={{ backgroundColor: color.hex }}
                aria-label={color.name}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DressCode;
