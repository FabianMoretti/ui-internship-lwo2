/* eslint "require-jsdoc": 0 */
export function updateRecords(i, prop, value) {
  let collection = {
    '2548': {
      'album': 'Slippery When Wet',
      'artist': 'Bon Jovi',
      'tracks': [
        'Let It Rock',
        'You Give Love a Bad Name',
      ],
    },
    '2468': {
      'album': '1999',
      'artist': 'Prince',
      'tracks': [
        '1999',
        'Little Red Corvette',
      ],
    },
    '1245': {
      'artist': 'Robert Palmer',
      'tracks': [],
    },
    '5439': {
      'album': 'ABBA Gold',
    },
  };
  let collectionCopy = JSON.parse(JSON.stringify(collection));
  if (!value) {
    delete collectionCopy[i][prop];
  }
  if (value !== '') {
    if (prop !== 'tracks') {
      collectionCopy[i][prop] = value;
    }
    if (prop === 'tracks') {
      if (!collectionCopy[i].hasOwnProperty(prop)) {
        collectionCopy[i][prop] = [];
      }
      collectionCopy[i][prop].push(value);
    }
  }
  return collectionCopy;
}
