import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import TiltCard from './TiltCard'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Java', 'Kotlin', 'Go'],
    },
    {
      category: 'Backend & Frameworks',
      skills: ['Spring Boot', 'Kafka', 'REST APIs', 'Protobuf', 'gRPC', 'Maven'],
    },
    {
      category: 'Databases & Storage',
      skills: ['PostgreSQL', 'Redis', 'S3', 'Firebase'],
    },
    {
      category: 'DevOps & Tools',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Git', 'Prometheus', 'Grafana', 'Loki'],
    },
  ]

  return (
    <section id="skills" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <TiltCard key={catIndex} className="card">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-primary-500 dark:text-primary-400">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-4 py-2 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 text-gray-800 dark:text-gray-200 rounded-full font-medium hover:scale-110 transition-transform cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.3, 
                        delay: catIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
