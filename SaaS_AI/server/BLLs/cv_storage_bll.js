const { get_user_cv, update_user_cv } = require('../DALs/cv_dal')

const  saveToUser= async(user)=> {
    
    try{
        const  data = await get_user_cv(user.email)

        if (data) {
            const newCVList = [...data.cvs]
            newCVList.push(user.cv)

            await update_user_cv(user.email,newCVList)
            return "cv had been added to user !"
        }
    }catch (error) {
        console.error("Erreur dans saveToUser:", error);
        throw error;}
 }

module.exports=  {saveToUser}