import { CardFinance } from "./CardFinance"


export const FinanceSection = ({listFinances,removeFinance}) => {


    
    return (
        <section>
            <h2>Resumo financeiro</h2>
            <ul>
                {listFinances.map((finance) => {

                    return <CardFinance
                        key={finance.id}
                        description={finance.description}
                        typeValue="entrada"
                        price={finance.price}
                        removeFinance={removeFinance}
                        id={finance.id}
                    />


                })}

            </ul>
        </section>
    )
}