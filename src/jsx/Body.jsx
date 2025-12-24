import Me from "./Me.jsx"
import Buy from "./Buy.jsx"
import Contacts from "./Contacts.jsx"


const Body = () => 
    <div id="body">
        <Me path="/me" />
        <Buy path="/buy"/>
        <Contacts path="/contacts"/>
    </div>

export default Body;