import Image from 'next/image';

const services = [
  {
    title: 'Business Strategy',
    description: 'Develop comprehensive business strategies to achieve your organizational goals and maximize growth potential.',
    icon: '/strategy-icon.svg',
  },
  {
    title: 'Financial Advisory',
    description: 'Expert financial guidance to optimize your business performance and ensure long-term sustainability.',
    icon: '/finance-icon.svg',
  },
  {
    title: 'Market Research',
    description: 'In-depth market analysis and research to identify opportunities and stay ahead of competition.',
    icon: '/research-icon.svg',
  },
  {
    title: 'Digital Transformation',
    description: 'Guide your business through digital transformation to improve efficiency and customer experience.',
    icon: '/digital-icon.svg',
  },
  {
    title: 'Risk Management',
    description: 'Identify and mitigate potential risks to protect your business interests and assets.',
    icon: '/risk-icon.svg',
  },
  {
    title: 'Operations Optimization',
    description: 'Streamline your operations to reduce costs and improve productivity across your organization.',
    icon: '/operations-icon.svg',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-500">
            Comprehensive consulting solutions tailored to your business needs
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out"
            >
              <div className="h-12 w-12 mb-6 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-200">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={24}
                  height={24}
                  className="w-6 h-6 text-blue-600"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                {service.title}
              </h3>
              <p className="mt-4 text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 