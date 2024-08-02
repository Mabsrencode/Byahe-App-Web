import {
  getVerifiedDrivers,
  getUnverifiedDrivers,
  updateUnverifiedDriver,
} from "../lib/appwrite.js";

const getVerifiedDriversInformation = async (req, res) => {
  try {
    const data = await getVerifiedDrivers();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching verified drivers" });
  }
};

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

const updateDriverVerification = async (req, res) => {
  const accountId = req.params;
  try {
    const data = await updateUnverifiedDriver(accountId);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while updating unverified drivers" });
  }
};

export { getDriversInformation, updateDriverVerification };
