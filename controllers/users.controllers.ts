// @ts-ignore
import { Users } from "../models/users.models.ts";
// @ts-ignore
import { Request, Response } from "https://deno.land/x/oak/mod.ts";

let users: Users[] = [
  {
    id: "1",
    name: "Ryan Ray",
  },
  {
    id: "2",
    name: "Ryan two",
  },
];

export const getUsers = ({ response }: { response: Response }) => {
  response.body = users;
};

export const createUser = async (
  { request, response }: { request: Request; response: Response },
) => {
  const body = await request.body();
  const value = await body.value;
  const name = value.name;

  if (name == null || name.trim() == "") {
    response.status = 400;
    return;
  }

  let user = {
    id: `${users.length + 1}`,
    name,
  };

  users.push(user);

  response.status = 200;
};

export const getUser = async (
  { params, response }: {
    params: { userId: string };
    response: Response;
  },
) => {
  response.body = users.find((user) => user.id === params.userId);
};

export const deleteUser = (
  { params, response }: { params: { userId: string }; response: Response },
) => {
  users = users.filter((user) => user.id !== params.userId);
  response.status = 200;
};

export const updateUser = async (
  { request, params, response }: {
    request: Request;
    params: { userId: string };
    response: Response;
  },
) => {
  let { userId } = params;
  const body = await request.body();
  const value = await body.value;
  const name = value.name;

  if (!request.hasBody || name === null || name.trim() === "") {
    response.status = 400;
    response.body = "Name field required!";
    return;
  }

  let userIndex: number = users.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
    response.status = 404;
    return;
  }

  users[userIndex].name = name;

  response.status = 200;
};
