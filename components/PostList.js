export default function PostList(props) {
  const {name, id, removePost} = props
  return (
    <div className="todo">
      <h4>{name}</h4>
      <button className="danger" onClick={() => removePost(id)}>Delete</button>
    </div>
  )
}