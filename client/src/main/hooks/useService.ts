const DEFAULT_ADDRESS = "/";

const request = async (serverAddress: string, params: any) => {
  try {
    const response = await fetch(serverAddress, params);
    console.log(response);
    if (response.ok) {
      const dataResp = await response.json();
      console.log(dataResp);
      return dataResp;
    }
  } catch (e) {
    throw e;
  }
};

export const useService = async (body: any, address: string, method?: string) => {
  const serverAddress = address || DEFAULT_ADDRESS;
  const headers: HeadersInit = {};
  console.log(body);
  headers.Accept = "application/json";
  headers["Content-Type"] = "application/json";

  const params = {
    method: method || "POST",
    headers: new Headers(headers),
    body: body ? JSON.stringify(body) : { method },
  };

  return request(serverAddress, params);
};
