import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import WorkspaceContainer from '../workspaces/sub_components/workspace_container'
import { AuthRoute, ProtectedRoute } from '../../util/route_util';


// import gif from '../../../app/assets/images/splash.gif'

class Splash extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            flag: [false, false, false, false, false, false, false, false]
        }
    }

    changeFlag (idx) {
        let newFlag = this.state.flag;
        newFlag[idx] = !newFlag[idx];
        this.setState({['flag']: newFlag})
    }

    render (){
        let titles = ['Ruby on Rails', 'Mongo DB', 'Javascript', 'PostgreSQL', 'Ruby', 'React', 'Redux', 'Nodejs']
        let colors = ['#FF158A', '#A25DDC', '#FF9900', '#F04095', '#009AFF', '#00D2D2', '#579BFC','#FF7575', '#4ECCC6'] 
        let images = [
            ['imgicon',<i class="devicon-rails-plain-wordmark"></i>        ],
            ['imgicon',<i class="devicon-mongodb-plain"></i>        ], 
            ['imgicon',<i class="devicon-javascript-plain"></i>], 
            ['imgicon',<i class="devicon-postgresql-plain"></i>        ], 
            ['imgicon',<i class="devicon-ruby-plain"></i>], 
            ['imgicon',<i class="devicon-react-original"></i>], 
            ['imgicon',<i class="devicon-redux-original"></i>], 
            ['imgicon',<i class="devicon-nodejs-plain"></i>]
        ]
        return ( 
                <div className='splash-main'>
                    <div className="splash-navbar-container">
                        <nav className="nav-buttons-parent-container">
                            <Link to='/'>
                                <img src={fundaybiglogoURL}/>
                            </Link>              
                            <div className="left-nav-buttons">
                                {/* <div className="homepage-logo">
                                    <Link to='/'>Monday.com</Link>
                                </div> */}
                                <ul className='nav-promo-link-buttons'>
                                    <a className='splash-nav-button' href=''>Linked In</a>
                                    <a className='splash-nav-button' href=''>Github Repo</a>
                                </ul>
                            </div>
                            <div className="right-nav-buttons">
                                <Link className='splash-nav-button' to='/login'>Login</Link>
                                <Link className='signup-button-small' to='/signup'><p>Get Started </p></Link>
                            </div>
                        </nav>
                    </div>
                    <div className='splash-content-parent'>
                        <div className='splash-headers'>
                            <h1>Hire with purpose</h1>
                            <h2>What qualities are you looking for in a Software Engineer?</h2>
                        </div>
                        <div className="selectable-tags-container">
                            {titles.map((title, idx) => {
                                return (
                                    <div onClick={() => this.changeFlag(idx)} 
                                        className={this.state.flag[idx] ? `splash-content-button-sel hs${idx}` : `splash-content-buttons h${idx}`}>
                                        <div className='checkbox-container'>
                                            <div className={this.state.flag[idx] ? `checkbox-sel hs${idx}` : `checkbox h${idx}`}>
                                                
                                            </div>
                                        </div>
                                        <div className={`${images[idx][0]}`}>
                                            {images[idx][1]}
                                        </div>
                                        <h3>{title}</h3>
                                    </div>
                                ) 
                            })}
                        </div>
                        <div className='get-started-big'>
                            <Link className='signup-button-big' to='/signup'>Get Started </Link>
                        </div>
                    </div>
                </div>
            )
    }
}


export default Splash;