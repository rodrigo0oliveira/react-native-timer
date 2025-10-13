import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Crypto from "expo-crypto";
import { createContext, useEffect, useState } from "react";

interface TaskContextProps {
    tasks: ITask[];
    addTask: (id: string) => void,
    toogleTaskComplete: (id: string) => void,
    deleteTask: (id: string) => void
    editTask: (id: string, description: string) => void,
    getTaskDescription: (id: string) => string
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

const TASK_STORAGE_KEY = "storage_key";

export function TaskProvider({ children }: TaskProviderProps) {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem(TASK_STORAGE_KEY);
                const data = jsonValue != null ? JSON.parse(jsonValue) : [];
                setTasks(data);
                setIsLoaded(true);
            } catch (e) {
                console.log("Error while fetch the data ", e);
            }
        };
        getData();
    }, []);

    useEffect(() => {
        if (isLoaded) {
            const storeData = async () => {
                try {
                    const jsonValue = JSON.stringify(tasks);
                    await AsyncStorage.setItem(TASK_STORAGE_KEY, jsonValue);
                } catch (e) {
                    console.log("Error while save the data ", e);
                }
            };
            storeData();
        }
    }, [tasks])

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

    const editTask = (id: string, description: string) => {
        setTasks(prevState => {
            return prevState.map(t => {
                if (id === t.id) {
                    t.description = description;
                }
                return t;
            })
        })
    }

    const getTaskDescription = (id: string) => {
        const task = tasks.find(t => t.id === id);
        return task?.description ? task.description : ""
    }
    return (
        <TaskContext.Provider value={{
            tasks,
            addTask,
            deleteTask,
            toogleTaskComplete,
            editTask,
            getTaskDescription
        }}>
            {children}
        </TaskContext.Provider>
    )
}