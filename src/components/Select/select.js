import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

class Select extends React.Component{
  state = {
    left: false,
  };
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render(){
    return(
      <div>
        <AppBar position='static'>
          <Toolbar>
            <IconButton onClick={this.toggleDrawer('left', true)} color="inherit">
              <MenuIcon />
            </IconButton>
            <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('left', false)}
                onKeyDown={this.toggleDrawer('left', false)}
              >
                <div>waaaaaaaaaaaaaaaaa</div>
              </div>
            </Drawer>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Select;
