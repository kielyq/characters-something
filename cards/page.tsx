import Image from "next/image";
import styles from "./page.module.css";
import cardList from "./data";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import React from "react"


export default function Cards() {
    
  return (
    <main className={styles.main}>
     <div className={styles.ch_title}>
     Marvel characters
     </div>
     <div className={styles.input_div}>

    
     <input className={styles.input_styles} placeholder="find"/>
     </div>

     <div className={styles.cards}>
        {cardList.map(card =>    (
            <div className={styles.card_green}>
                <div className={styles.everything}>
                <img src={card.img} className={styles.img_ch}>

                </img>
                <div className={styles.title_man}>{card.title}</div>
                </div>
            </div>
        
        ))}
     </div>
    </main>

  );
}
