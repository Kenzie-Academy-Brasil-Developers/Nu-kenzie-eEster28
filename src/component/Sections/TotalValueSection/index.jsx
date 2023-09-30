export const TotalValueSection = ({listFinance}) => {
    const totalFinance = listFinance.reduce((prevValue, finace)=> {
     
        return prevValue + Number(finace.price)
    },0)


    return(
        <section>
            <div>
                <h2>Valor total:</h2>
                <h2>{totalFinance}</h2>
            </div>
            <span>
                O valor se refere ao saldo
            </span>
        </section>
    )
}