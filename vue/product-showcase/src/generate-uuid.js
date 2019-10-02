let uuid = () => `id_${Math.floor(Math.random() * 1e12).toString(16)}`;

let uniqueID = uuid();

// eslint-disable-next-line no-console
console.log(uniqueID);
