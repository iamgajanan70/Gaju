/**
 * Direct Main Birthday Surprise - Pre-loaded Demo Information
 * Shweta's 18th Birthday Celebration from Gajanan
 */
window.OM_BIRTHDAY_DATA = {
  n: "Shweta",
  f: "Gajanan",
  a: "18",
  b: "", // Unlocked for immediate celebration
  ck: "p", // Multi-colored cake layers
  rs: [
    "Your chubby cheeks and adorable smile make you the cutest person ever 🥹💗",
    "Your sweet, squishy-cute vibes make everyone around you feel warm & happy 🧸💕",
    "Our endless laughs, silly teasing, random talks & those unforgettable little moments 🌙✨",
    "Your soft-hearted nature, caring soul & the love you give to everyone around you 🌸💛",
    "You're a perfect little bundle of cuteness who makes ordinary moments feel magical 🪄🎀"
  ],
  // User requested exact photos for the memory timeline
  p: [
    "https://i.ibb.co/vCpfvrNH/Snapchat-2135142318.jpg",
    "https://i.ibb.co/HTDBqz2T/Canva-download.jpg",
    "https://i.ibb.co/Tx1Lzj3L/file-00000000a5a0821183d89d52802c657e.png",
    "https://i.ibb.co/nMDFwJ0d/memory-portrait-snapchat-3.jpg",
    "https://i.ibb.co/gMFDqyMy/Snapchat-1928079565.jpg"
  ],
  c: ["", "", "", "", ""],
  m: "Dear Shweta,💗\n\nHappy Birthday, Shwetiiiii ! 🥳🎂\n\nI'm glad I've got a friend like you. Not many people can turn a boring day around the way you do, with your silly talks and funny moments and that cute smile. 😂💗\n\nI don't have a lot of friends, but I'm glad you're one of them. Thanks for being my friend, and for all the small moments that make our friendship what it's.\n\nHope this year brings you happiness, success, good health, and plenty of reasons to smile. Stay your funny, cute, chubby self! 😂🧸 Don't ever change who you are.\n\nMore memories are what we need. Laugh at silly stuff too, and keep annoying each other like we always do. 😂🤝\n\nHappy Birthday again, Shweta! 🎂🎉 Keep smiling always, stay happy and blessed!"
};

// Telemetry mock
(function() {
  const origFetch = window.fetch;
  if (origFetch) {
    window.fetch = function(url, options) {
      if (typeof url === 'string' && (url.includes('/wp-json/om/') || url.includes('ourmoments.live'))) {
        return Promise.resolve(new Response(JSON.stringify({ ok: true, status: 'mocked' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }));
      }
      return origFetch.apply(this, arguments);
    };
  }
  if (navigator.sendBeacon) {
    const origBeacon = navigator.sendBeacon.bind(navigator);
    navigator.sendBeacon = function(url, data) {
      if (typeof url === 'string' && (url.includes('/wp-json/om/') || url.includes('ourmoments.live'))) {
        return true;
      }
      return origBeacon(url, data);
    };
  }
})();
