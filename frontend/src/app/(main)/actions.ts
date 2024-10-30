"use server";

import { TodoList } from "../types";

export async function getUser() {
  return {
    username: "anh",
    userId: "abc123",
    email: "anhnguyen@aaanh.com",
  };
}

export async function getLists() {
  const lists: TodoList[] = [
    {
      listId: "ae34b5dd80f",
      title: "Shopping stuff",
      description: "My very amazing and cheap shopping list",
      items: [
        {
          itemName: "tomato",
          description: "1 kg",
        },
        {
          itemName: "eggs",
          description: "2 cartons",
        },
        {
          itemName: "RAM",
          description: "3 sticks, 16gb each",
        },
      ],
    },
  ];

  return lists;
}
