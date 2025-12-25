import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'
import TiltCard from './TiltCard'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Education</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-12"></div>

        <div className="max-w-3xl mx-auto">
          <TiltCard className="card">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
            <div className="flex items-start gap-4">
              <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-500 flex-shrink-0">
                <GraduationCap size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  Bachelor of Technology
                </h3>
                <p className="text-lg text-primary-500 dark:text-primary-400 mb-3">
                  Electronics and Telecommunication Engineering
                </p>
                <p className="text-xl font-semibold mb-4">
                  Pune Institute of Computer Technology (PICT), Pune
                </p>
                <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>October 2016 - May 2020</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>Pune, India</span>
                  </div>
                </div>
              </div>
            </div>
            </motion.div>
          </TiltCard>
        </div>
      </motion.div>
    </section>
  )
}

export default Education
