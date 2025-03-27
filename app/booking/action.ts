'use server'

import { revalidatePath } from "next/cache";

export const createEmployee = async (formData:object) => {
  const response = await fetch(
    `https://672352bf493fac3cf24a7644.mockapi.io/testproj/getall`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete the row");
  }
  revalidatePath('/client')
  revalidatePath('/booking/view')
  const data = await response.json();
  return data;
};
