export default getDescription = des => {
    switch (des) {
      case "Clear":
        return "Trời nắng đẹp"; break;
      case "Clouds":
        return "Mây nhiều";break;
      case "Drizzle":
        return "Mưa phùn";break;
      case "Rain":
        return "Mưa to"; break;
      case "Thunderstorm":
        return "Trời nhiều sấm"; break;
      case "Snow":
        return "Trời có tuyết"; break;
      default:
        return "Không biết"; break;
    }
  }