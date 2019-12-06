import React , {Component} from 'react';
import Seo from "../components/Seo";
import '../assets/scss/index.scss';


class Username extends Component {

    static async getInitialProps({ query, res }) {

        const data = {
            username : query.username,
            title    : query.username
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
            <Seo title={data.title}
                 description="Description"
                 image="image"
                 location={"/@"+data.username}>

                <h1>{data.username}</h1>
            </Seo>
        );
    }
}
export  default Username;