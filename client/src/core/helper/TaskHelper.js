export const getUsers = () => {
  return fetch(`/api/users`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const createaTask = (task) => {
  return fetch(`/api/task`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: task,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
