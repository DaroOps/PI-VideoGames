const createNullObject = (propertyName, customName = "Valid name", createwithgen = false) => {
  
  const date = new Date('2023-10-25T20:30:02.088Z');
    if(createwithgen)
    return {
      name: propertyName === "name" ? null : customName,
      description: propertyName === "description" ? null : 'Valid description genre',
      platforms: propertyName === "platforms" ? null : 'Valid platforms genre',
      image: propertyName === "image" ? null : 'Valid image genre',
      releasedate: propertyName === "releasedate" ? null : date,
      rating: propertyName === "rating" ? null : 2,
      genres: ["Action", "Puzzle"]
    };
    else{
    return {
      name: propertyName === "name" ? null : customName,
      description: propertyName === "description" ? null : 'Valid description',
      platforms: propertyName === "platforms" ? null : 'Valid platforms',
      image: propertyName === "image" ? null : 'Valid image',
      releasedate: propertyName === "releasedate" ? null : date,
      rating: propertyName === "rating" ? null : 5,
    };
  }
}

module.exports = {
    createNullObject
}