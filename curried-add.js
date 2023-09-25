
  function curriedAdd(total) {
      if (total === undefined) return 0;
      let currentTotal = total;
  
    function addNumber(num) {
      if (typeof num === 'number') {
        currentTotal += num;
        return addNumber; // Return itself to allow chaining
      } else {
        return currentTotal; // Return the accumulated total when no argument is provided
      }
    }
  
    return addNumber; // Return the initial function
  }
  
module.exports = { curriedAdd };
