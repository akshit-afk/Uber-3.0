import mapboxgl from "mapbox-gl";
import { useEffect } from "react";
const style = {
  wrapper: `flex-1 h-full w-full`,
};

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      //style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph', this is the changed style
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [76.83557689048087, 29.969258938433896],
      zoom: 6,
    });
  }, []);

  return <div className={style.wrapper} id="map" />;
};

export default Map;
