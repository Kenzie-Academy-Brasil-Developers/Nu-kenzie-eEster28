import styles from "./style.module.scss"

export const TotalValueSection = ({ listFinance }) => {
    const totalFinance = listFinance.reduce((prevValue, finace) => {

        if (finace.typeValue === "Despesa") {
            return prevValue + -Number(finace.price)
        } else {
            return prevValue + Number(finace.price)
        }
    }, 0)

    return (
        <section className={styles.conteiner}>
            <div className={styles.conteinerPrice}>
                <h2 className="title1">Valor total:</h2>
                <h2 className={styles.price}>{totalFinance.toLocaleString("pt-br", {style:"currency", currency:"BRL"})}</h2>
            </div>
            <span className="title3 typeValue">
                O valor se refere ao saldo
            </span>
        </section>
    )
}