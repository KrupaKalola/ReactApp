import {
    CardBody,
    Card,
    Row,
    Col
} from 'reactstrap';
import axios from 'axios'
import './Employee.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


import React, { Component } from 'react'
import CustomCardBody from './CustomCardBody'

export default class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: [],
            nameInitials: [],
            search:"",
            displayData: []
        };
    }

    handleSearch(value) {
        this.setState({
            search:value
        })
        this.displaySearchResult(value);
    }


    getUsersData() {

        axios
            .get('./employee_database.json')
            .then(res => {
                const data = res.data
            
                this.setState({
                    Users: data,
                    displayData: data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    componentDidMount() {
        this.getUsersData()
    }

    displaySearchResult(searchTerm) {
        let searchResults = this.state.Users;
        const resultedData = searchResults.filter((user) => {
            if (user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())) {
               return (user);
            }
        });
        this.setState({
            displayData: resultedData
            
        });
        console.log(this.state.displayData)
    }

     displayData=this.state;
    render() {
        return (
            <div>
                <Card className='top-bar'>
                    <CardBody>
                        <div className='d-flex justify-content-between'>
                            <h5>Employee directory</h5>
                            <span>
                                <input type='text' name='search' className='search' value={this.state.search} onChange={e => this.handleSearch(e.target.value)} ></input>
                                <span>
                                    <FontAwesomeIcon icon={faSearch} className='search-icon'></FontAwesomeIcon>
                                </span>
                            </span>
                        </div>
                    </CardBody>
                </Card>
                <Card className='employee-directory'>
                    <CustomCardBody displaySearch={this.state.displayData}></CustomCardBody>
                </Card>
            </div>
        )
    }
}
