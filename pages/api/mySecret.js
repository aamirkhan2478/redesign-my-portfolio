import connectDb from "@/middlewares/mongoose";
import User from "@/models/userModel";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, secret } = req.body;

    try {
      const user = await User.findOne({ email });
      if (user) {
        const isMatch = await compare(secret, user.secret);
        if (email === user.email) {
          if (!isMatch) {
            return res.status(400).json({
              success: false,
              error: "Invalid Credentials",
            });
          }
          return res.status(200).json({
            success: true,
          });
        } else {
          return res.status(400).json({
            success: false,
            error: "Invalid Credentials",
          });
        }
      } else {
        return res.status(400).json({
          success: false,
          error: "No User Found",
        });
      }
    } catch (err) {
      console.log(err.message);
      return res.status(500).send("Server error");
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
