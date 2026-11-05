import type { TodoCardProps } from "./TodoApp";
import type { TodoCardFunctions } from "./TodoApp";

export default function TodoCard({id, title, checked, handleToDoChecked, handleDeleteTodo, handleEditTodo}: TodoCardFunctions & TodoCardProps) {
    return <div>
        <input type="checkbox" name="checked" id="checked" checked={checked} onChange={(e) => handleToDoChecked(e, id)} />
        <span>{title}</span>
        <button type="button" className="edit-btn" onClick={() => handleEditTodo(id)}>Edit</button>
        <button type="button" className="delete-btn" onClick={() => handleDeleteTodo(id)}>Delete</button>
    </div>
}