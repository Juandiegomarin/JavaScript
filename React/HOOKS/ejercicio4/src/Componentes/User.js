import React, { Component } from 'react';
class User extends Component {
    render() {
        return (
            <li>
                {this.props.name} - {this.props.email}
            </li>
        );
    }
}

// function User(props) {
//     return (
//         <li>
//             {props.name} - {props.email}
//         </li>
//     );
// }
export default User;