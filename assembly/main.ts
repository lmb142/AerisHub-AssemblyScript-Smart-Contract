import { storage, logging } from "near-sdk-as";

//***** 
//DEFINE AERISHUB UNIQUE ID AS A GLOBAL CONSTANT HERE. THE REASON FOR THIS 
//IS SO THAT WAY IN THE EVENT OF PIRACY/MALICIOUS CONTRACT USE, OUR SECURITY CHECKS 
//CAN HAVE CATHODES BE PRESERVED BY AERISHUB TAKING OWNERSHIP OF THEM. 

//*****
//HERE ONCE WE SOLIDIFY OUR DATA INFLOW, WE WILL CALL THE CATHODE CONSTRUCTOR WHICH WILL 
//CREATE THE CATHODE "OBJECT", INPUTTING ALL THE NECESSARY DATA

//This class below could also easily be used for bundles of cathodes. 
export class Cathode { 
  
  uniqueid: Int32Array; 
  ownerid: Int32Array; 
  pricing_Avenue: Int32Array; //this is going to determine a fixed price vs bid/ask process for appriasing the cathode/bundle
  tokenValue: Int32Array; //This is the appriasal value of the Cathode/Bundle of Cathodes
  
  //*****
  //DEFINE ANY OTHER NECESSSARY CATHODE CHARACTERISTICS HERE

  //This below constructs the actual Cathode/Bundles of Cathodes.
  constructor(uniqueid: Int32Array, ownerid: Int32Array, pricing_Avenue: Int32Array){
    this.uniqueid = uniqueid;
    this.ownerid = ownerid;
    this.pricing_Avenue = pricing_Avenue;
  }
}

//*****
//HERE WE EITHER PRICE THE CATHODE/BUNDLE AS A FIXED PRICE [IN THE CASE OF AN OFFTAKE AGREEMENT]
//OR WE PRICE IT BASED ON A BID/ASK ENGINE. THE NATURE OF THE A) FIXED PRICE INPUT OR B) BID/ASK ENGINE API
//ARE HIGHLY DEPEDNENT UPON HOW OUR DATABASE WILL CONNECT TO THIS SMART CONTRACT
 
export function Pricing(pricing_Avenue: Int32Array) { 
      switch (pricing_Avenue) {

      case (pricing_Avenue):
        //if pricing_Avenue == 1, then this case is triggered. 
        //This case deals with the fixed price pricing model, and
        //data will be fed into here from the databse. 
        //Here we initialize the tokenValue variable

        break;

        default:
        //This is where the bid/ask engine will be implemented
        //this will likely use a pre-existing big/ask engine protocol
        //Here we initialize the tokenValue variable

      }
      

}

//*****
//HERE ONCE WE SOLIDIFY OUR DATA INFLOW FOR CUSTOMER TRANSACTIONS, WE WILL CALL THE NEWOWNERCHECK CLASS WHICH WILL 
//STORE THE UNIQUE ID OF THE NEW OWNER. PART OF THIS DATA INFLOW WILL INCLUDE THE CATHODE UNIQUE ID FOR
//THE CATHODE THEY WISH TO PURCHASE(AS PART OF THE INTERACTION BETWEEN THE FRONT END, BACK END, AND HASH FUNCTION). 
//THUS, NEWOWNER WILL BE DEFINED RIGHT HERE


//when a customer puts in their own info into the website to purchase a Cathode
//or bundle of Cathodes, this keeps track of their information and makes sure that 
//the transfer of ownership is successful. If not, the checkAccess function  will 
//take the proper measures to insure that the Cathode/Cathode Bundles do not get lost. 

export class activeOwnerCheck {
      storeActiveOwnerId: Int32Array;
      constructor(storeActiveOwnerId: Int32Array) {
        this.storeActiveOwnerId  =  newOwner;
      }
}

//HERE THE TARGET CATHODE GETS FED INTO THE TRANSFER OF OWNERSHIP FUNCTION

export function transferOfOwnership(Cathode1: Cathode, newOwner: Int32Array) {
  
  let Cathode1.ownerid = newOwner;
    //implement the necessary security checks here. Likely this will be a Rust not AssemblyScript task.

    checkAccess(activeOwnerCheck1);
}

export function checkAccess(activeOwnerCheck1: activeOwnerCheck) {
      
    switch (activeOwnerCheck1.storeActiveOwnerId) { //This checks if the ownerid for Cathode1 (target Cathode) matches the newOwner Id stored in the activeOwnerCheck class.  
        case newOwner:
            
        break; //If the activeOwnerCheck1.storeActiveOwnerId == newOwner, then we break this switch statement and the transfer is complete


      //PANIC HERE

      //here we want to implement some functionality that will notify Aerishub Management
      //about this faulty nature of the Smart Contract and as a default measure, the Contract will be reverted to AerisHub's ownership
      //for safe-keeping in the event the smart contract has failed. 

      }

      //*****
      //THIS IS THE END OF THE CHECK ACCESS FUNCTION. HERE WE PLAN TO IMPLEMENT A CONNECTION BETWEEN THE BACK END AND FRONT END, IN WHICH
      //A SALES CONTRACT IS GENERATED, USING DATA ABOUT THE CATHODE (GOING BACKWARDS INTO THE DATABASE). 
}





