import React from 'react'
import styles from "../styles/Home.module.css";
import HowItWorksComponent from "../components/HowItWorksComponent";



export default function HowItWorks() {
  return (
    <div>
      <main className={styles.main}>
        <HowItWorksComponent></HowItWorksComponent>        
      </main>

    </div>
  );
}
