import React , {Component} from 'react';
import Head from 'next/head';


class Seo extends Component{

    constructor(props){

        super(props);
    };

    define(el,call){
        if(el === undefined){
            return(call);
        }
        else { return(el);}
    };

    render() {
        return(
            <div>
                <Head>

                    {/* Title — Sitename */}
                    <meta charSet="utf-8"/>
                    <title>{this.define(this.props.title,'Title')+' — '+this.define(this.props.sitename,'Sitename')}</title>
                    <meta property="og:title" content={this.define(this.props.title,'Title')+' — '+this.define(this.props.sitename,'Sitename')}/>
                    <meta name="twitter:title" content={this.define(this.props.title,'Title')+' — '+this.define(this.props.sitename,'Sitename')}/>

                    {/* Description */}
                    <meta name="description" content={this.define(this.props.description,'Description')}/>
                    <meta name="twitter:description" content={this.define(this.props.description,'Description')}/>
                    <meta property="og:description" content={this.define(this.props.description,'Description')}/>

                    {/* Link */}
                    <meta property="og:url" content={this.define(this.props.location,'/')}/>
                    <link rel="canonical" href={this.define(this.props.location,'/')}/>

                    {/* Robot */}
                    <meta name="robots" content={this.define(this.props.robots,'index,follow')}/>

                    {/*  Site */}
                    <meta property="og:type" content={this.define(this.props.type,'article')}/>
                    <meta property="og:site_name" content={this.define(this.props.sitename,'Sitename')}/>
                    <meta name="twitter:site" content={this.define(this.props.username,'@username')}/>
                    <meta name="twitter:creator" content={this.define(this.props.username,'@username')}/>

                    {/* Image */}
                    <meta property="og:image" content={this.define(this.props.image,'/')}/>
                    <meta name="twitter:image" content={this.define(this.props.image,'/')}/>
                </Head>

                {this.props.children}
            </div>
        );
    }

}

export default Seo;