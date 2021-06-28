export const workDomain = () => {
    let resultFlavor 
    const getUrl = window.location.host;
    const flavor = getUrl.split(":");
    if (flavor[0] === "localhost") {
      resultFlavor = "local";
    } else {
      resultFlavor = "DEV";
    }
    return resultFlavor
} 