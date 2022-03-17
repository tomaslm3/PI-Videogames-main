import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div>
            <h1>Pi Videogames</h1>
            <Link to='/home'>
                <button>Home</button>
            </Link>
        </div>
    )
}

export default LandingPage;