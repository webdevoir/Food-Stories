export const postComment = (itemType, itemId, formData) => {
  return $.ajax({
    method: 'POST',
    url: `/api/${itemType}/${itemId}/comments`,
    data: formData,
    contentType: false,
    processData: false
  });
};
