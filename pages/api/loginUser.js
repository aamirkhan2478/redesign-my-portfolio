// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from "@/middlewares/mongoose";
import User from "@/models/userModel";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, password } = req.body;
    
    try {
      const checkEmail = await User.findOne({ email });
      if (checkEmail) {
        return res.status(400).json({ error: "Email already exists" });
      }
      let user = new User({ name, email, password });
      await user.save();
      res.status(200).json({ success: "success" });
    } catch (err) {
      console.log(err.message);
      return res.status(500).send("Server error");
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
