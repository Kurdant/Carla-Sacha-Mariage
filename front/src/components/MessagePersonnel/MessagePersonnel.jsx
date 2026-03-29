import { motion } from 'framer-motion';
import './MessagePersonnel.scss';

const MessagePersonnel = () => {
  return (
    <motion.section
      className="message-section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="message-container">
        <motion.h2
          className="message-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sacha & Carla
        </motion.h2>

        <motion.div
          className="message-content"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>
            Chers amis, chère famille,
          </p>
          <p>
            C'est avec une immense joie que nous vous invitons à partager 
            le plus beau jour de notre vie. Votre présence à nos côtés 
            rendra cette journée encore plus mémorable et précieuse.
          </p>
          <p>
            Nous avons hâte de célébrer cet amour qui nous unit, 
            entourés de ceux qui comptent le plus à nos yeux.
          </p>

          <motion.div
            className="message-signature"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Avec tout notre amour ♥
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MessagePersonnel;
