import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';

//import '../css/SearchBar.css';


class App extends React.Component {
    state = {
        images: []
    }

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
        params: { query: term },
        });

        this.setState({
             images : response.data.results 
        });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '30px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            <h1>We have {this.state.images.length} images of whatever you want.</h1>
            </div>
        )
    } 
}

export default App;