/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets(_,{input}, ctx){
      return ctx.models.Pet.findMany(input)
    },
    pet(_, {input}, ctx){
      console.log('Query => pet')
      return ctx.models.Pet.findOne(input)
    }
  },
  Mutation: {
    newPet(_, {input}, ctx){
      pet = ctx.models.Pet.create(input)
      return pet
    },
    updatePet(_, {input}, ctx) {
      const pet = ctx.models.Pet.update(input.id, input.updates)
      return pet
    }
  }, 
  Pet: {
    // First argument is goin to be a Pet
    owner(_, __, ctx){
      console.log("owner")
      return ctx.models.User.findOne()
      // ctx.models.User.findById(pet.user)
    }
  },
  User: {
    // First argument is going to be a user
    pets(_, __, ctx){
      console.log('User => pets')
      return ctx.models.Pet.findMany()
    }
  }
}
