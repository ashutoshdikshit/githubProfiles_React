import React, {Component} from 'react';

class Repo extends Component{

    render(){
        const repo = this.props;

        return(
            <li className="list-group-item">
                {repo.html_url}
                <a href={repo.repo.html_url}>
                    {repo.repo.name}
                </a> : {repo.repo.description}
            </li>
        )

    }
}

export default Repo
