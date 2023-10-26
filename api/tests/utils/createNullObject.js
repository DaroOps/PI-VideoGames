const createNullObject = (propertyName) => {
  
  const date = new Date('2023-10-25T20:30:02.088Z');
  
    return {
      name: propertyName === "name" ? null : 'Valid name',
      description: propertyName === "description" ? null : 'Valid description',
      platforms: propertyName === "platforms" ? null : 'Valid platforms',
      image: propertyName === "image" ? null : 'Valid image',
      releasedate: propertyName === "releasedate" ? null : date,
      rating: propertyName === "rating" ? null : 5
    };
}

module.exports = {
    createNullObject
}