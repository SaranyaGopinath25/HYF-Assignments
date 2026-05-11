import styles from "./OurCrew.module.css";

const crewMembers = [
    {
    name: "Captain Sarah Vega",
    role: "Mission Commander",
    desc: "Former NASA astronaut with 15+ years of experience leading missions.",
    img: "/crew/image-anousheh-ansari.png",
  },
  {
    name: "Dr. Leo Redding",
    role: "Chief Astrophysicist",
    desc: "Renowned scientist ensuring every journey is educational.",
    img: "/crew/image-douglas-hurley.png",
  },
  {
    name: "Hana Lee",
    role: "Chief Engineer",
    desc: "Expert in aerospace tech powering our spacecraft safely.",
    img: "/crew/image-mark-shuttleworth.png",
  },
  {
    name: "Alex Santos",
    role: "Mission Specialist",
    desc: "Ensures smooth journeys with science & tourism expertise.",
    img: "/crew/image-victor-glover.png",
  },
]

const OurCrew = () => {
    return(
        <div className={styles.section}>
            <h2 className={styles.title}>Our Crew</h2>
                <p className={styles.description}>Our crew is the heart of Galactica—explorers, engineers, and visionaries.</p>
                <div className={styles.grid}>
                    {crewMembers.map((member) => (
                        <div key={member.name} className={styles.card}>
                            <img src={member.img} alt={member.name} className={styles.image} />
                            <h3 className={styles.name}>{member.name}</h3>
                            <p className={styles.role}><strong>{member.role}</strong></p>
                            <p className={styles.text}>{member.desc}</p>
                        </div>
                    ))}

                </div>
        </div>

    )
}

export default OurCrew;