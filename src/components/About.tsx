import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Database, Zap, Users } from 'lucide-react'
import CounterAnimation from './CounterAnimation'
import TiltCard from './TiltCard'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const highlights = [
    {
      icon: <Code2 size={32} />,
      title: <><CounterAnimation end={5} suffix="+" /> Years</>,
      description: 'Building scalable distributed microservices',
    },
    {
      icon: <Zap size={32} />,
      title: <><CounterAnimation end={300} suffix="M+" /> TPM</>,
      description: 'High-throughput transaction processing',
    },
    {
      icon: <Users size={32} />,
      title: <><CounterAnimation end={5} suffix="M+" /> DAU</>,
      description: 'Serving millions of daily active users',
    },
    {
      icon: <Database size={32} />,
      title: 'System Design',
      description: 'Expert in SQL/NoSQL, Kafka, Redis optimization',
    },
  ]

  return (
    <section id="about" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Skilled Software Engineer with <strong>5 years of experience</strong> specializing in scalable,
            distributed microservices. Expert in <strong>Java, Kotlin, and Golang</strong>, with deep
            expertise in REST, Spring Boot, gRPC, and Protobuf.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Strong background in SQL/NoSQL databases, Kafka, Redis, and building{' '}
            <strong>high-throughput, low-latency systems</strong>. Currently leading critical initiatives
            at Navi Technologies as a founding member of the UPI team, handling India's #4 UPI App with
            300M+ monthly transactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <TiltCard key={index} className="card text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="inline-block p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4 text-primary-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default About
