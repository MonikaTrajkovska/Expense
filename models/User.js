const mongoose=require('mongoose')

var User=mongoose.model(
       
            'users',
            new mongoose.Schema({
            first_name:String,
            last_name:String,
        
            email:String,
          date_birth:Date,
           telephone:String,
       country:String,
         password:String,
         _created:Date,
         _modified:Date   
        })
    )

       

  const createUser=(data)=>{     return new Promise((success, fail)=>{
         var user= new User (data)      
             user.save(err=>{
              if(err){
                  return fail(err)
              }return success()
          })
      })
      }
      const getUserPasswordByEmail = (email) => {
        return new Promise ((success, fail) => {
            User.find({email: email}, (err, data) => {
                if(err){
                    return fail(err);
                }
                return success(data[0]);
            });
        });
    }
 module.exports={
     createUser,
      getUserPasswordByEmail
    
 }