import { motion } from 'framer-motion';
import useCountdown from '../../hooks/useCountdown';
import './HeroBanner.scss';

const HeroBanner = () => {
  const targetDate = new Date('2026-07-25T10:30:00');
  const timeLeft = useCountdown(targetDate);

  const countdownBlocks = [
    { value: timeLeft.days, label: 'Jours' },
    { value: timeLeft.hours, label: 'Heures' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Secondes' }
  ];

  return (
    <section className="hero-banner">
      <div className="hero-banner__overlay" />
      <motion.div
        className="hero-banner__content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="hero-banner__names">Sacha & Carla</h1>
        <div className="hero-banner__separator" />
        <p className="hero-banner__date">25 Juillet 2026</p>

        <p className="hero-banner__tagline">Jusqu'au grand jour...</p>

        <div className="hero-banner__countdown">
          {countdownBlocks.map((block, index) => (
            <div key={index} className="hero-banner__countdown-block">
              <span className="hero-banner__countdown-number">
                {String(block.value).padStart(2, '0')}
              </span>
              <span className="hero-banner__countdown-label">{block.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
