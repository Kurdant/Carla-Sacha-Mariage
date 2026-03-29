import { motion } from 'framer-motion';
import './DressCodePremium.scss';

const DressCodePremium = () => {
  const colors = [
    { name: 'Parchment', hex: '#F1EAD8' },
    { name: 'Sand', hex: '#D5C7AD' },
    { name: 'Olive', hex: '#BEC5A4' },
    { name: 'Sage', hex: '#8A8E75' },
    { name: 'Bark', hex: '#68604D' },
    { name: 'Olivewood', hex: '#2D2F22' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const circleVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.section
      className="dress-code-section-premium"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="dress-code-container">
        <motion.h2
          className="dress-code-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Dress Code
        </motion.h2>

        <motion.p
          className="dress-code-intro"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Nous serions ravis de vous voir porter ces couleurs si le cœur vous en dit...
        </motion.p>

        <motion.div
          className="color-palette-premium"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {colors.map((color, index) => (
            <motion.div
              key={index}
              className="color-item"
              variants={circleVariants}
            >
              <div
                className="color-circle-premium"
                style={{ backgroundColor: color.hex }}
              />
              <span className="color-label">{color.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="dress-code-footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Élégance et confort avant tout !
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DressCodePremium;
