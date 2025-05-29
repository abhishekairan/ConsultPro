import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const caseStudies = [
  {
    title: 'E-commerce Growth Strategy',
    description: 'Increased organic traffic by 300% and conversion rates by 25% through comprehensive SEO and content strategy.',
    metrics: [
      { label: 'Traffic Increase', value: '300%' },
      { label: 'Conversion Rate', value: '25%' },
      { label: 'Revenue Growth', value: '150%' }
    ],
    image: '/case-studies/ecommerce.jpg'
  },
  {
    title: 'B2B Lead Generation',
    description: 'Generated 500+ qualified leads through targeted content marketing and SEO optimization.',
    metrics: [
      { label: 'Qualified Leads', value: '500+' },
      { label: 'Cost per Lead', value: '-40%' },
      { label: 'Close Rate', value: '15%' }
    ],
    image: '/case-studies/b2b.jpg'
  },
  {
    title: 'Local Business Expansion',
    description: 'Helped a local business expand to 5 new locations with targeted local SEO strategies.',
    metrics: [
      { label: 'Local Rankings', value: 'Top 3' },
      { label: 'Store Visits', value: '+200%' },
      { label: 'Reviews', value: '4.8★' }
    ],
    image: '/case-studies/local.jpg'
  }
];

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export default function CaseStudies() {
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
          Success <span className="text-gradient">Stories</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Real results from our proven SEO and digital marketing strategies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {caseStudies.map((study, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: index * 0.2 }}
            className="bg-white/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48">
              <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{study.title}</h3>
              <p className="text-gray-600 mb-6">{study.description}</p>
              
              <div className="grid grid-cols-3 gap-4">
                {study.metrics.map((metric, metricIndex) => (
                  <motion.div
                    key={metricIndex}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    transition={{ delay: index * 0.2 + metricIndex * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-brand-royal font-bold text-xl">
                      {metric.value}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 