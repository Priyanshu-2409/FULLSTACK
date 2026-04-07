const registeredUser = async (req, res) => {
    //get data from request body
    //validate data
    //check if user already exists
    //create new user object in database
    //create a verification token
    //save token in database
    //send verification token as email to user
    //send success status to user
    
    const { name, email, password } = req.body; //got data
    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    };
};

export { registeredUser };