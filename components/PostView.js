import React , {Component , useState} from 'react';
import {Button , Modal} from 'react-bootstrap';

class PostLayout extends Component{
    constructor(props){
        super(props);
    }

    render() {

        return(
            <div className="pt-4 pb-4 post-layout">
                {this.props.children}
            </div>
        );
    }
}

class PostHeader extends Component{
    constructor(props){
        super(props);
    }

    render() {

        return(
            <div className="post-header pb-2">
                <div className="container d-flex justify-content-between pb-2">
                    <div className="author d-flex justify-content-start">
                        <img className="shadow-sm p-1 img-fluid rounded-circle image" src={this.props.src} alt={this.props.alt}/>
                        <div className="p-1 mt-1 title">
                            <h6>{this.props.author}</h6>
                            <small className="text-muted">{this.props.date}</small>
                        </div>
                    </div>
                    <div className="p-1 mt-2">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

class PostImage  extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <img className="img-fluid post-image" src={this.props.src} alt={this.props.alt}/>
        );
    }
}

class PostTitle  extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="container post-title pt-1 pb-1">
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}

class PostUtilsItems  extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <>
                <li className="list-group-item red">Report inappropriate</li>
                <li className="list-group-item red">Unfollow</li>
                <li className="list-group-item">Go to post</li>
                <li className="list-group-item">Embed</li>
                <li className="list-group-item">Share</li>
                <li className="list-group-item">Copy Link</li>
            </>
        );
    }
}
function PostUtils(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="light" size="sm" onClick={handleShow}>
                ...
            </Button>

            <Modal  {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={show}
                    onHide={handleClose}>
                    <ul className="list-group shadow-sm">
                        {props.children}
                        <li data-dismiss="modal" className="list-group-item" onClick={handleClose}>Close</li>
                    </ul>
            </Modal>
        </>
    );
}

class PostData extends Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <section className="container pt-2 post-data" dangerouslySetInnerHTML={{__html: this.props.html}}/>
        );

    }
}

class PostHelper extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div className="post-helper">
                {/* Post Helper */}
                <div className="container pt-2 pb-2">
                    <div className="d-flex justify-content-between">

                        {/* Like and Comment */}
                        <div className="btn-group">
                            <button type="button" className="mr-1 ml-1 btn btn-light">Like</button>
                            <button type="button" className="mr-1 ml-1 btn btn-light">Comment</button>
                        </div>

                        {/* Share */}
                        <button type="button" className="btn btn-light">Share</button>
                    </div>
                </div>
            </div>
        );
    }
}

export {PostHeader , PostTitle, PostLayout , PostImage, PostUtils, PostUtilsItems , PostData , PostHelper};