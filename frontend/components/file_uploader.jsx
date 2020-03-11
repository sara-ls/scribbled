// // import React, { Component } from "react";
// // import Dropzone from "react-dropzone";

// // class FileUploader extends Component {
// //   constructor() {
// //     super();
// //     this.onDrop = files => {
// //       this.setState({ files });
// //     };
// //     this.state = {
// //       files: []
// //     };
// //   }

// //   render() {
// //     const files = this.state.files.map(file => (
// //       <li key={file.name}>
// //         {file.name} - {file.size} bytes
// //       </li>
// //     ));

// //     return (
// //       <Dropzone onDrop={this.onDrop}>
// //         {({ getRootProps, getInputProps }) => (
// //           <div className="container">
// //             <div {...getRootProps({ className: "dropzone" })}>
// //               <input {...getInputProps()} />
// //               <p>Drag 'n' drop some files here, or click to select files</p>
// //             </div>
// //             <div>
// //               <h4>Files</h4>
// //               <ul>{files}</ul>
// //             </div>
// //           </div>
// //         )}
// //       </Dropzone>
// //     );
// //   }
// // }

// // export default FileUploader;

// import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
// import DropzoneComponent from "react-dropzone-component";
// // import "react-dropzone-component/styles/filepicker";
// import "dropzone/dist/min/dropzone.min";

// const djsConfig = {
//   acceptedFiles: "image/jpeg,image/png,image/gif",
//   autoProcessQueue: false,
//   uploadMultiple: false,
//   addRemoveLinks: true
// };

// const componentConfig = {
//   iconFiletypes: [".jpg", ".png", ".gif"],
//   showFiletypeIcon: true,
//   maxFiles: 1,
//   postUrl: "no-url"
// };

// class FileUploader extends PureComponent {
//   // constructor() {
//   //   super();
//   //   this.showPreview = this.showPreview.bind(this);
//   // }

//   showPreview(image) {
//     if (image == null) return;

//     let mockFile = {
//       name: image.name,
//       size: image.byte_size,
//       dataURL: image.url
//     };

//     this.myDropzone.files.push(mockFile);
//     this.myDropzone.emit("addedfile", mockFile);
//     this.myDropzone.createThumbnailFromUrl(
//       mockFile,
//       this.myDropzone.options.thumbnailWidth,
//       this.myDropzone.options.thumbnailHeight,
//       this.myDropzone.options.thumbnailMethod,
//       true,
//       thumbnail => {
//         this.myDropzone.emit("thumbnail", mockFile, thumbnail);
//         this.myDropzone.emit("complete", mockFile);
//       }
//     );
//   }

//   removePrevAndAddNew(image) {
//     if (this.myDropzone.files.length > 1) {
//       let prevImage = this.myDropzone.files[0];
//       this.myDropzone.emit("removedfile", prevImage);
//     }

//     this.props.selectImage(image);
//   };

//   render() {
//     const { image } = this.props;
//     const eventHandlers = {
//       init: dropzone => {
//         this.myDropzone = dropzone;
//         this.showPreview(image);
//       },
//       addedfile: image => this.removePrevAndAddNew(image),
//       removedfile: () => this.props.unselectImage()
//     };

//     return (
//       <DropzoneComponent
//         config={componentConfig}
//         eventHandlers={eventHandlers}
//         djsConfig={djsConfig}
//       />
//     );
//   }
// }

// FileUploader.propTypes = {
//   image: PropTypes.shape({
//     name: PropTypes.string,
//     byte_size: PropTypes.integer,
//     url: PropTypes.string
//   }),
//   selectImage: PropTypes.func,
//   unselectImage: PropTypes.func
// };

// export default FileUploader;


