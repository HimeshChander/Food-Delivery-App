import styles from "../styles/PizzaList.module.css";
import Image from "next/Image";
import PizzaCard from "./PizzaCard";
const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN THE CAMPUS</h1>
      <p className={styles.desc}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took
      </p>
      <div className={styles.wrapper}>
        {
          pizzaList.map((pizza)=>{
            return(
              <PizzaCard pizza={pizza} key={pizza._id}/>
            )
          })
        }
      </div>
    </div>
  );
};
export default PizzaList;
