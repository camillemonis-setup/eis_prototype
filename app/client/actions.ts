"use server";

import { revalidatePath } from "next/cache";
import { Employee } from "./interfaces";

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
  revalidatePath('/booking/view')
  const data = await response.json();
  return data;
};


export const updateEmployee = async (data: Employee): Promise<'ok'> => {
  const url = `https://672352bf493fac3cf24a7644.mockapi.io/testproj/getall/${data.id}`;
  
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(`Failed to edit employee ${data.id}. Status: ${response.status}. Details: ${errorDetails}`);
    }

    // Revalidate paths
    revalidatePath('/client');
    revalidatePath('/booking/view');

    return 'ok';
  } catch (error) {
    console.error('Error updating employee:', error);
    throw error; // Re-throw the error for the caller to handle
  }
};
