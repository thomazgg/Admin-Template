import { useContext } from "react";
import AppContext from "../content/AppContext";

export function useData() {
    const context = useContext(AppContext);
    return context;
}