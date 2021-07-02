import React , {Component} from 'react';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import './App.css';


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }

    }
    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}));
    }
    onSearchChange = (event) => {
        this.setState({searchfield:event.target.value})
        }
        
    render(){
        const filteredRobots= this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.robots.length === 0)
        {
            return <h1 className='tc'>Loading</h1>
        }
        else
        {
            return(
                <div className='tc'>
                    <h1 className='f1'>ROBOFRIENDS</h1>
                    <SearchBox searchChange={this.onSearchChange}></SearchBox>
                    <Scroll>
                     <CardList robots={filteredRobots}></CardList>
                    </Scroll>
                    
                </div>
            );
        }
        
    } 
}

export default App;