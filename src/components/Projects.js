import React, {Component} from 'react';
import { Col, Icon } from 'antd';
import api from '../services/api';



export default class Projects extends Component{
    constructor() {
        super();
        this.state = {
            data: {}
        }
    }

    componentDidMount(){
        this.getRepos();
    }

    getRepos = async() => {

        let response = await api.get(`users/devmeireles/repos`);
        let { data } = response

        this.setState({
            data: data
        });
    }

    render(){
        const repos = this.state.data;
        return(
            <div>
                {
                    repos.length > 0 ?
                        repos.map((repo, index) => (
                            <Col xs={24} sm={24} md={12} lg={12} xl={12} className="repoBox">
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                    <h3>
                                        <span><Icon type="github" style={{ fontSize: '13px' }} /></span>
                                        {repo.name}
                                    </h3>
                                
                                    {
                                        repo.description ?
                                            <p>{repo.description}</p>
                                        : null
                                    }
                                </a>
                            </Col>
                        ))
                    : null
                }
            </div>
        )
    }
}