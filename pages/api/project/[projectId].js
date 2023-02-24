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

const updateProject = async (req, res) => {
  try {
    const { error } = projectSchema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).send(error.details);
    }

    const data = await projectModel.findByIdAndUpdate(
      req.query.projectId,
      req.body
    );
    if (!data) {
      return res.status(400).json({
        error: `Cannot update project with ${id}. May be project not found`,
      });
    } else {
      return res.status(200).json({ msg: "Project Updated Successfully" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
};

const deleteProject = async (req, res) => {
  try {
    const data = await projectModel.findByIdAndDelete(req.query.projectId);
    if (!data) {
      return res.status(400).json({
        error: `Cannot update project with ${id}. May be project not found`,
      });
    } else {
      return res.status(200).json({ msg: "Project Deleted Successfully" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
};

const handler = async (req, res) => {
  switch (req.method) {
    case "PUT":
      await updateProject(req, res);
      break;
    case "DELETE":
      await deleteProject(req, res);
      break;
    default:
      res.status(405).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
