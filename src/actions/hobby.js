export const addNewHobby = hobby => {//action creator: create action corresponds
    return {
        type: 'ADD_HOBBY',
        payLoad: hobby
    }
}

export const setActiveHobby = hobby => {//action creator
    return {
        type: 'SET_ACTIVE_HOBBY',
        payLoad: hobby
    }
}