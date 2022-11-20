let tt = document.getElementById("twoThousand");
let fh = document.getElementById("fiveHundred");
let th = document.getElementById("twoHundred");
let h = document.getElementById("hundred");
let f = document.getElementById("fifty");
let total = document.getElementById("total");

function ans() {
  let ttl = 0;
  ttl =
    tt.value * 2000 +
    fh.value * 500 +
    th.value * 200 +
    h.value * 100 +
    f.value * 50;
  total.value = ttl;
}
tt.addEventListener("blur", ans);
fh.addEventListener("blur", ans);
th.addEventListener("blur", ans);
h.addEventListener("blur", ans);
f.addEventListener("blur", ans);
