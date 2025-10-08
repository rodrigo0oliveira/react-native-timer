import { useContext } from "react";
import { TaskContext } from "./TaskProvider";

export const useTaskContext = ()=> {
    const context = useContext(TaskContext);
    if(!context){
        throw new Error("Erro ao acessar o contexto fora do provider!");
    }

    return context;
}