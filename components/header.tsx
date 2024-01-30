
import styles from "./page.module.css";
import Link from "next/link";
import { ROUTER } from "./router.enum";

const Header = () =>  {

  const { HOME, CARDS} = ROUTER;

    return (
      <>
      <div className={styles.header_style}>
        <div className={styles.links}>
      <Link href={"/"}> Home </Link>
      <Link href={"/cards"}>Cards</Link>
      </div>
      <div className={styles.img12}>
      Marvel Heroes
        </div>
    </div>  
    </>
    );
}


export default Header;
