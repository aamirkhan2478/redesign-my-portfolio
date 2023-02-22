// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from "@/middlewares/mongoose";
import User from "@/models/userModel";
import Joi from "joi";

const signupSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(
      new RegExp(
        /^(?=.*[0-9])(?=.*[a-zA-Z ])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&* ]{8,20}$/
      ),
      "Password must contain at least 8 characters, 1 number, 1 upper, 1 lowercase and 1 special character!"
    )
    .required(),
});

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, password } = req.body;
    const { error } = signupSchema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).send(error.details);
    }
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
