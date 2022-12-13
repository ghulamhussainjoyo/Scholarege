
import React, { Component } from 'react';
import logo from './logo.svg';
import { convertToHTML } from 'draft-convert';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Card } from 'flowbite-react';


interface AppState {
    editorState: EditorState;
    uploadedImages:Array<any>; 
 }
 

class App extends Component<{},AppState> {

    constructor(props: any) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            uploadedImages: []
        };
        this._uploadImageCallBack = this._uploadImageCallBack.bind(this);
        this.uploadCallback = this.uploadCallback.bind(this);
    }

    onEditorStateChange = (editorState:EditorState) => {

        console.log(editorState.getCurrentContent())
        
        this.setState({
            editorState,
        });
    };


    _uploadImageCallBack(file: any) {
        // long story short, every time we upload an image, we
        // need to save it to the state so we can get it's data
        // later when we decide what to do with it.

        // Make sure you have a uploadImages: [] as your default state
        let uploadedImages = this.state.uploadedImages;

        const imageObject = {
            file: file,
            localSrc: URL.createObjectURL(file),
        }

        console.log(imageObject);
        uploadedImages.push(imageObject);

        this.setState({ uploadedImages: uploadedImages })

        // We need to return a promise with the image src
        // the img src we will use here will be what's needed
        // to preview it in the browser. This will be different than what
        // we will see in the index.md file we generate.
        return new Promise(
            (resolve, reject) => {
                resolve({ data: { link: imageObject.localSrc } });
            }
        );
    }


    uploadCallback = (file:any) => {
        return new Promise(
            (resolve, reject) => {
                if (file) {
                    let reader = new FileReader();
                    reader.onload = (e) => {
                        resolve({ data: { link: e.target?.result } })
                    };
                    reader.readAsDataURL(file);
                }
            }
        );
    } 

    render() {
        const { editorState } = this.state;
        return (
            <div className="App">
                <Card className='m-10'>
                <header className="App-header">

                    <Editor
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={this.onEditorStateChange}
                        toolbar={{
                            image: {
                            uploadEnabled: true,
                            uploadCallback: this.uploadCallback,
                            previewImage: true,
                            inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                            alt: { present: false, mandatory: false },
                            defaultSize: {
                                 height: 'auto',
                                 width: 'auto',
                            },
                         },
                       }}
                    />
                </header>
                </Card>
            </div>
        );
    }
}

export default App;