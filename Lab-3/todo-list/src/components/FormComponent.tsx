import type {TodoCardProps} from './TodoApp';

export default function FormComponent({title}: TodoCardProps) {
    return <div>
        <form action="">
            <label htmlFor="title">Todo Title</label>
            <input type="text" name="title" id="title"value={title} />
        </form>
    </div>
}