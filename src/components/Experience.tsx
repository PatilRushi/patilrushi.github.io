import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react'
import TiltCard from './TiltCard'

interface Project {
  name: string
  description: string
  achievements: string[]
}

interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  logo?: string
  projects: Project[]
}

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const experiences: ExperienceItem[] = [
    {
      company: 'Navi Technologies Limited',
      role: 'Senior Software Engineer | Founding member of NAVI UPI team',
      period: 'March 2022 - Present',
      location: 'Bengaluru',
      logo: '/navi-logo.png',
      projects: [
        {
          name: 'UPI Multibank | Integration of Multiple Payment Service Providers',
          description: '#4 UPI App in India | 300M+ TPM | 5M+ DAU',
          achievements: [
            'Integrated multiple PSPs into UPI, reducing transaction failures by 60% and eliminating single points of failure',
            'Developed a dedicated PSP communication microservice handling onboarding and transactions via 30+ API endpoints, retry logic, and idempotent handling',
            'Refactored SQL schema to enable multi-provider UPI flows with configurable dynamic stack routing',
            'Implemented API-level circuit breakers to isolate downstream failures and prevent cascading outages',
          ],
        },
        {
          name: 'Project Nadaga | System Scaling and Optimizations to achieve a 10% market share',
          description: 'Scaled core transaction flow to handle asynchronous Kafka traffic',
          achievements: [
            'Refactored the core transaction flow to operate asynchronously via Kafka, enabling horizontal scaling and handling sudden traffic bursts without resource locking',
            'Decoupled onboarding from transaction flows to ensure fault isolation and keep payments available even if onboarding experiences downtime',
            'Optimized inter-service communication by migrating to HTTP/2, reducing connection pool usage 4x and CPU usage by 30% via configurable gRPC',
            'Calling load tests and Prometheus metrics',
          ],
        },
        {
          name: 'Gratification Reward | Automated Recovery for Pending UPI Transactions',
          description: 'Event-driven system for transaction management',
          achievements: [
            'Built an event-driven system to continuously track and manage pending UPI transactions at scale',
            'Implemented quota-aware scheduler queries to fetch transaction data from NPCI, improving resolution rate of pending UPI transactions and reducing manual reconciliations',
            'Designed SLA-based handling for pending transactions, increasing resolution rate by 10% and accelerating closure of long-pending cases',
            'Improved platform reliability, supporting better customer retention and higher transaction value over time',
          ],
        },
        {
          name: 'Customer Onboarding | Reduce customer funnel drop by 34%',
          description: 'Optimized customer onboarding flow',
          achievements: [
            'Identified the root cause of customer drop-in funnel at onboarding flow',
            'Redesigned the customer onboarding flow to reduce funnel drop by 34% due to manual OTP flow via SMV, RSMS',
            'Decoupled onboarding from transaction flows to ensure fault isolation from non-onboarding flows like transaction and account management',
          ],
        },
      ],
    },
    {
      company: 'Quantiphi Analytics Solution',
      role: 'Software Engineer',
      period: 'October 2020 - March 2022',
      location: 'Bengaluru',
      logo: '/quantiphi-logo.png',
      projects: [
        {
          name: 'Adani - Google PSO',
          description: 'Testing framework and API automation',
          achievements: [
            'Built a component testing framework by dockerizing microservices',
            'Built a REST API automation framework',
          ],
        },
      ],
    },
  ]

  return (
    <section id="experience" className="section-container bg-gray-50 dark:bg-gray-800/50" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-12"></div>

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TiltCard className="card">
                <div className="flex items-start gap-4 mb-4">
                  {exp.logo ? (
                    <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-white rounded-lg p-2">
                      <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain" />
                    </div>
                  ) : (
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-500 flex-shrink-0">
                      <Briefcase size={24} />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{exp.company}</h3>
                    <p className="text-lg text-primary-500 dark:text-primary-400 mb-2">{exp.role}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    aria-label="Toggle details"
                  >
                    {expandedIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </button>
                </div>

                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 space-y-6"
                  >
                    {exp.projects.map((project, pIndex) => (
                      <div key={pIndex} className="border-l-4 border-primary-500 pl-6">
                        <h4 className="text-xl font-semibold mb-2">{project.name}</h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-3 italic">
                          {project.description}
                        </p>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, aIndex) => (
                            <li
                              key={aIndex}
                              className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                            >
                              <span className="text-primary-500 mt-1.5">◦</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
