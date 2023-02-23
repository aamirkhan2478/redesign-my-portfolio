import connectDb from "@/middlewares/mongoose";
import projectModel from "@/models/projectModel";

const handler = async (req, res) => {
  try {
    const projects = await projectModel.find();
    res.send(projects);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

export default connectDb(handler);
