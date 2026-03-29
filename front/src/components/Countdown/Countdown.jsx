import { motion } from 'framer-motion';
import useCountdown from '../../hooks/useCountdown';
import './Countdown.scss';

const Countdown = () => {
  const targetDate = new Date('2026-07-25T10:30:00').getTime();
  const timeLeft = useCountdown(targetDate);

  const countdownItems = [
    { value: timeLeft.days, label: 'Jours' },
    { value: timeLeft.hours, label: 'Heures' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Secondes' }
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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      className="countdown-section"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="countdown-section__container">
        <h2 className="countdown-section__title">Jusqu'au Grand Jour</h2>

        <motion.div
          className="countdown"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {countdownItems.map((item, index) => (
            <motion.div
              key={index}
              className="countdown__item"
              variants={itemVariants}
            >
              <div className="countdown__value">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="countdown__label">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Countdown;
