import './index.css'

const SearchItems = props => {
  const {searchDetails, deleteTodo} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = searchDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <div className="item-container">
      <div className="container">
        <p>{timeAccessed}</p>
        <img className="item-image" src={logoUrl} alt={title} />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <button type="button" onClick={onDeleteTodo}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </div>
  )
}
export default SearchItems
