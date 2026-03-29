import { motion } from 'framer-motion';
import './Timeline.scss';

const Timeline = () => {
  const timelineEvents = [
    {
      time: '10:30',
      icon: '⛪',
      title: 'Cérémonie',
      location: 'Église Notre-Dame'
    },
    {
      time: '12:00',
      icon: '🥂',
      title: 'Cocktail',
      location: 'Jardin du Château'
    },
    {
      time: '14:00',
      icon: '🍽️',
      title: 'Déjeuner',
      location: 'Grande Salle'
    },
    {
      time: '18:00',
      icon: '💃',
      title: 'Soirée Dansante',
      location: 'Piste de Danse'
    },
    {
      time: '23:00',
      icon: '🎆',
      title: 'Feu d\'Artifice',
      location: 'Terrasse'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.section
      className="timeline-section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="timeline-header">
        <motion.h2
          className="timeline-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Le Programme
        </motion.h2>
      </div>

      <motion.div
        className="timeline-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            variants={itemVariants}
          >
            <div className="timeline-time">
              {event.time}
            </div>
            
            <div className="timeline-icon">
              {event.icon}
            </div>

            <div className="timeline-content">
              <h3>{event.title}</h3>
              <p>{event.location}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Timeline;
