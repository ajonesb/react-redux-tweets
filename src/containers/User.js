import React from 'react'
import { connect } from 'react-redux'
import { getUser, activateUser } from '../actions'


let User = ({ userName, userString, onClick, active }) => (
    <div className=" col-lg-2 col-md-4 col-sm-6 ">
        <div className="user-button" onClick={onClick}
            style={{ border: active === userString ? '1px solid white' : '' }}>
            <p>{userName}</p>
        </div>
    </div>
)


const mapStateToProps = (state) => ({
    active: state.user
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(getUser(ownProps.userString));
    }
})

User = connect(
    mapStateToProps,
    mapDispatchToProps
)(User)

export default User;
