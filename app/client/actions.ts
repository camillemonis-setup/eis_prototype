"use server";

import { revalidatePath } from "next/cache";

export const deleteEmployee = async (id: string) => {
  const response = await fetch(
    `https://672352bf493fac3cf24a7644.mockapi.io/testproj/getall/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete the row");
  }
  revalidatePath('/client')
  const data = await response.json();
  return data;
};
