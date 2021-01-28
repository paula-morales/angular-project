import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DogsService {
  dogs = [
    {
      id: 1,
      name: 'little smokey',
      gender: 'male',
      race: 'pit bull',
      age: 2,
      color: ['black', 'white'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut odio blandit, dignissim tortor sit amet, interdum sem. Praesent sit amet lorem mi. Nunc mi mi, dignissim at scelerisque sed, accumsan non orci. Etiam volutpat arcu et consequat placerat.',
      pictures: [
        'https://firebasestorage.googleapis.com/v0/b/new-project-f7eee.appspot.com/o/o4nyvq6vqai?alt=media&token=f814762a-7873-4c70-b457-747e6ae0a82c',
        'https://firebasestorage.googleapis.com/v0/b/new-project-f7eee.appspot.com/o/o2dpuedsyfe?alt=media&token=f0b1e747-c65d-4fdc-9cd8-ebf96134ae26',
        'https://firebasestorage.googleapis.com/v0/b/new-project-f7eee.appspot.com/o/zymtmdkjaf?alt=media&token=d0994ebe-f257-4b17-9cb4-13262422453b',
      ],
    },
    {
      id: 2,
      name: 'spotty',
      gender: 'female',
      race: 'half-breed',
      age: 4,
      color: ['brown', 'white'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut odio blandit, dignissim tortor sit amet, interdum sem. Praesent sit amet lorem mi. Nunc mi mi, dignissim at scelerisque sed, accumsan non orci. Etiam volutpat arcu et consequat placerat.',
      pictures: [
        'https://firebasestorage.googleapis.com/v0/b/new-project-f7eee.appspot.com/o/o2dpuedsyfe?alt=media&token=f0b1e747-c65d-4fdc-9cd8-ebf96134ae26',
        'https://firebasestorage.googleapis.com/v0/b/new-project-f7eee.appspot.com/o/zymtmdkjaf?alt=media&token=d0994ebe-f257-4b17-9cb4-13262422453b',
        'https://firebasestorage.googleapis.com/v0/b/new-project-f7eee.appspot.com/o/o4nyvq6vqai?alt=media&token=f814762a-7873-4c70-b457-747e6ae0a82c',
      ],
    },
    {
      id: 3,
      name: 'fluffy',
      gender: 'female',
      race: 'poodle',
      age: 6,
      color: ['white'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut odio blandit, dignissim tortor sit amet, interdum sem. Praesent sit amet lorem mi. Nunc mi mi, dignissim at scelerisque sed, accumsan non orci. Etiam volutpat arcu et consequat placerat.',
      pictures: [
        'https://firebasestorage.googleapis.com/v0/b/new-project-f7eee.appspot.com/o/zymtmdkjaf?alt=media&token=d0994ebe-f257-4b17-9cb4-13262422453b',
        'https://firebasestorage.googleapis.com/v0/b/new-project-f7eee.appspot.com/o/o4nyvq6vqai?alt=media&token=f814762a-7873-4c70-b457-747e6ae0a82c',
        'https://firebasestorage.googleapis.com/v0/b/new-project-f7eee.appspot.com/o/o2dpuedsyfe?alt=media&token=f0b1e747-c65d-4fdc-9cd8-ebf96134ae26',
      ],
    },
    {
      id: 4,
      name: 'salchicha',
      gender: 'female',
      race: 'dashshund',
      age: 6,
      color: ['white'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut odio blandit, dignissim tortor sit amet, interdum sem. Praesent sit amet lorem mi. Nunc mi mi, dignissim at scelerisque sed, accumsan non orci. Etiam volutpat arcu et consequat placerat.',
      pictures: [
        'https://firebasestorage.googleapis.com/v0/b/new-project-f7eee.appspot.com/o/zymtmdkjaf?alt=media&token=d0994ebe-f257-4b17-9cb4-13262422453b',
        'https://firebasestorage.googleapis.com/v0/b/new-project-f7eee.appspot.com/o/o4nyvq6vqai?alt=media&token=f814762a-7873-4c70-b457-747e6ae0a82c',
        'https://firebasestorage.googleapis.com/v0/b/new-project-f7eee.appspot.com/o/o2dpuedsyfe?alt=media&token=f0b1e747-c65d-4fdc-9cd8-ebf96134ae26',
      ],
    },
  ];
  constructor() {}
}
