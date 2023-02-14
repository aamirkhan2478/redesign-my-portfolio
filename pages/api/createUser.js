// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from "@/middlewares/mongoose";
import User from "@/models/userModel";

const handler = async (req, res) => {
  if (req.method === "POST") {
    console.log(req.body);
    const { name, email, password } = req.body;
    let user = new User({name, email, password});
    await user.save();
    res.status(200).json({ success: "success" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
