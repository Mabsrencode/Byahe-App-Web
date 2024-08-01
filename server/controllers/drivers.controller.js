import { getUnverifiedDrivers } from "../lib/appwrite.js";

const getDriversInformation = async (req, res) => {
  try {
    const data = await getUnverifiedDrivers();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching unverified drivers" });
  }
};

export { getDriversInformation };
