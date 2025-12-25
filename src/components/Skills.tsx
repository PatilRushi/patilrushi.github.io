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
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Kotlin', level: 90 },
        { name: 'Go', level: 85 },
      ],
    },
    {
      category: 'Backend & Frameworks',
      skills: [
        { name: 'Spring Boot', level: 95 },
        { name: 'Kafka', level: 90 },
        { name: 'REST APIs', level: 95 },
        { name: 'Protobuf', level: 85 },
        { name: 'gRPC', level: 85 },
        { name: 'Maven', level: 90 },
      ],
    },
    {
      category: 'Databases & Storage',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'Redis', level: 90 },
        { name: 'S3', level: 85 },
        { name: 'Firebase', level: 80 },
      ],
    },
    {
      category: 'DevOps & Tools',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 80 },
        { name: 'AWS', level: 85 },
        { name: 'Git', level: 95 },
        { name: 'Prometheus', level: 85 },
        { name: 'Grafana', level: 85 },
        { name: 'Loki', level: 80 },
      ],
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
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 gradient-animate"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1.5, 
                            delay: catIndex * 0.1 + skillIndex * 0.08,
                            ease: 'easeOut'
                          }}
                        />
                      </div>
                    </div>
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
