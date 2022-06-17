import {Component} from 'react'

import SearchItems from '../SearchItems'

import './index.css'

class SearchBrowser extends Component {
  state = {
    searchInput: '',
    todosList: initialHistoryList,
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const updatedTodosList = todosList.filter(eachTodo => eachTodo.id !== id)

    this.setState({
      todosList: updatedTodosList,
    })
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {todosList} = this.props
    const searchResults = todosList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-white">
        <div className="bg-blue">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history-image"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-image"
            />
            <input type="search" placeholder="Search history" />
          </div>
        </div>
        <ul className="history-list">
          {searchResults.map(eachDestination => (
            <SearchItems
              key={eachDestination.id}
              searchDetails={eachDestination}
              deleteTodo={this.deleteTodo}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default SearchBrowser
