import type { FormComponentProps } from './TodoApp';

export default function FormComponent({ title, handleFormOnChange, handleOnSubmit }: FormComponentProps) {
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="title">Title</label>
                <input 
                    type="text" 
                    name="title" 
                    id="title" 
                    value={title} 
                    onChange={handleFormOnChange} 
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}