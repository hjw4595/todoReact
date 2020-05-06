import React from "react";
import {BrowserRouter as Router, Route, Redirect,Switch} from "react-router-dom";
import Notes from "../Routes/Notes/index";
import Note from "../Routes/Note/index";
import AddNote from "../Routes/AddNote/index";
import EditNote from "../Routes/EditNote/index";

export default () => (
    <Router>
        <>
            <Switch>
                <Route path="/" exact component={Notes}/>
                <Route path="/Add" exact component={AddNote}/>
                <Route path="/Edit/:id" component={EditNote}/>
                <Route path="/note/:id" component={Note} />
                <Redirect from="*" to="/"/>
            </Switch>
        </>
    </Router>
)