import { CardFinance } from "./CardFinance"
import styles from "./style.module.scss"

export const FinanceSection = ({ listFinances, removeFinance }) => {

    return (
        <>
            <section className={styles.conteiner}>
                <h2 className="title1">Resumo financeiro</h2>

                {listFinances.length > 0 ? (
                    <ul>
                        {listFinances.map((finance) => {

                            return <CardFinance
                                key={finance.id}
                                description={finance.description}
                                typeValue={finance.typeValue}
                                price={(finance.price).toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
                                removeFinance={removeFinance}
                                id={finance.id}
                            />
                        })}

                    </ul>) : <p>Você ainda não possui nenhum lançamento</p>}
            </section>
        </>
    )
}