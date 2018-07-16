import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.compact.css';

import { SlideOutView } from 'devextreme-react/ui/slide-out-view';

import NavigationMenu from './components/NavigationMenu';
import PageContent from './components/PageContent'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuVisible: true
        };
        this.clickOnMenuButton = this.clickOnMenuButton.bind(this);
        this.showMenu = this.showMenu.bind(this);
    }

    render() {
        return (
        <div className='App'>
            <Router>
                <SlideOutView class='slide-layout'
                    swipeEnabled={true}
                    menuVisible={this.state.menuVisible}
                    menuComponent={NavigationMenu}
                    contentComponent={PageContent}
                    onOptionChanged={(args) => args.name === 'menuVisible' && this.setState({ menuVisible: args.value })}
                ></SlideOutView>
            </Router>
        </div>
        );
    }
    clickOnMenuButton(value) {
        this.setState({ menuVisible: !value });
    }  
    showMenu() {
        this.clickOnMenuButton(this.state.menuVisible);
    }
}

export default App;
