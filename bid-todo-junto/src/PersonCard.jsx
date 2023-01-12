import React, { Component } from 'react';
import './PersonCard.css';
    
class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cargando: true,
            age_count: this.props.age
        };
    }

    handleClick = () => {
        this.setState(({ age_count }) => ({
        age_count: age_count + 1
        }));
    };

    componentDidMount = () => {
        console.log("Componente cargado");
        setTimeout(()=>{
            this.setState({ cargando: false });
        }, 1500);
    }

    render() {
        const {firstName, lastName, age, hairColor} = this.props;
        const {cargando, age_count} = this.state;
        return(
            (cargando)?<h2>Cargando...</h2>
            :
            <div className='cards'>
                <div className='card-body'>
                    <h2>{lastName}, {firstName}</h2>
                    <p>Age: {age_count}</p>
                    <p>Hair Color: {hairColor}</p>
                </div>
                <div className='card-footer'>
                    <button className='bday-btn' onClick={this.handleClick}>Birthday Button for {firstName} {lastName}</button>
                </div>
            </div>

        );
    }
}

export default PersonCard;
