// import { User } from "./User";
// import { Company } from "./Company";

// Instructions to every other class on how they
// can be an argument to addMarker()
export interface Mappable {
  location: {
    lat: number
    lng: number
  };
  markerContent(): string;
  color: string;
}

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

  addMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    const infoWindow = new google.maps.InfoWindow({
      content: mappable.markerContent()
    });

    marker.addListener("click", () => {
      console.log("marker click handler");
      infoWindow.open(this.googleMap, marker);
    });
  }
/*
  addCompanyMarker(company: Company) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng
      }
    });
  }
 */
}
