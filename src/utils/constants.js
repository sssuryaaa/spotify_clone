const token = localStorage.getItem("access_token");

export const OPTIONS = {
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
};
