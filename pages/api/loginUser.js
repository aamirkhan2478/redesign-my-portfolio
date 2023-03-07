// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from "@/middlewares/mongoose";
import User from "@/models/userModel";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (user) {
        const isMatch = await compare(password, user.password);
        if (email === user.email) {
          if (!isMatch) {
            return res.status(400).json({
              success: false,
              error: "Invalid Credentials",
            });
          }
          var token = sign(
            { email: user.email, name: user.name },
            process.env.JWT_TOKEN_SECRET,
            { expiresIn: "2d" }
          );
          return res.status(200).json({
            success: true,
            token,
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
    res.status(405).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
