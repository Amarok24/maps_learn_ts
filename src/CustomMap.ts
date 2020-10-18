import { User } from "./User";
import { Company } from "./Company";


export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(elemId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elemId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addUserMarker(user: User) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng
      }
    });
  }

  addCompanyMarker(company: Company) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng
      }
    });
  }

}
