export const infoToShow = [{ title: "[Mock]completed", info: 23 }, { title: "[Mock]In Progress", info: 3 }]
export const users = [
  {
    _id: 1,
    userName: "steave",
    password: "abc",
    isSuper: true,
    img: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
  },
  {
    _id: 2,
    userName: "david",
    password: "abc",
    isSuper: false,
    img: "https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
  },
  {
    _id: 3,
    userName: "john",
    password: 'abc',
    isSuper: false,
    img: "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
  },
  {
    _id: 4,
    userName: "tom",
    password: 'abc',
    isSuper: false,
    img: "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
  },
  {
    _id: 5,
    userName: "Sandra",
    password: 'abc',
    isSuper: false,
    img: "https://www.kapwing.com/resources/content/images/2021/04/tiktok-profile-picture-idea-4--1--1.jpeg"
  },
  {
    _id: 6,
    userName: "Maria",
    password: 'abc',
    isSuper: false,
    img: "https://www.headshotsprague.com/wp-content/uploads/2019/08/Emotional-headshot-of-aspiring-actress-on-white-background-made-by-Headshots-Prague-1.jpg"
  },

  {
    _id: 7,
    userName: "Sara",
    password: 'abc',
    isSuper: false,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0WKEx_tpB-orE3UitGIzyRo6j4_EVctgIcyCJqKsleOvZoeaaZFFs43GBG3WbZcAJdE&usqp=CAU"
  },
  {
    _id: 6,
    userName: "Bob",
    password: 'abc',
    isSuper: false,
    img: "https://static.wikia.nocookie.net/spongebob/images/4/47/Spongebob.png/revision/latest?cb=20180818141844&path-prefix=es"
  },

  {
    _id: 8,
    userName: "Chandler",
    password: 'abc',
    isSuper: false,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Ra7STuMdK3xnn0bmKiKodYcOo0nJEtpIc6j8nZ9Zp7ScB5vJcFSIkgiEq0DU4LmPwN8&usqp=CAU"
  },
]
export const projects = [{
  _id: 1,
  name: "PDf Scanner",
  description: "Convert your mobile phone to a Scanner, and export as PDF or any other popular foramt",
  creator: 1,
  managers: [users[1], users[2], users[3]],
  developers: [users[4], users[5], users[6]],
  createdAt: new Date(2021 - 12 - 11),
  updatedAt: new Date(2021 - 12 - 12),
  tickets: [1, 2, 3,4]

},
{
  _id: 2,
  name: "Wallet tracker",
  description: "Track all you income and expenses",
  creator: 1,
  managers: [1, 2, 3],
  developers: [users[7], users[4], users[2]],
  createdAt: new Date(2021 - 12 - 8),
  updatedAt: new Date(2021 - 12 - 10),
  tickets: [1, 2, 3]
},
{
  _id: 3,
  name: "Offline map",
  description: "GPS and Map offline with out internet",
  creator: 1,
  managers: [1, 3],
  developers: [users[5], users[7], users[6]],
  createdAt: new Date(2021 - 12 - 11),
  updatedAt: new Date(2021 - 12 - 12),
  tickets: [1, 2]
}, {
  _id: 4,
  name: "E-book reader",
  description: "An Ebook reader with support of  40 languages",
  creator: 1,
  managers: [1, 2, 3],
  developers: [users[7] ,users[5],users[3]],
  createdAt: new Date(2021 - 12 - 11),
  updatedAt: new Date(2021 - 12 - 12),
  tickets: [1, 2, 3,5,6]
}
]



export const tikcets = [
  {
    number: 'Ab_1c3',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sequi.",


  }


]

