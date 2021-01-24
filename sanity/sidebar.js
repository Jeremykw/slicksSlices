import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

// Custom Sidebar
export default function Sidebar() {
  return S.list()
    .title(`Slick's Slices`)
    .items([
      // create new list items
      S.listItem()
        .title('Home Page')
        .icon(() => <strong>+</strong>)
        .child(S.editor().schemaType('storeSettings').documentId('downtown')),
      // add the rest of the items
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'storeSettings'
      ),
    ]);
}
