import { Outlet } from "react-router-dom"

const About = () => {
    return (
        <div>
            <h1>About Us Page</h1>

            <p>This is the about page of let's eat food delivery App</p>
            <Outlet/>
        </div>
    )
}



export default About