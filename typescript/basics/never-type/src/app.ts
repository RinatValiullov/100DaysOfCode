function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

let resultError = generateError('Some error occured', 987);

console.log(resultError);
