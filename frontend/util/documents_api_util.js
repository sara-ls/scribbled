export const fetchDocuments = () => {
  return $.ajax({
    method: "GET",
    url: "api/documents"
  });
};

export const fetchDocument = id =>
  $.ajax({
    method: "GET",
    url: `api/documents/${id}`
  });

export const createDocument = documentForm =>
  $.ajax({
    method: "POST",
    url: "api/documents",
    data: { document: documentForm }
  });

export const updateDocument = documentForm =>
  $.ajax({
    method: "PATCH",
    url: `api/documents/${documentForm.id}`,
    data: { document: documentForm }
  });
