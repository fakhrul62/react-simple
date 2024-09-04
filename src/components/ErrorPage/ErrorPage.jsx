import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1>Hi there. You are lost brother.</h1>
            <h2>Go home boy</h2>
            <Link to={`/`}><button type="button">Take me to mommy</button></Link>
        </div>
    );
};

export default ErrorPage;