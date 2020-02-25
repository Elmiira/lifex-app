// *** Supplies Table Configuration ***
export const columns = [
  {
    title: 'category',
    field: 'category',
    lookup: { Kitchen: 'Kitchen', Laundry: 'Laundry', Room: 'Room' },
  },
  { title: 'Item', field: 'item' },
  { title: 'Description', field: 'description' },
  { title: 'Brand', field: 'brand' },
  { title: 'In Use', field: 'inUse', type: 'numeric'  },
  { title: 'Stock', field: 'stock', type: 'numeric' },
  { title: 'Std', field: 'std', type: 'numeric' },
];

export const options = {
  pageSize: 6,
  pageSizeOptions: [1, 4, 6],
};
