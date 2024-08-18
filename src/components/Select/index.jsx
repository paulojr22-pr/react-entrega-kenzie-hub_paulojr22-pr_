import { forwardRef } from "react";

export const Select = forwardRef(({ values, ...rest }, ref) => {
    return (
        <div>
            <label>
                <p className="headline">Selecionar módulo</p>
                <select ref={ref} {...rest}>
                    {values.map((value, i) => {
                        return <option key={i} value={i != 0 ? value : null}>{value}</option>
                    })}
                </select>
            </label>
            {rest.error?.message}
        </div>
    )
})