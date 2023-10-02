import styles from "./styles.module.scss"

export const Input = ({label, type, id, placeholder, value, setValue}) => {
     return (
        <div className={styles.inputBox}>
            <label className="title2" htmlFor={id} value={value}>{label}</label>
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