import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, TrendingUp, DollarSign } from 'lucide-react'
import TiltCard from './TiltCard'

const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const achievements = [
    {
      icon: <Award size={40} />,
      title: 'Navi Spearhead Award',
      description:
        'Awarded for driving high-impact backend initiatives and demonstrating exceptional ownership during fraud investigation and resolutions',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: <DollarSign size={40} />,
      title: 'Navi Game Changer Award',
      description:
        'Recognized for delivering 60 Cr annual cost savings via a multi-bank project that optimized payment processing infrastructure',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'System Performance Excellence',
      description:
        'Achieved 10% market share growth through system scaling optimizations, handling 300M+ TPM with 99.9% uptime',
      color: 'from-blue-400 to-cyan-500',
    },
  ]

  return (
    <section id="achievements" className="section-container bg-gray-50 dark:bg-gray-800/50" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          Awards & <span className="gradient-text">Achievements</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <TiltCard key={index} className="card text-center group">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.div
                  className={`inline-block p-4 bg-gradient-to-br ${achievement.color} rounded-full mb-4 text-white`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {achievement.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Achievements
