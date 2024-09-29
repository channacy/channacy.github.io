/* @refresh reload */
import { render } from 'solid-js/web'
import { Router, Route } from "@solidjs/router";

import './index.css'
import App from './App'
import Home from './routes/home';
import About from './routes/about';
import Projects from './routes/projects';
import Courses from './routes/courses';
import Education from './routes/education';
const root = document.getElementById('root')

render(() => <Router root={App}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
    <Route path="/courses" component={Courses} />
    <Route path="/education" component={Education} />
</Router>, root!)
