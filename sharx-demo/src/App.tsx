import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Alert,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown } from 'reactstrap';
import './App.css';

class App extends React.Component<{}, { 
  isOpen: boolean, 
  alert: string }> {

  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      alert: "",
      isOpen: false,
    };
  }

  public render() {

    const alert = this.state.alert.length > 0 ?
    <div className="container">
      <Alert color="danger">
        {this.state.alert}
      </Alert> 
      </div>
      : <div className="container"/>;
    
    
    const dasboard = () => (<div />);
    const infrastructure = () => (<div />);

    const mainComponent = 
    <Switch>
      <Route exact={true} path='/' render={dasboard} />
      <Route path='/infrastructure' render={infrastructure}/>
    </Switch>
    
    const options = 
      <UncontrolledDropdown nav={true} inNavbar={true}>
        <DropdownToggle nav={true} caret={true}>
          login
        </DropdownToggle>
        <DropdownMenu right={true}>
          <DropdownItem>
            <NavLink href="/">Главная</NavLink>
          </DropdownItem>
          <DropdownItem>
          <NavLink href="/infrastructure">Виртуальная инфраструктура</NavLink>
          </DropdownItem>
          <DropdownItem divider={true} />
          <DropdownItem >
            Logout
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>;
    return (
      <BrowserRouter>
        <div className="App">
            <Navbar color="light" light={true} expand="md">
            <NavbarBrand href="/">Blockchain file storage</NavbarBrand>
            <NavbarToggler  />
            <Collapse isOpen={this.state.isOpen} navbar={true}>
              <Nav className="ml-auto" navbar={true}>
                <NavItem>
                  <NavLink href="https://github.com/palich12/TimeStampBlockChain">GitHub</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi">Allow-Control-Allow-Origin: *</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/checkfile">Get file info</NavLink>
                </NavItem>
                {options}
              </Nav>
            </Collapse>
          </Navbar>
          <br/>
          <div className="App-intro">
            {alert}
            {mainComponent}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
