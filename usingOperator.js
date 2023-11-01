{
    const getResource = () => {
      return {
        [Symbol.dispose]: () => {
          console.log('Hooray!')
        }
      }
    }
    using resource = getResource();
  }