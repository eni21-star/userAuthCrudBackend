const FreelancerDb = require('../Models/freelancer')
const GeneralDb = require('../Models/model');

const freelancerProfile = async (req, res) => {
    const user = req.user;
    const { description } = req.body;   
    const { id } = req.params;
    
        

    try {
        if(user.role == 'freelancer'){
            const freelancer = await GeneralDb.findOne({ _id : user._id});
        if(freelancer)
        {
          const freelanceDetails =  await  FreelancerDb.create({  user: user._id, description: description })
           res.status(200).json(freelanceDetails);
        }
        else
        {
            res.status(400).json({ message: "freelancer does not exist" });
        }
        }
        else{
            res.status(401).json({ message: "You are not authorized to create a profile" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }


}

module.exports = freelancerProfile;