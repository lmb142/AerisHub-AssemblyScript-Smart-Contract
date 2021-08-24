import { storage, logging } from "near-sdk-as";

// This is the smart contract itself. Here we need to define the cathode struct, as well as functions that transfer ownership back and forth. 
//We should use the rust example to copy the architecture 

/*
export function incrementCounter(value: i32): void {
  const newCounter = storage.getPrimitive<i32>("counter", 0) + value;
  storage.set<i32>("counter", newCounter);
  logging.log("Counter is now: " + newCounter.toString());
}

export function decrementCounter(value: i32): void {
  const newCounter = storage.getPrimitive<i32>("counter", 0) - value;
  storage.set<i32>("counter", newCounter);
  logging.log("Counter is now: " + newCounter.toString());
}

export function getCounter(): i32 {
  return storage.getPrimitive<i32>("counter", 0);
}

export function resetCounter(): void {
  storage.set<i32>("counter", 0);
  logging.log("Counter is reset!");
}
*/


//we need some sort of an outside owner variable that is brought in. this would deal with the API data coming in, so im not super sure as to how this would work

export class Cathode { 
  //defining cathode class variables A(im assuming 32 bit signed integer for now)
  uniqueid: i32; //lets look into the size of our uniqueid/hash output. Depending on size, we could have a larger or smaller integer, which is more or less gas storage costs. 
  owner: i32; //we need to have some form of an aerishub account id for this
  //do we even want anything else in our cathode class
  constructor(uniqueid: i32, owner: i32){
    this.uniqueid = uniqueid;
    this.owner = owner;
  }


}

//we need something that creates the cathode with our owner id, then a part of the contract that deals with exchange of ownership

export function grantAccess();{
    
}

export function revokeAccess();{

}

export function transferFrom();{

}

export function transfer();{

}

export function checkAccess();{

}

export function getTokenOwner();{

}



