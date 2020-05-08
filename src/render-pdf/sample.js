import React, { Component } from 'react';
import { Document, Page, pdfjs} from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import './sample.less';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};
class SamplePDF extends Component {
  state = {
    file: null,
    pdfPreviewUrl: null,
    numPages: null,
  }
  
  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  }

  fileChangedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
 
    let reader = new FileReader();
     
    reader.onloadend = () => {
      this.setState({
        pdfPreviewUrl: reader.result
      });
    }
 
    reader.readAsDataURL(event.target.files[0])
 
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }


  render() {
    const { pdfPreviewUrl, numPages } = this.state;

    return (
      <div className="Example">
        <header>
          <h1>react-pdf sample page</h1>
        </header>

        <div className="Example__container__load">
            <label htmlFor="file">Load from file:</label>
            {' '}
            <input
              onChange={this.fileChangedHandler}
              type="file"
            />
        </div>

        <div className="Example__container">
          <div className="Example__container__document">
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
          </div>
        </div> 
      </div>
    );
  }
}

export default SamplePDF