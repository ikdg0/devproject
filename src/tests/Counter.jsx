import { useState } from "react";

export default function Counter() {
    const [count, SetCounter] = useState(0)

    const increment = async () => {
        SetCounter(p => {
            return p + 1
        })
    }
    return (
        <div>
            <p data-testid="count">{count}</p>
            <button onClick={increment}> Add 1</button>
        </div>
    )
}