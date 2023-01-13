import { FoodI } from "./store/food";

const requestHeaders = new Headers();
requestHeaders.set("Content-Type", "application/json");

export async function apiFetchFood(): Promise<any> {
  try {
    const response = await fetch("http://localhost:8000/food", {
      method: "GET",
      headers: requestHeaders,
    });
    if (response.ok) {
      const food: FoodI = await response.json();
      return { food };
    } else {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    return { error };
  }
}

export async function apiFetchMyLists(): Promise<any> {
  try {
    const response = await fetch("http://localhost:8000/myLists", {
      method: "GET",
      headers: requestHeaders,
    });
    if (response.ok) {
      const myLists: any = await response.json();
      return { myLists };
    } else {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    return { error };
  }
}

export async function apiFetchHistory(): Promise<any> {
  try {
    const response = await fetch("http://localhost:8000/history", {
      method: "GET",
      headers: requestHeaders,
    });
    if (response.ok) {
      const history: any = await response.json();
      return { history };
    } else {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    return { error };
  }
}

export async function apiFetchHistorySend(data: any): Promise<any> {
  try {
    const response = await fetch(`http://localhost:8000/history/`, {
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return response.ok;
    } else {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    return { error };
  }
}

export async function apiFetchMyListsSend(data: any): Promise<any> {
  try {
    const response = await fetch("http://localhost:8000/myLists/", {
      method: "POST",
      headers: requestHeaders,

      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log(response.ok);
      return response.ok;
    } else {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    return { error };
  }
}

export async function apiFetchMyListsDelete(id: any): Promise<any> {
  try {
    const response = await fetch(`http://localhost:8000/myLists/${id}`, {
      method: "DELETE",
      headers: requestHeaders,
    });
    if (response.ok) {
      console.log(response.ok);
      return response.ok;
    } else {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    return { error };
  }
}
