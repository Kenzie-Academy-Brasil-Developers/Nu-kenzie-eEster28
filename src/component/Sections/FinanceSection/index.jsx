import { TotalValueSection } from "../TotalValueSection"
import { CardFinance } from "./CardFinance"

export const FinanceSection = ({listFinances,removeFinance}) => {

    return (
        <>
        {listFinances.length > 0  && <TotalValueSection listFinance={listFinances} /> }

        <section>
            <h2>Resumo financeiro</h2>
          
                {listFinances.length > 0 ?(
            <ul>
                {listFinances.map((finance) => {

                    return <CardFinance
                        key={finance.id}
                        description={finance.description}
                        typeValue={finance.typeValue}
                        price={finance.price}
                        removeFinance={removeFinance}
                        id={finance.id}
                    />
                })}

            </ul>): <p>Você ainda não possui nenhum lançamento</p> }
        </section>
        </>
    )
}