import { useState } from 'react';   

export interface TodoCardProps {
    id: string;
    title: string;
    checked: boolean;
}

export interface TodosContainerProps {
    todosList: TodoCardProps[];
}

export default function TodoApp() {
    const [todo, setTodo] = useState<TodoCardProps>(
        {
            id: '', 
            title: '', 
            checked: false
        });
}

