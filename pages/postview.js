import React , {Component} from 'react';
import Seo from "../components/Seo";
import '../assets/scss/index.scss';

import {PostHeader, PostTitle ,  PostLayout, PostImage, PostUtils , PostUtilsItems , PostData , PostHelper} from '../components/PostView';
import {Row , Container , Col} from "react-bootstrap";

class PostView extends Component {

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
            <Seo title={post.title}
                  description="Description"
                  image="image"
                  location={"/@"+post.username+"/"+post.postslug}>

                  <Row noGutters={true}>
                    <Col sm={12} md={9} className="mt-3 mb-3">
                        <PostLayout>
                                <PostHeader author="Emin Muhammadi"
                                            date="29 Oct 2019"
                                            src="https://dummyimage.com/64x64/"
                                            alt="Image Alt"
                                            children={<PostUtils children={<PostUtilsItems/>}/>}/>

                            <PostTitle name={post.title}/>

                            <PostImage src="https://dummyimage.com/16:9x1080/" alt="Image Alt"/>
                            <PostHelper/>
                            <PostData html="<p>Hello World</p>"/>
                        </PostLayout>
                    </Col>

                    <Col sm={12} md={3} className="mt-3 mb-3">
                        <Container>
                            Sidebar
                        </Container>
                    </Col>
                  </Row>
            </Seo>
        );
    }
}
export  default PostView;