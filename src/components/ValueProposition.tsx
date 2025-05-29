import Link from 'next/link';
import Image from 'next/image';

const cards = [
  {
    title: 'Mission',
    description: 'To empower individuals and organizations with the knowledge and the ability to positively impact society and transform the world.',
    icon: '/icons/target.svg',
    link: '#mission'
  },
  {
    title: 'Experience',
    description: 'Seasoned professionals with expertise across many business disciplines. Our thought leaders identify problems and generate unique solutions.',
    icon: '/icons/trophy.svg',
    link: '#experience'
  },
  {
    title: 'Diversity',
    description: 'Diversity is the differentiator with Venalicium Rex - diversity of thought, diversity of people leads to greater business intelligence.',
    icon: '/icons/people.svg',
    link: '#diversity'
  },
  {
    title: 'Strategic Partnership',
    description: 'Venalicium Rex is a collective of thought leaders, diverse consultants and external partners working to improve business performance.',
    icon: '/icons/handshake.svg',
    link: '#partnership'
  }
];

export default function ValueProposition() {
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Why Choose Us
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          We bring together expertise, innovation, and dedication to help your business succeed.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative group bg-white/10 backdrop-blur-sm rounded-lg p-4 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
          >
            {/* Icon */}
            <div className="w-10 h-10 rounded-full border-2 border-brand-turquoise/20 bg-brand-turquoise/10 flex items-center justify-center mb-3 group-hover:border-brand-light/40 group-hover:bg-brand-light/20 transition-all duration-300">
              <Image
                src={card.icon}
                alt={card.title}
                width={20}
                height={20}
                className="text-brand-light"
              />
            </div>
            
            {/* Text Content */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                {card.description}
              </p>
            </div>
            
            {/* Learn More Link */}
            <Link
              href={card.link}
              className="inline-flex items-center text-brand-royal hover:text-brand-blue transition-colors duration-200 text-sm"
            >
              <span>Learn More</span>
              <svg
                className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 