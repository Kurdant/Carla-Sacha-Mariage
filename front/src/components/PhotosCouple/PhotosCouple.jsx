import { motion } from 'framer-motion';
import './PhotosCouple.scss';

const PhotosCouple = () => {
  const photos = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=750&fit=crop',
      alt: 'Carla et Sacha - Photo 1'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=750&fit=crop',
      alt: 'Carla et Sacha - Photo 2'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1200&h=675&fit=crop',
      alt: 'Carla et Sacha - Photo Featured'
    }
  ];

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const photoVariants = {
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
      className="photos-section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.div
        className="photos-grid"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {photos.slice(0, 2).map((photo) => (
          <motion.div
            key={photo.id}
            className="photo-item"
            variants={photoVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img src={photo.url} alt={photo.alt} loading="lazy" />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="photos-quote"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3>Notre Histoire</h3>
        <p>
          Deux âmes qui se sont trouvées dans le tumulte de la vie, 
          pour écrire ensemble les plus belles pages de leur histoire. 
          Ce 25 juillet, nous célébrons notre amour entourés de ceux qui comptent le plus.
        </p>
      </motion.div>

      <motion.div
        className="photo-featured"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        <img src={photos[2].url} alt={photos[2].alt} loading="lazy" />
      </motion.div>
    </motion.section>
  );
};

export default PhotosCouple;
