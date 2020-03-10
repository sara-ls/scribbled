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

export const createDocument = documentForm =>{
  return $.ajax({
    method: "POST",
    url: "api/documents",
    data: { document: documentForm }
  })

  // return $.ajax({
  //   method: "POST",
  //   url: "api/documents",
  //   data: { document: JSON.stringify(documentForm) },
  //   dataType: "json",
  //   success: res => console.log(res),
  //   failure: err => console.log(err)
  // });
};

export const updateDocument = documentForm =>
  $.ajax({
    method: "PATCH",
    url: `api/documents/${documentForm.id}`,
    data: { document: documentForm }
  });
