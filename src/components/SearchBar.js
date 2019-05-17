import React, { Component } from 'react';


class SearchBar extends Component {
    state = {
        term: ''
    }
    onInputChange = (e) => {
        this.setState({
            term: e.target.value
        });
    }


  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
            <div className="field">
                <label htmlFor="">Image Search</label>
                <input 
                    type="text" 
                    value={this.state.term}
                    placeholder="Search here.."
                    onChange={this.onInputChange}
                />
            </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
