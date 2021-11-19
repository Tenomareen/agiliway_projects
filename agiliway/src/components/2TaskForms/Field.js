export const Field = ({name, error, value, label, onChange, type}) => {
    return (
        <div>
            <div>
                <label htmlFor={name}>{label}</label>
                <input 
                type={type}
                onChange={onChange}
                value={value}
                name={name}
                id={name}
                className={error ? "error" : !value ? "default" : "correct"}
                placeholder={name}
                autoComplete="off"
                />
            </div>
            {error && 
                <span>{error}</span>
            }
        </div>
    )
}