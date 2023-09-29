export const Input = ({label, type, id, placeholder, value, setValue}) => {
     return (
        <div>
            <label htmlFor={id} value={value}>{label}</label>
            <input 
            type={type} 
            placeholder={placeholder} 
            value={value} 
            name={id} 
            onChange={(e) => setValue(e.target.value)}
            />
        </div>
     )
}