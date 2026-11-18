(function(a, b) {
        a.ioLetterAvatar = function(d, l, j) {
            d = d || "";
            l = l || 60;
            var h = "#1abc9c #2ecc71 #3498db #9b59b6 #3fe95e #16a085 #27ae60 #2980b9 #8e44ad #fc3e50 #f1c40f #e67e22 #e74c3c #00bcd4 #95aa36 #f39c12 #d35400 #c0392b #b2df1e #7ffc8d".split(" "),
            f,
            c,
            k,
            g,
            e,
            i,
            t,
            m;
            f = String(d).toUpperCase();
            f = f ? f.charAt(0) : "?";
            if (a.devicePixelRatio) {
                l = (l * a.devicePixelRatio)
            }
            c = parseInt((((f == "?" ? 72 : f.charCodeAt(0)) - 64) * 12345).toString().slice(0, 5));
            k = c % (h.length - 1);
            t = (c + 1) % (h.length - 1);
            m = (c - 1) % (h.length - 1);
            g = b.createElement("canvas");
            g.width = l;
            g.height = l;
            e = g.getContext("2d");
            e.fillStyle = j ? j: h[k];
            e.fillRect(0, 0, g.width, g.height);
            e.arc((c * 180) % l, (c * 150) % l, (c / 120) % l, 0, 360);
            e.fillStyle = h[t];
            e.globalAlpha = .6;
            e.fill();
            e.save();
            e.beginPath();
            e.fillStyle = h[m];
            e.globalAlpha = .4;
            e.arc((c * 20) % l, (c * 50) % l, ((99999 - c) / 80) % l, 0, 360);
            e.fill();
            e.font = Math.round(g.width / 2) + "px 'Microsoft Yahei'";
            e.textAlign = "center";
            e.fillStyle = "#fff";
            e.globalAlpha = 1;
            e.fillText(f, l / 2, l / 1.5);
            i = g.toDataURL();
            g = null;
            return i
        }
    })(window, document);