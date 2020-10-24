import React from 'react';
import PropTypes from 'prop-types';
import './HobbyList.css';

HobbyList.propTypes = {
    hobbyList: PropTypes.array,
    activeId: PropTypes.number,
    handleClickHobby: PropTypes.func
};

HobbyList.defaultProps = {
    hobbyList: [],
    activeId: null,
    handleClickHobby: null
}

function HobbyList(props) {
    const { hobbyList, handleClickHobby, activeId } = props;

    const handleClick = hobby => {
        handleClickHobby && handleClickHobby(hobby);
    }

    return (
        <ul className="hobby-list">
            {
                hobbyList.map(hobby => (
                    <li className={hobby.id === activeId ? 'active' : ''} key={hobby.id} onClick={() => handleClick(hobby)}>{hobby.title}</li>
                ))
            }
        </ul>
    );
}

export default HobbyList;