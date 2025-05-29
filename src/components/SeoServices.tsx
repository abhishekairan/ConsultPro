import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    title: 'Technical SEO Audit',
    description: "Comprehensive analysis of your website's structure, performance, and technical health to improve search engine visibility.",
    icon: '🔍',
    features: ['Site Architecture', 'Speed Optimization', 'Mobile Responsiveness', 'XML Sitemaps']
  },
  {
    title: 'Content Strategy',
    description: 'Data-driven content planning and creation to target high-value keywords and engage your audience.',
    icon: '📝',
    features: ['Keyword Research', 'Content Calendar', 'Competitor Analysis', 'Topic Clusters']
  },
  {
    title: 'Link Building',
    description: 'Strategic outreach and relationship building to earn high-quality backlinks and improve domain authority.',
    icon: '🔗',
    features: ['Guest Posting', 'Broken Link Building', 'Digital PR', 'Resource Link Building']
  },
  {
    title: 'Local SEO',
    description: 'Optimize your local presence to attract customers in your area and improve local search rankings.',
    icon: '📍',
    features: ['Google Business Profile', 'Local Citations', 'Review Management', 'Local Content']
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const featureVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 }
};

export default function SeoServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Comprehensive <span className="text-gradient">SEO Services</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Drive organic traffic and improve your search engine rankings with our data-driven SEO strategies.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            
            <ul className="space-y-3">
              {service.features.map((feature, featureIndex) => (
                <motion.li
                  key={featureIndex}
                  variants={featureVariants}
                  className="flex items-center text-sm text-gray-700"
                >
                  <span className="w-5 h-5 rounded-full bg-brand-turquoise/20 flex items-center justify-center mr-2">
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + featureIndex * 0.1 }}
                      className="w-2 h-2 rounded-full bg-brand-turquoise"
                    />
                  </span>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 