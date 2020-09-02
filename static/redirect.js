function baseHost(hostname) {
  var res = hostname.split(".");
  return res[res.length - 2] + "." + res[res.length - 1];
}

function shouldRedirect() {
  base = baseHost(window.location.hostname);
  console.log(base);
  let live_domains = [
    "motosumolive.com",
    "motosumo.live",
    "motosumo-live.com",
    "motosumo.tv",
  ];
  return live_domains.includes(base);
}

if (shouldRedirect()) {
  window.location.hostname = "live.motosumo.com";
}
