import * as APIUtil from "../util/documents_api_util";

export const RECEIVE_DOCUMENTS = "RECEIVE_DOCUMENTS";
export const RECEIVE_DOCUMENT = "RECEIVE_DOCUMENT";

const receiveDocument = document => ({
  type: RECEIVE_DOCUMENT,
  document
});

const receiveDocuments = documents => ({
  type: RECEIVE_DOCUMENTS,
  documents
});

export const fetchDocument = id => dispatch =>
  APIUtil.fetchDocument(id).then(document =>
    dispatch(receiveDocument(document))
  );

export const fetchDocuments = () => dispatch =>
  APIUtil.fetchDocuments().then(documents =>
    dispatch(receiveDocuments(documents))
  );

export const createDocument = document => dispatch =>
  APIUtil.createDocument(document).then(document =>
    dispatch(receiveDocument(document))
  );
export const updateDocument = document => dispatch =>
  APIUtil.updateDocument(document).then(document =>
    dispatch(receiveDocument(document))
  );
