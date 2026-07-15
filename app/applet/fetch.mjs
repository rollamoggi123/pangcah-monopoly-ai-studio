(async () => {
  const res = await fetch('https://docs.google.com/spreadsheets/d/1R3UUciWsGmDoPA8ErPmtMO5LwYJRauPdYDF770Meiao/export?format=csv&gid=1781675041');
  console.log("STATUS:", res.status);
  console.log("URL:", res.url);
  const text = await res.text();
  console.log("TEXT:", text.substring(0, 200));
})();
