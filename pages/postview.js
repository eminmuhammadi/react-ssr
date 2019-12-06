import React , {Component} from 'react';
import Page from "../components/Page";
import '../assets/scss/index.scss';

import {PostHeader, PostTitle ,  PostLayout, PostImage, PostUtils , PostUtilsItems , PostData , PostHelper} from '../components/PostView';
import {Row , Container , Col} from "react-bootstrap";

class PostView extends Component {

    static async getInitialProps({ query, res }) {

        const data = {
            username : query.username,
            postslug : query.postslug,
            title    : 'Hello World'
        };

        if (!data && res) {
            res.statusCode = 404
        }
        return { data }
    }

    render() {
        const { data } = this.props;
        if (!data) {
            return(<h1>Data Not Found</h1>);
        }

        return(
            <Page title={data.title}
                  description="Description"
                  image="image"
                  location={"/@"+data.username+"/"+data.postslug}>

                  <Row noGutters={true}>
                    <Col sm={12} md={9} className="mt-3 mb-3">
                        <PostLayout>
                            <PostHeader username={data.username}
                                        author="Emin Muhammadi"
                                        date="29 Oct 2019"
                                        src={require('../assets/images/64x64.png')}
                                        alt="Image Alt"
                                        style={{ backgroundColor: require('../assets/images/64x64.png?lqip-colors')[0] }}
                                        children={<PostUtils children={<PostUtilsItems/>}/>}/>

                            <PostImage style={{ backgroundColor: require('../assets/images/16x9.png?lqip-colors')[0] }}
                                       type="image/png" src={require('../assets/images/16x9.png')}
                                       alt="Image Alt"/>

                            <PostHelper/>

                            <PostTitle name={data.title}/>

                            <PostData html="<p>Hello World</p>"/>
                        </PostLayout>
                    </Col>

                    <Col sm={12} md={3} className="mt-3 mb-3">
                        <Container>
                            Sidebar
                        </Container>
                    </Col>
                  </Row>
            </Page>
        );
    }
}
export  default PostView;