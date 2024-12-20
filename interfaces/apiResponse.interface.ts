export interface ApiResponse<T = any> {
    data: T;         // The payload or response data (default to 'any')
    message: string; // A descriptive message about the API response
    success: boolean; // Indicates if the API call was successful
  }
  