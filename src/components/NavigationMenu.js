import React, { Component } from 'react';

import { Template } from 'devextreme-react/core/template';

import { Toolbar } from 'devextreme-react/ui/toolbar';
import { TreeView } from 'devextreme-react/ui/tree-view';

import { withRouter } from 'react-router-dom';

class NavigationMenu extends Component {
    items = [{ 
        location: 'before',
        locateInMenu: 'auto',
        widget: 'dxButton',
        options: {
            icon: 'menu',
            onClick: this.showMenu
        }
    }, {
        location: 'center',
        // locateInMenu: 'auto',
        template: 'menuTextTemplate'
    }];
    menuItems = [{ 
        text: 'Home',
        expanded: true,
        icon: 'home',
        items: [
            { text: 'Profile', path: 'profile' },
            { text: 'Settings', path: 'settings' }
        ]
    }, {
        text: 'About',
        icon: 'info',
        path: 'about'
    }];
    
    onItemSelectionChanged(e) {
        let path = e.itemData.path;
        if(path) {
            this.props.history.push('/' + path);
        }
    }
    render() {
        return (
            <div>
                <Toolbar items={this.items}>
                    <Template name='menuTextTemplate' render={() => <h4>Demo</h4>}/>
                </Toolbar>
                <TreeView class='navigation-treeview' 
                    items={this.menuItems}
                    onItemClick={this.onItemSelectionChanged.bind(this)}
                    selectByClick={true}
                    selectionMode='single'
                ></TreeView>
            </div>
        );
    }
}

export default withRouter(NavigationMenu);