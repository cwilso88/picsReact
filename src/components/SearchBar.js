import React, { Component } from 'react';


class SearchBar extends Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
            <div className="field">
                <label htmlFor="">Image Search</label>
                <input type="text" placeholder="Search here.."/>
            </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
