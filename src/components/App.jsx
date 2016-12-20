import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: 'ashutoshcbr',
            userData: [],
            userRepos: [],
            perPage: 5
        }
    }

    render(){
        return(
                <div>
                    {this.state.username}
                </div>
            )

    }
}

App.propTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string
}

App.defaultProps = {
    clientId: '9657fd5fec66d84b2d31',
    clientSecret: '17fd4536be6fd72978d17334f0f6457057886637'
}

export default App
