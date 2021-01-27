import React, { Component } from 'react';

class Header extends Component {
    state = { 
        subtitle: "My App"
     }

     changeSubtitle = () => {
        console.log('adawda');
        this.setState({
            subtitle: 'whateevr'
        })
     }
    render() { 
        // jsx
        return ( 
            <section>
                {/* <h1> {this.state.title} </h1> */}

                <h1>
                { this.props.title}

                </h1>


                <h4>{this.state.subtitle}</h4>

                <button onClick={this.changeSubtitle}>Change Subtitle</button>

            </section>
         );
    }
}
 
export default Header;