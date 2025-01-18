import { useState } from "react";

export default function usePersistedState(initialState) {
    const [state, setState] = useState(initialState)


    return [state, setState];

}