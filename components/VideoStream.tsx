import styles from '../styles/Home.module.css'

export default function VideoStream() {
  return (
    <div className={styles.videoStream}>
      {/* Video stream with looping video */}
      <div className={styles.videoFrame}>
        <video
          src="/Intro.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '18px' }}
        />
        <button className={styles.playButton}>▶</button>
      </div>
      <span className={styles.videoLabel}>Live Video Stream Preview</span>
    </div>
  )
}
