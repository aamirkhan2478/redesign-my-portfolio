import connectDb from "@/middlewares/mongoose";
import projectModel from "@/models/projectModel";
import Joi from "joi";

const projectSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  pic: Joi.string().required(),
  languages: Joi.array().required(),
  live: Joi.string().required(),
  demo: Joi.string().required(),
});
const handler = async (req, res) => {
  const { name, description, pic, languages, live, demo } = req.body;
  const { error } = projectSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).send(error.details);
  }
  try {
    const project = new projectModel({
      name,
      description,
      pic,
      languages,
      live,
      demo,
    });

    await project.save();
    res.status(200).json({ success: "success" });
  } catch (err) {
    console.log(err.message);
    req.status(500).send("Server error");
  }
};

export default connectDb(handler);
