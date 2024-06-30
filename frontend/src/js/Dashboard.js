
import Button from '@mui/material/Button';
import ResponsiveAppBar from './ResponsiveAppBar';

const Dashboard = () => {

    const logo_url = "./images/logo/android-chrome-512x512.png";
    const layout = "simple";

    return (
        <div class="dashboard">
           
                <ResponsiveAppBar />
                <h1>Dashboard</h1>

<div class={layout}>
    <div class="logo" >
        <img src={logo_url}  alt="logo"/>
    </div>
            </div>
        </div>
    );
}

export default Dashboard;