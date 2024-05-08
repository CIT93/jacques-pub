import { handleError } from "./utils.js";

const saveMovie = (data) => {
  // Get existing data if any
  const prevStorage = getData("historyList");
  // If no existing data, set new item using an empty array with data.
  // I could have wrote the following newArray as [data]; however, I enjoy spreading
  if (!prevStorage) {
    const newArray = [data];
    sessionStorage.setItem("historyList", JSON.stringify(newArray));
  } else {
    // if userData does exist, then spread it to get the old objects from arr and add the new object to arr
    const newData = [...prevStorage, data];
    // stringify as normal with the new data
    const stringifyData = JSON.stringify(newData);
    sessionStorage.setItem("historyList", stringifyData);
  }
};

const saveCount = (count) =>
  localStorage.setItem("requestCount", JSON.stringify(count));
export const updateMovieList = (movies) => {
  sessionStorage.setItem("historyList", JSON.stringify(movies));
};
export const getData = (key) => JSON.parse(sessionStorage.getItem(key));
export const store = (data, key) => {
  if (key === "requestCount") {
    saveCount(data);
  } else {
    saveMovie(data);
  }
};

export const fetchAPIData = async (title) => {
  // I decided to create a Lambda function through AWS that handles sending a request to a movie databse API that requires secret keys to access. I can't expose my keys on client side, so I had to do it this way.
  const aws_url =
    "https://3aha7tdqsas7bz47zdq756kt2i0lfbee.lambda-url.us-east-2.on.aws/";
  const options = {
    method: "POST",
    body: title,
  };
  try {
    const requestCount = getData("requestCount");
    if (!requestCount) {
      store(1, "requestCount");
    } else if (requestCount >= 50) {
      //Adding a limit because the API I'm using is free unless you reach the limit for the day. if for whatever reason a user does too many requests in one day, I can stop it before it fetches, so I won't get hit with overage request fees xD
      return "exceededLimit";
    } else {
      store(requestCount + 1, "requestCount");
    }
    const req = await fetch(aws_url, options);
    if (!req) {
      handleError("An error occurred. Please try again.");
      return;
    }
    const json = await req.json();
    const data = json.results[0];
    const movie = {
      yearReleased: data.release_date,
      description: data.overview,
      poster: data.poster_path,
      backdropPoster: data.backdrop_path,
    };
    return movie;
  } catch (error) {
    handleError(error);
  }
};
