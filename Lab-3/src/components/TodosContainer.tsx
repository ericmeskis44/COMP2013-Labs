import type { TodosContainerProps } from './TodoApp';
import type { TodoCardFunctions } from './TodoApp';
import TodoCard from './TodoCard';

export default function TodosContainer({todosList, handleToDoChecked, handleDeleteTodo, handleEditTodo}: TodosContainerProps & TodoCardFunctions) {
    return (
     <div>
        {todosList.length > 0 || "Todo list is empty"}
        {todosList.map(todo => 
            (<TodoCard
                key={todo.id}
                {...todo}
                handleToDoChecked={handleToDoChecked}
                handleDeleteTodo={handleDeleteTodo}
                handleEditTodo={handleEditTodo} />
        ))}
    </div>
    );
}