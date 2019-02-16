import React from 'react';
import axios from  'axios';
import SearchBar from './SearchBar'; 


class App extends React.Component{

    state = { images : [] };

     onSearchSubmit = async term =>{
     
        const response = await axios.get('https://api.unsplash.com/search/photos',{

        params:{query:term},
        headers:{ Authorization: 'Client-ID 34272bda922bffefa856683d1ec2e97ad02d561158bd6a46bfc156cb04e5429b'
        }
        });
        console.log(this);
        this.setState({images:response.DataCue.result});
    }

    render(){
        return(
        <div className="ui container" style={{marginTop:'10px', textAlign:'center',radius:'30px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}  guessWhatiAm="I am the propsobject" />
        Found: {this.state.images.length} images
        </div>
        );
    }


    
    
};

export default App;