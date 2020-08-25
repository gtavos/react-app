  import React, { Component } from 'react';
import { Document, Page, pdfjs} from 'react-pdf';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import './sample.less';
import "./styles.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};


class SampleModalPDF extends Component {
  constructor () {
    super();
    this.state = {
      pdfPreviewUrl: null,
      numPages: null,
      modal : false,
      backdrop: true,
      keyboard: true,
    }
  }
  
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  fileChangedHandler = event => {
    let reader = new FileReader();
     
    reader.onloadend = () => {
      this.setState({
        pdfPreviewUrl: reader.result
      });
    }
 
    if(event.target.files[0] != undefined){
      reader.readAsDataURL(event.target.files[0]);
      this.toggle();
    }
  }

  onClose = event => {
    this.setState({
      pdfPreviewUrl: null
    });
    this.toggle();
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pdfPreviewUrl, numPages, modal, backdrop, keyboard} = this.state;

    return (
      <div className="Example">
        <header>
          <h1>react-pdf sample page</h1>
        </header>

        <div className="Example__container__load">
            <label htmlFor="file">Load from file:</label>
            <Form inline onSubmit={(e) => e.preventDefault()}>
            {' '}
            <input
              onChange={this.fileChangedHandler}
              type="file"
            />
          </Form>
        </div>

        <Modal isOpen={modal} toggle={this.toggle} backdrop={backdrop} keyboard={keyboard} scrollable={true}>
        <ModalHeader toggle={this.toggle}>Upload Document</ModalHeader>
        <ModalBody>

            <Document
              file={pdfPreviewUrl}
              onLoadSuccess={this.onDocumentLoadSuccess}
              options={options}
            >
              
              {
                Array.from(
                  new Array(numPages),
                  (el, index) => (
                    <Page
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                    />
                  ),
                )
              }
            </Document>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={this.onClose}>Cancel</Button>
        </ModalFooter>
        </Modal>

        
      </div>
    );
  }
}

export default SampleModalPDF