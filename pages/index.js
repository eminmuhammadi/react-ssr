import { Link, Router } from '../routes';

export default () => (
    <Link route="postview" params={{postslug:'username',username:'username'}}>
        <a>Home</a>
    </Link>
);