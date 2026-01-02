// const token = localStorage.getItem("access_token");

// export const OPTIONS = {
//   headers: {
//     Authorization: `Bearer ${token}`,
//     "Content-Type": "application/json",
//   },
// };

export const getOptions = () => {
  const token = localStorage.getItem("access_token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
};

export const getToken = () => {
  return localStorage.getItem("access_token");
};
