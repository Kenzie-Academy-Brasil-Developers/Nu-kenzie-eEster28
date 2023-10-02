import { useState } from "react"
import { Input } from "./Input"
import { Select } from "./Select"
import styles from "./style.module.scss"

export const FormSection = ({addFinance}) => {
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [typeValue, setTypeValue] = useState("")

    const submit = (e) => {
        e.preventDefault()
        addFinance({description, price, typeValue})
        setDescription("")
        setPrice("")
        setTypeValue("Esclha o tipo")
    }

    return (
        <form className={styles.form} onSubmit={submit}>
            <div>
            <Input
                label="Descrição" 
                type="text"
                id="description" 
                placeholder="Digite aqui sua descrição" 
                value={description}
                setValue= {setDescription}
            />
            <span className={`title3 typeValue ${styles.exemplo}`}>Ex: Comprar roupas</span>
            </div>

            <Input
                label="Valor (R$)" 
                type="number"
                id="price" 
                placeholder="1" 
                value={price}
                setValue={setPrice}
            />

            <Select 
                label="Tipo de valor" 
                id="typeValue" 
                value={typeValue}
                setValue={setTypeValue} >
                    <option value="Entrada">Entrada</option>
                    <option value="Despesa">Despesa</option>
            </Select>

            <button type="submit">Inserir valor</button>
        </form>
    )
 } 