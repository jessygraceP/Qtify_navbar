
import Button from "../Button"
import Searchbox from "../Searchbox"
import './Navbar.css'
export default () => {
    return <div className="navbar">
        <img src="Logo.PNG" width={80} height={40} />
        
      
        <Searchbox />
        <Button>Give Feedback</Button>
    </div>
}