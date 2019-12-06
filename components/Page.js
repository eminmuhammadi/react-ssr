import React , {Component} from 'react';
import Head from 'next/head';


class Page extends Component{

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

                    <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese"
                          rel="stylesheet"
                          key="fonts-google-roboto"/>

                </Head>
                <style global jsx>{`
                  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}
                  /*! Font by Google */body {font-family: 'Roboto', sans-serif !important;}
                  /*! Bootstrap Reset */.btn.active.focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn:active:focus,.btn:focus,a.active.focus,a.active:focus,a.focus,a:active.focus,a:active:focus,a:focus,button.active.focus,button.active:focus,button.focus,button:active.focus,button:active:focus,button:focus{outline:0;outline-color:transparent;outline-width:0;outline-style:none;box-shadow:0 0 0 0 rgba(0,123,255,0)}
                `}</style>
                {this.props.children}
            </div>
        );
    }

}

export default Page;