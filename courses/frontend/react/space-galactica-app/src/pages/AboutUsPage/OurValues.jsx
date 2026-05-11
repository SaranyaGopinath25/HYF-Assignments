import styles from './OurValues.module.css';

const values = [
    {
    title: "Exploration",
    desc: "We push boundaries and embrace the human desire to discover the unknown.",
  },
  {
    title: "Innovation",
    desc: "We use cutting-edge technology for safe and advanced space travel.",
  },
  {
    title: "Sustainability",
    desc: "We minimize environmental impact for future generations.",
  },
  {
    title: "Community",
    desc: "We build a shared passion for space exploration together.",
  },
]
const OurValues = () => {
    return(

        <div className={styles.section}>
            <h2 className={styles.title}>Our Values</h2>
            <div className={styles.grid}>
                {values.map(value => (
                    <div key={value.title} className={styles.card}>
                        <h3 className={styles.heading}>{value.title}</h3>
                        <p className={styles.text}>{value.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurValues;