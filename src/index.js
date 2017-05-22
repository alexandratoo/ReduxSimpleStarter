import React from 'react';
import ReactDOM from 'react-dom';
const API_KEY = 'AIzaSyDjg4FN-k3o1Ib3ZrfHQsJtNqsFS99bt-o';
import SearchBar from './components/searchbar';
import VideoList from './video_list';

//create a new component that produces some html//

class App extends Component {
  constructor(props){
    super(props);

    this.state = {videos: }
    YTSearch({key: API_KEY, term: surfboards}, function(data){
      console.log(data);
    });
  }
}
{
  return (
    <div>
    <SearchBar />
    <VideoList videos = {this.state.videos}/>
    </div>
  )
}
}
//take the component generated html and put in on the page/in the DOM//
ReactDOM.render(<App/>, document.querySelector('container'));
