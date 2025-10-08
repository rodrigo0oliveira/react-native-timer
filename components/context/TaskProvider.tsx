import * as Crypto from "expo-crypto";
import { createContext, useState } from "react";

interface TaskContextProps {
    tasks: ITask[];
    addTask: (id: string) => void,
    toogleTaskComplete: (id: string) => void,
    deleteTask: (id: string) => void
}

interface ITask {
    id: string,
    description: string,
    complete: boolean
}

interface TaskProviderProps {
    children: React.ReactNode
}

export const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export function TaskProvider({ children }: TaskProviderProps) {
    const [tasks, setTasks] = useState<ITask[]>([]);

    const addTask = (description: string) => {
        setTasks(prevState => {
            return [
                ...prevState,
                {
                    id: Crypto.randomUUID().toString(),
                    complete: false,
                    description
                }
            ]
        })
    }

    const toogleTaskComplete = (id: string) => {
        setTasks(prevState => {
            return prevState.map(t => {
                if (t.id === id) {
                    t.complete = !t.complete
                }
                return t
            })
        });
    }

    const deleteTask = (id: string) => {
        setTasks(prevState => {
            return prevState.filter(t => t.id != id);
        })
    }
    return (
        <TaskContext.Provider value={{
            tasks,
            addTask,
            deleteTask,
            toogleTaskComplete
        }}>
            {children}
        </TaskContext.Provider>
    )
}