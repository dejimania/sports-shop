import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

export class ToggleLink extends Component {
  render() {
    return <Route path={ this.props.to} exact={ this.props.exact }
      children={ routeProps => {
        const baseClasses = this.props.className || "m-2 btn btn-block";
        const activeClase = this.props.activeClase || "btn-primary";
        const inActiveClass = this.props.inActiveClass || "btn-secondary";

        const combinedClasses = `
        ${baseClasses} ${routeProps.match ? activeClase : inActiveClass}
        `

        return <Link to={this.props.to} className={ combinedClasses }>
          { this.props.children }
        </Link>

      }}
    />
  }
}