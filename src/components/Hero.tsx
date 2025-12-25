import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import TypingAnimation from './TypingAnimation'
import MagneticButton from './MagneticButton'
import FloatingElement from './FloatingElement'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="section-container text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="gradient-text">Rushikesh Patil</span>
          </motion.h1>

          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 mb-8 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TypingAnimation
              texts={[
                'Senior Software Engineer',
                'Software Geek',
              ]}
              className="gradient-text font-bold"
            />
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Specializing in scalable distributed microservices with 5 years of experience building
            high-throughput, low-latency systems handling 300M+ TPM and 5M+ DAU
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <MagneticButton
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-lg font-semibold gradient-animate"
            >
              Get In Touch
            </MagneticButton>
            <MagneticButton
              href="#experience"
              className="px-8 py-3 border-2 border-primary-500 text-primary-500 dark:text-primary-400 rounded-lg font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300"
            >
              View My Work
            </MagneticButton>
          </motion.div>

          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a
              href="https://www.linkedin.com/in/rushikesh9518776803/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/rushikeshpatil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:writetorushikesh@gmail.com"
              className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        <FloatingElement className="absolute bottom-8 left-1/2 transform -translate-x-1/2" duration={2}>
          <ArrowDown size={32} className="text-primary-500" />
        </FloatingElement>
      </div>
    </section>
  )
}

export default Hero
