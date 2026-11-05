export default function TodoCard({title, checked}: TodoCardProps) {
    return <div>
        <input type="checkbox" name="checked" id="checked" checked={checked} />
        <label htmlFor="checked">{title}</label>
    </div>
}