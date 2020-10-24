import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import HobbyList from '../components/Home/HobbyList';
import { addNewHobby, setActiveHobby } from '../actions/hobby';

HomePage.propTypes = {

};

const randomNumberId = () => {
    return 1000 + Math.trunc(Math.random() * 9000);
}

function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);

    const dispatch = useDispatch();

    console.log("Hobby List", hobbyList);

    const handleAddHobbyClick = () => {
        //random a hobby object: id + title
        const newId = randomNumberId();
        const newHobby = {
            id: newId,
            title: `Hobby ${newId}`
        }

        const action = addNewHobby(newHobby);
        dispatch(action);
        //Dispatch action to add a new hobby to redux store
    }

    const handleActiveHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    }

    return (
        <div className="home-page">
            <h1>REDUX HOOKS -Home Page</h1>
            <button onClick={handleAddHobbyClick}>Random Hobby</button>

            <HobbyList activeId={activeId} hobbyList={hobbyList} handleClickHobby={handleActiveHobbyClick}></HobbyList>
        </div>
    );
}

export default HomePage;