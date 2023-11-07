function flattenArray(arr) {
    return arr.reduce((accumulator, element) => {
      return accumulator.concat(Array.isArray(element) ? flattenArray(element) : element);
    }, []);
  }
 
export default flattenArray