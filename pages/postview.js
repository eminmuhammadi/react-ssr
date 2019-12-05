import React , {Component} from 'react';
import Page from "../components/Page";
import css from '../assets/scss/index.scss';

export default class PostView extends Component {

    static async getInitialProps({ query, res }) {

        const post = {
            username : query.username,
            postslug : query.postslug,
            title    : 'Hello World'
        };

        if (!post && res) {
            res.statusCode = 404
        }
        return { post }
    }

    render() {
        const { post } = this.props;
        if (!post) {
            return(<h1>Post Not Found</h1>);
        }

        return(
            <Page title={post.title}
                  description="Description"
                  image="image"
                  location={"/@"+post.username+"/"+post.postslug}>

                <h1>{post.title} by {post.username}</h1>

                <code>{post.postslug}</code>
            </Page>
        );
    }
}