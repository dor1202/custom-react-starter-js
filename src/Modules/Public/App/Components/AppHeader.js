import React from 'react'
import { Logo } from '../../../../SVGs/SvgImports';
import {AppHeaderStyle} from "../AppModuleImports";

function AppHeader() {
    return (
        <header className="App-header">
            <img src={Logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    )
}

export default AppHeader;