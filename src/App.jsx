import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/Profile.jsx';
import Repo from './components/Repo.jsx';
import Search from './components/Search.jsx';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: 'ashutoshdikshit',
            userData: [],
            userRepos: [],
            perPage: 5
        }
    }
    //Get user data from github
    getUserData() {
        $.ajax({
            url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
            dataType: 'JSON',
            cache: false,
            success : function(data) {
                this.setState({userData: data});
            }.bind(this),
            error: function(xhr, status, error) {
                this.setState({username: null});
                alert("failed");
            }.bind(this)
        });
    }

    //get user Repositories
    getUserRepos() {
        $.ajax({
            url: 'https://api.github.com/users/'+this.state.username+'/repos?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
            dataType: 'JSON',
            cache: false,
            success : function(data) {
                this.setState({userRepos: data});
            }.bind(this),
            error: function(xhr, status, error) {
                this.setState({username: null});
                alert("failed");
            }.bind(this)
        });

    }

    handleFormSubmit(username) {
        this.setState({username: username}, function() {
            this.getUserData();
            this.getUserRepos();
        })
    }

    componentDidMount(){
        this.getUserData();
        this.getUserRepos();
    }
    render(){
        return(

                <div>
                    <Search onFormSubmit = {this.handleFormSubmit.bind(this)} />
                    <Profile {...this.state} />
                    {/*<Repo repoData = {this.state.userRepos} />*/}

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
