import * as axios from "axios"

const instance = axios.create({
  withCredentials: true,
  baseURL: "your url here",
  headers: {
    "API-KEY": "your api-key here",
  },
});

export const profileAPI = {
  getUserData(userId: number) {
    return instance.get(`profile/${userId}`);
  },
  getVisits(userId:number, visitsOnPage: number = 2 ) {
    return instance
      .get(`profile/visits/${userId}?visitsOnPage=${visitsOnPage}`)
      .then(response => response.data)
  },
  setCancelVisit(visitId: number) {
    return instance.delete(`profile/visits/${visitId}`)
  }
};

export const loginAPI = {
  me() {
    return instance.get(`auth/me`).then(res => res.data)
  }
}
