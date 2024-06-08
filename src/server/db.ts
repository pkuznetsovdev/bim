import type { Pet, Post, User } from '@types';

type UserDB = {
  password: string;
};

type DB = {
  users: Array<User & UserDB>;
  pets: Array<Pet>;
  posts: Array<Post>;
};

const COLORS = {
  wbg: ['white', 'black', 'grey'],
  wbr: ['white', 'black', 'red'],
  rgb: ['red', 'green', 'blue'],
};

const TYPES = {
  dog: 'dog',
  cat: 'cat',
} as const;

export const db: DB = {
  users: [
    {
      id: 1,
      phoneNumber: '123',
      email: 'user1@test.com',
      password: 'user1',
    },
    {
      id: 2,
      phoneNumber: '456',
      email: 'user2@test.com',
      password: 'user2',
    },
    {
      id: 3,
      phoneNumber: '789',
      email: 'user3@test.com',
      password: 'user3',
    },
  ],
  pets: [
    {
      id: 4,
      createdAt: '2024-06-03T18:51:04.829Z',
      host: 1,
      type: TYPES.dog,
      breed: 'Husky',
      name: 'Sati',
      dateOfBirth: '08.03.2016',
      colors: COLORS.wbg,
      description: 'Best friend of every human',
      photos: [
        'https://cdn.britannica.com/84/232784-050-1769B477/Siberian-Husky-dog.jpg',
        'https://www.dogster.com/wp-content/uploads/2024/01/siberian-husky-dog-standing-on-grass_Edalin-Photograhy_Shutterstock.jpeg',
      ],
      status: 'home',
    },
    {
      id: 5,
      createdAt: '2024-06-03T18:51:04.829Z',
      host: 1,
      type: TYPES.cat,
      breed: 'British Shorthair',
      name: 'Jennifer',
      dateOfBirth: '08.03.2016',
      colors: COLORS.wbr,
      description: 'The cat',
      photos: [
        'https://cdn.britannica.com/36/234736-050-4AC5B6D5/Scottish-fold-cat.jpg',
        'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200',
      ],
      status: 'lost',
    },
    {
      id: 6,
      createdAt: '2024-06-03T18:51:04.829Z',
      host: 2,
      type: TYPES.dog,
      breed: 'Bulldog',
      name: 'Bull',
      dateOfBirth: '08.03.2019',
      colors: COLORS.rgb,
      description: 'A bull dog',
      photos: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bulldog_inglese.jpg/640px-Bulldog_inglese.jpg',
        'https://www.thesprucepets.com/thmb/ulW6LUNbvUv7gPZ4NVF6vlvgFHY=/3600x0/filters:no_upscale():strip_icc()/bulldog-4584344-05-b05974de04be496aac87ff43f104b428.jpg',
      ],
      status: 'home',
    },
    {
      id: 7,
      createdAt: '2024-06-03T18:51:04.829Z',
      host: 2,
      type: TYPES.cat,
      breed: 'Unknown',
      name: 'Raketa',
      dateOfBirth: '08.03.2016',
      colors: COLORS.wbr,
      description: 'The rocket cat',
      photos: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-mu11KM3eiKFx3EKPgp23iMApG_IMyLOusol-J936nz8s6z4-DFwYEi6bx07tN_y1CLc&usqp=CAU',
        'https://img.freepik.com/premium-photo/cat-is-rocket_861577-259.jpg',
        'https://masterpiecer-images.s3.yandex.net/fbac52df293411ee986b06d64eab8f23:upscaled',
      ],
      status: 'home',
    },
  ],
  posts: [
    {
      id: 8,
      createdAt: '2024-06-03T18:51:04.829Z',
      pet: 5,
      type: 'lost',
      description: 'The cat is lost',
    },
    {
      id: 9,
      createdAt: '2024-06-03T18:51:04.829Z',
      user: 2,
      type: 'found',
      description: 'The cat is lost',
      petDetails: {
        photos: [
          'https://d.newsweek.com/en/full/2240279/cat.jpg',
          'https://qph.cf2.quoracdn.net/main-qimg-3d25813c929de03eeb4c2fac71ad8436',
        ],
      },
    },
  ],
};
