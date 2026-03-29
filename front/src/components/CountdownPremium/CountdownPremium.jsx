import { motion } from 'framer-motion';
import useCountdown from '../../hooks/useCountdown';
import './CountdownPremium.scss';

const CountdownPremium = () => {
  const targetDate = new Date('2026-07-25T10:30:00');
  const timeLeft = useCountdown(targetDate);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const blockVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const countdownBlocks = [
    { value: timeLeft.days, label: 'Jours' },
    { value: timeLeft.hours, label: 'Heures' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Secondes' }
  ];

  return (
    <motion.section
      className="countdown-section-premium"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="countdown-container">
        <motion.div
          className="countdown-title-box"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="countdown-title">Jusqu'au Grand Jour</h2>
        </motion.div>

        <motion.div
          className="countdown-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {countdownBlocks.map((block, index) => (
            <motion.div
              key={index}
              className="countdown-block"
              variants={blockVariants}
            >
              <div className="countdown-number">
                {String(block.value).padStart(2, '0')}
              </div>
              <div className="countdown-label">{block.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CountdownPremium;
