import axios from "axios";
import * as Config from "../constants/Config";

const callAPi = async (endpoint, method = "GET", body) => {
  try {
    let response = await axios({
      METHOD: method,
      url: `${Config.API_URL}/${endpoint}`,
      data: body
    });

    return response

  } catch (err) {
    console.error(err);
  }
};

export default callAPi;
