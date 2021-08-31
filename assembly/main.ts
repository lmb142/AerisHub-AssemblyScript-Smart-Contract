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
  
  uniqueid: i32; 
  ownerid: i32; 
  tokenValue: i32; //This is the appriasal value of the Cathode/Bundle of Cathodes
  
  //*****
  //DEFINE OTHER CATHODE CHARACTERISTICS HERE

  //This below constructs the actual Cathode/Bundles of Cathodes.
  constructor(uniqueid: i32, ownerid: i32, tokenValue: i32;){
    this.uniqueid = uniqueid;
    this.ownerid = ownerid;
    this.tokenValue = tokenValue;
  }
}

//*****
//HERE ONCE WE SOLIDIFY OUR DATA INFLOW FOR CUSTOMER TRANSACTIONS, WE WILL CALL THE NEWOWNERCHECK CLASS WHICH WILL 
//STORE THE UNIQUE ID OF THE NEW OWNER. PART OF THIS DATA INFLOW WILL INCLUDE THE CATHODE UNIQUE ID FOR
//THE CATHODE THEY WISH TO PURCHASE(AS PART OF THE INTERACTION BETWEEN THE FRONT END, BACK END, AND HASH FUNCTION). 


//when a customer puts in their own info into the website to purchase a Cathode
//or bundle of Cathodes, this keeps track of their information and makes sure that 
//the transfer of ownership is successful. If not, the checkAccess function  will 
//take the proper measures to insure that the Cathode/Cathoide Bundles do not get lost. 

export class NewOwnerCheck (newOwner: i32); void {
      storeNewOwnerId: i32;
      constructor(storeNewOwnerId: i32){
        this.storeNewOwnerId  =  newOwner;
      }
}

export function transferOfOwnership(Cathode1: Cathode, newOwner: i32); void {
  
  let Cathode1.ownerid = newOwner;
    //implement the necessary security checks here. Likely this will be a Rust not AssemblyScript task.
    checkAccess(Cathode1.ownerid);
}


export function checkAccess(Cathode1.ownerid: Cathode.ownerid); void{
      
    switch (storeNewOwnerId) { //This checks if the ownerid for Cathode1 (target Cathode) matches the newOwner Id stored in the NewOwnerCheck class.  
        case newOwner:
            
        break; //If the storeNewOwnerId == Cathode1.ownerid, then we break this switch statement and the transfer is complete

      //here we want to implement some functionality that will notify Aerishub Management
      //about this faulty nature of the Smart Contract as a default measure, the Contract will be reverted to AerisHub's control
      //for safe-keeping in the event the smart contract has failed. 

      let Cathode1.owner.id = //predefined AerisHub uniqueid. This will notify AerisHub management as well. 

      }

      //*****
      //THIS IS THE END OF THE CHECK ACCESS FUNCTION. HERE WE PLAN TO IMPLEMENT A CONNECTION BETWEEN THE BACK END AND FRONT END, IN WHICH
      //A SALES CONTRACT IS GENERATED, USING DATA ABOUT THE CATHODE (GOING BACKWARDS INTO THE HASH FUNCTION). 
      
      
      //*******we also should talk more about this stage of the sales process, and how much blockchain is involved past this point.*******
}





