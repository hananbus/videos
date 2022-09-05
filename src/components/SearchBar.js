import React, { useState } from "react";

// class SearchBar extends React.Component {
//     state = {term: ''};

//     onInputChange = (e) => {
//         this.setState({term: e.target.value});
//     }

//     onFormSubmit = (e) => {
//         e.preventDefault();
//         this.props.onTermSubmit(this.state.term);
//     }
//     render() {
//         return (
//             <div className="search-bar ui segment">
//                 <form onSubmit={this.onFormSubmit} className="ui form">
//                     <div className="field">
//                         <label>Video Search</label>
//                         <input type="text"  value={this.state.term} onChange={this.onInputChange} />
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }

const SearchBar = ({onTermSubmit}) => {
    const [term,setTerm] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        onTermSubmit(term);
    };
    return (
        <div className="search-bar ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Search For a Video</label>
                    <input type="text"  value={term} onChange={(e)=> setTerm(e.target.value)} />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;