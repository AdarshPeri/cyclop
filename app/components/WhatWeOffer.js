import { azeret, rubik } from '@/app/common/FontConstants';
import star from '@/public/small-star.svg';
import Image from 'next/image';
import ServicesCarousel from './ServicesCarousel';
import Link from 'next/link';

export const allServices = [
  [
    {
      text: '1. Secure Cloud Infrastructure & Architecture',
      details: [
        'Crafting robust, scalable, and fortified cloud platform architectures.',
        'Assisting clients in surmounting challenges associated with embracing cloud technologies.',
        'Implementing governance processes aligned with client policies and industry regulations.',
        'Conducting thorough Cloud Infrastructure Security Assessments.',
        'Providing expert guidance on Zero Trust Security Model implementation.',
      ],
    },
    {
      text: '2. Analysis & Insights',
      details: [
        'Employ advanced analytics techniques to unlock invaluable insights from your data reservoir.',
        'Discern trends, patterns, and correlations to empower data-centric decision-making.',
        'Craft comprehensive reports and compelling visualizations to articulate insights with precision and clarity.',
      ],
    },
    {
      text: '3. Integration & Migration',
      details: [
        'Harmonize diverse data sources effortlessly, providing a cohesive panorama of your information landscape.',
        'Execute flawless data migrations across platforms, prioritizing data integrity and fortified security measures.',
        'Deploy resilient data governance strategies to uphold data quality standards and regulatory compliance.',
        'Leverage cutting-edge ETL tools to streamline data extraction, transformation, and loading processes for optimal efficiency.',
      ],
    },
    {
      text: '4. Engineering & Management',
      details: [
        "Craft and implement scalable data warehouses customized to your organization's unique requirements.",
        'Fine-tune data storage and retrieval mechanisms to boost overall performance and operational efficiency.',
        'Enforce robust data governance frameworks to safeguard against security breaches, uphold privacy standards, and adhere to regulatory mandates.',
        'Proficient in Oracle, Teradata, MongoDB, and AWS Redshift, ensuring versatile solutions tailored to diverse data environments.',
      ],
    },
  ],
  [
    {
      text: '5. Predictive Analytics and Machine Learning',
      details: [
        'Innovate predictive models to anticipate future trends and outcomes with precision.',
        'Harness the potential of machine learning algorithms to automate decision-making, optimizing processes for efficiency.',
        'Employ iterative testing and optimization techniques to continuously enhance model accuracy and efficacy.',
        'Proficient in LLMs, Vector Databases, and embeddings, utilizing cutting-edge tools and methodologies for advanced analysis and insights.',
      ],
    },
    {
      text: '6. Visualization and Reporting',
      details: [
        'Craft interactive dashboards and visualizations that effectively communicate intricate data insights.',
        'Tailor reports and dashboards to align with specific business needs and objectives seamlessly.',
        'Empower stakeholders to intuitively explore data and extract actionable insights with ease.',
        'Expertise in leading tools such as Tableau, PowerBI, and Business Objects, ensuring dynamic and insightful data presentations.',
      ],
    },
    {
      text: '7. Big/Cloud Data',
      details: [
        'Unleash the potential of big data technologies to efficiently process and analyze vast datasets.',
        'Implement scalable infrastructure and distributed computing frameworks to handle diverse data loads seamlessly.',
        'Extract actionable insights from both structured and unstructured data sources, empowering informed decision-making.',
        'Proficient in industry-leading platforms including AWS, Google BigQuery, and Microsoft Azure, ensuring robust and versatile solutions for your data needs.',
      ],
    },
    {
      text: '8. Data Quality & Governance',
      details: [
        'Detect and rectify inconsistencies, errors, and redundancies within your data ecosystem.',
        'Set up robust data quality standards and protocols to uphold precision and dependability.',
        'Introduce automated data cleansing processes to optimize data management workflows and ensure efficiency at scale.',
      ],
    },
  ],
  [
    {
      text: '9. Security, Compliance and Maturity Assessments',
      details: [
        'Fortify data security measures to shield against unauthorized access and breaches, prioritizing the integrity of your information assets.',
        'Guarantee adherence to industry regulations and stringent data protection standards, safeguarding sensitive data and maintaining trust.',
        'Evaluate the data maturity level comprehensively, considering multiple dimensions such as technical infrastructure, business processes, and organizational culture.',
        'Provide an in-depth analysis of data maturity, identifying strengths, weaknesses, and areas for improvement across various facets of data management.',
      ],
    },
    {
      text: '10. Design and Development',
      details: [
        'Discover the ideal fusion of artistry and technology with us. Sit back as we transform avant-garde designs into dynamic websites that captivate and engage.',
        'Harnessing the power of cutting-edge frontend frameworks like NextJS and React, we ensure your web application operates seamlessly across web and mobile platforms.',
        "Our code is not just functional; it's scalable, meticulously crafted for optimal SEO, and of the highest quality.",
        'Every design is meticulously tailored to harmonize with your brand identity while prioritizing intuitive user experience.',
      ],
    },
  ],
];
export default function WhatWeOffer() {
  return (
    <div className='w-[90%] lg:w-[80%] xl:w-[75%] mt-20'>
      <div className='flex pt-2 items-center justify-between mb-6 max-xs:flex-col'>
        <div className='flex items-center gap-2 max-sm:gap-1 max-xs:self-start'>
          <p
            className={`${rubik.className} uppercase text-2xl lg:text-3xl`}
          >
            What we offer
          </p>
          <div className='h-4 w-4'>
            <Image src={star} alt='star' />
          </div>
        </div>
        <Link href='/services' className='max-sm:hidden'>
          <p className={`${rubik.className} underline max-sm:text-sm max-xs:tet-xs`}>{'See all >'}</p>
        </Link>
      </div>
      <ServicesCarousel slides={allServices} options={{}} />
    </div>
  );
}
