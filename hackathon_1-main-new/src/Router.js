import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from './App';
import Page1 from './tutorial/Page1';
import Page2 from './tutorial/Page2';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/tutorial/page2">
                    <Page2 />
                </Route>
                <Route path="/tutorial/page1">
                    <Page1 />
                </Route>
                <Route path="/">
                    <App />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default Router;