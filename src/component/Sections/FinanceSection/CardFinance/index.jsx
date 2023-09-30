export const CardFinance = ({description, typeValue,price,removeFinance,id}) => {
   
    return (
        <li>
            <div>
                <h2>{description}</h2>
                <span>{typeValue}</span>
            </div>
            <div>
                <span>{price}</span>
                <button onClick={()=> removeFinance(id)}>Excluir</button>
            </div>
        </li>
    )
}