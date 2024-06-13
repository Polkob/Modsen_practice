function getPropertyValue(obj, propertyName) {
    try {
      return obj[propertyName];
    } catch (error) {
      if (error instanceof TypeError) {
        console.error(`Error: ${error.message}`);
        return null;
      } else {
        throw error;
      }
    }
}
console.log(getPropertyValue({ name: 'John' }, 'name')); // Output: John
console.log(getPropertyValue(null, 'name')); // Output: Error: Cannot read property 'name' of null
console.log(getPropertyValue(undefined, 'name')); // Output: Error: Cannot read property 'name' of undefined
console.log(getPropertyValue({ name: 'John' }, 'age')); // Output: null