// import React from 'react';
// import Image from 'next/image';
// const Contact = () => {
  
//   const contactData = [
//     {
//       id: 1,
//       src: 'data:image/jpeg;base64,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',
//       name: 'John Doe',
//       email: 'johndoe@example.com',
//     },
//     {
//       id: 2,
//       src: './public/images/contact2.jpg',
//       name: 'Jane Smith',
//       email: 'janesmith@example.com',
//     },
//     {
//       id: 3,
//       image: './public/images/contact3.jpg',
//       name: 'Alice Johnson',
//       email: 'alicejohnson@example.com',
//     },
//     {
//       id: 4,
//       src: './public/images/contact4.jpg',
//       name: 'Bob Anderson',
//       email: 'bobanderson@example.com',
//     },
//     {
//       id: 5,
//       src: './public/images/contact5.jpg',
//       name: 'Eve Taylor',
//       email: 'evetaylor@example.com',
//     },
//     {
//       id: 6,
//       src: './public/images/contact6.jpg',
//       name: 'Charlie Brown',
//       email: 'charliebrown@example.com',
//     },
//     {
//       id: 7,
//       src: './public/images/contact7.jpg',
//       name: 'Grace Wilson',
//       email: 'gracewilson@example.com',
//     },
//     {
//       id: 8,
//       src: './public/images/contact8.jpg',
//       name: 'David Lee',
//       email: 'davidlee@example.com',
//     },
//     {
//       id: 9,
//       src: './public/images/contact9.jpg',
//       name: 'Lucy Rogers',
//       email: 'lucyrogers@example.com',
//     },
//   ];
  

//   return (
//     <div className="contact-container">
//       {contactData.map((contact) => (
//         <div key={contact.id} className="contact-card">
//           <div className="contact-image">
//             <img src={contactData.src} alt={contact.name} />
//           </div>
//           <div className="contact-details">
//             <h2>{contact.name}</h2>
//             <p>{contact.email}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Contact;
