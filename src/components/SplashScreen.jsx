import { motion, AnimatePresence } from 'framer-motion'

export default function SplashScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="splash-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // Background fades out slightly after the logo implodes
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'linear-gradient(135deg, #f0f4f8 0%, #e1ebf5 100%)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'all'
          }}
        >
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            
            {/* Ripple 1: Cyan/Blue */}
            <motion.div
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: 3.5, opacity: [0.8, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0
              }}
              exit={{ opacity: 0, scale: 4, transition: { duration: 0.3 } }}
              style={{
                position: 'absolute',
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                border: '2px solid rgba(0, 119, 255, 0.5)',
                background: 'rgba(0, 150, 255, 0.05)',
                zIndex: 1
              }}
            />

            {/* Ripple 2: Purple */}
            <motion.div
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: 3.5, opacity: [0.8, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut",
                delay: 1.25 // Exactly half-sync for alternating radar heartbeat
              }}
              exit={{ opacity: 0, scale: 4, transition: { duration: 0.3 } }}
              style={{
                position: 'absolute',
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                border: '2px solid rgba(139, 92, 246, 0.5)',
                background: 'rgba(167, 139, 250, 0.05)',
                zIndex: 1
              }}
            />

            {/* Central Logo */}
            <motion.img
              src="/somalab_logo.png"
              alt="SomaLab"
              initial={{ scale: 1, opacity: 1 }}
              // Infinite subtle floating animation
              animate={{ y: [-6, 6, -6] }}
              transition={{
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
              }}
              // Exit phase: Implosion (shrinks to 0 rapidly)
              exit={{ 
                scale: 0, 
                opacity: 0, 
                y: 0, // Reset float offset forcefully
                transition: { duration: 0.45, ease: "backIn" } 
              }}
              style={{
                position: 'relative',
                zIndex: 10,
                width: '130px',
                objectFit: 'contain'
              }}
            />
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
