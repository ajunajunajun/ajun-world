import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

const SelectDiv = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
`;

const GoogleDiv = styled.div`
  min-width: 980px;
`;
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
      <SelectDiv className="Select">
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
            <Link to='/'>Home</Link>
            <Link to='/google'>Google</Link>
            <Link to='/threed'>Threed</Link>
            <Link to='/maboroshi'>Maboroshi</Link>
          </div>
        </Drawer>
      </SelectDiv>
    );
  }
}

export default Select;
