import React , {Component , useState} from 'react';
import Head from "next/dist/next-server/lib/head";

import css from '../assets/scss/index.scss';
import { Button , Modal } from 'react-bootstrap';

const posts = [
    { slug: 'hello-world', title: 'Hello world' },
    { slug: 'another-blog-post', title: 'Another blog post' },
];

export default class Post extends Component {
    static async getInitialProps({ query, res }) {
        const post = posts.find(post => post.slug === query.slug);

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
            <div>
                <Head>
                    <title>{post.title}</title>
                </Head>
                
            </div>
        );
    }
}