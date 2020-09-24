import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }) {
  console.log(children);
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
