const bookDataFormatter = ([bookItem], id) => ({
  item_id: id,
  title: bookItem.title,
  author: bookItem.author,
  category: bookItem.category,
});

export default bookDataFormatter;
