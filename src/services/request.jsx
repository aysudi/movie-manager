import axios from "axios";

const API_URL = "http://localhost:3000/movies";

async function getAll() {
  const result = {
    data: null,
    loading: true,
    error: null,
  };

  await axios
    .get(API_URL)
    .then((response) => {
      result.data = response.data;
    })
    .catch((err) => {
      result.error = err;
    })
    .finally(() => {
      result.loading = false;
    });

  return result;
}

async function getByID(id) {
  const result = {
    data: null,
    loading: true,
    error: null,
  };

  await axios
    .get(API_URL + `/${id}`)
    .then((response) => {
      result.data = response.data;
    })
    .catch((err) => {
      result.error = err;
    })
    .finally(() => {
      result.loading = false;
    });

  return result;
}

async function post(payload) {
  const result = {
    data: null,
    loading: true,
    error: null,
  };
  await axios
    .post(API_URL, payload)
    .then((response) => {
      result.data = response.data;
    })
    .catch((err) => {
      result.error = err;
    })
    .finally(() => {
      result.loading = false;
    });

  return result;
}

async function updateOne(payload, id) {
  const result = {
    data: null,
    loading: true,
    error: null,
  };
  await axios
    .patch(API_URL + `/${id}`, payload)
    .then((response) => {
      result.data = response.data;
    })
    .catch((err) => {
      result.error = err;
    })
    .finally(() => {
      result.loading = false;
    });

  return result;
}

async function deleteOne(id) {
  const result = {
    data: null,
    loading: true,
    error: null,
  };
  await axios
    .delete(API_URL + `/${id}`)
    .then((response) => {
      result.data = response.data;
    })
    .catch((err) => {
      result.error = err;
    })
    .finally(() => {
      result.loading = false;
    });

  return result;
}

const controller = {
  getAll: getAll,
  getByID: getByID,
  post: post,
  deleteOne: deleteOne,
  updateOne: updateOne,
};

export default controller;
