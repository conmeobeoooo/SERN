import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './section/Specialty';
import Popular from './section/Popular';
import Doctor from './section/Doctor';
import DownApp from './section/DownApp';
import Footer from './section/Footer';
class HomePage extends Component {

    render() {
        return (
            <div className='App'>
                <div>
                    <HomeHeader />
                    <Specialty />
                    <Popular />
                    <Doctor />
                    <DownApp />
                    <Footer />
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
