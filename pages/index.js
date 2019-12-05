import { Link, Router } from '../routes';

export default () => (
    <ul>

        <li>
            <Link route="postview" params={{  username:'username' , postslug: 'hello-world' }}>
                <a>Blog: Hello world</a>
            </Link>
        </li>

    </ul>
);