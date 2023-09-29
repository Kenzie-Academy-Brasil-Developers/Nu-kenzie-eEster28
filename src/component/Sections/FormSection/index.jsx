import { useState } from "react"
import { Input } from "./Input"

export const FormSection = () => {
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [typeValue, setTypeValue] = useState("")

    const submit = (e) => {
        e.preventDefault()
console.log({description, price, typeValue})
        setDescription("")
        setPrice("")
    }

    return (
        <form onSubmit={submit}>
            <div>
            <Input
                label="Descrição" 
                type="text"
                id="description" 
                placeholder="Digite aqui sua descrição" 
                value={description}
                setValue= {setDescription}
            />
            <span></span>
            </div>

            <Input
                label="Valor (R$)" 
                type="number"
                id="price" 
                placeholder="" 
                value={price}
                setValue={setPrice}
            />


            <div>
                <label>Tipo de valor</label>
                <select className="select" name="typeValue" id="typeValue" value={typeValue} onChange={(e) => setTypeValue(e.target.form.elements)}>
                    <option value="Entrada">Entrada</option>
                    <option value="Despesa">Despesa</option>
                </select>

            </div>

            <button type="submit">Inserir valor</button>
        </form>
    )
 }