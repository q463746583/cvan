import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import SideBar from '../components/SideBar';
import SocialLink from '../components/SocialLink'
import RootPage from '../components/RootPage';
import AboutPage from '../components/AboutPage';
import ProjectsPage from '../components/ProjectsPage';
import ContactPage from '../components/ContactPage';
import { Modal, Button } from "react-bootstrap";

function AppRouter() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <BrowserRouter>
            <div>
                <SideBar/>
                <Route path="/" component={RootPage} exact/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/projects" component={ProjectsPage}/>
                <Route path="/contact" component={ContactPage}/>
                <SocialLink/>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;