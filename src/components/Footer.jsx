import { motion } from 'motion/react'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
      className="relative border-t border-border/50 bg-background/80 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {year} Samreen Iqbal. All rights reserved.
          </p>

          {/* Technology Stack */}
          <p className="text-xs text-muted-foreground/70">
            Built with{' '}
            <span className="font-medium text-indigo-500">
              React
            </span>
            ,{' '}
            <span className="font-medium text-indigo-500">
              Tailwind CSS
            </span>{' '}
            &amp;{' '}
            <span className="font-medium text-indigo-500">
              Shadcn/UI
            </span>
          </p>

        </div>
      </div>
    </motion.footer>
  )
}

export default Footer