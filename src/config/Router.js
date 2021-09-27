import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from '../containers/Home';
import PersonalInfo from '../containers/Personal_Info';
import Experience from '../containers/Experience';
import Skills from '../containers/Skills'

function AppRouter(){
return(
    <Router>
    <Route exact path="/" component={Home} />
    <Route path="/personalinfo" component={PersonalInfo} />
    <Route path="/experience" component={Experience} />
    <Route path="/skills" component={Skills} />
    </Router>
)

}
export default AppRouter;