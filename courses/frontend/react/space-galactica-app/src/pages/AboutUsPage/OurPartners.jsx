import React from "react";
import styles from "./OurPartners.module.css";


const partners = [
     "/business_partners/alphabet-logo.png",
  "/business_partners/amazon_logo.png",
  "/business_partners/CBC_Logo_White.png",
  "/business_partners/Microsoft-Logo-white.png",
  "/business_partners/nyu-logo.png",
  "/business_partners/QueensLogo_white.png",
  "/business_partners/samsung-logo.png",
  "/business_partners/sodexo-logo.png"

]

const OurPartners = () => {
    return(
        <div className={styles.section}>
            <h2 className={styles.title}>Our Partners</h2>

            <div className={styles.grid}>
                {partners.map(partner => (
                    <img key={partner} src={partner} alt="partner" className={styles.logo} />
                ))}
            </div>
        </div>
    )
}

export default OurPartners;
               