export default {
  name: 'listing',
  title: 'Item Listing',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'listedAt',
      title: 'Listed at',
      type: 'datetime'
    },
    {
      name: 'description',
      title: 'Item Description',
      type: 'text'
    },
    {
      name: 'itemImage',
      title: 'Main image',
      type: 'image'
    },
    {
      name: 'isListed',
      title: 'Show Listing?',
      type: 'boolean'
    }
  ],
}