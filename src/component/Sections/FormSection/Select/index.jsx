export const Select = () => {
    
    <div>
    <label>Tipo de valor</label>
    <select className="select" name="typeValue" id="typeValue" value={typeValue} onChange={(e) => setTypeValue(e.target.form.elements)}>
        <option value="Entrada">Entrada</option>
        <option value="Despesa">Despesa</option>
    </select>

</div>
}