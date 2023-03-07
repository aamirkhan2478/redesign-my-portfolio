import connectDb from "@/middlewares/mongoose";
import projectModel from "@/models/projectModel";
import Joi from "joi";

const projectSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  pic: Joi.string().required(),
  languages: Joi.array().required(),
  live: Joi.string().required(),
  source: Joi.string().required(),
});
const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, description, pic, languages, live, source } = req.body;
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
        source,
      });

      await project.save();
      res.status(200).json({ msg: "New Project Added Successfully " });
    } catch (err) {
      console.log(err.message);
      req.status(500).send("Server error");
    }
  } else {
    return res.status(405).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
