import styles from "./style.module.scss"

export const CardFinance = ({description, typeValue,price,removeFinance,id}) => {
   
    return (
        <li className={`
        ${styles.cardFinance} 
        ${typeValue === "Despesa"? styles.gray : styles.green}`}>
            <div className={styles.description}>
                <h2 className="title1">{description}</h2>
                <span className="title3 typeValue">{typeValue}</span>
            </div>
            <div className={styles.price}>
                <span className="title3 ">{price}</span>
                <button onClick={()=> removeFinance(id)}>Excluir</button>
            </div>
        </li>
    )
}