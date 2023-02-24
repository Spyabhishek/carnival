const User = require("../models/userModel");

// exports.home = (req, res) => {
//     res.send("Hello  from Backend ");
// };

exports.createUser = async (req, res) => {
    try {
        const { name, email, phone, college, activity } = req.body;
        // To check all the details
        if (!name || !email || !phone || !college) {
            throw new Error("All fields are Required");
        }
        const userExits = await User.findOne({ email });
        if (userExits) {
            throw new Error("Email Already Exists");
        }
        // Inserting into the Database
        const user = await User.create({ name, email, phone, college, activity });
        res.status(201).json({
            success: true,
            message: "User Created Successfully",
            user,

        });
    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message
        })
    }
};