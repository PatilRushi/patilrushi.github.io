import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Linkedin, Github, Phone } from 'lucide-react'
import MagneticButton from './MagneticButton'
import TiltCard from './TiltCard'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'writetorushikesh@gmail.com',
      href: 'mailto:writetorushikesh@gmail.com',
      color: 'from-red-400 to-pink-500',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91-9518776803',
      href: 'tel:+919518776803',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'rushikesh9518776803',
      href: 'https://www.linkedin.com/in/rushikesh9518776803/',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'rushikeshpatil',
      href: 'https://github.com/rushikeshpatil',
      color: 'from-gray-600 to-gray-800',
    },
  ]

  return (
    <section id="contact" className="section-container bg-gray-50 dark:bg-gray-800/50" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-8"></div>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          I'm always open to discussing new opportunities, interesting projects, or partnerships.
          Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {contactInfo.map((contact, index) => (
            <TiltCard key={index} className="card">
              <motion.a
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 group cursor-pointer"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
              <div
                className={`p-4 bg-gradient-to-br ${contact.color} rounded-full text-white group-hover:scale-110 transition-transform duration-300`}
              >
                {contact.icon}
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{contact.label}</p>
                <p className="text-lg font-semibold">{contact.value}</p>
              </div>
              </motion.a>
            </TiltCard>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <MagneticButton
            href="mailto:writetorushikesh@gmail.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-lg font-semibold text-lg gradient-animate"
          >
            Send Me an Email
          </MagneticButton>
        </motion.div>
      </motion.div>

      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Rushikesh Patil. All rights reserved.</p>
      </footer>
    </section>
  )
}

export default Contact
